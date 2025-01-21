import { IDbClan } from "../types/Clan";
import { IRoster, IRosterPick, RosterPickTypes } from "../types/Roster";
import { IVillager } from "../types/Villager";
import { adventurersById } from "./queries/adventurers";
import { clansById } from "./queries/clans";
import { questsByAdventurerId, questsByClanId } from "./queries/quests";
import { IRawAdventurer } from "./raw/adventurers";
import { IRawRosterPick, rawVillagers } from "./raw/villagers";

export function getVillagers ():IVillager[]{
  const compositeVillagers:IVillager[] = rawVillagers.map(v =>{
    const rosters:IRoster[] = v.rosters.map(r =>{
      const rosterPicks:IRosterPick[] = r.picks.map(p =>{
        const pick = determinePick(p)
        const pickQuests = findQuests(pick, p.pickType)

        return {
          ...p,
          id: 'Placeholder',
          rosterId: 'Placeholder',
          pick,
          pickQuests,

        }
      })

      return {
        ...r,
        rosterPicks,
        id: 'Placeholder',
        villagerId: v.id
      }
    })

    return {
      ...v,
      rosters
    }
  })
  return compositeVillagers
}


function determinePick (rosterPick: IRawRosterPick){
  const {pickType, pickId} = rosterPick
  if(pickType === RosterPickTypes.Clan) return clansById[pickId]
  return adventurersById[pickId]
}

function findQuests(pick: IRawAdventurer | IDbClan, pickType: RosterPickTypes){
  if(pickType === RosterPickTypes.Clan){
    return questsByClanId[pick.id]
  }
  if(pickType === RosterPickTypes.Adventurer){
    return questsByAdventurerId[pick.id]
  }
  return []
}