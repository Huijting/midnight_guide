MidnightGuide = MidnightGuide or {}
MidnightGuide.UI = MidnightGuide.UI or {}

-- Shell row (settings-style): General | Designer | … Under General: Prof | Weekly | Help + prof subtabs.
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

local SHELL_TAB_DEFS = {
  { key = "general", label = "General" },
  { key = "designer", label = "Designer" },
  { key = "style_select", label = "Style Select" },
  { key = "behaviour", label = "Behaviour" },
  { key = "positioning", label = "Positioning" },
  { key = "font", label = "Font" }
}

local SHELL_PLACEHOLDER = {
  designer = "Coming soon.",
  style_select = "Coming soon.",
  behaviour = "Coming soon.",
  positioning = "Coming soon.",
  font = "Coming soon."
}

local function mainTabLabel(def)
  return uiLang() == "nl" and def.label_nl or def.label_en
end

local function profSubLabel(def)
  return uiLang() == "nl" and def.label_nl or def.label_en
end

local function shellTabIndexForKey(key)
  for i, d in ipairs(SHELL_TAB_DEFS) do
    if d.key == key then
      return i
    end
  end
  return 1
end

local function shellContentTopOffset(tmpl)
  if tmpl == "PanelTopTabButtonTemplate" then
    return -82
  end
  return -102
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

local function positionInnerNavAnchor(frame)
  if not frame.innerNavAnchor or not frame.contentBg then
    return
  end
  frame.innerNavAnchor:ClearAllPoints()
  if frame.shellGeneralHeader and frame.shellGeneralHeader:IsShown() then
    frame.innerNavAnchor:SetPoint("TOPLEFT", frame.shellGeneralHeader, "BOTTOMLEFT", 0, -10)
  else
    frame.innerNavAnchor:SetPoint("TOPLEFT", frame.contentBg, "TOPLEFT", 8, -10)
  end
end

local function relayoutMainFrameScroll(frame)
  if not frame.scrollFrame or not frame.contentBg then
    return
  end
  local pad = 14
  frame.scrollFrame:ClearAllPoints()
  frame.bodyText:ClearAllPoints()
  if frame._shellTabKey and frame._shellTabKey ~= "general" then
    frame.scrollFrame:Hide()
    frame.bodyText:Show()
    frame.bodyText:SetPoint("TOPLEFT", frame.contentBg, "TOPLEFT", pad, -16)
    frame.bodyText:SetPoint("BOTTOMRIGHT", frame.contentBg, "BOTTOMRIGHT", -pad, 14)
    return
  end
  frame.scrollFrame:SetPoint("BOTTOMRIGHT", frame.contentBg, "BOTTOMRIGHT", -pad, 14)
  frame.bodyText:SetPoint("BOTTOMRIGHT", frame.contentBg, "BOTTOMRIGHT", -pad, 14)
  local anchor = frame._innerNavBottomAnchor
  if anchor and frame.mainTabButtons and frame.mainTabButtons[1] and frame.mainTabStrip and frame.mainTabStrip:IsShown() then
    anchor:ClearAllPoints()
    local showProf = frame.profSubStrip and frame.profSubStrip:IsShown() and frame.profSubTabButtons and frame.profSubTabButtons[1]
      and frame.profSubTabButtons[1]:IsShown()
    if showProf then
      anchor:SetPoint("TOPLEFT", frame.profSubTabButtons[1], "BOTTOMLEFT", -4, 2)
    else
      anchor:SetPoint("TOPLEFT", frame.mainTabButtons[1], "BOTTOMLEFT", -4, 2)
    end
    frame.scrollFrame:SetPoint("TOPLEFT", anchor, "BOTTOMLEFT", 0, -8)
    frame.bodyText:SetPoint("TOPLEFT", anchor, "BOTTOMLEFT", 0, -8)
  else
    frame.scrollFrame:SetPoint("TOPLEFT", frame.contentBg, "TOPLEFT", pad, -120)
    frame.bodyText:SetPoint("TOPLEFT", frame.contentBg, "TOPLEFT", pad, -120)
  end
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
  local navParent = frame.innerNavAnchor or frame
  local bgParent = frame.contentBg or frame
  for _, t in ipairs(main) do
    t:ClearAllPoints()
  end
  for _, t in ipairs(prof) do
    t:ClearAllPoints()
  end

  if isPanelStyleTabTemplate(mainTmpl) then
    for i, tab in ipairs(main) do
      if i == 1 then
        tab:SetPoint("BOTTOMLEFT", navParent, "TOPLEFT", 8, -32)
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
      local headerExtra = 8
      if frame.shellGeneralHeader and frame.shellGeneralHeader:IsShown() then
        local hh = frame.shellGeneralHeader:GetHeight()
        headerExtra = 10 + (type(hh) == "number" and hh or 92) + 8
      end
      local stripTop = headerExtra + 32 + mh + 1
      frame.profSubRowBg:SetPoint("TOPLEFT", bgParent, "TOPLEFT", 4, -stripTop)
      frame.profSubRowBg:SetPoint("TOPRIGHT", bgParent, "TOPRIGHT", -8, -stripTop)
      frame.profSubRowBg:SetHeight(rowGap + ph + 8)
    end
  elseif isCharacterTabTemplate(mainTmpl) then
    frame._mgPanelHeaderPad = nil
    if frame.profSubRowBg then
      frame.profSubRowBg:Hide()
    end
    frame.mainTabStrip:ClearAllPoints()
    frame.mainTabStrip:SetPoint("TOPLEFT", navParent, "TOPLEFT", -4, -6)
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
    frame.mainTabStrip:SetPoint("TOPLEFT", navParent, "TOPLEFT", -2, -6)
    frame.profSubStrip:ClearAllPoints()
    frame.profSubStrip:SetPoint("TOPLEFT", main[1], "BOTTOMLEFT", 0, -10)
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
  if frame._shellTabKey and frame._shellTabKey ~= "general" then
    relayoutMainFrameScroll(frame)
    return
  end
  showProfSubRow = showProfSubRow == true
  local mainT, profT = resolveDualTabTemplates()
  positionInnerNavAnchor(frame)
  applyTabAnchors(frame, mainT, profT)
  relayoutMainFrameScroll(frame)
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
  local contentW = 560

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
    row:SetSize(580, math.max(h + 4, 16))
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
local setShellTab

