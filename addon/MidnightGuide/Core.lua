local ADDON_NAME = ...

MidnightGuide = MidnightGuide or {}
MidnightGuide.name = ADDON_NAME or "MidnightGuide"
MidnightGuide.version = "0.1.0"

local function ensureDB()
  MidnightGuideDB = MidnightGuideDB or {}
  MidnightGuideDB.lang = MidnightGuideDB.lang or "en"
  MidnightGuideDB.lastTab = MidnightGuideDB.lastTab or "all_treasures"
  local lt = MidnightGuideDB.lastTab
  if lt == "professions" or lt == "weekly" then
    MidnightGuideDB.lastTab = "all_treasures"
  end
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
SlashCmdList.MIDNIGHTGUIDE = function(msg)
  if MidnightGuide.UI and MidnightGuide.UI.HandleMgCommand then
    local arg = (msg or ""):gsub("^%s+", ""):gsub("%s+$", "")
    MidnightGuide.UI.HandleMgCommand(arg)
    return
  end
  print("|cffc8a84bMidnight Guide:|r UI is not ready yet.")
end

