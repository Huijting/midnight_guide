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

local function clearScrollRows(frame)
  if not frame.scrollRows then
    return
  end
  for _, row in ipairs(frame.scrollRows) do
    row:Hide()
    row:ClearAllPoints()
  end
end

local function populateScrollRows(frame, rows)
  clearScrollRows(frame)
  frame.scrollRows = frame.scrollRows or {}
  local y = 0
  local contentW = 500

  for i, spec in ipairs(rows or {}) do
    local row = frame.scrollRows[i]
    local clickable = spec.clickable and spec.id and type(spec.id) == "string" and spec.id ~= ""

    -- Always use Button: plain Frame has no OnClick script type; SetScript("OnClick", nil) errors there.
    if not row or row.GetObjectType and row:GetObjectType() ~= "Button" then
      if row then
        row:Hide()
        row:SetParent(nil)
      end
      row = CreateFrame("Button", nil, frame.scrollChild)
      row:SetHighlightTexture("Interface\\QuestFrame\\UI-QuestTitleHighlight", "ADD")
      row:GetHighlightTexture():SetAlpha(0.25)
      row.fs = row:CreateFontString(nil, "OVERLAY", "GameFontHighlight")
      row.fs:SetPoint("TOPLEFT", row, "TOPLEFT", 0, 0)
      row.fs:SetWidth(contentW)
      row.fs:SetJustifyH("LEFT")
      frame.scrollRows[i] = row
    end

    row.fs:SetWidth(contentW)
    row.fs:SetText(spec.text or "")
    local h = row.fs:GetStringHeight() or 14
    row:SetSize(520, math.max(h + 4, 16))
    row:SetPoint("TOPLEFT", frame.scrollChild, "TOPLEFT", 0, -y)
    y = y + row:GetHeight()

    local hasWay = spec.way and type(spec.way.mapId) == "number"
    row:SetScript("OnClick", nil)
    if clickable or hasWay then
      row:RegisterForClicks("LeftButtonUp", "RightButtonUp")
      row:SetScript("OnMouseUp", function(_, btn)
        if btn == "RightButton" and hasWay and MidnightGuide.Nav and MidnightGuide.Nav.SetWaypoint then
          MidnightGuide.Nav.SetWaypoint(spec.way)
          return
        end
        if btn == "LeftButton" and clickable and MidnightGuide.Char and MidnightGuide.Char.ToggleCollected then
          MidnightGuide.Char.ToggleCollected(spec.id)
          if MidnightGuide.UI.RefreshIfOpen then
            MidnightGuide.UI.RefreshIfOpen()
          end
        end
      end)
      row:EnableMouse(true)
    else
      row:RegisterForClicks()
      row:SetScript("OnMouseUp", nil)
      row:EnableMouse(false)
    end

    row:Show()
  end

  frame.scrollChild:SetHeight(math.max(y, 1))
end

local setActiveTab

function MidnightGuide.UI.RefreshIfOpen()
  local frame = MidnightGuide.UI.MainFrame
  if frame and frame:IsShown() and setActiveTab then
    local key = (MidnightGuideDB and MidnightGuideDB.lastTab) or "all_treasures"
    setActiveTab(frame, key)
  end
end

