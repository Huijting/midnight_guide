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
  frame.bodyText:SetText("Selected tab: " .. key .. "\n\nMVP content comes in Sprint 2.")
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
