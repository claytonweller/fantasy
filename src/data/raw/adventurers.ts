import { AdventurerClasses, AdventurerRaces, AdventurerStatuses, IDbAdventurer } from "types/Adventurer";
import { IDbMetric, IDbQuestPartyAdventurer, MetricRuleId } from "types/Quest";
import { Ranks } from "types/Ranks";

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
    status: [AdventurerStatuses.Injured, AdventurerStatuses.Criminal],
    traits: ['Gambler'],
    questParties: [
      {
        partyId: 'party2',
        metrics:[
          {
            metricRuleId: MetricRuleId.MonsterKill, 
            value: 3,
            rank: Ranks.D,
            week: 1
          }
        ]
      },
      {
        partyId: 'party5',
        metrics:[
          {
            metricRuleId: MetricRuleId.MonsterKill, 
            value: 1,
            rank: Ranks.E,
            week: 1
          },
          {
            metricRuleId: MetricRuleId.MonsterKill, 
            value: 2,
            rank: Ranks.D,
            week: 1
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
            rank: Ranks.A,
            week: 1,
          },
          {
            metricRuleId: MetricRuleId.AllyHealed,
            value: 3,
            rank: Ranks.B,
            week: 1,
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
            rank: Ranks.C,
            week: 2,
          },
        ]
      },
      {
        partyId: 'party4',
        // Composite
        metrics:[
          {
            metricRuleId: MetricRuleId.MonsterKill, 
            value: 1,
            rank: Ranks.C,
            week: 1,
          },
          {
            metricRuleId: MetricRuleId.AllyHealed,
            value: 1,
            rank: Ranks.B,
            week: 1,
          }
        ]
      },
    ]
  },
  {
    id: '3',
    name: 'Cool Mike',
    races: [AdventurerRaces.Human, AdventurerRaces.Gnome],
    nicknames: [],
    rank: Ranks.B,
    class: AdventurerClasses.Defender,
    className: 'Dude',
    clanId: 'clan1',
    bio: 'A cool guy who gets stuff done',
    status: [],
    traits: ['Cool'],
    questParties:[
      {
        partyId: 'party4',
        // Composite
        metrics:[
          {
            metricRuleId: MetricRuleId.MonsterKill, 
            value: 1,
            rank: Ranks.C,
            week: 1,
          },
          {
            metricRuleId: MetricRuleId.AllyHealed,
            value: 1,
            rank: Ranks.B,
            week: 1,
          }
        ]
      },
    ]
  }
]

export interface IRawAdventurer extends IDbAdventurer{
  questParties: IRawParty[]
}

export interface IRawParty extends Omit<IDbQuestPartyAdventurer, "id" | 'adventurerId'> {
  metrics: IDbMetric[]
}