import { AdventurerClasses, AdventurerRaces, AdventurerStatuses, IDbAdventurer } from "types/Adventurer";
import { IDbMetric, IDbQuestPartyAdventurer, MetricRuleId } from "types/Quest";
import { Ranks } from "types/Ranks";

export const rawAdventurers:IRawAdventurer[] = [
  // {
  //   // DB - Adventurer
  //   id: 'adv1',
  //   name: 'Gad',
  //   races: [AdventurerRaces.Human],
  //   nicknames: ['Sprite'],
  //   rank: Ranks.D,
  //   class: AdventurerClasses.Attacker,
  //   className: 'Assassin',
  //   bio: 'Kind of a prick',
  //   status: [AdventurerStatuses.Injured, AdventurerStatuses.Criminal],
  //   traits: ['Gambler'],
  //   questParties: [
  //     {
  //       partyId: 'party2',
  //       metrics:[
  //         {
  //           metricRuleId: MetricRuleId.MonsterKill, 
  //           value: 3,
  //           rank: Ranks.D,
  //           week: 1
  //         }
  //       ]
  //     },
  //     {
  //       partyId: 'party5',
  //       metrics:[
  //         {
  //           metricRuleId: MetricRuleId.MonsterKill, 
  //           value: 1,
  //           rank: Ranks.E,
  //           week: 1
  //         },
  //         {
  //           metricRuleId: MetricRuleId.MonsterKill, 
  //           value: 2,
  //           rank: Ranks.D,
  //           week: 1
  //         }
  //       ]
  //     },
  //   ]
  // },
]

export interface IRawAdventurer extends IDbAdventurer{
  questParties: IRawParty[]
}

export interface IRawParty extends Omit<IDbQuestPartyAdventurer, "id" | 'adventurerId'> {
  metrics: IDbMetric[]
}