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
  local lines = {}

  for _, tracker in ipairs(MidnightGuide.Data.GetProfessionTrackers()) do
    local title = normalizeText(tracker.title, locale)
    if title ~= "" then
      lines[#lines + 1] = title
    end

    if includeTreasures and type(tracker.treasures) == "table" then
      for _, item in ipairs(tracker.treasures) do
        local itemName = normalizeText(item.name, locale)
        local zoneName = normalizeText(item.zone, locale)
        local way = item.waypoint and item.waypoint.way or ""
        local suffix = way ~= "" and (" [" .. way .. "]") or ""
        lines[#lines + 1] = " - Treasure: " .. itemName .. " (" .. zoneName .. ")" .. suffix
      end
    end

    if includeBooks and type(tracker.books) == "table" then
      for _, item in ipairs(tracker.books) do
        local itemName = normalizeText(item.name, locale)
        local zoneName = normalizeText(item.zone, locale)
        local way = item.waypoint and item.waypoint.way or ""
        local suffix = way ~= "" and (" [" .. way .. "]") or ""
        lines[#lines + 1] = " - Book: " .. itemName .. " (" .. zoneName .. ")" .. suffix
      end
    end
  end

  if #lines == 0 then
    lines[1] = locale == "nl" and "Geen profession data geladen." or "No profession data loaded."
  end
  return lines
end