setActiveTab = function(frame, key)
  for _, tab in ipairs(frame.tabButtons) do
    local active = tab.key == key
    tab:SetEnabled(not active)
  end

  local locale = (MidnightGuideDB and MidnightGuideDB.lang) or "en"
  MidnightGuideDB = MidnightGuideDB or {}
  MidnightGuideDB.lastTab = key
  frame._currentTabKey = key

  if key == "help" and MidnightGuide.Data and MidnightGuide.Data.BuildHelpReport then
    local lines = MidnightGuide.Data.BuildHelpReport({ locale = locale })
    local helpRows = {}
    for _, line in ipairs(lines) do
      helpRows[#helpRows + 1] = { text = line, clickable = false }
    end
    frame.bodyText:Hide()
    if frame.scrollFrame and frame.scrollChild then
      frame.scrollFrame:Show()
      populateScrollRows(frame, helpRows)
      frame.scrollFrame:SetVerticalScroll(0)
    else
      frame.bodyText:Show()
      frame.bodyText:SetText(table.concat(lines, "\n"))
    end
    return
  end

  local opts = tabToReportOptions(key)
  if opts and MidnightGuide.Data and MidnightGuide.Data.BuildProfessionView then
    local tabKey = key
    local view = MidnightGuide.Data.BuildProfessionView(tabKey, locale)
    if view.useScroll and frame.scrollFrame and frame.scrollChild then
      frame.bodyText:Hide()
      frame.scrollFrame:Show()
      populateScrollRows(frame, view.rows)
      frame.scrollFrame:SetVerticalScroll(0)
      return
    end
    frame.bodyText:Show()
    if frame.scrollFrame then
      frame.scrollFrame:Hide()
    end
    frame.bodyText:SetText(view.mainText or "")
    return
  end

  frame.bodyText:Show()
  if frame.scrollFrame then
    frame.scrollFrame:Hide()
  end
  frame.bodyText:SetText("Selected tab: " .. tostring(key))
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

  frame.scrollFrame = CreateFrame("ScrollFrame", "MidnightGuideScrollFrame", frame, "UIPanelScrollFrameTemplate")
  frame.scrollFrame:SetPoint("TOPLEFT", 20, -92)
  frame.scrollFrame:SetSize(520, 300)
  frame.scrollChild = CreateFrame("Frame", nil, frame.scrollFrame)
  frame.scrollChild:SetWidth(520)
  frame.scrollFrame:SetScrollChild(frame.scrollChild)
  frame.scrollFrame:Hide()
  frame.scrollRows = {}

  MidnightGuide.UI.MainFrame = frame
  migrateLegacyTabKey()
  setActiveTab(frame, (MidnightGuideDB and MidnightGuideDB.lastTab) or "all_treasures")
  return frame
end

function MidnightGuide.UI.ToggleMainFrame()
  local f = buildMainFrame()
  if f:IsShown() then
    f:Hide()
  else
    f:Show()
  end
end

--- Open window and select a tab (keys: my_treasures, all_treasures, my_books, all_books, help).
function MidnightGuide.UI.OpenMainFrame(tabKey)
  local f = buildMainFrame()
  f:Show()
  if tabKey and type(tabKey) == "string" then
    setActiveTab(f, tabKey)
  end
end

--- Parse /mg subcommands (always starts with /mg — no other slash prefix).
function MidnightGuide.UI.HandleMgCommand(arg)
  arg = (arg or ""):gsub("^%s+", ""):gsub("%s+$", "")
  local lower = arg:lower()
  if lower == "" or lower == "toggle" then
    MidnightGuide.UI.ToggleMainFrame()
    return
  end

  local tokens = {}
  for w in arg:gmatch("%S+") do
    tokens[#tokens + 1] = w
  end
  if tokens[1] and tokens[1]:lower() == "toggle" and tokens[2] then
    local id = table.concat(tokens, " ", 2)
    if MidnightGuide.Char and MidnightGuide.Char.ToggleCollected then
      MidnightGuide.Char.ToggleCollected(id)
    end
    MidnightGuide.UI.RefreshIfOpen()
    return
  end

  if lower == "help" or lower == "h" or lower == "install" then
    MidnightGuide.UI.OpenMainFrame("help")
    return
  end

  if lower == "my-treasures" or lower == "mytreasures" or lower == "my_treasures" then
    MidnightGuide.UI.OpenMainFrame("my_treasures")
    return
  end

  if lower == "all-treasures" or lower == "alltreasures" or lower == "treasures" or lower == "all_treasures" then
    MidnightGuide.UI.OpenMainFrame("all_treasures")
    return
  end

  if lower == "my-books" or lower == "mybooks" or lower == "my_books" then
    MidnightGuide.UI.OpenMainFrame("my_books")
    return
  end

  if lower == "all-books" or lower == "allbooks" or lower == "books" or lower == "all_books" then
    MidnightGuide.UI.OpenMainFrame("all_books")
    return
  end

  print("|cffc8a84bMidnight Guide:|r Unknown subcommand. Try: |cffc8a84b/mg help|r for help, or |cffc8a84b/mg treasures|r, |cffc8a84b/mg books|r.")
end
