import { IQuest, IQuestParty, QuestClaimType, QuestStatus } from "../types/Quest";
import { sortByRank } from "../utils/sortByRank";
import { adventurersByPartyId } from "./dummy/adventurers";
import { clansById } from "./dummy/clans";
import { humanReadableQuests, IHumanReadableQuest, IHumanReadableQuestParty } from "./humanReadable/quests";

export function getQuests ():IQuest[]{
  const compositeQuests:IQuest[] = humanReadableQuests.map(q =>{
    const activeParty = q.parties
      .filter(p => typeof p.endWeek !== 'number' )
      [0]
    const claimedByName = determineClaimedByName(q, activeParty)
    const questStatus = determineStatus(activeParty)
    const compositeParties = q.parties.map(p =>{
      return {
        ...p,
        questId: q.id,
        adventurers: adventurersByPartyId[p.id],
        metrics: p.metrics.map(m => ({...m, questPartyId: 'PLACEHOLDER'}))
      }
    })
    
    return {
      ...q,
      claimedByName,
      status: questStatus,
      parties: compositeParties
    }
      
  
  })
  return compositeQuests
}

function determineClaimedByName (quest: IHumanReadableQuest, party?: IHumanReadableQuestParty){
  const defaultName = 'Nobody'
  if(!party) return defaultName
  if(quest.claimType === QuestClaimType.Clan){
    if(!party.clanId) return defaultName
    return clansById[party.clanId].name || defaultName
  }
  const adventurers = adventurersByPartyId[party.id]
  if(!adventurers) return defaultName
  const highestRankedAdventurer = sortByRank(adventurers)[0]
  return highestRankedAdventurer.name
}

function determineStatus(party?: IHumanReadableQuestParty){
  if(!party) return QuestStatus.Unclaimed
  return party.status
}