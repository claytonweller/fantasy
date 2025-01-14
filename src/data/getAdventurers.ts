import { IAdventurer, IAdventurerQuest } from "../types/Adventurer";
import { clansById } from "./dummy/clans";
import {  questsByPartyId } from "./dummy/quests";
import { humanReadableAdventurers } from "./humanReadable/adventurers";

export function getAdventurers ():IAdventurer[]{
  const compositeAdventurers = humanReadableAdventurers.map(a =>{
    const clan = a.clanId 
      ? clansById[a.clanId]
      : undefined;
    const quests: IAdventurerQuest[] = a.questParties.map(qp => {
      const {partyId} = qp
      const quest = questsByPartyId[partyId]
      const personalMetrics = qp.metrics.map(m => ({...m, questAdventurerId: 'PLACEHOLDER'}))
      const partyMetrics = quest.parties
        .filter(p => p.id == partyId)
        [0].metrics
        .map(m => ({...m, questPartyId: partyId}))
      return {
        id: 'PLACEHOLDER',
        adventurerId: a.id,
        partyId,
        metrics: {
          personal: personalMetrics,
          party: partyMetrics 
        },
        details: quest
      }
    })
    
    return {
      ...a,
      clan,
      quests
    }
  })
  return compositeAdventurers
}