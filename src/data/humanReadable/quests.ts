import { IDbMetric, IDbQuest, IDbQuestParty, MetricRuleId, QuestClaimType, QuestStatus, QuestTypes } from "../../types/Quest";
import { Ranks } from "../../types/Ranks";
import { loremParagraph } from "../dummy/loremParagraph";

export const humanReadableQuests: IHumanReadableQuest[] = [
  {
    id: 'quest1',
    name:'Test Quest',
    reward: 123453,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Fetch,
    questRank: Ranks.C,
    postedBy: 'Gerb McDerb',
    description:`Description hast a bit of test. ${loremParagraph}`,
    // Composite
    parties:[
      {
        id: 'party1',
        startWeek: 1,
        clanId: 'clan1',
        status: QuestStatus.InProgress,
        metrics:[
          {
            metricRuleId: MetricRuleId.CivilianSaved,
            value: 4,
          }
        ]
      }
    ]

  },
  {
    id: 'quest2',
    name:'Other',
    reward: 222,
    claimType: QuestClaimType.Individual,
    questType: QuestTypes.Fetch,
    questRank: Ranks.E,
    postedBy: 'Mort Gort',
    description:`Here's one with a short description.`,
    parties:[
      {
        id: 'party2',
        startWeek: 1,
        status: QuestStatus.Failed,
        metrics:[
          {
            metricRuleId: MetricRuleId.PropertyDamaged,
            value: 4000,
          }
        ]
      }
    ]
  },
  {
    id: 'quest3',
    name:'Clan Quest',
    reward: 123453,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Kill,
    questRank: Ranks.A,
    postedBy: 'Fire Man',
    description:`I need more fire please.`,
    parties:[
      {
        id: 'party3',
        startWeek: 1,
        endWeek: 1,
        clanId: 'clan1',
        status: QuestStatus.Success,
        metrics:[
          {
            metricRuleId: MetricRuleId.CiviliansDead,
            value: 1,
          }
        ]
      }
    ]
  }
]

export interface IHumanReadableQuest extends IDbQuest{
  parties: IHumanReadableQuestParty[]
}

export interface IHumanReadableQuestParty extends Omit<IDbQuestParty, "questId"> {
  metrics: IDbMetric[]
}