function MidnightGuide.UI.RefreshIfOpen()
  local frame = MidnightGuide.UI.MainFrame
  if not frame or not frame:IsShown() or not setActiveTab or not setShellTab then
    return
  end
  local shell = (MidnightGuideDB and MidnightGuideDB.lastShellTab) or "general"
  setShellTab(frame, shell)
  if shell == "general" then
    setActiveTab(frame, (MidnightGuideDB and MidnightGuideDB.lastTab) or "all_treasures")
  end
end

setActiveTab = function(frame, key)
  if frame._shellTabKey and frame._shellTabKey ~= "general" then
    return
  end
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
  if frame.profSubTabButtons then
    for _, btn in ipairs(frame.profSubTabButtons) do
      btn:SetShown(showProfSubs)
    end
  end
  layoutContentArea(frame, showProfSubs)

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
      relayoutMainFrameScroll(frame)
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
    relayoutMainFrameScroll(frame)
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
      relayoutMainFrameScroll(frame)
      return
    end
    frame.bodyText:Show()
    if frame.scrollFrame then
      frame.scrollFrame:Hide()
    end
    frame.bodyText:SetText(view.mainText or "")
    relayoutMainFrameScroll(frame)
    return
  end

  frame.bodyText:Show()
  if frame.scrollFrame then
    frame.scrollFrame:Hide()
  end
  frame.bodyText:SetText("Selected tab: " .. tostring(key))
  relayoutMainFrameScroll(frame)
end

