MidnightGuide = MidnightGuide or {}
MidnightGuide.UI = MidnightGuide.UI or {}

-- Two-level tabs (nested main row + prof sub-row; Platynator's Design.lua is nameplate presets, not tab UI).
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

local function tabTemplateProbeParent()
  if not MidnightGuide.UI._tabTemplateProbeParent then
    MidnightGuide.UI._tabTemplateProbeParent = CreateFrame("Frame", nil, UIParent)
    MidnightGuide.UI._tabTemplateProbeParent:Hide()
  end
  return MidnightGuide.UI._tabTemplateProbeParent
end

local function probeTabTemplate(tmpl)
  local holder = tabTemplateProbeParent()
  local ok, btn = pcall(function()
    return CreateFrame("Button", nil, holder, tmpl)
  end)
  if ok and btn then
    btn:Hide()
    return true
  end
  return false
end

--- Main row + prof row: Blizzard-style pair PanelTop + PanelBottom when both exist (clearer than two identical rows).
local function resolveDualTabTemplates()
  if MidnightGuide.UI._resolvedMainTabTemplate then
    return MidnightGuide.UI._resolvedMainTabTemplate, MidnightGuide.UI._resolvedProfTabTemplate
  end
  local mainT
  for _, tmpl in ipairs(TAB_TEMPLATE_TRY) do
    if probeTabTemplate(tmpl) then
      mainT = tmpl
      break
    end
  end
  if not mainT then
    mainT = "UIPanelButtonTemplate"
  end
  local profT = mainT
  if mainT == "PanelTopTabButtonTemplate" and probeTabTemplate("PanelBottomTabButtonTemplate") then
    profT = "PanelBottomTabButtonTemplate"
  end
  MidnightGuide.UI._resolvedMainTabTemplate = mainT
  MidnightGuide.UI._resolvedProfTabTemplate = profT
  MidnightGuide.UI._resolvedTabButtonTemplate = mainT
  return mainT, profT
end

local function resolveTabButtonTemplate()
  return (select(1, resolveDualTabTemplates()))
end

local function tabUsesPanelTextures(tmpl)
  return type(tmpl) == "string" and tmpl ~= "UIPanelButtonTemplate"
end

local function isPanelStyleTabTemplate(tmpl)
  return tmpl == "PanelTopTabButtonTemplate" or tmpl == "PanelBottomTabButtonTemplate"
end

local function isCharacterTabTemplate(tmpl)
  return tmpl == "CharacterFrameTabButtonTemplate"
end

--- Panel top/bottom tabs extend upward from their BOTTOM edge (Blizzard pattern). TOPLEFT on a strip
--- places them above the frame and they disappear. UIPanelButton stays TOP-attached on strips.
local function applyTabAnchors(frame, mainTmpl, profTmpl)
  profTmpl = profTmpl or mainTmpl
  local main = frame.mainTabButtons
  local prof = frame.profSubTabButtons
  if not main or not prof then
    return
  end
  for _, t in ipairs(main) do
    t:ClearAllPoints()
  end
  for _, t in ipairs(prof) do
    t:ClearAllPoints()
  end

  if isPanelStyleTabTemplate(mainTmpl) then
    for i, tab in ipairs(main) do
      if i == 1 then
        tab:SetPoint("BOTTOMLEFT", frame, "TOPLEFT", 8, -32)
      else
        tab:SetPoint("BOTTOMLEFT", main[i - 1], "BOTTOMRIGHT", -16, 0)
      end
    end
    -- Panel tabs grow UP from BOTTOM; a small -Y was not enough gap — sub-tabs drew over main row.
    local mh = 0
    for _, t in ipairs(main) do
      local h = t:GetHeight()
      if type(h) == "number" and h > mh then
        mh = h
      end
    end
    if mh < 20 then
      mh = 32
    end
    local rowGap = 12
    if isPanelStyleTabTemplate(profTmpl) then
      local profDrop = -(mh + rowGap)
      for i, tab in ipairs(prof) do
        if i == 1 then
          tab:SetPoint("BOTTOMLEFT", main[1], "BOTTOMLEFT", 0, profDrop)
        else
          tab:SetPoint("BOTTOMLEFT", prof[i - 1], "BOTTOMRIGHT", -14, 0)
        end
      end
    else
      -- Hybrid: main = panel (bottom-up), prof = UIPanelButton (top-down) — tuck under main row.
      for i, tab in ipairs(prof) do
        if i == 1 then
          tab:SetPoint("TOPLEFT", main[1], "BOTTOMLEFT", 0, -rowGap)
        else
          tab:SetPoint("TOPLEFT", prof[i - 1], "TOPRIGHT", 10, 0)
        end
      end
    end
    local ph = 0
    for _, t in ipairs(prof) do
      local h = t:GetHeight()
      if type(h) == "number" and h > ph then
        ph = h
      end
    end
    if ph < 18 then
      ph = 26
    end
    -- Lowest tab pixel is bottom of prof row: 32 (main bottom) + mh + rowGap — do not add ph again
    -- (that duplicated sub-tab height and left a large empty band under the subtabs).
    local contentGap = 10
    frame._mgPanelHeaderPad = 32 + mh + rowGap + contentGap
    if frame.profSubRowBg then
      frame.profSubRowBg:ClearAllPoints()
      -- Full-width strip under main row (inset for frame chrome / close button).
      local stripTop = 32 + mh + 1
      frame.profSubRowBg:SetPoint("TOPLEFT", frame, "TOPLEFT", 4, -stripTop)
      frame.profSubRowBg:SetPoint("TOPRIGHT", frame, "TOPRIGHT", -36, -stripTop)
      frame.profSubRowBg:SetHeight(rowGap + ph + 8)
    end
  elseif isCharacterTabTemplate(mainTmpl) then
    frame._mgPanelHeaderPad = nil
    if frame.profSubRowBg then
      frame.profSubRowBg:Hide()
    end
    frame.mainTabStrip:ClearAllPoints()
    frame.mainTabStrip:SetPoint("TOPLEFT", frame, "TOPLEFT", 4, -40)
    for i, tab in ipairs(main) do
      if i == 1 then
        tab:SetPoint("TOPLEFT", frame.mainTabStrip, "TOPLEFT", 0, 0)
      else
        tab:SetPoint("TOPLEFT", main[i - 1], "TOPRIGHT", -16, 0)
      end
    end
    frame.profSubStrip:ClearAllPoints()
    frame.profSubStrip:SetPoint("TOPLEFT", main[1], "BOTTOMLEFT", -4, -10)
    for i, tab in ipairs(prof) do
      if i == 1 then
        tab:SetPoint("TOPLEFT", frame.profSubStrip, "TOPLEFT", 0, 0)
      else
        tab:SetPoint("TOPLEFT", prof[i - 1], "TOPRIGHT", -14, 0)
      end
    end
  else
    frame._mgPanelHeaderPad = nil
    if frame.profSubRowBg then
      frame.profSubRowBg:Hide()
    end
    frame.mainTabStrip:ClearAllPoints()
    frame.mainTabStrip:SetPoint("TOPLEFT", frame, "TOPLEFT", 6, -42)
    frame.profSubStrip:ClearAllPoints()
    frame.profSubStrip:SetPoint("TOPLEFT", frame, "TOPLEFT", 6, -78)
    for i, tab in ipairs(main) do
      if i == 1 then
        tab:SetPoint("TOPLEFT", frame.mainTabStrip, "TOPLEFT", 0, 0)
      else
        tab:SetPoint("TOPLEFT", main[i - 1], "TOPRIGHT", 8, 0)
      end
    end
    for i, tab in ipairs(prof) do
      if i == 1 then
        tab:SetPoint("TOPLEFT", frame.profSubStrip, "TOPLEFT", 0, 0)
      else
        tab:SetPoint("TOPLEFT", prof[i - 1], "TOPRIGHT", 8, 0)
      end
    end
  end

  frame.mainTabStrip:Show()
  for _, t in ipairs(main) do
    t:Show()
  end
  for _, t in ipairs(prof) do
    t:Show()
  end
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
  local panelStyle = frame._mgPanelStyleTabs
  local topY, scrollH
  if panelStyle and showProfSubRow then
    local pad = type(frame._mgPanelHeaderPad) == "number" and frame._mgPanelHeaderPad or 118
    topY = -pad
    scrollH = math.max(200, 388 - pad)
  elseif panelStyle and not showProfSubRow then
    topY, scrollH = -82, 274
  elseif showProfSubRow then
    topY, scrollH = -100, 252
  else
    topY, scrollH = -68, 286
  end
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
  if frame.profSubRowBg then
    frame.profSubRowBg:SetShown(showProfSubs and frame._mgPanelStyleTabs == true)
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
  if frame.mainTabButtons and frame.profSubTabButtons and MidnightGuide.UI._resolvedMainTabTemplate then
    applyTabAnchors(frame, MidnightGuide.UI._resolvedMainTabTemplate, MidnightGuide.UI._resolvedProfTabTemplate)
  end
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

  frame.profSubRowBg = CreateFrame("Frame", nil, frame)
  frame.profSubRowBg:SetFrameLevel((frame:GetFrameLevel() or 0) + 5)
  local profBgTex = frame.profSubRowBg:CreateTexture(nil, "BACKGROUND")
  profBgTex:SetAllPoints()
  profBgTex:SetColorTexture(0.06, 0.06, 0.09, 0.78)
  frame.profSubRowBg:Hide()

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

  local mainTmpl, profTmpl = resolveDualTabTemplates()
  frame._mgUsesBlizzardTabs = tabUsesPanelTextures(mainTmpl) or tabUsesPanelTextures(profTmpl)
  frame._mgPanelStyleTabs = isPanelStyleTabTemplate(mainTmpl)

  local stripNameMain = frame:GetName() .. "MGMainTabs"
  frame.mainTabStrip = CreateFrame("Frame", stripNameMain, frame)
  frame.mainTabStrip:SetPoint("TOPLEFT", frame, "TOPLEFT", 0, 0)
  frame.mainTabStrip:SetSize(520, 1)
  frame.mainTabStrip:SetFrameLevel((frame:GetFrameLevel() or 0) + 10)
  frame.mainTabStrip.numTabs = #MAIN_TAB_DEFS
  if frame._mgUsesBlizzardTabs and PanelTemplates_SetNumTabs then
    pcall(PanelTemplates_SetNumTabs, frame.mainTabStrip, #MAIN_TAB_DEFS)
  end

  frame.mainTabButtons = {}
  for i, def in ipairs(MAIN_TAB_DEFS) do
    local tab = CreateFrame("Button", stripNameMain .. "Tab" .. i, frame.mainTabStrip, mainTmpl)
    tab:SetID(i)
    tab:SetText(mainTabLabel(def))
    tab.mainKey = def.key
    if mainTmpl == "UIPanelButtonTemplate" then
      tab:SetSize(158, 24)
    elseif frame._mgUsesBlizzardTabs and PanelTemplates_TabResize then
      pcall(PanelTemplates_TabResize, tab, 0)
    end
    tab:SetFrameLevel((frame:GetFrameLevel() or 0) + 11)
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
  frame.profSubStrip:SetPoint("TOPLEFT", frame, "TOPLEFT", 0, 0)
  frame.profSubStrip:SetSize(520, 1)
  frame.profSubStrip:SetFrameLevel((frame:GetFrameLevel() or 0) + 10)
  frame.profSubStrip.numTabs = #PROF_SUB_DEFS
  if frame._mgUsesBlizzardTabs and PanelTemplates_SetNumTabs then
    pcall(PanelTemplates_SetNumTabs, frame.profSubStrip, #PROF_SUB_DEFS)
  end

  frame.profSubTabButtons = {}
  for i, def in ipairs(PROF_SUB_DEFS) do
    local tab = CreateFrame("Button", stripNameProf .. "Tab" .. i, frame.profSubStrip, profTmpl)
    tab:SetID(i)
    tab:SetText(profSubLabel(def))
    tab.leafKey = def.key
    if profTmpl == "UIPanelButtonTemplate" then
      tab:SetSize(120, 22)
    elseif frame._mgUsesBlizzardTabs and PanelTemplates_TabResize then
      pcall(PanelTemplates_TabResize, tab, 0)
    end
    tab:SetFrameLevel((frame:GetFrameLevel() or 0) + 11)
    tab:SetScript("OnClick", function(self)
      if frame._mgUsesBlizzardTabs and type(PanelTemplates_Tab_OnClick) == "function" and frame.profSubStrip.numTabs then
        pcall(PanelTemplates_Tab_OnClick, self, frame.profSubStrip)
      end
      setActiveTab(frame, def.key)
    end)
    frame.profSubTabButtons[i] = tab
  end

  applyTabAnchors(frame, mainTmpl, profTmpl)
  frame.profSubStrip:Hide()

  frame.bodyText = frame:CreateFontString(nil, "OVERLAY", "GameFontHighlight")
  frame.bodyText:SetPoint("TOPLEFT", 20, -68)
  frame.bodyText:SetWidth(520)
  frame.bodyText:SetJustifyH("LEFT")
  frame.bodyText:SetText("Loading...")

  frame.scrollFrame = CreateFrame("ScrollFrame", "MidnightGuideScrollFrame", frame, "UIPanelScrollFrameTemplate")
  frame.scrollFrame:SetPoint("TOPLEFT", 20, -68)
  frame.scrollFrame:SetSize(520, 300)
  frame.scrollFrame:SetFrameLevel((frame:GetFrameLevel() or 0) + 1)
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
