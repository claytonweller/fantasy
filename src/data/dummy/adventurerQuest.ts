export const dummyAdventurerQuests: IDbAdventurerQuest[] = [
  {
    questId: '2',
    adventurerId: '1'
  },
  {
    questId: '1',
    adventurerId: '2'
  }
]

export const adventurerQuestsByAdventurerId = dummyAdventurerQuests.reduce((prev, aq) =>{
  const exists = prev[aq.adventurerId]
  if(!exists) return {...prev, [aq.adventurerId]: [aq]}
  return {...prev, [aq.adventurerId]: [...exists, aq]}
}, {} as {[adventurerId: string]: IDbAdventurerQuest[]})

export const adventurerQuestsByQuestId = dummyAdventurerQuests.reduce((prev, aq) =>{
  const exists = prev[aq.questId]
  if(!exists) return {...prev, [aq.questId]: [aq]}
  return {...prev, [aq.questId]: [...exists, aq]}
}, {} as {[questsById: string]: IDbAdventurerQuest[]})

interface IDbAdventurerQuest {
  questId: string,
  adventurerId: string
}