setShellTab = function(frame, shellKey)
  MidnightGuideDB = MidnightGuideDB or {}
  MidnightGuideDB.lastShellTab = shellKey
  frame._shellTabKey = shellKey
  local sidx = shellTabIndexForKey(shellKey)
  if frame.shellTabStrip and type(PanelTemplates_SetTab) == "function" then
    pcall(PanelTemplates_SetTab, frame.shellTabStrip, sidx)
  end
  if frame.shellTabButtons then
    for i, tab in ipairs(frame.shellTabButtons) do
      local fs = tab.GetFontString and tab:GetFontString() or tab.Text
      if fs then
        if i == sidx then
          fs:SetTextColor(1, 0.95, 0.25)
        else
          fs:SetTextColor(0.82, 0.82, 0.82)
        end
      end
    end
  end
  if shellKey ~= "general" then
    if frame.shellGeneralHeader then
      frame.shellGeneralHeader:Hide()
    end
    if frame.mainTabStrip then
      frame.mainTabStrip:Hide()
    end
    if frame.profSubStrip then
      frame.profSubStrip:Hide()
    end
    if frame.profSubTabButtons then
      for _, b in ipairs(frame.profSubTabButtons) do
        b:Hide()
      end
    end
    if frame.profSubRowBg then
      frame.profSubRowBg:Hide()
    end
    if frame.scrollFrame then
      frame.scrollFrame:Hide()
    end
    if frame.bodyText then
      frame.bodyText:Show()
      frame.bodyText:SetText(SHELL_PLACEHOLDER[shellKey] or "Coming soon.")
    end
    relayoutMainFrameScroll(frame)
    return
  end
  if frame.shellGeneralHeader then
    frame.shellGeneralHeader:Show()
  end
  if frame.mainTabStrip then
    frame.mainTabStrip:Show()
  end
  local k = (MidnightGuideDB.lastTab) or "all_treasures"
  local showProf = isProfLeaf(k)
  if frame.profSubStrip then
    frame.profSubStrip:SetShown(showProf)
  end
  if frame.profSubRowBg then
    frame.profSubRowBg:SetShown(showProf and frame._mgPanelStyleTabs == true)
  end
  if frame.profSubTabButtons then
    for _, b in ipairs(frame.profSubTabButtons) do
      b:SetShown(showProf)
    end
  end
  positionInnerNavAnchor(frame)
  local mainT, profT = resolveDualTabTemplates()
  applyTabAnchors(frame, mainT, profT)
  relayoutMainFrameScroll(frame)
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
  local st = MidnightGuideDB.lastShellTab
  if st ~= "general" and st ~= "designer" and st ~= "style_select" and st ~= "behaviour" and st ~= "positioning" and st ~= "font" then
    MidnightGuideDB.lastShellTab = "general"
  end
end

local function refreshMainTabLabels(frame)
  if (frame._shellTabKey == nil or frame._shellTabKey == "general") and frame.mainTabButtons and frame.profSubTabButtons
    and MidnightGuide.UI._resolvedMainTabTemplate then
    positionInnerNavAnchor(frame)
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
  if frame.contentBg and relayoutMainFrameScroll then
    relayoutMainFrameScroll(frame)
  end
end

