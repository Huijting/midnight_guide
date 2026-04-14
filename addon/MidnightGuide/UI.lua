MidnightGuide = MidnightGuide or {}
MidnightGuide.UI = MidnightGuide.UI or {}

-- Two-level tabs (Platynator-style layout: main row + prof sub-row).
-- Main: Prof | Weekly | Help. Under Prof: My/All treasures, My/All books.
-- Tab visuals: PanelTopTabButtonTemplate when available; CharacterFrameTabButtonTemplate is LOD
-- (often missing until Character UI loads) — UIPanelButtonTemplate is the universal fallback.

local PROF_LEAVES = {
  my_treasures = true,
  all_treasures = true,
  my_books = true,
  all_books = true
}

local function isProfLeaf(k)
  return type(k) == "string" and PROF_LEAVES[k] == true
end

local function uiLang()
  return (MidnightGuideDB and MidnightGuideDB.lang) == "nl" and "nl" or "en"
end

local MAIN_TAB_DEFS = {
  { key = "prof", label_en = "Prof", label_nl = "Prof" },
  { key = "weekly", label_en = "Weekly", label_nl = "Wekelijks" },
  { key = "help", label_en = "Help", label_nl = "Help" }
}

local PROF_SUB_DEFS = {
  { key = "my_treasures", label_en = "My treasures", label_nl = "Mijn schatten" },
  { key = "all_treasures", label_en = "All treasures", label_nl = "Alle schatten" },
  { key = "my_books", label_en = "My books", label_nl = "Mijn boeken" },
  { key = "all_books", label_en = "All books", label_nl = "Alle boeken" }
}

local function mainTabLabel(def)
  return uiLang() == "nl" and def.label_nl or def.label_en
end

local function profSubLabel(def)
  return uiLang() == "nl" and def.label_nl or def.label_en
end

--- Order: prefer panel tabs (always in core UI); avoid CharacterFrameTabButtonTemplate (Blizzard_CharacterUI LOD).
local TAB_TEMPLATE_TRY = {
  "PanelTopTabButtonTemplate",
  "PanelBottomTabButtonTemplate",
  "CharacterFrameTabButtonTemplate"
}

local function resolveTabButtonTemplate()
  if MidnightGuide.UI._resolvedTabButtonTemplate then
    return MidnightGuide.UI._resolvedTabButtonTemplate
  end
  if not MidnightGuide.UI._tabTemplateProbeParent then
    MidnightGuide.UI._tabTemplateProbeParent = CreateFrame("Frame", nil, UIParent)
    MidnightGuide.UI._tabTemplateProbeParent:Hide()
  end
  local holder = MidnightGuide.UI._tabTemplateProbeParent
  for _, tmpl in ipairs(TAB_TEMPLATE_TRY) do
    local ok, btn = pcall(function()
      return CreateFrame("Button", nil, holder, tmpl)
    end)
    if ok and btn then
      btn:Hide()
      MidnightGuide.UI._resolvedTabButtonTemplate = tmpl
      return tmpl
    end
  end
  MidnightGuide.UI._resolvedTabButtonTemplate = "UIPanelButtonTemplate"
  return MidnightGuide.UI._resolvedTabButtonTemplate
end

local function tabUsesPanelTextures(tmpl)
  return type(tmpl) == "string" and tmpl ~= "UIPanelButtonTemplate"
end

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

