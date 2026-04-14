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

local C = MidnightGuide.Colors or {}
local ICON = MidnightGuide.Icons or {}

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

local function capitalizeWord(s)
  if not s or s == "" then
    return ""
  end
  return s:sub(1, 1):upper() .. s:sub(2):lower()
end

local function profDisplayName(tracker, locale)
  local pk = tracker and tracker.professionKey
  if type(pk) == "string" and pk ~= "" then
    return capitalizeWord(pk)
  end
  return normalizeText(tracker and tracker.title or {}, locale)
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

--- Build panel: either one colored text block (All tabs) or scroll rows (My tabs).
function MidnightGuide.Data.BuildProfessionView(tabKey, locale)
  locale = locale or "en"
  local Char = MidnightGuide.Char
  local isAllTreasures = tabKey == "all_treasures"
  local isMyTreasures = tabKey == "my_treasures"
  local isAllBooks = tabKey == "all_books"
  local isMyBooks = tabKey == "my_books"

  local includeTreasures = isAllTreasures or isMyTreasures
  local includeBooks = isAllBooks or isMyBooks
  local scopeMy = isMyTreasures or isMyBooks

  if not includeTreasures and not includeBooks then
    return { useScroll = false, mainText = "Unknown tab.", rows = {} }
  end

  if not scopeMy then
    return {
      useScroll = false,
      mainText = MidnightGuide.Data._BuildProfessionAllColoredText(includeTreasures, includeBooks, locale),
      rows = {}
    }
  end

  return MidnightGuide.Data._BuildProfessionMyScrollModel(includeTreasures, includeBooks, locale)
end

