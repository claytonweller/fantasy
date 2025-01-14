import { QuestClaimType } from "../../types/Quest";
import { humanReadableQuests, IHumanReadableQuest } from "../humanReadable/quests";
import { makeByIdQuery } from "./makeByIdQuery";

export const questsById = makeByIdQuery(humanReadableQuests)
export const questsByPartyId = humanReadableQuests.reduce((prev, q)=>{
  const newParties: {[clanId: string]: IHumanReadableQuest} = {}
  q.parties.forEach(p =>{
    newParties[p.id] = q
  })
  return {...prev, ...newParties}
}, {} as {[partyId: string]: IHumanReadableQuest})

export const questsByClanId = humanReadableQuests.reduce((prev, q)=>{
  if(q.claimType !== QuestClaimType.Clan) return prev
  const updated = {...prev}
  q.parties.forEach(p => {
    if(!p.clanId) return
    const existing = updated[p.clanId]
    if(!existing) return updated[p.clanId] = [q]
    updated[p.clanId] = [...updated[p.clanId], q]
  })

  return updated
}, {} as {[clanId: string]: IHumanReadableQuest[]})

