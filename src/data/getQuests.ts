import { IQuest, QuestClaimType, QuestStatus } from "../types/Quest";
import { sortByRank } from "../utils/sortByRank";
import { adventurersByPartyId } from "./queries/adventurers";
import { clansById } from "./queries/clans";
import { rawQuests, IRawQuest, IRawQuestParty } from "./raw/quests";

export function getQuests ():IQuest[]{
  const compositeQuests:IQuest[] = rawQuests.map(q =>{
    const activeParty = q.parties
      .filter(p => p.status !== QuestStatus.Failed )
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

function determineClaimedByName (quest: IRawQuest, party?: IRawQuestParty){
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

function determineStatus(party?: IRawQuestParty){
  if(!party) return QuestStatus.Unclaimed
  return party.status
}