import { IDbMetric, IDbQuest, IDbQuestParty, QuestClaimType, QuestTypes } from "types/Quest";
import { Ranks } from "types/Ranks";

export const rawQuests: IRawQuest[] = [
  {
    id: 'q1-1',
    name:'A Nobel Escort',
    reward: 500,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Guard,
    questRank: Ranks.B,
    postedBy: 'Cliff Vanderbliff',
    description:`A group of nobles lead Count Clifford Vanderbliff and their retinue will be from the capitol to Morton to attend the annual festival. They require, "A competent local guard detail. Must be an established party, in good reputation, with knowledge of regional dangers."`,
    // Composite
    parties:[
    ]
  },
  {
    id: 'q1-2',
    name:'Too Many Rats',
    reward: 100,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Kill,
    questRank: Ranks.D,
    postedBy: 'Mayor Corque',
    description: `We can't keep ignoring the sewer problem. The rats keep multiplying and getting bigger. They're attacking people in the street. We have to fix this before the Bounty Festival. What will people think if we have dog sized rats? One Gold for ever rat brought back this week.`,
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