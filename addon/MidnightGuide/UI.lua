MidnightGuide = MidnightGuide or {}
MidnightGuide.UI = MidnightGuide.UI or {}

-- MPT-style tabs + Help (parity v1). All user-facing commands use /mg only.
local tabs = {
  { key = "my_treasures", label = "My Treasures" },
  { key = "all_treasures", label = "All Treasures" },
  { key = "my_books", label = "My Books" },
  { key = "all_books", label = "All Books" },
  { key = "help", label = "Help" },
}

local function tabToReportOptions(key)
  if key == "my_treasures" then
    return { includeTreasures = true, includeBooks = false, scope = "my" }
  end
  if key == "all_treasures" then
    return { includeTreasures = true, includeBooks = false, scope = "all" }
  end
  if key == "my_books" then
    return { includeTreasures = false, includeBooks = true, scope = "my" }
  end
  if key == "all_books" then
    return { includeTreasures = false, includeBooks = true, scope = "all" }
  end
  return nil
end

local function setActiveTab(frame, key)
  for _, tab in ipairs(frame.tabButtons) do
    local active = tab.key == key
    tab:SetEnabled(not active)
  end

  local locale = (MidnightGuideDB and MidnightGuideDB.lang) or "en"
  local opts = tabToReportOptions(key)

  if opts and MidnightGuide.Data and MidnightGuide.Data.BuildProfessionReport then
    opts.locale = locale
    local lines = MidnightGuide.Data.BuildProfessionReport(opts)
    frame.bodyText:SetText(table.concat(lines, "\n"))
  elseif key == "help" and MidnightGuide.Data and MidnightGuide.Data.BuildHelpReport then
    local lines = MidnightGuide.Data.BuildHelpReport({ locale = locale })
    frame.bodyText:SetText(table.concat(lines, "\n"))
  else
    frame.bodyText:SetText("Selected tab: " .. tostring(key))
  end

  MidnightGuideDB = MidnightGuideDB or {}
  MidnightGuideDB.lastTab = key
end

local function migrateLegacyTabKey()
  MidnightGuideDB = MidnightGuideDB or {}
  local t = MidnightGuideDB.lastTab
  if t == "professions" or t == "weekly" then
    MidnightGuideDB.lastTab = "all_treasures"
  end
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

  frame.TitleText:SetText("Midnight Guide — Full Tracker")
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

  local x = 12
  local y = -34
  for i, def in ipairs(tabs) do
    local btn = CreateFrame("Button", nil, frame, "UIPanelButtonTemplate")
    btn:SetSize(104, 22)
    btn:SetPoint("TOPLEFT", x, y)
    btn:SetText(def.label)
    btn.key = def.key
    btn:SetScript("OnClick", function()
      setActiveTab(frame, def.key)
    end)
    table.insert(frame.tabButtons, btn)
    x = x + 108
    if i == 4 then
      x = 12
      y = -60
    end
  end

  frame.bodyText = frame:CreateFontString(nil, "OVERLAY", "GameFontHighlight")
  frame.bodyText:SetPoint("TOPLEFT", 20, -92)
  frame.bodyText:SetWidth(520)
  frame.bodyText:SetJustifyH("LEFT")
  frame.bodyText:SetText("Loading...")

  MidnightGuide.UI.MainFrame = frame
  migrateLegacyTabKey()
  setActiveTab(frame, (MidnightGuideDB and MidnightGuideDB.lastTab) or "all_treasures")
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

--- Open window and select a tab (keys: my_treasures, all_treasures, my_books, all_books, help).
function MidnightGuide.UI.OpenMainFrame(tabKey)
  local frame = buildMainFrame()
  frame:Show()
  if tabKey and type(tabKey) == "string" then
    setActiveTab(frame, tabKey)
  end
end

--- Parse /mg subcommands (always starts with /mg — no other slash prefix).
function MidnightGuide.UI.HandleMgCommand(arg)
  arg = (arg or ""):gsub("^%s+", ""):gsub("%s+$", ""):lower()
  if arg == "" or arg == "toggle" then
    MidnightGuide.UI.ToggleMainFrame()
    return
  end

  if arg == "help" or arg == "h" or arg == "install" then
    MidnightGuide.UI.OpenMainFrame("help")
    return
  end

  if arg == "my-treasures" or arg == "mytreasures" or arg == "my_treasures" then
    MidnightGuide.UI.OpenMainFrame("my_treasures")
    return
  end

  if arg == "all-treasures" or arg == "alltreasures" or arg == "treasures" or arg == "all_treasures" then
    MidnightGuide.UI.OpenMainFrame("all_treasures")
    return
  end

  if arg == "my-books" or arg == "mybooks" or arg == "my_books" then
    MidnightGuide.UI.OpenMainFrame("my_books")
    return
  end

  if arg == "all-books" or arg == "allbooks" or arg == "books" or arg == "all_books" then
    MidnightGuide.UI.OpenMainFrame("all_books")
    return
  end

  print("|cffc8a84bMidnight Guide:|r Unknown subcommand. Try: |cffc8a84b/mg help|r for help, or |cffc8a84b/mg treasures|r, |cffc8a84b/mg books|r.")
end
