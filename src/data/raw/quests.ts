import { IDbMetric, IDbQuest, IDbQuestParty, QuestClaimType, QuestStatus, QuestTypes } from "types/Quest";
import { Ranks } from "types/Ranks";

export const rawQuests: IRawQuest[] = [
  // Week 1
  {
    id: 'q1-1',
    name:'A Noble Escort',
    reward: 500,
    postedWeek: 1,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Guard,
    questRank: Ranks.B,
    postedBy: 'Cliff Vanderbliff',
    description:`A group of nobles lead Count Clifford Vanderbliff and their retinue will be from the capitol to Morton to attend the annual festival. They require, "A competent local guard detail. Must be an established party, in good reputation, with knowledge of regional dangers."`,
    // Composite
    parties:[
      {
        id: 'p1-q1-1',
        startWeek: 1,
        status: QuestStatus.Claimed,
        // notes?: string,
        // endWeek?: number,
        // clanId?: 'string'
        metrics:[

        ]
      }
    ]
  },
  {
    id: 'q1-2',
    name:'Too Many Rats',
    reward: 100,
    postedWeek: 1,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Kill,
    questRank: Ranks.D,
    postedBy: 'Mayor Corque',
    description: `"I hear you. We can't keep ignoring the sewer problem. The rats keep multiplying and getting bigger. They're attacking people in the street. Focus groups tell us this is not a great look for our town. We have to fix this before the Bounty Festival. What will people think if we have dog sized rats? One gold for every dead rat brought back this week."`,
    // Composite
    parties:[
    ]
  },
  {
    id: 'q1-3',
    name:'Forest Shrine Maintenance',
    reward: 1,
    postedWeek: 1,
    claimType: QuestClaimType.Individual,
    questType: QuestTypes.Other,
    questRank: Ranks.E,
    postedBy: 'Elder K\'Tar',
    description: `"The Shrine to Mamut is falling apart. I am old. I need help repairing it."`,
    // Composite
    parties:[
    ]
  },
]

export interface IRawQuest extends IDbQuest{
  parties: IRawQuestParty[]
}

export interface IRawQuestParty extends Omit<IDbQuestParty, "questId"> {
  metrics: IDbMetric[]
}