local function layoutContentArea(frame, showProfSubRow)
  -- CharacterFrame tabs are ~32px tall; second row sits under first (Platynator-like overlap).
  local topY = showProfSubRow and -86 or -54
  local scrollH = showProfSubRow and 268 or 298
  if frame.bodyText then
    frame.bodyText:ClearAllPoints()
    frame.bodyText:SetPoint("TOPLEFT", 20, topY)
  end
  if frame.scrollFrame then
    frame.scrollFrame:ClearAllPoints()
    frame.scrollFrame:SetPoint("TOPLEFT", 20, topY)
    frame.scrollFrame:SetSize(520, scrollH)
  end
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
        if btn == "LeftButton" and clickable and MidnightGuide.Char then
          if spec.weeklyTask and MidnightGuide.Char.ToggleWeeklyTask then
            MidnightGuide.Char.ToggleWeeklyTask(spec.id)
          elseif MidnightGuide.Char.ToggleCollected then
            MidnightGuide.Char.ToggleCollected(spec.id)
          end
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
  MidnightGuideDB = MidnightGuideDB or {}
  MidnightGuideDB.lastTab = key
  frame._currentTabKey = key

  if isProfLeaf(key) then
    MidnightGuideDB.lastProfSubTab = key
  end

  local showProfSubs = isProfLeaf(key)
  if frame.profSubStrip then
    frame.profSubStrip:SetShown(showProfSubs)
  end
  layoutContentArea(frame, showProfSubs)

  if frame.profSubTabButtons then
    for _, btn in ipairs(frame.profSubTabButtons) do
      btn:SetShown(showProfSubs)
    end
  end

  local function mainTabIndexForKey(k)
    if isProfLeaf(k) then
      return 1
    end
    if k == "weekly" then
      return 2
    end
    if k == "help" then
      return 3
    end
    return 1
  end

  local function profSubIndexForKey(k)
    for i, d in ipairs(PROF_SUB_DEFS) do
      if d.key == k then
        return i
      end
    end
    return 1
  end

  if frame._mgUsesBlizzardTabs and frame.mainTabStrip and type(PanelTemplates_SetTab) == "function" then
    pcall(PanelTemplates_SetTab, frame.mainTabStrip, mainTabIndexForKey(key))
  elseif frame.mainTabButtons then
    for _, tab in ipairs(frame.mainTabButtons) do
      local active = (tab.mainKey == "prof" and isProfLeaf(key)) or (tab.mainKey == "weekly" and key == "weekly")
        or (tab.mainKey == "help" and key == "help")
      tab:SetEnabled(not active)
    end
  end

  if frame._mgUsesBlizzardTabs and showProfSubs and frame.profSubStrip and type(PanelTemplates_SetTab) == "function" then
    pcall(PanelTemplates_SetTab, frame.profSubStrip, profSubIndexForKey(key))
  elseif frame.profSubTabButtons and showProfSubs then
    for _, btn in ipairs(frame.profSubTabButtons) do
      btn:SetEnabled(btn.leafKey ~= key)
    end
  end

  local locale = MidnightGuideDB.lang or "en"

  if key == "weekly" and MidnightGuide.Data and MidnightGuide.Data.BuildWeeklyView then
    local view = MidnightGuide.Data.BuildWeeklyView(locale)
    if view.useScroll and frame.scrollFrame and frame.scrollChild then
      frame.bodyText:Hide()
      frame.scrollFrame:Show()
      populateScrollRows(frame, view.rows)
      frame.scrollFrame:SetVerticalScroll(0)
      return
    end
  end

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
    local view = MidnightGuide.Data.BuildProfessionView(key, locale)
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
  if t == "professions" then
    MidnightGuideDB.lastTab = "all_treasures"
  end
  if type(MidnightGuideDB.lastProfSubTab) ~= "string" or not isProfLeaf(MidnightGuideDB.lastProfSubTab) then
    MidnightGuideDB.lastProfSubTab = "all_treasures"
  end
  if isProfLeaf(t) then
    MidnightGuideDB.lastProfSubTab = t
  end
end

local function refreshMainTabLabels(frame)
  if frame.mainTabButtons then
    for _, btn in ipairs(frame.mainTabButtons) do
      for _, def in ipairs(MAIN_TAB_DEFS) do
        if def.key == btn.mainKey then
          btn:SetText(mainTabLabel(def))
          if frame._mgUsesBlizzardTabs and PanelTemplates_TabResize then
            pcall(PanelTemplates_TabResize, btn, 0)
          end
          break
        end
      end
    end
  end
  if frame.profSubTabButtons then
    for _, btn in ipairs(frame.profSubTabButtons) do
      for _, def in ipairs(PROF_SUB_DEFS) do
        if def.key == btn.leafKey then
          btn:SetText(profSubLabel(def))
          if frame._mgUsesBlizzardTabs and PanelTemplates_TabResize then
            pcall(PanelTemplates_TabResize, btn, 0)
          end
          break
        end
      end
    end
  end
end

