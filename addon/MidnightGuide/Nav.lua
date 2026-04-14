-- TomTom + Blizzard user waypoint from /way strings in generated content (MPT-style).
MidnightGuide = MidnightGuide or {}
MidnightGuide.Nav = MidnightGuide.Nav or {}

--- Parse "/way #uiMapId x, y Title" or "/way #id x y Title" (comma or space between coords).
function MidnightGuide.Nav.ParseSlashWay(wayStr)
  if type(wayStr) ~= "string" or wayStr == "" then
    return nil
  end
  local mapIdStr, xStr, yStr, tail = wayStr:match("/way%s+#(%d+)%s+([%d%.]+)[%s,]+([%d%.]+)%s*(.*)")
  local mapId = tonumber(mapIdStr)
  local xPct = tonumber(xStr)
  local yPct = tonumber(yStr)
  if not mapId or not xPct or not yPct then
    return nil
  end
  local title = (tail or ""):gsub("^%s+", ""):gsub("%s+$", "")
  title = title:gsub("|r%s*$", ""):gsub("|c%x%x%x%x%x%x%x%x", ""):gsub("|r", "")
  title = title:gsub("^%s+", ""):gsub("%s+$", "")
  if title == "" then
    title = "Midnight Guide"
  end
  return {
    mapId = mapId,
    x = xPct / 100,
    y = yPct / 100,
    title = title:sub(1, 100)
  }
end

function MidnightGuide.Nav.WayFromItem(item)
  if type(item) ~= "table" then
    return nil
  end
  local w = item.waypoint and item.waypoint.way
  return MidnightGuide.Nav.ParseSlashWay(w)
end

local function printMsg(ok, okText, failText)
  local prefix = "|cffc8a84bMidnight Guide:|r "
  if ok then
    print(prefix .. (okText or ""))
  else
    print(prefix .. (failText or ""))
  end
end

--- TomTom is often AceAddon-3.0 "TomTom", not always _G.TomTom.
local function getTomTom()
  local t = _G.TomTom
  if type(t) == "table" and type(t.AddMFWaypoint) == "function" then
    return t
  end
  local ok, AceAddon = pcall(function()
    return LibStub and LibStub("AceAddon-3.0", true)
  end)
  if ok and AceAddon and AceAddon.GetAddon then
    local ac = AceAddon:GetAddon("TomTom", true)
    if type(ac) == "table" and type(ac.AddMFWaypoint) == "function" then
      return ac
    end
  end
  return nil
end

local function isTomTomAddOnLoaded()
  if C_AddOns and C_AddOns.IsAddOnLoaded then
    local a, b = C_AddOns.IsAddOnLoaded("TomTom")
    -- Retail: second value is fully loaded; first may be "loading" state in some builds.
    if b ~= nil then
      return b == true
    end
    return a == true
  end
  if _G.IsAddOnLoaded then
    return IsAddOnLoaded("TomTom") == true
  end
  return false
end

local function localeNl()
  return MidnightGuideDB and MidnightGuideDB.lang == "nl"
end

--- Hint when waypoint map ≠ player map (delve/instance/city layer); arrow often only makes sense on target map.
local function printWaypointMapTipIfNeeded(way)
  if not way or not way.mapId or not C_Map or not C_Map.GetBestMapForUnit then
    return
  end
  local here = C_Map.GetBestMapForUnit("player")
  if not here or here == way.mapId then
    return
  end
  local text = localeNl()
    and "Let op: je staat op een andere kaart dan dit waypoint (bijv. delve of instance). De pijl is meestal duidelijk zodra je op de open-wereldkaart van dat punt bent."
    or "Note: you're on a different map than this waypoint (e.g. delve or instance). The arrow is usually clearest once you're in the open-world area for that point."
  print("|cffc8a84bMidnight Guide:|r |cffffcc00" .. text .. "|r")
end

local function sanitizeWaypointTitle(title)
  local safeTitle = (title or ""):gsub("[;%%\n\r]", " "):gsub('"', "'"):gsub("^%s+", ""):gsub("%s+$", "")
  if safeTitle == "" then
    safeTitle = "Midnight Guide"
  end
  return safeTitle:sub(1, 80)
end

