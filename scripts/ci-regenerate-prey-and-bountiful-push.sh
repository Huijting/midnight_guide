#!/usr/bin/env bash
# GitHub Actions: sync main, run EU prey + Bountiful fetchers, commit both JSON if changed, push with rebase retries.
# Replaces separate ci-regenerate-json-push.sh runs so prey-today.json and bountiful-today.json update in one commit.
set -euo pipefail

B="${GITHUB_REF_NAME:-main}"
PREY_JSON="data/prey-today.json"
BOUNT_JSON="data/bountiful-today.json"
LIVE_RESET_JSON="data/live_reset_data.json"

git config user.name "github-actions[bot]"
git config user.email "github-actions[bot]@users.noreply.github.com"

sync_with_origin() {
  git fetch origin "$B" --prune
  git checkout "$B"
  git pull --ff-only origin "$B" || git pull --rebase origin "$B"
}

echo ">>> Branch: $B"
sync_with_origin

# Always run both fetchers: prey must never block bountiful (set -e would skip bountiful on prey exit ≠ 0).
set +e
echo ">>> Running scripts/fetch-prey-today.js"
node scripts/fetch-prey-today.js
PREY_EC=$?
echo ">>> Running scripts/fetch-bountiful-delves.js"
node scripts/fetch-bountiful-delves.js
BOUNT_EC=$?
set -e
if [ "$PREY_EC" -ne 0 ]; then echo ">>> WARNING: fetch-prey-today.js exited $PREY_EC (bountiful still ran)"; fi
if [ "$BOUNT_EC" -ne 0 ]; then echo ">>> WARNING: fetch-bountiful-delves.js exited $BOUNT_EC"; fi

set +e
echo ">>> pip install wowhead scraper deps + run wowhead_live_reset_scraper.py"
python3 -m pip install -q -r scripts/requirements-wowhead-scraper.txt
python3 scripts/wowhead_live_reset_scraper.py
LR_EC=$?
set -e
if [ "$LR_EC" -ne 0 ]; then echo ">>> WARNING: wowhead_live_reset_scraper.py exited $LR_EC"; fi

git add "$PREY_JSON" "$BOUNT_JSON" "$LIVE_RESET_JSON"
if git diff --staged --quiet; then
  echo ">>> No changes to $PREY_JSON, $BOUNT_JSON, or $LIVE_RESET_JSON"
  exit 0
fi

git commit -m "chore: update EU prey-today, bountiful-today, live_reset_data"

for i in 1 2 3 4 5 6 7 8 9 10; do
  git pull --rebase origin "$B"
  if git push origin "$B"; then
    echo ">>> Push OK"
    exit 0
  fi
  echo ">>> Push rejected (race), retry $i/10 ..."
  sleep $((i * 2))
done

echo ">>> Push failed after retries"
exit 1
