#!/usr/bin/env bash
# Used by GitHub Actions: stay in sync with origin/main, run optional Node fetcher, commit one JSON file, push with rebase retries.
# Usage: ci-regenerate-json-push.sh <json-path-under-repo> <commit-message> [node-script-relative-path]
set -euo pipefail

JSON_FILE="${1:?first arg: path to json file}"
COMMIT_MSG="${2:?second arg: commit message}"
NODE_SCRIPT="${3:-}"
B="${GITHUB_REF_NAME:-main}"

git config user.name "github-actions[bot]"
git config user.email "github-actions[bot]@users.noreply.github.com"

sync_with_origin() {
  git fetch origin "$B" --prune
  git checkout "$B"
  git pull --ff-only origin "$B" || git pull --rebase origin "$B"
}

echo ">>> Branch: $B"
sync_with_origin

if [[ -n "$NODE_SCRIPT" ]]; then
  echo ">>> Running node $NODE_SCRIPT"
  node "$NODE_SCRIPT"
fi

git add "$JSON_FILE"
if git diff --staged --quiet; then
  echo ">>> No changes to $JSON_FILE"
  exit 0
fi

git commit -m "$COMMIT_MSG"

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
