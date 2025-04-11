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
        // notes: string,
        // endWeek: number,
        clanId: 'c6',
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
      {
        id: 'p1-q1-2',
        startWeek: 1,
        status: QuestStatus.Claimed,
        // notes: string,
        // endWeek: number,
        clanId: 'c1',
        metrics:[
          
        ]
      },
      {
        id: 'p2-q1-2',
        startWeek: 1,
        status: QuestStatus.Claimed,
        // notes: string,
        // endWeek: number,
        clanId: 'c1',
        metrics:[
          
        ]
      }
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
      {
        id: 'p1-q1-3',
        startWeek: 1,
        status: QuestStatus.Claimed,
        // notes: string,
        // endWeek: number,
        metrics:[
          
        ]
      },
      {
        id: 'p2-q1-3',
        startWeek: 1,
        status: QuestStatus.Claimed,
        // notes: string,
        // endWeek: number,
        metrics:[
          
        ]
      }
    ]
  },
  {
    id: 'q1-4.1',
    name:'Southern Merchant Caravan Escorts',
    reward: 50,
    postedWeek: 1,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Guard,
    questRank: Ranks.C,
    postedBy: 'Trade Guild',
    description: `With the Festival coming up in a couple of weeks we capable parties to guard the wagons as they come in. Southern Caravan from the Port city of Serpentina.`,
    // Composite
    parties:[
      {
        id: 'p1-q1-4',
        startWeek: 1,
        status: QuestStatus.Claimed,
        clanId: 'c1',
        // endWeek: number,
        metrics:[
          
        ]
      },
    ]
  },
  {
    id: 'q1-4.2',
    name:'Eastern Merchant Caravan Escorts',
    reward: 150,
    postedWeek: 1,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Guard,
    questRank: Ranks.C,
    postedBy: 'Trade Guild',
    description: `With the Festival coming up in a couple of weeks we capable parties to guard the wagons as they come in. Eastern Caravan: From the capitol.`,
    // Composite
    parties:[
      {
        id: 'p2-q1-4',
        startWeek: 1,
        status: QuestStatus.Claimed,
        clanId: 'c9',
        notes: "Eastern Caravan: From the capitol.",
        // endWeek: number,
        metrics:[
          
        ]
      },
    ]
  },
  {
    id: 'q1-4.3',
    name:'Western Merchant Caravan Escorts',
    reward: 100,
    postedWeek: 1,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Guard,
    questRank: Ranks.C,
    postedBy: 'Trade Guild',
    description: `With the Festival coming up in a couple of weeks we capable parties to guard the wagons as they come in. Eastern Caravan: Western Caravan: From the mountains.`,
    // Composite
    parties:[
      {
        id: 'p3-q1-4',
        startWeek: 1,
        clanId: 'c5',
        status: QuestStatus.Claimed,
        // endWeek: number,
        metrics:[
          
        ]
      },
    ]
  },
  {
    id: 'q1-5',
    name:'Herb Gathering',
    reward: 50,
    postedWeek: 1,
    claimType: QuestClaimType.Individual,
    questType: QuestTypes.Fetch,
    questRank: Ranks.D,
    postedBy: 'Church of the Holy Mother',
    description: `We're running low on medical herbs. reward depends upon the quality of the herbs obtained.`,
    // Composite
    parties:[
      {
        id: 'p1-q1-5',
        startWeek: 1,
        status: QuestStatus.Claimed,
        // endWeek: number,
        metrics:[
          
        ]
      },
      {
        id: 'p2-q1-5',
        startWeek: 1,
        status: QuestStatus.Claimed,
        // endWeek: number,
        metrics:[
          
        ]
      },
    ]
  },
  {
    id: 'q1-6',
    name:'Spice Quest',
    reward: 0,
    postedWeek: 1,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Fetch,
    questRank: Ranks.C,
    postedBy: 'The Chairman',
    description: `To make the ultimate dish.: you need the ultimate spices!`,
    // Composite
    parties:[
      {
        id: 'p1-q1-6',
        startWeek: 1,
        status: QuestStatus.Claimed,
        clanId: 'c7',
        notes: "Southern Caravan: from the port/ocean.",
        // endWeek: number,
        metrics:[
          
        ]
      },
    ]
  },
]

export interface IRawQuest extends IDbQuest{
  parties: IRawQuestParty[]
}

export interface IRawQuestParty extends Omit<IDbQuestParty, "questId"> {
  metrics: IDbMetric[]
}