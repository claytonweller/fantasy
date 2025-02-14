
import { IClan } from "../types/Clan";
import { getQuestsByClanId } from "./getQuests";
import { adventurersByClanId } from "./queries/adventurers";
import { clansById } from "./queries/clans";
import { questsByClanId } from "./queries/quests";
import { rawClans } from "./raw/clans";

export function getClans ():IClan[]{
  const compositeClans = rawClans.map(c =>{
    const adventurers = adventurersByClanId[c.id] 
    const quests = getQuestsByClanId(c.id)
    return {
      ...c,
      adventurers,
      quests
    }
  })
  return compositeClans
}