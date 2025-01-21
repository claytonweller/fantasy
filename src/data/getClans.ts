
import { IClan } from "../types/Clan";
import { adventurersByClanId } from "./queries/adventurers";
import { questsByClanId } from "./queries/quests";
import { rawClans } from "./raw/clans";

export function getClans ():IClan[]{
  const compositeClans = rawClans.map(c =>{
    const adventurers = adventurersByClanId[c.id] 
    const quests = questsByClanId[c.id]
    return {
      ...c,
      adventurers,
      quests
    }
  })
  return compositeClans
}