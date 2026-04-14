-- Per-character progress (manual overrides + optional quest completion from data).
MidnightGuide = MidnightGuide or {}
MidnightGuide.Char = MidnightGuide.Char or {}

function MidnightGuide.Char.Ensure()
  MidnightGuideCharDB = MidnightGuideCharDB or {}
  MidnightGuideCharDB.manualCollected = MidnightGuideCharDB.manualCollected or {}
end

--- True if the item counts as collected (quest flag and/or manual toggle).
function MidnightGuide.Char.IsItemCollected(item)
  MidnightGuide.Char.Ensure()
  if type(item) ~= "table" then
    return false
  end
  local qid = item.questId
  if type(qid) == "number" and qid > 0 and C_QuestLog and C_QuestLog.IsQuestFlaggedCompleted then
    if C_QuestLog.IsQuestFlaggedCompleted(qid) then
      return true
    end
  end
  local id = item.id
  if type(id) == "string" and id ~= "" and MidnightGuideCharDB.manualCollected[id] then
    return true
  end
  return false
end

function MidnightGuide.Char.ToggleCollected(id)
  MidnightGuide.Char.Ensure()
  if type(id) ~= "string" or id == "" then
    return
  end
  if MidnightGuideCharDB.manualCollected[id] then
    MidnightGuideCharDB.manualCollected[id] = nil
  else
    MidnightGuideCharDB.manualCollected[id] = true
  end
end

--- Placeholder until we wire real profession detection (match MPT playerHasProf behaviour).
function MidnightGuide.Char.PlayerHasProfession(professionKey)
  if not professionKey or professionKey == "" then
    return true
  end
  return true
end