function MidnightGuide.Data._BuildProfessionAllColoredText(includeTreasures, includeBooks, locale)
  local lines = {}
  local h = C.header or "|cffffd200"
  local r = C.reset or "|r"

  if includeTreasures then
    lines[#lines + 1] = h .. "=== Midnight Profession Treasures ===" .. r
    for _, tracker in ipairs(MidnightGuide.Data.GetProfessionTrackers()) do
      local profName = profDisplayName(tracker, locale)
      local treasures = type(tracker.treasures) == "table" and tracker.treasures or {}
      local total = #treasures
      local collected = 0
      for _, item in ipairs(treasures) do
        if MidnightGuide.Char.IsItemCollected(item) then
          collected = collected + 1
        end
      end
      local profColor = MidnightGuide.Char.PlayerHasProfession(tracker.professionKey) and (C.profOn or "|cff00ff00") or (C.profOff or "|cffaaaaaa")
      local prog = string.format("%s(%d/%d)%s", h, collected, total, r)
      lines[#lines + 1] = profColor .. profName .. r .. " " .. prog

      if total == 0 then
        lines[#lines + 1] = (C.gray or "|cffaaaaaa") .. (locale == "nl" and "Geen data." or "No data.") .. r
      elseif collected == total then
        lines[#lines + 1] = (C.gray or "|cffaaaaaa") .. (locale == "nl" and "Alle schatten verzameld." or "All treasures collected.") .. r
      else
        for _, item in ipairs(treasures) do
          lines[#lines + 1] = MidnightGuide.Data._FormatTreasureLine(item, locale, MidnightGuide.Char.IsItemCollected(item))
        end
      end
    end
  end

  if includeBooks then
    if includeTreasures and #lines > 0 then
      lines[#lines + 1] = ""
    end
    lines[#lines + 1] = h .. "=== Midnight Knowledge Books ===" .. r
    local totalBought, totalNeed = 0, 0
    for _, tracker in ipairs(MidnightGuide.Data.GetProfessionTrackers()) do
      local profName = profDisplayName(tracker, locale)
      local books = type(tracker.books) == "table" and tracker.books or {}
      local total = #books
      local bought = 0
      for _, item in ipairs(books) do
        if MidnightGuide.Char.IsItemCollected(item) then
          bought = bought + 1
        end
      end
      totalBought = totalBought + bought
      totalNeed = totalNeed + (total - bought)
      local profColor = MidnightGuide.Char.PlayerHasProfession(tracker.professionKey) and (C.profOn or "|cff00ff00") or (C.profOff or "|cffaaaaaa")
      local prog = string.format("%s(%d/%d)%s", h, bought, total, r)
      lines[#lines + 1] = profColor .. profName .. r .. " " .. prog

      for _, item in ipairs(books) do
        lines[#lines + 1] = MidnightGuide.Data._FormatBookLine(item, locale, MidnightGuide.Char.IsItemCollected(item))
      end
    end
    lines[#lines + 1] = string.format("%s(%s: %d/%d)%s", h, locale == "nl" and "Totaal gekocht" or "Total purchased", totalBought, totalBought + totalNeed, r)
  end

  if #lines == 0 then
    return (locale == "nl" and "Geen profession data geladen." or "No profession data loaded.")
  end
  return table.concat(lines, "\n")
end

function MidnightGuide.Data._FormatTreasureLine(item, locale, collected)
  local ICON = MidnightGuide.Icons or {}
  local C = MidnightGuide.Colors or {}
  local r = C.reset or "|r"
  local icon = collected and (ICON.done or "") or (ICON.needed or "")
  local itemName = normalizeText(item.name, locale)
  local zone = normalizeText(item.zone, locale)
  local way = item.waypoint and item.waypoint.way or ""
  local itemCol = C.item or "|cffffd200"
  local zoneCol = C.zone or "|cffadd8e6"
  local wayCol = C.waypoint or "|cffffff00"
  local link = itemCol .. "[" .. itemName .. "]" .. r
  local zoneStr = zone ~= "" and (zoneCol .. "[" .. zone .. "]" .. r .. " ") or ""
  local wayStr = way ~= "" and (wayCol .. way .. r) or ""
  return " " .. icon .. " " .. link .. " " .. zoneStr .. wayStr
end

function MidnightGuide.Data._FormatBookLine(item, locale, collected)
  local ICON = MidnightGuide.Icons or {}
  local C = MidnightGuide.Colors or {}
  local r = C.reset or "|r"
  local icon = collected and (ICON.done or "") or (ICON.needed or "")
  local itemName = normalizeText(item.name, locale)
  local itemCol = C.item or "|cffffd200"
  local link = itemCol .. "[" .. itemName .. "]" .. r
  local zone = normalizeText(item.zone, locale)
  local zoneStr = zone ~= "" and (" " .. (C.zone or "|cffadd8e6") .. "[" .. zone .. "]" .. r) or ""
  return " " .. icon .. " " .. link .. zoneStr
end

function MidnightGuide.Data._BuildProfessionMyScrollModel(includeTreasures, includeBooks, locale)
  local rows = {}
  local C = MidnightGuide.Colors or {}
  local r = C.reset or "|r"
  local h = C.header or "|cffffd200"
  local note =
    (C.gray or "|cffaaaaaa")
      .. (locale == "nl" and "Klik op een regel om handmatig te wisselen (tot quest-IDs in data staan)." or "Click a row to toggle manual completion (until quest IDs are in data).")
      .. r

  rows[#rows + 1] = { id = nil, text = note, clickable = false }

  if includeTreasures then
    rows[#rows + 1] = { id = nil, text = h .. "=== Midnight Profession Treasures ===" .. r, clickable = false }
    for _, tracker in ipairs(MidnightGuide.Data.GetProfessionTrackers()) do
      local profName = profDisplayName(tracker, locale)
      local treasures = type(tracker.treasures) == "table" and tracker.treasures or {}
      local total = #treasures
      local collected = 0
      for _, item in ipairs(treasures) do
        if MidnightGuide.Char.IsItemCollected(item) then
          collected = collected + 1
        end
      end
      local profColor = MidnightGuide.Char.PlayerHasProfession(tracker.professionKey) and (C.profOn or "|cff00ff00") or (C.profOff or "|cffaaaaaa")
      local prog = string.format("%s(%d/%d)%s", h, collected, total, r)
      rows[#rows + 1] = { id = nil, text = profColor .. profName .. r .. " " .. prog, clickable = false }

      if total == 0 then
        rows[#rows + 1] = { id = nil, text = (C.gray or "|cffaaaaaa") .. (locale == "nl" and "Geen data." or "No data.") .. r, clickable = false }
      elseif collected == total then
        rows[#rows + 1] = { id = nil, text = (C.gray or "|cffaaaaaa") .. (locale == "nl" and "Alle schatten verzameld." or "All treasures collected.") .. r, clickable = false }
      else
        for _, item in ipairs(treasures) do
          if not MidnightGuide.Char.IsItemCollected(item) then
            local id = item.id
            if type(id) == "string" and id ~= "" then
              rows[#rows + 1] = {
                id = id,
                text = MidnightGuide.Data._FormatTreasureLine(item, locale, false),
                clickable = true
              }
            end
          end
        end
      end
    end
  end

  if includeBooks then
    rows[#rows + 1] = { id = nil, text = "", clickable = false }
    rows[#rows + 1] = { id = nil, text = h .. "=== Midnight Knowledge Books ===" .. r, clickable = false }
    for _, tracker in ipairs(MidnightGuide.Data.GetProfessionTrackers()) do
      local profName = profDisplayName(tracker, locale)
      local books = type(tracker.books) == "table" and tracker.books or {}
      local total = #books
      local bought = 0
      for _, item in ipairs(books) do
        if MidnightGuide.Char.IsItemCollected(item) then
          bought = bought + 1
        end
      end
      local profColor = MidnightGuide.Char.PlayerHasProfession(tracker.professionKey) and (C.profOn or "|cff00ff00") or (C.profOff or "|cffaaaaaa")
      local prog = string.format("%s(%d/%d)%s", h, bought, total, r)
      rows[#rows + 1] = { id = nil, text = profColor .. profName .. r .. " " .. prog, clickable = false }

      for _, item in ipairs(books) do
        if not MidnightGuide.Char.IsItemCollected(item) then
          local id = item.id
          if type(id) == "string" and id ~= "" then
            rows[#rows + 1] = {
              id = id,
              text = MidnightGuide.Data._FormatBookLine(item, locale, false),
              clickable = true
            }
          end
        end
      end
    end
  end

  return { useScroll = true, mainText = "", rows = rows }
end

-- Legacy: plain lines (used if anything still calls it)
function MidnightGuide.Data.BuildProfessionReport(options)
  options = options or {}
  local locale = options.locale or "en"
  if options.scope == "my" then
    local includeTreasures = options.includeTreasures ~= false
    local includeBooks = options.includeBooks == true
    local tabKey = includeTreasures and "my_treasures" or "my_books"
    local view = MidnightGuide.Data.BuildProfessionView(tabKey, locale)
    if view.useScroll then
      local lines = {}
      for _, row in ipairs(view.rows or {}) do
        lines[#lines + 1] = row.text
      end
      return lines
    end
  end
  local includeTreasures = options.includeTreasures ~= false
  local includeBooks = options.includeBooks == true
  local tabKey = includeTreasures and "all_treasures" or "all_books"
  local text = MidnightGuide.Data._BuildProfessionAllColoredText(includeTreasures, includeBooks, locale)
  local lines = {}
  for line in text:gmatch("[^\n]+") do
    lines[#lines + 1] = line
  end
  if #lines == 0 then
    lines[1] = text
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
  local C = MidnightGuide.Colors or {}
  local h = C.header or "|cffffd200"
  local g = C.gray or "|cffaaaaaa"
  local r = C.reset or "|r"

  local title = normalizeText(install.title, locale)
  if title ~= "" then
    lines[#lines + 1] = h .. title .. r
  else
    lines[#lines + 1] = h .. (locale == "nl" and "Installatiegids" or "Installation Guide") .. r
  end

  if type(install.steps) == "table" then
    for i, step in ipairs(install.steps) do
      local text = normalizeText(step.text, locale)
      if text ~= "" then
        lines[#lines + 1] = string.format("%d. %s", i, g .. text .. r)
      end
    end
  end

  if type(install.folderPath) == "string" and install.folderPath ~= "" then
    lines[#lines + 1] = ""
    lines[#lines + 1] = (locale == "nl" and (g .. "Map pad: " .. r) or (g .. "Folder path: " .. r)) .. install.folderPath
  end

  local troubleshooting = help.troubleshooting
  if type(troubleshooting) == "table" and #troubleshooting > 0 then
    lines[#lines + 1] = ""
    lines[#lines + 1] = h .. (locale == "nl" and "Troubleshooting" or "Troubleshooting") .. r
    for _, issue in ipairs(troubleshooting) do
      local text = normalizeText(issue.text, locale)
      if text ~= "" then
        lines[#lines + 1] = " - " .. g .. text .. r
      end
    end
  end

  if #lines == 0 then
    lines[1] = locale == "nl" and "Geen help-data geladen." or "No help data loaded."
  end
  return lines
end
