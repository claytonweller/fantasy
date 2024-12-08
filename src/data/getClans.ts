
import { IClan } from "../types/Clan";
import { adventurersByClanId } from "./dummy/adventurers";
import { dummyClans } from "./dummy/clans";
import { questsByClanId } from "./dummy/quests";

export function getClans ():IClan[]{
  const compositeClans = dummyClans.map(c =>{
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