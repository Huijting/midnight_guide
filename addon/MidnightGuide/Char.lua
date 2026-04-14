-- Per-character progress (manual overrides + optional quest completion from data).
MidnightGuide = MidnightGuide or {}
MidnightGuide.Char = MidnightGuide.Char or {}

--- professionKey (data) -> parent TradeSkillLineID (retail). Unknown keys fall back to "show as active" in UI.
local PROFESSION_KEY_TO_SKILL_LINE = {
  blacksmithing = 164,
  leatherworking = 165,
  alchemy = 171,
  herbalism = 182,
  mining = 186,
  tailoring = 197,
  engineering = 202,
  enchanting = 333,
  skinning = 393,
  jewelcrafting = 755,
  inscription = 773,
  cooking = 185,
  fishing = 356,
}

local function collectPlayerProfessionSkillLineIDs()
  local set = {}
  if not GetProfessions or not GetProfessionInfo then
    return set
  end
  local slots = { GetProfessions() }
  for _, skillIndex in ipairs(slots) do
    if skillIndex then
      local _, _, _, _, _, _, skillLineID = GetProfessionInfo(skillIndex)
      if type(skillLineID) == "number" and skillLineID > 0 then
        set[skillLineID] = true
      end
    end
  end
  return set
end

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

--- True if the character has this profession (primary or secondary slot), for MPT-style green/grey headers.
function MidnightGuide.Char.PlayerHasProfession(professionKey)
  if not professionKey or professionKey == "" then
    return true
  end
  local want = PROFESSION_KEY_TO_SKILL_LINE[professionKey:lower()]
  if not want then
    return true
  end
  return collectPlayerProfessionSkillLineIDs()[want] == true
end
