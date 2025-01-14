import { IDbAdventurer } from "../../types/Adventurer";
import { humanReadableAdventurers } from "../humanReadable/adventurers";
import { makeByIdQuery } from "./makeByIdQuery";

export const adventurersById = makeByIdQuery(humanReadableAdventurers)

export const adventurersByClanId = humanReadableAdventurers.reduce((prev, a)=>{
  if(!a.clanId) return prev
  const existing = prev[a.clanId]
  if(!existing) return {...prev, [a.clanId]: [a]}
  return {...prev, [a.clanId]:[...existing, a]}
}, {} as {[clanId: string]:IDbAdventurer[]} )

export const adventurersByPartyId = humanReadableAdventurers.reduce((prev, a)=>{
  let updated = {...prev}
  a.questParties.forEach(qp =>{
    const existing = prev[qp.partyId]
    if(!existing) return updated = {...prev, [qp.partyId]: [a]}
    return updated = {...prev, [qp.partyId]: [...existing, a]}
  })

  return updated

}, {} as {[clanId: string]:IDbAdventurer[]} )