MidnightGuide = MidnightGuide or {}
MidnightGuide.UI = MidnightGuide.UI or {}

local tabs = {
  { key = "professions", label = "Professions" },
  { key = "weekly", label = "Weekly" },
  { key = "help", label = "Help" },
}

local function setActiveTab(frame, key)
  for _, tab in ipairs(frame.tabButtons) do
    local active = tab.key == key
    tab:SetEnabled(not active)
  end
  if key == "professions" and MidnightGuide.Data and MidnightGuide.Data.BuildProfessionReport then
    local lines = MidnightGuide.Data.BuildProfessionReport({
      includeTreasures = true,
      includeBooks = true,
      locale = (MidnightGuideDB and MidnightGuideDB.lang) or "en",
    })
    frame.bodyText:SetText(table.concat(lines, "\n"))
  elseif key == "weekly" then
    frame.bodyText:SetText("Weekly panel: next step in Sprint 3.")
  elseif key == "help" and MidnightGuide.Data and MidnightGuide.Data.BuildHelpReport then
    local lines = MidnightGuide.Data.BuildHelpReport({
      locale = (MidnightGuideDB and MidnightGuideDB.lang) or "en",
    })
    frame.bodyText:SetText(table.concat(lines, "\n"))
  else
    frame.bodyText:SetText("Selected tab: " .. key)
  end
  MidnightGuideDB = MidnightGuideDB or {}
  MidnightGuideDB.lastTab = key
end

local function buildMainFrame()
  if MidnightGuide.UI.MainFrame then
    return MidnightGuide.UI.MainFrame
  end

  local frame = CreateFrame("Frame", "MidnightGuideMainFrame", UIParent, "BasicFrameTemplateWithInset")
  frame:SetSize(560, 420)
  frame:SetPoint("CENTER")
  frame:Hide()
  frame:SetMovable(true)
  frame:EnableMouse(true)
  frame:RegisterForDrag("LeftButton")
  frame:SetScript("OnDragStart", frame.StartMoving)
  frame:SetScript("OnDragStop", frame.StopMovingOrSizing)

  frame.TitleText:SetText("Midnight Guide (MVP)")
  frame.tabButtons = {}
  if type(UISpecialFrames) == "table" then
    local alreadyRegistered = false
    for _, name in ipairs(UISpecialFrames) do
      if name == "MidnightGuideMainFrame" then
        alreadyRegistered = true
        break
      end
    end
    if not alreadyRegistered then
      table.insert(UISpecialFrames, "MidnightGuideMainFrame")
    end
  end

  local x = 18
  for _, def in ipairs(tabs) do
    local btn = CreateFrame("Button", nil, frame, "UIPanelButtonTemplate")
    btn:SetSize(110, 24)
    btn:SetPoint("TOPLEFT", x, -34)
    btn:SetText(def.label)
    btn.key = def.key
    btn:SetScript("OnClick", function()
      setActiveTab(frame, def.key)
    end)
    table.insert(frame.tabButtons, btn)
    x = x + 116
  end

  frame.bodyText = frame:CreateFontString(nil, "OVERLAY", "GameFontHighlight")
  frame.bodyText:SetPoint("TOPLEFT", 20, -72)
  frame.bodyText:SetWidth(520)
  frame.bodyText:SetJustifyH("LEFT")
  frame.bodyText:SetText("Loading...")

  MidnightGuide.UI.MainFrame = frame
  setActiveTab(frame, (MidnightGuideDB and MidnightGuideDB.lastTab) or "professions")
  return frame
end

function MidnightGuide.UI.ToggleMainFrame()
  local frame = buildMainFrame()
  if frame:IsShown() then
    frame:Hide()
  else
    frame:Show()
  end
end
