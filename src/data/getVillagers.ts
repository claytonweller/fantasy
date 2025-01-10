import { IVillager } from "../types/Villager";
import { adventurerQuestsByAdventurerId } from "./dummy/adventurerQuest";
import { adventurersById } from "./dummy/adventurers";
import { questsById } from "./dummy/quests";
import { rostersByVillagerId, rostersPicksByRosterId } from "./dummy/rosters";
import { dummyVillagers } from "./dummy/villagers";

export function getVillagers ():IVillager[]{
  const compositeVillagers = dummyVillagers.map(v =>{
    const rawRosters = rostersByVillagerId[v.id]
    const rosters = rawRosters.map(r =>{
      const rawRosterPicks = rostersPicksByRosterId[r.id]
      const rosterPicks = rawRosterPicks.map(rp =>{
        const aQuests = adventurerQuestsByAdventurerId[rp.pickId]
        const pickQuests = aQuests.map(aq => questsById[aq.questId])
        const pick = adventurersById[rp.pickId]
        return {
          ...rp,
          pickQuests,
          pick,
        }
      })
      return {
        ...r,
        rosterPicks
      }
    })
    return {
      ...v,
      rosters,
    }
  })
  return compositeVillagers
}

