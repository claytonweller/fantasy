// // import { IDbAdventurerQuest } from "../../types/Quest"

// export const dummyAdventurerQuests: IDbAdventurerQuest[] = [
//   {
//     id: '1',
//     questId: '2',
//     adventurerId: '1'
//   },
//   {
//     id: '2',
//     questId: '1',
//     adventurerId: '2'
//   }
// ]

// export const adventurerQuestsByAdventurerId = dummyAdventurerQuests.reduce((prev, aq) =>{
//   const exists = prev[aq.adventurerId]
//   if(!exists) return {...prev, [aq.adventurerId]: [aq]}
//   return {...prev, [aq.adventurerId]: [...exists, aq]}
// }, {} as {[adventurerId: string]: IDbAdventurerQuest[]})

// export const adventurerQuestsByQuestId = dummyAdventurerQuests.reduce((prev, aq) =>{
//   const exists = prev[aq.questId]
//   if(!exists) return {...prev, [aq.questId]: [aq]}
//   return {...prev, [aq.questId]: [...exists, aq]}
// }, {} as {[questsById: string]: IDbAdventurerQuest[]})

export const nothingMuch = []