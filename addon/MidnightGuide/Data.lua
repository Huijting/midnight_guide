MidnightGuide = MidnightGuide or {}
MidnightGuide.Data = MidnightGuide.Data or {}

MidnightGuide.Data.raw = MidnightGuideGeneratedData or {}

MidnightGuide.Data.sections = MidnightGuide.Data.sections or {
  professions = {
    id = "professions",
    title = "Professions",
    status = "planned"
  },
  weekly = {
    id = "weekly",
    title = "Weekly",
    status = "planned"
  },
  help = {
    id = "help",
    title = "Help",
    status = "planned"
  }
}

local function normalizeText(localized, locale)
  if type(localized) == "string" then
    return localized
  end
  if type(localized) ~= "table" then
    return ""
  end
  if locale == "nl" then
    return localized.nl or localized.en or ""
  end
  return localized.en or localized.nl or ""
end

function MidnightGuide.Data.GetProfessionTrackers()
  local raw = MidnightGuide.Data.raw or {}
  local prof = raw.professions or {}
  local trackers = prof.trackers
  if type(trackers) ~= "table" then
    return {}
  end
  return trackers
end

function MidnightGuide.Data.BuildProfessionReport(options)
  options = options or {}
  local dbLang = (MidnightGuideDB and MidnightGuideDB.lang) or "en"
  local locale = options.locale or dbLang
  local includeBooks = options.includeBooks == true
  local includeTreasures = options.includeTreasures ~= false
  local scope = options.scope
  local lines = {}

  if scope == "my" then
    lines[#lines + 1] = locale == "nl"
        and "(Mijn voortgang — nog geen character-tracking; tijdelijk dezelfde lijst als referentie.)"
        or "(My progress — character tracking not wired yet; showing same list as reference for now.)"
    lines[#lines + 1] = ""
  end

  if includeTreasures then
    lines[#lines + 1] = "=== Midnight Profession Treasures ==="
    for _, tracker in ipairs(MidnightGuide.Data.GetProfessionTrackers()) do
      local title = normalizeText(tracker.title, locale)
      if title ~= "" then
        lines[#lines + 1] = title
      end
      if type(tracker.treasures) == "table" then
        for _, item in ipairs(tracker.treasures) do
          local itemName = normalizeText(item.name, locale)
          local zoneName = normalizeText(item.zone, locale)
          local way = item.waypoint and item.waypoint.way or ""
          local suffix = way ~= "" and (" [" .. way .. "]") or ""
          lines[#lines + 1] = " - Treasure: " .. itemName .. " (" .. zoneName .. ")" .. suffix
        end
      end
    end
  end

  if includeBooks then
    if includeTreasures and #lines > 0 then
      lines[#lines + 1] = ""
    end
    lines[#lines + 1] = "=== Midnight Knowledge Books ==="
    for _, tracker in ipairs(MidnightGuide.Data.GetProfessionTrackers()) do
      local title = normalizeText(tracker.title, locale)
      if title ~= "" then
        lines[#lines + 1] = title
      end
      if type(tracker.books) == "table" then
        for _, item in ipairs(tracker.books) do
          local itemName = normalizeText(item.name, locale)
          local zoneName = normalizeText(item.zone, locale)
          local way = item.waypoint and item.waypoint.way or ""
          local suffix = way ~= "" and (" [" .. way .. "]") or ""
          lines[#lines + 1] = " - Book: " .. itemName .. " (" .. zoneName .. ")" .. suffix
        end
      end
    end
  end

  if #lines == 0 then
    lines[1] = locale == "nl" and "Geen profession data geladen." or "No profession data loaded."
  end
  return lines
end

function MidnightGuide.Data.BuildHelpReport(options)
  options = options or {}
  local dbLang = (MidnightGuideDB and MidnightGuideDB.lang) or "en"
  local locale = options.locale or dbLang
  local raw = MidnightGuide.Data.raw or {}
  local help = raw.help or {}
  local install = help.install or {}
  local lines = {}

  local title = normalizeText(install.title, locale)
  if title ~= "" then
    lines[#lines + 1] = title
  else
    lines[#lines + 1] = locale == "nl" and "Installatiegids" or "Installation Guide"
  end

  if type(install.steps) == "table" then
    for i, step in ipairs(install.steps) do
      local text = normalizeText(step.text, locale)
      if text ~= "" then
        lines[#lines + 1] = string.format("%d. %s", i, text)
      end
    end
  end

  if type(install.folderPath) == "string" and install.folderPath ~= "" then
    lines[#lines + 1] = ""
    lines[#lines + 1] = (locale == "nl" and "Map pad: " or "Folder path: ") .. install.folderPath
  end

  local troubleshooting = help.troubleshooting
  if type(troubleshooting) == "table" and #troubleshooting > 0 then
    lines[#lines + 1] = ""
    lines[#lines + 1] = locale == "nl" and "Troubleshooting" or "Troubleshooting"
    for _, issue in ipairs(troubleshooting) do
      local text = normalizeText(issue.text, locale)
      if text ~= "" then
        lines[#lines + 1] = " - " .. text
      end
    end
  end

  if #lines == 0 then
    lines[1] = locale == "nl" and "Geen help-data geladen." or "No help data loaded."
  end
  return lines
end
