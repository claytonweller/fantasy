import { IDbQuest, QuestClaimType, QuestTypes } from "../../types/Quest";
import { Ranks } from "../../types/Ranks";
import { loremParagraph } from "./loremParagraph";
import { makeByIdQuery } from "./makeByIdQuery";

export const dummyQuests = [
  {
    id: '1',
    title:'Test Quest',
    reward: 123453,
    claimType: QuestClaimType.Clan,
    claimedById: '1',
    questType: QuestTypes.Fetch,
    questRank: Ranks.C,
    postedBy: 'Gerb McDerb',
    description:`Description hast a bit of test. ${loremParagraph}`
  },
  {
    id: '2',
    title:'Other',
    reward: 222,
    claimType: QuestClaimType.Individual,
    claimedById: '1',
    questType: QuestTypes.Fetch,
    questRank: Ranks.E,
    postedBy: 'Mort Gort',
    description:`Here's one with a short description. `
  },
  {
    id: '3',
    title:'Clan Quest',
    reward: 123453,
    claimType: QuestClaimType.Clan,
    claimedById: '1',
    questType: QuestTypes.Kill,
    questRank: Ranks.A,
    postedBy: 'Fire Man',
    description:`Description hast a bit of test.`
  }
]

export const questsById = makeByIdQuery(dummyQuests)
export const questsByClanId = dummyQuests.reduce((prev, q)=>{
  if(q.claimType !== QuestClaimType.Clan) return prev
  if(!q.claimedById) return prev
  const exists = prev[q.claimedById]
  if(!exists) return {...prev, [q.claimedById]: [q]}
  return {...prev, [q.claimedById]: [...exists, q]}
}, {} as {[clanId: string]: IDbQuest[]})
