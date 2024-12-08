import { IAdventurer } from "../types/Adventurer";
import { dummyAdventurers } from "./dummy/adventurers";
import { clansById } from "./dummy/clans";

export function getAdventurers ():IAdventurer[]{
  const compositeAdventurers = dummyAdventurers.map(a =>{
    const clanName = a.clanId 
      ? clansById[a.clanId].name
      : 'none'
    return {
      ...a,
      clanName
    }
  })
  return compositeAdventurers
}