local ADDON_NAME = ...

MidnightGuide = MidnightGuide or {}
MidnightGuide.name = ADDON_NAME or "MidnightGuide"
MidnightGuide.version = "0.1.0"

local function ensureDB()
  MidnightGuideDB = MidnightGuideDB or {}
  MidnightGuideDB.lang = MidnightGuideDB.lang or "en"
  MidnightGuideDB.lastTab = MidnightGuideDB.lastTab or "professions"
end

local function printPrefixed(line)
  print("|cffc8a84bMidnight Guide:|r " .. line)
end

local function runMptCommand(msg)
  local arg = string.lower((msg or ""):gsub("^%s+", ""):gsub("%s+$", ""))
  local includeBooks = arg == "books" or arg == "books all"
  local includeTreasures = arg ~= "books" and arg ~= "books all"

  if MidnightGuide.Data and MidnightGuide.Data.BuildProfessionReport then
    local lines = MidnightGuide.Data.BuildProfessionReport({
      includeBooks = includeBooks,
      includeTreasures = includeTreasures,
      locale = MidnightGuideDB and MidnightGuideDB.lang or "en",
    })
    for _, line in ipairs(lines) do
      printPrefixed(line)
    end
    return
  end

  printPrefixed("Data layer not ready.")
end

local eventFrame = CreateFrame("Frame")
eventFrame:RegisterEvent("ADDON_LOADED")
eventFrame:SetScript("OnEvent", function(_, event, loadedAddon)
  if event ~= "ADDON_LOADED" or loadedAddon ~= MidnightGuide.name then
    return
  end
  ensureDB()
end)

SLASH_MIDNIGHTGUIDE1 = "/mg"
SlashCmdList.MIDNIGHTGUIDE = function()
  if MidnightGuide.UI and MidnightGuide.UI.ToggleMainFrame then
    MidnightGuide.UI.ToggleMainFrame()
    return
  end
  print("|cffc8a84bMidnight Guide:|r UI is not ready yet.")
end

SLASH_MIDNIGHTPROFTRACKER1 = "/mpt"
SLASH_MIDNIGHTPROFTRACKER2 = "/midnightprof"
SlashCmdList.MIDNIGHTPROFTRACKER = function(msg)
  runMptCommand(msg)
end
