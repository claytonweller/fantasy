import { EntityTypes } from "types/Research";
import { IRoster, IRosterPick, RosterPickTypes } from "../types/Roster";
import { IVillager } from "../types/Villager";
import { getAdventurerById } from "./getAdventurers";
import { getClanById } from "./getClans";
import { questsByAdventurerId, questsByClanId } from "./queries/quests";
import { researchByTag } from "./queries/research";
import { IRawRosterPick, rawVillagers } from "./raw/villagers";

export function getVillagers ():IVillager[]{
  const compositeVillagers:IVillager[] = rawVillagers.map(v =>{
    const research = researchByTag[EntityTypes.Villager][v.id] || []

    const rosters:IRoster[] = v.rosters.map(r =>{
      const rosterPicks:IRosterPick[] = r.picks.map(p =>{
        const pick = determinePick(p)
        const pickQuests = findQuests(pick)

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
      research,
      rosters
    }
  })
  return compositeVillagers
}


function determinePick (rosterPick: IRawRosterPick){
  const {pickType, pickId} = rosterPick
  if(pickType === RosterPickTypes.Clan) return {clan: getClanById(pickId)}
  return {adventurer: getAdventurerById(pickId)}
}

function findQuests(pick: IRosterPick['pick']){
  if(pick.clan){
    return questsByClanId[pick.clan.id]
  }
  if(pick.adventurer){
    return questsByAdventurerId[pick.adventurer.id]
  }
  return []
}