local function buildMainFrame()
  if MidnightGuide.UI.MainFrame then
    refreshMainTabLabels(MidnightGuide.UI.MainFrame)
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

  local tabTemplate = resolveTabButtonTemplate()
  frame._mgUsesBlizzardTabs = tabUsesPanelTextures(tabTemplate)

  local stripNameMain = frame:GetName() .. "MGMainTabs"
  frame.mainTabStrip = CreateFrame("Frame", stripNameMain, frame)
  frame.mainTabStrip:SetPoint("TOPLEFT", frame, "TOPLEFT", 0, 0)
  frame.mainTabStrip.numTabs = #MAIN_TAB_DEFS
  if frame._mgUsesBlizzardTabs and PanelTemplates_SetNumTabs then
    pcall(PanelTemplates_SetNumTabs, frame.mainTabStrip, #MAIN_TAB_DEFS)
  end

  frame.mainTabButtons = {}
  for i, def in ipairs(MAIN_TAB_DEFS) do
    local tab = CreateFrame("Button", stripNameMain .. "Tab" .. i, frame.mainTabStrip, tabTemplate)
    tab:SetID(i)
    tab:SetText(mainTabLabel(def))
    tab.mainKey = def.key
    if tabTemplate == "UIPanelButtonTemplate" then
      tab:SetSize(158, 24)
    elseif frame._mgUsesBlizzardTabs and PanelTemplates_TabResize then
      pcall(PanelTemplates_TabResize, tab, 0)
    end
    if i == 1 then
      tab:SetPoint("TOPLEFT", frame.mainTabStrip, "TOPLEFT", 8, -22)
    else
      tab:SetPoint("TOPLEFT", frame.mainTabButtons[i - 1], "TOPRIGHT", -16, 0)
    end
    tab:SetScript("OnClick", function(self)
      if frame._mgUsesBlizzardTabs and type(PanelTemplates_Tab_OnClick) == "function" and frame.mainTabStrip.numTabs then
        pcall(PanelTemplates_Tab_OnClick, self, frame.mainTabStrip)
      end
      if def.key == "prof" then
        setActiveTab(frame, (MidnightGuideDB and MidnightGuideDB.lastProfSubTab) or "all_treasures")
      elseif def.key == "weekly" then
        setActiveTab(frame, "weekly")
      else
        setActiveTab(frame, "help")
      end
    end)
    frame.mainTabButtons[i] = tab
  end

  local stripNameProf = frame:GetName() .. "MGProfTabs"
  frame.profSubStrip = CreateFrame("Frame", stripNameProf, frame)
  frame.profSubStrip:SetPoint("TOPLEFT", frame, "TOPLEFT", 8, -52)
  frame.profSubStrip.numTabs = #PROF_SUB_DEFS
  if frame._mgUsesBlizzardTabs and PanelTemplates_SetNumTabs then
    pcall(PanelTemplates_SetNumTabs, frame.profSubStrip, #PROF_SUB_DEFS)
  end

  frame.profSubTabButtons = {}
  for i, def in ipairs(PROF_SUB_DEFS) do
    local tab = CreateFrame("Button", stripNameProf .. "Tab" .. i, frame.profSubStrip, tabTemplate)
    tab:SetID(i)
    tab:SetText(profSubLabel(def))
    tab.leafKey = def.key
    if tabTemplate == "UIPanelButtonTemplate" then
      tab:SetSize(120, 22)
    elseif frame._mgUsesBlizzardTabs and PanelTemplates_TabResize then
      pcall(PanelTemplates_TabResize, tab, 0)
    end
    if i == 1 then
      tab:SetPoint("TOPLEFT", frame.profSubStrip, "TOPLEFT", 0, 0)
    else
      tab:SetPoint("TOPLEFT", frame.profSubTabButtons[i - 1], "TOPRIGHT", -14, 0)
    end
    tab:SetScript("OnClick", function(self)
      if frame._mgUsesBlizzardTabs and type(PanelTemplates_Tab_OnClick) == "function" and frame.profSubStrip.numTabs then
        pcall(PanelTemplates_Tab_OnClick, self, frame.profSubStrip)
      end
      setActiveTab(frame, def.key)
    end)
    frame.profSubTabButtons[i] = tab
  end
  frame.profSubStrip:Hide()

  frame.bodyText = frame:CreateFontString(nil, "OVERLAY", "GameFontHighlight")
  frame.bodyText:SetPoint("TOPLEFT", 20, -56)
  frame.bodyText:SetWidth(520)
  frame.bodyText:SetJustifyH("LEFT")
  frame.bodyText:SetText("Loading...")

  frame.scrollFrame = CreateFrame("ScrollFrame", "MidnightGuideScrollFrame", frame, "UIPanelScrollFrameTemplate")
  frame.scrollFrame:SetPoint("TOPLEFT", 20, -56)
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

--- Open window and select a tab. `tabKey` may be a prof leaf, weekly, help, or "prof" (opens last prof sub).
function MidnightGuide.UI.OpenMainFrame(tabKey)
  local f = buildMainFrame()
  f:Show()
  if tabKey and type(tabKey) == "string" then
    if tabKey == "prof" then
      tabKey = (MidnightGuideDB and MidnightGuideDB.lastProfSubTab) or "all_treasures"
    end
    setActiveTab(f, tabKey)
  else
    setActiveTab(f, (MidnightGuideDB and MidnightGuideDB.lastTab) or "all_treasures")
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

  if lower == "prof" or lower == "trackers" or lower == "profession" or lower == "professions" then
    MidnightGuide.UI.OpenMainFrame("prof")
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

  if lower == "weekly" then
    MidnightGuide.UI.OpenMainFrame("weekly")
    return
  end

  print(
    "|cffc8a84bMidnight Guide:|r Unknown subcommand. Try: |cffc8a84b/mg help|r, |cffc8a84b/mg prof|r, |cffc8a84b/mg weekly|r, |cffc8a84b/mg treasures|r, |cffc8a84b/mg books|r."
  )
end
