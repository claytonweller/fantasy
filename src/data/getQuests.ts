import { IDbQuest, IQuest, QuestClaimType } from "../types/Quest";
import { adventurersById } from "./dummy/adventurers";
import { clansById } from "./dummy/clans";
import { dummyQuests } from "./dummy/quests";

export function getQuests ():IQuest[]{
  const compositeQuests = dummyQuests.map(q =>{
    const claimedByName = determineClaimedByName(q)
    return {
      ...q,
      claimedByName
    }
      
  
  })
  return compositeQuests
}

function determineClaimedByName (quest: IDbQuest){
  const defaultName = 'Nobody'
  if(!quest.claimedById) return defaultName
  if(quest.claimType === QuestClaimType.Clan){
    return clansById[quest.claimedById].name || defaultName
  }
  return adventurersById[quest.claimedById].name || defaultName
}