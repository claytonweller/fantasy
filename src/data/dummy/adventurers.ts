import { AdventurerClasses, AdventurerRaces, AdventurerStatuses, IAdventurer, IDbAdventurer } from "../../types/Adventurer";
import { Ranks } from "../../types/Ranks";
import { makeByIdQuery } from "./makeByIdQuery";

export const dummyAdventurers:IDbAdventurer[] = [
  {
    id: '1',
    name: 'Gad',
    races: [AdventurerRaces.Human],
    nicknames: ['Sprite'],
    rank: Ranks.D,
    class: AdventurerClasses.Attacker,
    className: 'Assasin',
    bio: 'Kind of a prick',
    status: [AdventurerStatuses.Injured],
    traits: ['Gambler']
  },
  {
    id: '2',
    name: 'Elwin',
    races: [AdventurerRaces.Elf],
    nicknames: [],
    rank: Ranks.A,
    class: AdventurerClasses.Support,
    className: 'Forest Nymph',
    clanId: '1',
    bio: 'Fantastic healer and magic user',
    status: [],
    traits: ['Snobby', 'Determined']
  }
]

export const adventurersById = makeByIdQuery(dummyAdventurers)
export const adventurersByClanId =  dummyAdventurers.reduce((prev, a)=>{
  if(!a.clanId) return prev
  const existing = prev[a.clanId]
  if(!existing) return {...prev, [a.clanId]: [a]}
  return {...prev, [a.clanId]:[...existing, a]}

}, {} as {[clanId: string]:IDbAdventurer[]} )