local function buildMainFrame()
  if MidnightGuide.UI.MainFrame then
    refreshMainTabLabels(MidnightGuide.UI.MainFrame)
    return MidnightGuide.UI.MainFrame
  end

  local frame = CreateFrame("Frame", "MidnightGuideMainFrame", UIParent, "BasicFrameTemplateWithInset")
  frame:SetSize(640, 460)
  frame:SetPoint("CENTER")
  frame:Hide()
  frame:SetMovable(true)
  frame:EnableMouse(true)
  frame:RegisterForDrag("LeftButton")
  frame:SetScript("OnDragStart", frame.StartMoving)
  frame:SetScript("OnDragStop", frame.StopMovingOrSizing)

  frame.TitleText:SetText("Midnight Guide")

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
  local shellTmpl = mainTmpl
  frame._mgUsesBlizzardTabs = tabUsesPanelTextures(mainTmpl) or tabUsesPanelTextures(profTmpl)
  frame._mgPanelStyleTabs = isPanelStyleTabTemplate(mainTmpl)

  local stripNameShell = frame:GetName() .. "MGShellTabs"
  frame.shellTabStrip = CreateFrame("Frame", stripNameShell, frame)
  frame.shellTabStrip:SetPoint("TOPLEFT", frame, "TOPLEFT", 0, 0)
  frame.shellTabStrip:SetSize(620, 1)
  frame.shellTabStrip:SetFrameLevel((frame:GetFrameLevel() or 0) + 15)
  frame.shellTabStrip.numTabs = #SHELL_TAB_DEFS
  if type(PanelTemplates_SetNumTabs) == "function" then
    pcall(PanelTemplates_SetNumTabs, frame.shellTabStrip, #SHELL_TAB_DEFS)
  end
  frame.shellTabButtons = {}
  for i, def in ipairs(SHELL_TAB_DEFS) do
    local tab = CreateFrame("Button", stripNameShell .. "Tab" .. i, frame.shellTabStrip, shellTmpl)
    tab:SetID(i)
    tab:SetText(def.label)
    if shellTmpl == "UIPanelButtonTemplate" then
      tab:SetSize(96, 22)
    elseif type(PanelTemplates_TabResize) == "function" then
      pcall(PanelTemplates_TabResize, tab, 0)
    end
    tab:SetFrameLevel((frame:GetFrameLevel() or 0) + 16)
    tab:SetScript("OnClick", function()
      setShellTab(frame, def.key)
      if def.key == "general" then
        setActiveTab(frame, (MidnightGuideDB and MidnightGuideDB.lastTab) or "all_treasures")
      end
    end)
    frame.shellTabButtons[i] = tab
  end
  for si, tab in ipairs(frame.shellTabButtons) do
    tab:ClearAllPoints()
    if shellTmpl == "PanelTopTabButtonTemplate" then
      if si == 1 then
        tab:SetPoint("BOTTOMLEFT", frame, "TOPLEFT", 8, -32)
      else
        tab:SetPoint("BOTTOMLEFT", frame.shellTabButtons[si - 1], "BOTTOMRIGHT", -16, 0)
      end
    else
      if si == 1 then
        tab:SetPoint("TOPLEFT", frame, "TOPLEFT", 10, -54)
      else
        tab:SetPoint("TOPLEFT", frame.shellTabButtons[si - 1], "TOPRIGHT", 6, 0)
      end
    end
  end

  local insetY = shellContentTopOffset(shellTmpl) - 8
  frame.contentBg = CreateFrame("Frame", nil, frame)
  frame.contentBg:SetPoint("TOPLEFT", frame, "TOPLEFT", 10, insetY)
  frame.contentBg:SetPoint("BOTTOMRIGHT", frame, "BOTTOMRIGHT", -12, 10)
  frame.contentBg:SetFrameLevel((frame:GetFrameLevel() or 0) + 2)
  local shellEdge = frame.contentBg:CreateTexture(nil, "BORDER")
  shellEdge:SetAllPoints()
  shellEdge:SetColorTexture(0.12, 0.12, 0.14, 1)
  local shellFill = frame.contentBg:CreateTexture(nil, "ARTWORK")
  shellFill:SetPoint("TOPLEFT", frame.contentBg, "TOPLEFT", 2, -2)
  shellFill:SetPoint("BOTTOMRIGHT", frame.contentBg, "BOTTOMRIGHT", -2, 2)
  shellFill:SetColorTexture(0.05, 0.05, 0.07, 0.96)

  frame.innerNavAnchor = CreateFrame("Frame", nil, frame.contentBg)
  frame.innerNavAnchor:SetSize(4, 4)

  frame.shellGeneralHeader = CreateFrame("Frame", nil, frame.contentBg)
  frame.shellGeneralHeader:SetPoint("TOPLEFT", frame.contentBg, "TOPLEFT", 8, -8)
  frame.shellGeneralHeader:SetPoint("TOPRIGHT", frame.contentBg, "TOPRIGHT", -8, -8)
  frame.shellGeneralHeader:SetHeight(92)
  local hIcon = frame.shellGeneralHeader:CreateTexture(nil, "OVERLAY")
  hIcon:SetSize(44, 44)
  hIcon:SetPoint("TOPLEFT", frame.shellGeneralHeader, "TOPLEFT", 6, -6)
  hIcon:SetColorTexture(0.22, 0.22, 0.26, 1)
  local hTitle = frame.shellGeneralHeader:CreateFontString(nil, "OVERLAY", "GameFontNormalHuge")
  hTitle:SetPoint("TOPLEFT", hIcon, "TOPRIGHT", 12, -4)
  hTitle:SetTextColor(1, 1, 1)
  hTitle:SetText("[Midnight Guide]")
  local hBy = frame.shellGeneralHeader:CreateFontString(nil, "OVERLAY", "GameFontHighlightSmall")
  hBy:SetPoint("LEFT", hTitle, "RIGHT", 8, -2)
  hBy:SetTextColor(1, 1, 1)
  hBy:SetText("by [Inchy & Gemma]")
  local hBtn = CreateFrame("Button", nil, frame.shellGeneralHeader, "UIPanelButtonTemplate")
  hBtn:SetSize(110, 22)
  hBtn:SetPoint("TOPLEFT", hIcon, "BOTTOMLEFT", 0, -10)
  hBtn:SetText("Community")
  local hDesc = frame.shellGeneralHeader:CreateFontString(nil, "OVERLAY", "GameFontHighlight")
  hDesc:SetPoint("LEFT", hBtn, "RIGHT", 12, 0)
  hDesc:SetPoint("RIGHT", frame.shellGeneralHeader, "RIGHT", -8, 0)
  hDesc:SetJustifyH("LEFT")
  hDesc:SetTextColor(1, 1, 1)
  hDesc:SetText("Updates, feature suggestions and support")

  frame.profSubRowBg = CreateFrame("Frame", nil, frame.contentBg)
  frame.profSubRowBg:SetFrameLevel((frame:GetFrameLevel() or 0) + 5)
  local profBgTex = frame.profSubRowBg:CreateTexture(nil, "BACKGROUND")
  profBgTex:SetAllPoints()
  profBgTex:SetColorTexture(0.06, 0.06, 0.09, 0.78)
  frame.profSubRowBg:Hide()

  frame._innerNavBottomAnchor = CreateFrame("Frame", nil, frame.contentBg)
  frame._innerNavBottomAnchor:SetSize(1, 1)

  local stripNameMain = frame:GetName() .. "MGMainTabs"
  frame.mainTabStrip = CreateFrame("Frame", stripNameMain, frame.contentBg)
  frame.mainTabStrip:SetPoint("TOPLEFT", frame.contentBg, "TOPLEFT", 0, 0)
  frame.mainTabStrip:SetSize(600, 1)
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
      setShellTab(frame, "general")
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
  frame.profSubStrip = CreateFrame("Frame", stripNameProf, frame.contentBg)
  frame.profSubStrip:SetPoint("TOPLEFT", frame.contentBg, "TOPLEFT", 0, 0)
  frame.profSubStrip:SetSize(600, 1)
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
      setShellTab(frame, "general")
      setActiveTab(frame, def.key)
    end)
    frame.profSubTabButtons[i] = tab
  end

  applyTabAnchors(frame, mainTmpl, profTmpl)
  frame.profSubStrip:Hide()

  frame.bodyText = frame.contentBg:CreateFontString(nil, "OVERLAY", "GameFontHighlight")
  frame.bodyText:SetPoint("TOPLEFT", frame.contentBg, "TOPLEFT", 14, -120)
  frame.bodyText:SetJustifyH("LEFT")
  frame.bodyText:SetText("Loading...")

  frame.scrollFrame = CreateFrame("ScrollFrame", "MidnightGuideScrollFrame", frame.contentBg, "UIPanelScrollFrameTemplate")
  frame.scrollFrame:SetPoint("TOPLEFT", frame.contentBg, "TOPLEFT", 14, -120)
  frame.scrollFrame:SetSize(600, 300)
  frame.scrollFrame:SetFrameLevel((frame:GetFrameLevel() or 0) + 8)
  frame.scrollChild = CreateFrame("Frame", nil, frame.scrollFrame)
  frame.scrollChild:SetWidth(600)
  frame.scrollFrame:SetScrollChild(frame.scrollChild)
  frame.scrollFrame:Hide()
  frame.scrollRows = {}

  MidnightGuide.UI.MainFrame = frame
  migrateLegacyTabKey()
  local shell0 = (MidnightGuideDB.lastShellTab) or "general"
  setShellTab(frame, shell0)
  if shell0 == "general" then
    setActiveTab(frame, (MidnightGuideDB.lastTab) or "all_treasures")
  end
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
    MidnightGuideDB = MidnightGuideDB or {}
    MidnightGuideDB.lastShellTab = "general"
    setShellTab(f, "general")
    if tabKey == "prof" then
      tabKey = (MidnightGuideDB and MidnightGuideDB.lastProfSubTab) or "all_treasures"
    end
    setActiveTab(f, tabKey)
  else
    setShellTab(f, (MidnightGuideDB and MidnightGuideDB.lastShellTab) or "general")
    if ((MidnightGuideDB and MidnightGuideDB.lastShellTab) or "general") == "general" then
      setActiveTab(f, (MidnightGuideDB and MidnightGuideDB.lastTab) or "all_treasures")
    end
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
