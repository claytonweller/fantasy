import { IDbMetric, IDbQuest, IDbQuestParty, MetricRuleId, QuestClaimType, QuestStatus, QuestTypes } from "../../types/Quest";
import { Ranks } from "../../types/Ranks";
import { loremParagraph } from "../queries/loremParagraph";

export const rawQuests: IRawQuest[] = [
  {
    id: 'quest1',
    name:'Test Quest',
    reward: 123453,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Fetch,
    questRank: Ranks.C,
    postedBy: 'Gerb McDerb',
    description:`Description has a bit of text. ${loremParagraph}`,
    // Composite
    parties:[
      {
        id: 'party1',
        startWeek: 1,
        clanId: 'clan1',
        status: QuestStatus.Failed,
        notes: 'Party Notes',
        metrics:[
          {
            metricRuleId: MetricRuleId.CivilianSaved,
            value: 4,
            week: 1,
          }
        ]
      },
      {
        id: 'party3',
        startWeek: 2,
        clanId: 'clan1',
        status: QuestStatus.InProgress,
        metrics:[
          {
            metricRuleId: MetricRuleId.CivilianSaved,
            value: 2,
            week: 2,
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
            metricRuleId: MetricRuleId.CiviliansDead,
            value: 1,
            week: 1,
          },
          {
            metricRuleId: MetricRuleId.PropertyDamaged,
            value: 4000,
            week: 1,
          }
        ]
      }
    ]
  },
  {
    id: 'quest3',
    name:'Clan Quest',
    reward: 12345,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Kill,
    questRank: Ranks.A,
    postedBy: 'Fire Man',
    description:`I need more fire please.`,
    parties:[
      {
        id: 'party4',
        startWeek: 1,
        clanId: 'clan1',
        status: QuestStatus.Success,
        metrics:[
          {
            metricRuleId: MetricRuleId.CiviliansDead,
            value: 1,
            week: 1,
          },
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 12345,
            week: 1
          }
        ]
      }
    ]
  },
  {
    id: 'quest4',
    name:'Gad\'s quest',
    reward: 3,
    claimType: QuestClaimType.Individual,
    questType: QuestTypes.Fetch,
    questRank: Ranks.E,
    postedBy: 'Fire Man',
    description:`I need more fire please.`,
    parties:[
      {
        id: 'party5',
        startWeek: 1,
        status: QuestStatus.Success,
        metrics:[
          {
            metricRuleId: MetricRuleId.CiviliansDead,
            value: 1,
            week: 1,
          },
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 3,
            week: 1
          }
        ]
      }
    ]
  }
]

export interface IRawQuest extends IDbQuest{
  parties: IRawQuestParty[]
}

export interface IRawQuestParty extends Omit<IDbQuestParty, "questId"> {
  metrics: IDbMetric[]
}