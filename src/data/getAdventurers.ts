import { IAdventurer } from "../types/Adventurer";
import { adventurerQuestsByAdventurerId } from "./dummy/adventurerQuest";
import { dummyAdventurers } from "./dummy/adventurers";
import { clansById } from "./dummy/clans";
import { questsById } from "./dummy/quests";

export function getAdventurers ():IAdventurer[]{
  const compositeAdventurers = dummyAdventurers.map(a =>{
    const clan = a.clanId 
      ? clansById[a.clanId]
      : undefined;
    const adventurerQuests = adventurerQuestsByAdventurerId[a.id]
    const quests = adventurerQuests?.map(aq => {
      return questsById[aq.questId]
    })
    return {
      ...a,
      clan,
      quests
    }
  })
  return compositeAdventurers
}