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

--- Set waypoint: TomTom if present, else Blizzard map pin. Returns true on success.
function MidnightGuide.Nav.SetWaypoint(way)
  if not way or not way.mapId or not way.x or not way.y then
    printMsg(false, nil, "No coordinates on this line.")
    return false
  end
  local title = way.title or "Midnight Guide"

  if TomTom and TomTom.AddMFWaypoint then
    local okTom = pcall(function()
      TomTom:AddMFWaypoint(way.mapId, 0, way.x, way.y, { title = title })
    end)
    if okTom then
      printMsg(true, "Waypoint set in TomTom: " .. title, nil)
      return true
    end
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
      printMsg(true, "Map waypoint set: " .. title, nil)
      return true
    end
  end

  printMsg(
    false,
    nil,
    "Install TomTom or use a client that supports map waypoints (C_Map.SetUserWaypoint)."
  )
  return false
end
