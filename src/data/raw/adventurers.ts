import { AdventurerClasses, AdventurerRaces, AdventurerStatuses, IDbAdventurer } from "../../types/Adventurer";
import { IDbMetric, IDbQuestPartyAdventurer, MetricRuleId } from "../../types/Quest";
import { Ranks } from "../../types/Ranks";

export const rawAdventurers:IRawAdventurer[] = [
  {
    // DB - Adventurer
    id: 'adv1',
    name: 'Gad',
    races: [AdventurerRaces.Human],
    nicknames: ['Sprite'],
    rank: Ranks.D,
    class: AdventurerClasses.Attacker,
    className: 'Assassin',
    bio: 'Kind of a prick',
    status: [AdventurerStatuses.Injured],
    traits: ['Gambler'],
    questParties: [
      {
        partyId: 'party2',
        metrics:[
          {
            metricRuleId: MetricRuleId.MonsterKill, 
            value: 3,
            rank: Ranks.D
          }
        ]
      },
    ]
  },
  {
    id: '2',
    name: 'Elwin',
    races: [AdventurerRaces.Elf],
    nicknames: [],
    rank: Ranks.A,
    class: AdventurerClasses.Support,
    className: 'Forest Nymph',
    clanId: 'clan1',
    bio: 'Fantastic healer and magic user',
    status: [],
    traits: ['Snobby', 'Determined'],
    questParties:[
      {
        partyId: 'party1',
        // Composite
        metrics:[
          {
            metricRuleId: MetricRuleId.MonsterKill, 
            value: 1,
            rank: Ranks.A
          },
          {
            metricRuleId: MetricRuleId.AllyHealed,
            value: 3,
            rank: Ranks.B
          }
        ]
      },
      {
        partyId: 'party3',
        // Composite
        metrics:[
          {
            metricRuleId: MetricRuleId.MonsterKill, 
            value: 5,
            rank: Ranks.C
          },
        ]
      }
    ]
  }
]

export interface IRawAdventurer extends IDbAdventurer{
  questParties: IRawParty[]
}

export interface IRawParty extends Omit<IDbQuestPartyAdventurer, "id" | 'adventurerId'> {
  metrics: IDbMetric[]
}