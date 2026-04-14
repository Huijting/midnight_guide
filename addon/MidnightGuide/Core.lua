local ADDON_NAME = ...

MidnightGuide = MidnightGuide or {}
MidnightGuide.name = ADDON_NAME or "MidnightGuide"
MidnightGuide.version = "0.1.1"

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
eventFrame:RegisterEvent("SKILL_LINES_CHANGED")
eventFrame:SetScript("OnEvent", function(_, event, loadedAddon)
  if event == "ADDON_LOADED" then
    if loadedAddon ~= MidnightGuide.name then
      return
    end
    ensureDB()
    if MidnightGuide.Char and MidnightGuide.Char.Ensure then
      MidnightGuide.Char.Ensure()
    end
    return
  end
  if event == "SKILL_LINES_CHANGED" then
    local f = MidnightGuide.UI and MidnightGuide.UI.MainFrame
    if f and f:IsShown() and MidnightGuide.UI.RefreshIfOpen then
      MidnightGuide.UI.RefreshIfOpen()
    end
  end
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