--- Call TomTom's /way handler directly (same as chat); no RunMacroText return value to rely on.
local function tryTomTomSlashCmdList(way, title)
  if not isTomTomAddOnLoaded() or type(SlashCmdList) ~= "table" then
    return false
  end
  local fn = SlashCmdList["TOMTOM_WAY"]
  if type(fn) ~= "function" then
    return false
  end
  local safeTitle = sanitizeWaypointTitle(title)
  local msg = string.format("#%d %.2f %.2f %s", way.mapId, way.x * 100, way.y * 100, safeTitle)
  local ok = pcall(fn, msg)
  if ok then
    printMsg(
      true,
      localeNl() and ("TomTom (way): " .. safeTitle) or ("TomTom (way): " .. safeTitle),
      nil
    )
    return true
  end
  return false
end

--- Fallback: RunMacroText does not return a truthy success flag on Retail — only trust pcall().
local function tryTomTomRunMacroSlash(way, title)
  if not RunMacroText or not isTomTomAddOnLoaded() then
    return false
  end
  local safeTitle = sanitizeWaypointTitle(title)
  local body = string.format("#%d %.2f %.2f %s", way.mapId, way.x * 100, way.y * 100, safeTitle)
  -- /way first: matches hand-pasted Wowhead lines; /tway is TomTom's alternate alias when registered.
  for _, prefix in ipairs({ "/way ", "/tway " }) do
    local macro = (prefix .. body):sub(1, 255)
    local ok = pcall(RunMacroText, macro, false)
    if ok then
      printMsg(
        true,
        localeNl() and ("TomTom (" .. prefix:gsub("%s+", "") .. "): " .. safeTitle)
          or ("TomTom (" .. prefix:gsub("%s+", "") .. "): " .. safeTitle),
        nil
      )
      return true
    end
  end
  return false
end

--- Set waypoint: TomTom API, then TomTom chat slash (RunMacroText), else Blizzard map pin.
function MidnightGuide.Nav.SetWaypoint(way)
  if not way or not way.mapId or not way.x or not way.y then
    printMsg(false, nil, "No coordinates on this line.")
    return false
  end
  local title = way.title or "Midnight Guide"

  -- crazy=true asks TomTom for the arrow (otherwise profile "autoqueue" may skip it).
  local tt = getTomTom()
  if tt then
    local okTom = pcall(function()
      tt:AddMFWaypoint(way.mapId, nil, way.x, way.y, {
        title = title,
        crazy = true,
        minimap = true,
        world = true
      })
    end)
    if okTom then
      printMsg(
        true,
        localeNl() and ("TomTom: waypoint + pijl: " .. title) or ("TomTom: waypoint + arrow: " .. title),
        nil
      )
      printWaypointMapTipIfNeeded(way)
      return true
    end
  end

  if tryTomTomSlashCmdList(way, title) then
    printWaypointMapTipIfNeeded(way)
    return true
  end

  if tryTomTomRunMacroSlash(way, title) then
    printWaypointMapTipIfNeeded(way)
    return true
  end

  if C_Map and C_Map.SetUserWaypoint and UiMapPoint and UiMapPoint.CreateFromCoordinates then
    local ok, point = pcall(function()
      return UiMapPoint.CreateFromCoordinates(way.mapId, way.x, way.y)
    end)
    if ok and point then
      C_Map.SetUserWaypoint(point)
      if C_SuperTrack and C_SuperTrack.SetSuperTrackedUserWaypoint then
        C_SuperTrack.SetSuperTrackedUserWaypoint(true)
      end
      if C_Map.OpenWorldMap then
        pcall(C_Map.OpenWorldMap, way.mapId)
      end
      printMsg(
        true,
        localeNl()
          and (
            "Kaart-pin gezet (geen TomTom-pijl). Wereldkaart geopend — kijk voor het waypoint-icoon; "
              .. "voor een pijl: TomTom aan + rechtsklik opnieuw."
          )
          or (
            "Map pin set (no TomTom-style arrow). World map opened — look for the waypoint icon; "
              .. "for an arrow: enable TomTom and right-click again."
          ),
        nil
      )
      printWaypointMapTipIfNeeded(way)
      return true
    end
  end

  printMsg(
    false,
    nil,
    localeNl()
      and "Geen waypoint: TomTom of kaart-API niet beschikbaar."
      or "No waypoint: TomTom or map API not available."
  )
  return false
end
