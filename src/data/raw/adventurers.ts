import {
  AdventurerClasses,
  AdventurerRaces,
  AdventurerStatuses,
  IDbAdventurer,
  IDbAdventurerStatusHistory,
} from "types/Adventurer";
import { IDbMetric, IDbQuestPartyAdventurer, MetricRuleId } from "types/Quest";
import { Ranks } from "types/Ranks";
import { shuffleArray } from "utils/shuffleArray";

export interface IRawAdventurer extends Omit<IDbAdventurer, "currentStatuses"> {
  statusHistory: Omit<IDbAdventurerStatusHistory, "id" | "adventurerId">[];
  questParties: IRawParty[];
}

export interface IRawParty
  extends Omit<IDbQuestPartyAdventurer, "id" | "adventurerId"> {
  metrics: IDbMetric[];
}

export const rawAdventurers: IRawAdventurer[] = shuffleArray([
  {
    // DB - Adventurer
    id: "a1",
    name: "Gad",
    races: [AdventurerRaces.Human],
    nicknames: [],
    rank: Ranks.D,
    class: AdventurerClasses.Attacker,
    className: "Ruffian",
    bio: "Kind of a prick",
    statusHistory: [
      {
        status: AdventurerStatuses.Criminal,
        startWeek: 3,
      },
      {
        status: AdventurerStatuses.Injured,
        startWeek: 1,
        endWeek: 1,
      },
    ],
    traits: [],
    questParties: [
      {
        lateAddition: true,
        partyId: "p1-q3-5",
        metrics: [
          {
            metricRuleId: MetricRuleId.CostsOrDamages,
            value: 50,
            week: 3,
          },
          {
            metricRuleId: MetricRuleId.CiviliansDead,
            value: 1,
            week: 3,
          },
        ],
      },
      {
        partyId: "p1-q2-7",
        metrics: [
          {
            metricRuleId: MetricRuleId.CostsOrDamages,
            value: 10,
            week: 2,
          },
        ],
      },
    ],
  },
  {
    id: "a2",
    name: "Elise Shadowthread",
    races: [AdventurerRaces.Human],
    nicknames: [],
    rank: Ranks.B,
    class: AdventurerClasses.Attacker,
    className: "Puppet Master",
    bio: "A spider catches her prey through patience and planning.",
    clanId: "c2",
    statusHistory: [
      {
        status: AdventurerStatuses.Injured,
        startWeek: 3,
        endWeek: 3,
      },
    ],
    traits: [],
    questParties: [
      {
        partyId: "p1-q2-2",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 1,
            rank: Ranks.C,
            week: 2,
          },
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 1,
            rank: Ranks.B,
            week: 2,
          },
        ],
      },
    ],
  },
  {
    id: "a3",
    name: "Tjorn Bone Crusher",
    races: [AdventurerRaces.Dwarf, AdventurerRaces.Orc],
    nicknames: [],
    rank: Ranks.C,
    class: AdventurerClasses.Defender,
    className: "Hammerman",
    bio: `Got bones? Tjorn'll crush'em.`,
    clanId: "c2",
    statusHistory: [
      {
        status: AdventurerStatuses.Injured,
        startWeek: 3,
        endWeek: 3,
      },
    ],
    traits: [],
    questParties: [
      {
        partyId: "p1-q2-2",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 1,
            rank: Ranks.C,
            week: 2,
          },
        ],
      },
      {
        partyId: "p3-q1-7",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 1,
            rank: Ranks.C,
            week: 1,
          },
        ],
      },
    ],
  },
  {
    id: "a4",
    name: "Marcus McStain",
    races: [AdventurerRaces.Human],
    nicknames: [],
    rank: Ranks.C,
    class: AdventurerClasses.Attacker,
    className: "Void Sorcerer",
    bio: `Disowned 2nd son of the minor noble house, McStain.`,
    clanId: "c2",
    statusHistory: [
      {
        status: AdventurerStatuses.ManaDepletion,
        startWeek: 4,
        endWeek: 4,
      },
      {
        status: AdventurerStatuses.Injured,
        startWeek: 3,
        endWeek: 3,
      },
    ],
    traits: [],
    questParties: [
      {
        partyId: "p1-q3-3",
        metrics: [],
      },
      {
        partyId: "p1-q2-2",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            rank: Ranks.C,
            value: 2,
            week: 2,
          },
        ],
      },
    ],
  },
  {
    id: "a5",
    name: "Chargla The Brave",
    races: [AdventurerRaces.Halfling, AdventurerRaces.Dwarf],
    nicknames: [],
    rank: Ranks.D,
    class: AdventurerClasses.Defender,
    className: "Shield Masochist",
    bio: `She will always jump in the way of an arrow... Even if it's not heading for someone.`,
    clanId: "c1",
    statusHistory: [
      {
        status: AdventurerStatuses.Dead,
        startWeek: 2,
      },
    ],
    traits: [],
    questParties: [
      {
        partyId: "p2-q1-2",
        metrics: [
          {
            metricRuleId: MetricRuleId.Death,
            value: 1,
            week: 1,
          },
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 10,
            week: 1,
            rank: Ranks.E,
          },
        ],
      },
    ],
  },
  {
    id: "a6",
    name: "Chiff Biffly",
    races: [AdventurerRaces.Halfling],
    rank: Ranks.C,
    class: AdventurerClasses.Support,
    className: "Metalmancer",
    bio: `Loves making magical trinkets. (And garden paraphernalia)`,
    clanId: "c5",
    nicknames: [],
    statusHistory: [],
    traits: [],
    questParties: [
      {
        partyId: "p1-q3-9",
        metrics: [
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 200,
            week: 3,
          },
        ],
      },
    ],
  },
  {
    id: "a7",
    name: `Sk'tar`,
    races: [AdventurerRaces.Spirit, AdventurerRaces.Orc],
    rank: Ranks.C,
    class: AdventurerClasses.Support,
    className: "Blood Bard",
    bio: `Lovely music. Morally vague. It's not a demon thing. Don't be racist.`,
    clanId: "c2",
    nicknames: [],
    statusHistory: [
      {
        status: AdventurerStatuses.Injured,
        startWeek: 3,
        endWeek: 3,
      },
    ],
    traits: [],
    questParties: [
      {
        partyId: "p1-q2-2",
        metrics: [
          {
            metricRuleId: MetricRuleId.AllyHealed,
            value: 2,
            week: 2,
            rank: Ranks.C,
          },
        ],
      },
    ],
  },
  {
    id: "a8",
    name: `Sleek Wind Shay`,
    races: [AdventurerRaces.Elf],
    rank: Ranks.A,
    class: AdventurerClasses.Attacker,
    className: "Gale Huntress",
    bio: `There is no one swifter or deadlier with a bow.`,
    clanId: "c3",
    nicknames: [],
    statusHistory: [],
    traits: [],
    questParties: [
      {
        partyId: "p1-q3-1",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 2,
            week: 3,
            rank: Ranks.C,
          },
        ],
      },
      {
        partyId: "p1-q2-1",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 20,
            week: 2,
            rank: Ranks.D,
          },
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 1,
            rank: Ranks.C,
            week: 2,
          },
        ],
      },
    ],
  },
  {
    id: "a9",
    name: `Vince Dawn`,
    races: [AdventurerRaces.Human, AdventurerRaces.Halfling],
    rank: Ranks.B,
    class: AdventurerClasses.Support,
    className: "Trapper",
    bio: `Once caught an earth dragon alive. Didn't have a way to transport it. But he did catch it.`,
    clanId: "c3",
    nicknames: [],
    statusHistory: [
      {
        status: AdventurerStatuses.Injured,
        startWeek: 4,
        endWeek: 4,
      },
    ],
    traits: [],
    questParties: [
      {
        partyId: "p1-q3-1",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 4,
            week: 3,
            rank: Ranks.D,
          },
        ],
      },
      {
        partyId: "p1-q2-1",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 20,
            week: 2,
            rank: Ranks.E,
          },
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 3,
            week: 2,
            rank: Ranks.D,
          },
        ],
      },
      {
        partyId: "p1-q1-7",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 1,
            week: 1,
            rank: Ranks.B,
          },
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 3,
            week: 1,
            rank: Ranks.C,
          },
        ],
      },
    ],
  },
  {
    id: "a10",
    name: `Stoneclaw Bengalkin`,
    races: [AdventurerRaces.Beastkin],
    rank: Ranks.B,
    class: AdventurerClasses.Attacker,
    className: "Weretiger Berserker",
    bio: `Usually doesn't completely lose control... usually... Hopefully her brother is there to calm her down.`,
    clanId: "c3",
    nicknames: [],
    statusHistory: [],
    traits: [],
    questParties: [
      {
        partyId: "p1-q3-1",
        metrics: [],
      },
      {
        partyId: "p1-q2-1",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 12,
            week: 2,
            rank: Ranks.E,
          },
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 3,
            week: 2,
            rank: Ranks.D,
          },
        ],
      },
    ],
  },
  {
    id: "a11",
    name: `Metalfang Bengalkin`,
    races: [AdventurerRaces.Beastkin],
    rank: Ranks.B,
    class: AdventurerClasses.Defender,
    className: "Weretiger Sentry",
    bio: `A stripy wall of a man. Easily distracted, but reliable when it matters.`,
    clanId: "c3",
    nicknames: [],
    statusHistory: [
      {
        status: AdventurerStatuses.Injured,
        startWeek: 4,
        endWeek: 4,
      },
    ],
    traits: [],
    questParties: [
      {
        partyId: "p1-q3-1",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 3,
            week: 3,
            rank: Ranks.D,
          },
        ],
      },
      {
        partyId: "p1-q2-1",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 40,
            week: 2,
            rank: Ranks.E,
          },
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 15,
            week: 2,
            rank: Ranks.D,
          },
        ],
      },
    ],
  },
  {
    id: "a12",
    name: `Tinky`,
    races: [AdventurerRaces.Spirit],
    rank: Ranks.D,
    class: AdventurerClasses.Defender,
    className: "The Muscle",
    bio: `She's not smart. But she is big.`,
    nicknames: [],
    statusHistory: [
      {
        status: AdventurerStatuses.Missing,
        startWeek: 2,
      },
    ],
    traits: [],
    questParties: [
      {
        partyId: "p1-q1-9",
        metrics: [
          {
            metricRuleId: MetricRuleId.GoneMissing,
            value: 1,
            week: 1,
          },
        ],
      },
    ],
  },
  {
    id: "a13",
    name: `Tundrapaw Wolfkin`,
    races: [AdventurerRaces.Beastkin],
    rank: Ranks.D,
    class: AdventurerClasses.Attacker,
    className: "Wolf Sous",
    bio: `Loves making sauces.`,
    clanId: "c7",
    nicknames: [],
    statusHistory: [],
    traits: [],
    questParties: [
      {
        partyId: "p1-q3-4",
        metrics: [],
      },
      {
        partyId: "p1-q2-4",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 1,
            rank: Ranks.C,
            week: 2,
          },
        ],
      },
      {
        partyId: "p1-q1-6",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 3,
            rank: Ranks.E,
            week: 1,
          },
        ],
      },
    ],
  },
  {
    id: "a14",
    name: `Fixer`,
    races: [AdventurerRaces.Unknown],
    rank: Ranks.B,
    class: AdventurerClasses.Support,
    className: "The Fixer",
    bio: `You've made a mess. Fixer is here... for a fee`,
    clanId: "c2",
    nicknames: [],
    statusHistory: [],
    traits: [],
    questParties: [
      {
        lateAddition: true,
        partyId: "p1-q3-5",
        metrics: [
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 100,
            week: 3,
          },
        ],
      },
      {
        partyId: "p1-q2-2",
        metrics: [
          {
            metricRuleId: MetricRuleId.AllyHealed,
            value: 1,
            rank: Ranks.B,
            week: 2,
          },
        ],
      },
    ],
  },
  {
    id: "a15",
    name: `Arc Northstar`,
    races: [AdventurerRaces.Human],
    rank: Ranks.A,
    class: AdventurerClasses.Defender,
    className: "Star Paladin",
    bio: `He stands up for what's right and good, which of course are in no way subjective.`,
    clanId: "c4",
    nicknames: [],
    statusHistory: [],
    traits: [],
    questParties: [
      {
        partyId: "p1-q2-3",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            rank: Ranks.C,
            value: 8,
            week: 2,
          },
        ],
      },
    ],
  },
  {
    id: "a16",
    name: `Luna Stillgard`,
    races: [AdventurerRaces.Dwarf],
    rank: Ranks.B,
    class: AdventurerClasses.Support,
    className: "Moon Healer",
    bio: `There is no more calming or nourishing presence than Luna. Though she can be a bit aloof.`,
    clanId: "c4",
    nicknames: [],
    statusHistory: [],
    traits: [],
    questParties: [
      {
        // lateAddition: true,
        partyId: "p5-q2-5", // Week 3
        metrics: [],
      },
    ],
  },
  {
    id: "a17",
    name: `Dash Light Drea`,
    races: [AdventurerRaces.Elf],
    rank: Ranks.B,
    class: AdventurerClasses.Attacker,
    className: "Dragoon",
    bio: `A spear like a bolt of lighting. Loves high places.`,
    clanId: "c4",
    nicknames: [],
    statusHistory: [],
    traits: [],
    questParties: [
      {
        partyId: "p2-q3-7",
        metrics: [],
      },
      {
        partyId: "p6-q1-7",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            rank: Ranks.B,
            value: 1,
            week: 2,
          },
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            rank: Ranks.E,
            value: 10,
            week: 2,
          },
          {
            metricRuleId: MetricRuleId.CivilianSaved,
            value: 1,
            week: 2,
          },
        ],
      },
      {
        partyId: "p4-q1-7",
        lateAddition: true,
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            rank: Ranks.E,
            value: 8,
            week: 1,
          },
        ],
      },
    ],
  },
  {
    id: "a18",
    name: `Vicious Syd`,
    races: [AdventurerRaces.Human],
    rank: Ranks.E,
    class: AdventurerClasses.Generalist,
    className: "Local Tough",
    bio: `Was the head of a gang of orphans.`,
    nicknames: [],
    statusHistory: [],
    traits: [],
    questParties: [
      {
        lateAddition: true,
        partyId: "p1-q3-5",
        metrics: [
          {
            metricRuleId: MetricRuleId.CostsOrDamages,
            value: 25,
            week: 3,
          },
        ],
      },
      {
        partyId: "p1-q1-8",
        metrics: [
          {
            metricRuleId: MetricRuleId.CostsOrDamages,
            value: 5,
            week: 1,
          },
        ],
      },
    ],
  },
  {
    id: "a19",
    name: `Sheila Solara`,
    races: [AdventurerRaces.Human],
    rank: Ranks.C,
    class: AdventurerClasses.Generalist,
    className: "Sun Priestess",
    bio: `The newest addition to the Blessed Sword Clan. She's young but shows great potential.`,
    clanId: "c4",
    nicknames: [],
    statusHistory: [],
    traits: [],
    questParties: [
      {
        partyId: "p2-q3-7",
        metrics: [],
      },
      {
        partyId: "p1-q2-3",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            rank: Ranks.D,
            value: 2,
            week: 2,
          },
        ],
      },
      {
        partyId: "p4-q1-7",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            rank: Ranks.E,
            value: 10,
            week: 1,
          },
        ],
      },
    ],
  },
  {
    id: "a20",
    name: `Vlort`,
    races: [AdventurerRaces.Spirit],
    rank: Ranks.A,
    class: AdventurerClasses.Generalist,
    className: "Primordial",
    bio: `Founder of the Mill clan. He was here before Morten was even a hamlet. Some say he was here before Heavens Cross was a country.`,
    clanId: "c1",
    nicknames: [],
    statusHistory: [],
    traits: [],
    questParties: [],
  },
  {
    id: "a21",
    name: `Thorin Brassburn`,
    races: [AdventurerRaces.Dwarf],
    rank: Ranks.B,
    class: AdventurerClasses.Defender,
    className: "Ancient Smith",
    bio: `The good thing about being old as rocks is you know everything that can be made from them.`,
    clanId: "c5",
    nicknames: [],
    statusHistory: [],
    traits: [],
    questParties: [
      {
        partyId: "p1-q3-9",
        metrics: [
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 1276,
            week: 3,
          },
        ],
      },
      {
        partyId: "p3-q1-4",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            rank: Ranks.E,
            value: 6,
            week: 1,
          },
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            rank: Ranks.D,
            value: 2,
            week: 1,
          },
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            rank: Ranks.C,
            value: 2,
            week: 1,
          },
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 100,
            week: 1,
          },
        ],
      },
    ],
  },
  {
    id: "a22",
    name: `Vivian Crestmor`,
    races: [AdventurerRaces.Human],
    rank: Ranks.B,
    class: AdventurerClasses.Support,
    className: "Time Mage",
    bio: `The Crestmor family is the largest nobel house in Morton. In order for a child of the family to be in line for succession they must demonstrate prowess in Time manipulation magic. `,
    clanId: "c6",
    nicknames: [],
    statusHistory: [],
    traits: [],
    questParties: [
      {
        partyId: "p1-q3-7",
        metrics: [
          {
            metricRuleId: MetricRuleId.CivilianSaved,
            value: 1,
            week: 3,
          },
        ],
      },
      {
        partyId: "p3-q2-3",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 2,
            week: 2,
            rank: Ranks.D,
          },
        ],
      },
      {
        partyId: "p1-q1-1",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 4,
            week: 1,
            rank: Ranks.D,
          },
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 2,
            week: 1,
            rank: Ranks.C,
          },
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 20,
            week: 1,
          },
        ],
      },
    ],
  },
  {
    id: "a23",
    name: `Carlsbad`,
    races: [AdventurerRaces.Spirit],
    rank: Ranks.D,
    class: AdventurerClasses.Attacker,
    className: "Tooth Mage",
    bio: `Most mages carry tomes. Carlsbad carries a binder filled with fangs of various monsters.`,
    clanId: "c1",
    nicknames: [],
    statusHistory: [
      {
        status: AdventurerStatuses.ManaDepletion,
        startWeek: 2,
        endWeek: 2,
      },
    ],
    traits: [],
    questParties: [
      {
        partyId: "p2-q1-2",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 12,
            rank: Ranks.E,
            week: 1,
          },
        ],
      },
    ],
  },
  {
    id: "a24",
    name: `Corporal Margrave`,
    races: [AdventurerRaces.Human],
    rank: Ranks.D,
    class: AdventurerClasses.Attacker,
    className: "Cavalier",
    bio: `Was a distinguished member for the royal army. Don't ask why he's and adventurer now.`,
    nicknames: [],
    statusHistory: [
      {
        status: AdventurerStatuses.Sick,
        startWeek: 1,
        endWeek: 1,
      },
    ],
    traits: [],
    questParties: [
      {
        partyId: "p3-q2-5",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 4,
            rank: Ranks.E,
            week: 2,
          },
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 2,
            rank: Ranks.D,
            week: 2,
          },
        ],
      },
    ],
  },
  {
    id: "a25",
    name: `Reginald Spintsmunge IV`,
    races: [AdventurerRaces.Human],
    rank: Ranks.D,
    class: AdventurerClasses.Attacker,
    className: "Duelist",
    bio: `First son of Reginald Spintsmunge III. Owner of the fabled sword Needlewind. Undefeated duelist. Has a stable of 10 horses. He definitely knows their names. No need to ask. Enjoyer of fine wines. Has his own winery in the country... etc.`,
    clanId: "c6",
    nicknames: [],
    statusHistory: [
      {
        status: AdventurerStatuses.Missing,
        startWeek: 2,
      },
    ],
    traits: [],
    questParties: [
      {
        partyId: "p1-q1-1",
        metrics: [
          {
            metricRuleId: MetricRuleId.GoneMissing,
            value: 1,
            week: 1,
          },
        ],
      },
    ],
  },
  {
    id: "a26",
    name: `Lydia Stiles`,
    races: [AdventurerRaces.Human],
    rank: Ranks.E,
    class: AdventurerClasses.Attacker,
    className: "Welterweight Boxer",
    bio: `Tired of fighting in the ring.`,
    clanId: "c9",
    nicknames: [],
    statusHistory: [],
    traits: [],
    questParties: [
      {
        partyId: "p3-q3-8",
        metrics: [],
      },
      {
        partyId: "p2-q1-4",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 1,
            rank: Ranks.D,
            week: 1,
          },
        ],
      },
    ],
  },
  {
    id: "a27",
    name: `Bjork Dragonsvein`,
    races: [AdventurerRaces.Dwarf],
    rank: Ranks.C,
    class: AdventurerClasses.Defender,
    className: "Soul Miner",
    bio: `Sturdy hands. Swift pickaxe. Claims to be able to smell every metal known.`,
    clanId: "c5",
    nicknames: [],
    statusHistory: [],
    traits: [],
    questParties: [
      {
        partyId: "p1-q3-9",
        metrics: [
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 100,
            week: 3,
          },
        ],
      },
      {
        partyId: "p7-q1-7",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            rank: Ranks.D,
            value: 6,
            week: 1,
          },
        ],
      },
      {
        partyId: "p3-q1-4",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            rank: Ranks.E,
            value: 5,
            week: 1,
          },
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 10,
            week: 1,
          },
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 10,
            week: 1,
          },
        ],
      },
    ],
  },
  {
    id: "a28",
    name: `Louis Lasiter`,
    races: [AdventurerRaces.Human],
    rank: Ranks.C,
    class: AdventurerClasses.Defender,
    className: "Noble Knight",
    bio: `The youngest son of the Lasiter house, which is known for public service. Louis wishes to prove himself as an adventurer and join the Kings Guard in the capitol some day.`,
    clanId: "c6",
    nicknames: [],
    statusHistory: [],
    traits: [],
    questParties: [
      {
        partyId: "p1-q3-7",
        metrics: [],
      },
      {
        partyId: "p1-q2-6.2",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 1,
            rank: Ranks.C,
            week: 2,
          },
        ],
      },
      {
        partyId: "p1-q1-1",
        metrics: [
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 20,
            week: 1,
          },
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 3,
            rank: Ranks.C,
            week: 1,
          },
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 5,
            rank: Ranks.D,
            week: 1,
          },
        ],
      },
    ],
  },
  {
    id: "a29",
    name: `Frost Bough Elnar`,
    races: [AdventurerRaces.Elf],
    rank: Ranks.C,
    class: AdventurerClasses.Support,
    className: "Apothecary",
    bio: `If a plant can be used for medicine, he's used it.`,
    clanId: "c8",
    nicknames: [],
    statusHistory: [],
    traits: [],
    questParties: [
      {
        partyId: "p4-q3-9",
        metrics: [
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 400,
            week: 3,
          },
        ],
      },
      {
        lateAddition: true,
        partyId: "p1-q2-6.3",
        metrics: [
          {
            metricRuleId: MetricRuleId.AllyHealed,
            rank: Ranks.E,
            value: 6,
            week: 2,
          },
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 50,
            week: 2,
          },
          {
            metricRuleId: MetricRuleId.CivilianSaved,
            value: 3,
            week: 2,
          },
        ],
      },
      {
        partyId: "p1-q1-5",
        metrics: [],
      },
    ],
  },
  {
    id: "a30",
    name: `Jan Fandle`,
    races: [AdventurerRaces.Human, AdventurerRaces.Halfling],
    rank: Ranks.D,
    class: AdventurerClasses.Generalist,
    className: "Smooth talker",
    bio: `Somehow if feels right that she gets the lion's share`,
    clanId: "c1",
    nicknames: [],
    statusHistory: [],
    traits: [],
    questParties: [
      {
        partyId: "p1-q3-5",
        metrics: [],
      },
      {
        lateAddition: true,
        partyId: "p1-q2-7",
        metrics: [
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 100,
            week: 2,
          },
        ],
      },
      {
        lateAddition: true,
        partyId: "p1-q1-8",
        metrics: [
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 50,
            week: 1,
          },
        ],
      },
    ],
  },
  {
    id: "a31",
    name: `Guy Norman`,
    races: [AdventurerRaces.Human],
    rank: Ranks.D,
    class: AdventurerClasses.Generalist,
    className: "Mercenary",
    bio: `New to town.`,
    clanId: "c1",
    nicknames: [],
    statusHistory: [],
    traits: [],
    questParties: [
      {
        partyId: "p4-q2-5", // Week 3
        metrics: [],
      },
      {
        partyId: "p2-q2-5",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 4,
            rank: Ranks.D,
            week: 2,
          },
        ],
      },
      {
        partyId: "p5-q1-7",
        lateAddition: true,
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 1,
            rank: Ranks.C,
            week: 1,
          },
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 6,
            rank: Ranks.D,
            week: 1,
          },
        ],
      },
    ],
  },
  {
    id: "a32",
    name: `Moira Tabbykin`,
    races: [AdventurerRaces.Beastkin],
    rank: Ranks.D,
    class: AdventurerClasses.Generalist,
    className: "Cat Burglar",
    bio: `Make sure you check our coinpurse.`,
    clanId: "c1",
    nicknames: [],
    statusHistory: [],
    traits: [],
    questParties: [
      {
        lateAddition: true,
        partyId: "p1-q3-5",
        metrics: [
          {
            metricRuleId: MetricRuleId.CostsOrDamages,
            value: 25,
            week: 3,
          },
        ],
      },
      {
        partyId: "p1-q2-7",
        lateAddition: true,
        metrics: [
          {
            metricRuleId: MetricRuleId.CostsOrDamages,
            value: 5,
            week: 2,
          },
        ],
      },
    ],
  },
  {
    id: "a33",
    name: `Kizz`,
    races: [AdventurerRaces.Spirit],
    rank: Ranks.C,
    class: AdventurerClasses.Support,
    className: "Demon Alchemist",
    bio: `Demon spirits have their own chemistry. It doesn't always work as expected.`,
    clanId: "c5",
    nicknames: [],
    statusHistory: [],
    traits: [],
    questParties: [
      {
        partyId: "p1-q3-9",
        metrics: [
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 500,
            week: 3,
          },
        ],
      },
    ],
  },
  {
    id: "a34",
    name: `Juniper Montrose`,
    races: [AdventurerRaces.Human],
    rank: Ranks.D,
    class: AdventurerClasses.Support,
    className: "White mage apprentice",
    bio: `She's just started as an adventurer.`,
    clanId: "c8",
    nicknames: [],
    statusHistory: [],
    traits: [],
    questParties: [
      {
        partyId: "p1-q2-6.2",
        metrics: [
          {
            metricRuleId: MetricRuleId.AllyHealed,
            value: 1,
            rank: Ranks.C,
            week: 2,
          },
        ],
      },
      {
        partyId: "p1-q1-4",
        metrics: [],
      },
    ],
  },
  {
    id: "a35",
    name: `Tad Faddler`,
    races: [AdventurerRaces.Halfling],
    rank: Ranks.E,
    class: AdventurerClasses.Support,
    className: "Dirtmancer",
    bio: `"You got something in your eyes?! It's probably DIRT HAHAHAHAH!"`,
    clanId: "c1",
    nicknames: [],
    statusHistory: [
      {
        status: AdventurerStatuses.Injured,
        startWeek: 2,
        endWeek: 2,
      },
    ],
    traits: [],
    questParties: [
      {
        partyId: "p5-q2-5",
        metrics: [],
      },
      {
        partyId: "p2-q1-2",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 2,
            rank: Ranks.E,
            week: 1,
          },
        ],
      },
    ],
  },
  {
    id: "a36",
    name: `??????`,
    races: [AdventurerRaces.Unknown],
    rank: Ranks.E,
    class: AdventurerClasses.Generalist,
    className: "Mime",
    bio: `Anything you can do, They can do... also. --- They can also do anything you can do too. --- Yes they can. Yest they can. Yes they can.`,
    clanId: undefined,
    nicknames: [],
    statusHistory: [],
    traits: [],
    questParties: [
      {
        partyId: "p2-q3-9",
        metrics: [
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 50,
            week: 3,
          },
        ],
      },
      {
        lateAddition: true,
        partyId: "p3-q2-5",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 4,
            rank: Ranks.E,
            week: 2,
          },
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 2,
            rank: Ranks.D,
            week: 2,
          },
        ],
      },
    ],
  },
  {
    id: "a37",
    name: `Ash Catsup`,
    races: [AdventurerRaces.Human],
    rank: Ranks.E,
    class: AdventurerClasses.Support,
    className: "Beast Tamer",
    bio: `He's going to be the very best. The best there ever was.`,
    clanId: "c10",
    nicknames: [],
    statusHistory: [],
    traits: [],
    questParties: [
      {
        partyId: "p1-q3-2",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 4,
            rank: Ranks.D,
            week: 3,
          },
        ],
      },
      {
        partyId: "p1-q2-8",
        metrics: [],
      },
      {
        partyId: "p1-q1-3",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 3,
            rank: Ranks.E,
            week: 1,
          },
        ],
      },
    ],
  },
  {
    id: "a38",
    name: `Axel Gearlywhirl`,
    races: [AdventurerRaces.Halfling, AdventurerRaces.Dwarf],
    rank: Ranks.C,
    class: AdventurerClasses.Support,
    className: "Inventor",
    bio: `Constantly tinkering and creating new devices. They don't usually fail catastrophically... seriously. This one won't maim anyone.`,
    clanId: "c5",
    nicknames: [],
    statusHistory: [],
    traits: [],
    questParties: [
      {
        partyId: "p1-q3-9",
        metrics: [
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 500,
            week: 3,
          },
        ],
      },
      {
        partyId: "p3-q1-4",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            rank: Ranks.E,
            value: 3,
            week: 1,
          },
          {
            metricRuleId: MetricRuleId.AllyHealed,
            rank: Ranks.C,
            value: 1,
            week: 1,
          },
          {
            metricRuleId: MetricRuleId.AllyHealed,
            rank: Ranks.B,
            value: 1,
            week: 1,
          },
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 40,
            week: 1,
          },
        ],
      },
    ],
  },
  {
    id: "a39",
    name: `Clara Kimberflorn`,
    races: [AdventurerRaces.Human],
    rank: Ranks.E,
    class: AdventurerClasses.Generalist,
    className: "Squire maid",
    bio: `Sir Robin's squire. Also his maid.`,
    clanId: "c1",
    nicknames: [],
    statusHistory: [],
    traits: [],
    questParties: [
      {
        lateAddition: true,
        partyId: "p6-q3-8",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 1,
            rank: Ranks.D,
            week: 3,
          },
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 1,
            rank: Ranks.C,
            week: 3,
          },
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 1,
            rank: Ranks.B,
            week: 3,
          },
        ],
      },
      {
        partyId: "p1-q2-6.1",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 2,
            rank: Ranks.E,
            week: 2,
          },
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 2,
            rank: Ranks.D,
            week: 2,
          },
        ],
      },
      {
        partyId: "p1-q1-2",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 25,
            rank: Ranks.E,
            week: 1,
          },
        ],
      },
    ],
  },
  {
    id: "a40",
    name: `Mara Wright`,
    races: [AdventurerRaces.Human],
    rank: Ranks.A,
    class: AdventurerClasses.Attacker,
    className: "Martial Arts Master",
    bio: `Master of the Explosive Fist style. Has trained many pupils, but currently has no successor.`,
    clanId: "c9",
    nicknames: [],
    statusHistory: [],
    traits: [],
    questParties: [
      {
        lateAddition: true,
        partyId: "p1-q2-6.1",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 4,
            rank: Ranks.D,
            week: 2,
          },
        ],
      },
    ],
  },
  {
    id: "a41",
    name: `Sir Robin`,
    races: [AdventurerRaces.Human],
    rank: Ranks.D,
    class: AdventurerClasses.Defender,
    className: "Brave Knight",
    bio: `Brave, brave sir Robin.`,
    clanId: "c1",
    nicknames: [],
    statusHistory: [],
    traits: [],
    questParties: [
      {
        partyId: "p6-q3-8",
        metrics: [],
      },
      {
        partyId: "p1-q2-6.1",
        metrics: [],
      },
      {
        partyId: "p1-q1-2",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 2,
            rank: Ranks.E,
            week: 1,
          },
        ],
      },
    ],
  },
  {
    id: "a42",
    name: `Derb Alperd`,
    races: [AdventurerRaces.Halfling],
    rank: Ranks.E,
    class: AdventurerClasses.Support,
    className: "Tooting Bard",
    bio: `He's out to prove everyone wrong. You can be bard and play the trumpet.`,
    clanId: "c1",
    nicknames: [],
    statusHistory: [
      {
        status: AdventurerStatuses.Missing,
        startWeek: 2,
        endWeek: 2,
      },
    ],
    traits: [],
    questParties: [
      {
        partyId: "p3-q3-9",
        metrics: [
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 65,
            week: 3,
          },
        ],
      },
      {
        lateAddition: true,
        partyId: "p1-q2-1",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 4,
            rank: Ranks.E,
            week: 2,
          },
        ],
      },
      {
        partyId: "p2-q1-2",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 1,
            rank: Ranks.E,
            week: 1,
          },
          {
            metricRuleId: MetricRuleId.GoneMissing,
            value: 1,
            week: 1,
          },
        ],
      },
    ],
  },
  {
    id: "a43",
    name: `Geoffrey Sonterfeld`,
    races: [AdventurerRaces.Human],
    rank: Ranks.C,
    class: AdventurerClasses.Attacker,
    className: "Roguish Fancyman",
    bio: `His smile sparkles. His hair is fabulous. He knows just how to swing his cape.`,
    clanId: "c6",
    nicknames: [],
    statusHistory: [],
    traits: [],
    questParties: [
      {
        partyId: "p7-q3-8",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 1,
            week: 3,
            rank: Ranks.E,
          },
        ],
      },
      {
        partyId: "p3-q2-3",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 2,
            week: 2,
            rank: Ranks.C,
          },
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 2,
            week: 2,
            rank: Ranks.D,
          },
        ],
      },
      {
        partyId: "p1-q1-4",
        metrics: [],
      },
    ],
  },
  {
    id: "a44",
    name: `Goldorf the Old`,
    races: [AdventurerRaces.Human],
    rank: Ranks.E,
    class: AdventurerClasses.Generalist,
    className: "Aged Wizard",
    bio: `His magic tome store has gone out of business. So despite being very old he has decided to become an adventurer.`,
    nicknames: [],
    statusHistory: [
      {
        status: AdventurerStatuses.Missing,
        startWeek: 3,
        endWeek: 3,
      },
    ],
    traits: [],
    questParties: [
      {
        partyId: "p2-q1-9",
        metrics: [
          {
            metricRuleId: MetricRuleId.GoneMissing,
            value: 1,
            week: 2,
          },
        ],
      },
      {
        partyId: "p3-q1-5",
        metrics: [],
      },
    ],
  },
  {
    id: "a45",
    name: `Icenose Huskykin`,
    races: [AdventurerRaces.Beastkin],
    rank: Ranks.E,
    class: AdventurerClasses.Generalist,
    className: "Sniff Scout",
    bio: `Just came of age. He has a great nose, and is very excited.`,
    clanId: "c1",
    nicknames: [],
    statusHistory: [
      {
        status: AdventurerStatuses.Injured,
        startWeek: 3,
        endWeek: 3,
      },
    ],
    traits: [],
    questParties: [
      {
        partyId: "p1-q2-6.3",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 2,
            rank: Ranks.E,
            week: 2,
          },
        ],
      },
      {
        partyId: "p2-q1-3",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 3,
            rank: Ranks.D,
            week: 1,
          },
        ],
      },
    ],
  },
  {
    id: "a46",
    name: `Julia Pepperschild`,
    races: [AdventurerRaces.Dwarf],
    rank: Ranks.C,
    class: AdventurerClasses.Defender,
    className: "Iron Chef",
    bio: `Because of their constitution dwarves are known to be able to eat food that's nearly inedible. But this wasn't enough for Julia. She studied for years in a faraway land to become a great chef.`,
    clanId: "c7",
    nicknames: [],
    statusHistory: [],
    traits: [],
    questParties: [
      {
        partyId: "p1-q3-4",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            rank: Ranks.D,
            value: 1,
            week: 3,
          },
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            rank: Ranks.C,
            value: 1,
            week: 3,
          },
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            rank: Ranks.B,
            value: 1,
            week: 3,
          },
        ],
      },
      {
        partyId: "p1-q2-4",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 2,
            rank: Ranks.D,
            week: 2,
          },
        ],
      },
      {
        partyId: "p1-q1-6",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 1,
            rank: Ranks.D,
            week: 1,
          },
        ],
      },
    ],
  },
  {
    id: "a47",
    name: `P'Tark`,
    races: [AdventurerRaces.Spirit],
    rank: Ranks.E,
    class: AdventurerClasses.Attacker,
    className: "Shade Warrior",
    bio: `P'Tark is a shade spirit. If it gets too bright he looses his form.`,
    clanId: "c1",
    nicknames: [],
    statusHistory: [
      {
        status: AdventurerStatuses.ManaDepletion,
        startWeek: 1,
        endWeek: 1,
      },
      {
        status: AdventurerStatuses.ManaDepletion,
        startWeek: 3,
        endWeek: 3,
      },
    ],
    traits: [],
    questParties: [
      {
        partyId: "p1-q2-6.3",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 2,
            week: 2,
            rank: Ranks.E,
          },
        ],
      },
    ],
  },
  {
    id: "a48",
    name: `Bushi Raccoonkin`,
    races: [AdventurerRaces.Beastkin],
    rank: Ranks.D,
    class: AdventurerClasses.Attacker,
    className: "Fruit Ninja",
    bio: `Can a vegetable peeler be used to kill a man? Absolutely. But Bushi has given that up for a simpler life.`,
    clanId: "c7",
    nicknames: [],
    statusHistory: [],
    traits: [],
    questParties: [
      {
        partyId: "p1-q3-4",
        metrics: [],
      },
      {
        partyId: "p1-q2-4",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 2,
            rank: Ranks.D,
            week: 2,
          },
        ],
      },
      {
        partyId: "p1-q1-6",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 1,
            rank: Ranks.C,
            week: 1,
          },
        ],
      },
    ],
  },
  {
    id: "a49",
    name: `Squeakela Mousekin`,
    races: [AdventurerRaces.Beastkin],
    rank: Ranks.E,
    class: AdventurerClasses.Support,
    className: "Tiny Dancer",
    bio: `As hard to his as she is cute.`,
    clanId: "c1",
    nicknames: [],
    statusHistory: [
      {
        status: AdventurerStatuses.Injured,
        startWeek: 3,
        endWeek: 3,
      },
    ],
    traits: [],
    questParties: [
      {
        partyId: "p1-q2-6.3",
        metrics: [],
      },
    ],
  },
  {
    id: "a50",
    name: `The Chairman`,
    races: [AdventurerRaces.Unknown],
    rank: Ranks.C,
    class: AdventurerClasses.Generalist,
    className: "Gourmand",
    bio: `Little is known about the Chairman other than his love for food.`,
    clanId: "c7",
    nicknames: [],
    statusHistory: [],
    traits: [],
    questParties: [],
  },
  {
    id: "a51",
    name: `Fissure`,
    races: [AdventurerRaces.Spirit],
    rank: Ranks.B,
    class: AdventurerClasses.Attacker,
    className: "Pressure Point Pixie",
    bio: `The tiny hands are not a drawback, they just focus the force into a tiny area. Float like a butterfly, sting like a bee.`,
    clanId: "c9",
    nicknames: [],
    statusHistory: [],
    traits: [],
    questParties: [
      {
        partyId: "p2-q3-8",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            rank: Ranks.E,
            value: 1,
            week: 3,
          },
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            rank: Ranks.C,
            value: 1,
            week: 3,
          },
        ],
      },
      {
        partyId: "p2-q2-3",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 3,
            rank: Ranks.C,
            week: 2,
          },
        ],
      },
    ],
  },
  {
    id: "a52",
    name: `Norn Bornelby`,
    races: [AdventurerRaces.Halfling],
    rank: Ranks.C,
    class: AdventurerClasses.Support,
    className: "Field Medic",
    bio: `Tiny hands, expert at neat stitches.`,
    clanId: "c8",
    nicknames: [],
    statusHistory: [],
    traits: [],
    questParties: [
      {
        partyId: "p3-q2-3",
        metrics: [
          {
            metricRuleId: MetricRuleId.AllyHealed,
            value: 1,
            rank: Ranks.B,
            week: 2,
          },
        ],
      },
      {
        partyId: "p2-q1-4",
        metrics: [
          {
            metricRuleId: MetricRuleId.AllyHealed,
            value: 1,
            rank: Ranks.D,
            week: 1,
          },
          {
            metricRuleId: MetricRuleId.AllyHealed,
            value: 1,
            rank: Ranks.C,
            week: 1,
          },
          {
            metricRuleId: MetricRuleId.AllyHealed,
            value: 1,
            rank: Ranks.E,
            week: 1,
          },
        ],
      },
    ],
  },
  {
    id: "a53",
    name: `Shelly Toritoisekin`,
    races: [AdventurerRaces.Beastkin],
    rank: Ranks.D,
    class: AdventurerClasses.Defender,
    className: "Turtle Cleric",
    bio: `She may not get there first but she'll get there eventually, and when she does she'll heal whoever was hurt while they were waiting`,
    clanId: "c8",
    nicknames: [],
    statusHistory: [],
    traits: [],
    questParties: [
      {
        partyId: "p8-q3-8",
        metrics: [
          {
            metricRuleId: MetricRuleId.AllyHealed,
            rank: Ranks.E,
            value: 2,
            week: 3,
          },
          {
            metricRuleId: MetricRuleId.AllyHealed,
            rank: Ranks.D,
            value: 1,
            week: 3,
          },
          {
            metricRuleId: MetricRuleId.AllyHealed,
            rank: Ranks.C,
            value: 2,
            week: 3,
          },
          {
            metricRuleId: MetricRuleId.AllyHealed,
            rank: Ranks.B,
            value: 1,
            week: 3,
          },
        ],
      },
    ],
  },
  {
    id: "a54",
    name: `Szuuth`,
    races: [AdventurerRaces.Spirit],
    rank: Ranks.E,
    class: AdventurerClasses.Support,
    className: "Pain Sprite",
    bio: `Can't heal you. But can ease your pain.`,
    clanId: "c8",
    nicknames: [],
    statusHistory: [],
    traits: [],
    questParties: [
      {
        partyId: "p2-q1-5",
        metrics: [],
      },
    ],
  },
  {
    id: "a55",
    name: `Alexandria Von Duffenklampf`,
    races: [AdventurerRaces.Human],
    rank: Ranks.D,
    class: AdventurerClasses.Attacker,
    className: "Mirror Blade",
    bio: `This twin always wears pink. Left handed.`,
    clanId: "c6",
    nicknames: [],
    statusHistory: [],
    traits: [],
    questParties: [
      {
        partyId: "p5-q3-9",
        metrics: [],
      },
      {
        partyId: "p1-q2-6.2",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 3,
            rank: Ranks.D,
            week: 2,
          },
        ],
      },
      {
        partyId: "p1-q1-4",
        metrics: [],
      },
    ],
  },
  {
    id: "a56",
    name: `Anastasia Von Duffenklampf`,
    races: [AdventurerRaces.Human],
    rank: Ranks.D,
    class: AdventurerClasses.Attacker,
    className: "Mirror Blade",
    bio: `This twin always wears blue. Right handed.`,
    clanId: "c6",
    nicknames: [],
    statusHistory: [],
    traits: [],
    questParties: [
      {
        partyId: "p5-q3-9",
        metrics: [],
      },
      {
        partyId: "p1-q2-6.2",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 3,
            rank: Ranks.D,
            week: 2,
          },
        ],
      },
      {
        partyId: "p1-q1-4",
        metrics: [],
      },
    ],
  },
  {
    id: "a57",
    name: `Buster Zeddemore`,
    races: [AdventurerRaces.Halfling],
    rank: Ranks.E,
    class: AdventurerClasses.Support,
    className: "Exorcist",
    bio: `Who ya' gonna' call?`,
    clanId: "c1",
    nicknames: [],
    statusHistory: [
      {
        status: AdventurerStatuses.MentalIllness,
        startWeek: 4,
      },
    ],
    traits: [],
    questParties: [
      {
        partyId: "p3-q1-9",
        metrics: [],
      },
    ],
  },
  {
    id: "a58",
    name: `Ken Casablanca`,
    races: [AdventurerRaces.Human, AdventurerRaces.Orc],
    rank: Ranks.D,
    class: AdventurerClasses.Attacker,
    className: "Street Fighter",
    bio: `Refuses to wear shoes. Always wears red.`,
    clanId: "c9",
    nicknames: [],
    statusHistory: [],
    traits: [],
    questParties: [
      {
        partyId: "p1-q3-8",
        metrics: [],
      },
      {
        partyId: "p8-q1-7",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 17,
            rank: Ranks.E,
            week: 2,
          },
        ],
      },

      {
        partyId: "p2-q1-4",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 3,
            rank: Ranks.D,
            week: 1,
          },
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 1,
            rank: Ranks.C,
            week: 1,
          },
        ],
      },
    ],
  },
  {
    id: "a59",
    name: `Tall Pine Marlon`,
    races: [AdventurerRaces.Elf],
    rank: Ranks.B,
    class: AdventurerClasses.Generalist,
    className: "Botanic Druid",
    bio: `Don't chop down a tree where Marlon can see you. Or the rest of the trees might take revenge.`,
    clanId: "c10",
    nicknames: [],
    statusHistory: [],
    traits: [],
    questParties: [
      {
        partyId: "p1-q3-2",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 2,
            rank: Ranks.C,
            week: 3,
          },
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 5,
            rank: Ranks.D,
            week: 3,
          },
        ],
      },
      {
        partyId: "p1-q2-8",
        metrics: [],
      },
    ],
  },
  {
    id: "a61",
    name: `Brother Chilpin`,
    races: [AdventurerRaces.Halfling],
    rank: Ranks.B,
    class: AdventurerClasses.Support,
    className: "Surgical Mage",
    bio: `On top of being an active member of the Church of the Holy Mother, Pendle Chilpin is one of the most acclaimed healing mages in all of Morton..`,
    clanId: "c8",
    nicknames: [],
    statusHistory: [],
    traits: [],
    questParties: [
      {
        lateAddition: true,
        partyId: "p1-q3-1",
        metrics: [
          {
            metricRuleId: MetricRuleId.AllyHealed,
            value: 2,
            rank: Ranks.B,
            week: 3,
          },
        ],
      },
      {
        partyId: "p1-q1-1",
        metrics: [
          {
            metricRuleId: MetricRuleId.AllyHealed,
            value: 2,
            rank: Ranks.B,
            week: 1,
          },
          {
            metricRuleId: MetricRuleId.AllyHealed,
            value: 3,
            rank: Ranks.C,
            week: 1,
          },
          {
            metricRuleId: MetricRuleId.AllyHealed,
            value: 2,
            rank: Ranks.D,
            week: 1,
          },
        ],
      },
    ],
  },
  {
    id: "a62",
    name: `Spicetro`,
    races: [AdventurerRaces.Spirit],
    rank: Ranks.E,
    class: AdventurerClasses.Support,
    className: "Capsaicinoid",
    bio: `"Spicy!"`,
    clanId: "c7",
    nicknames: [],
    statusHistory: [],
    traits: [],
    questParties: [
      {
        partyId: "p1-q3-4",
        metrics: [],
      },
      {
        partyId: "p1-q2-4",
        metrics: [
          {
            metricRuleId: MetricRuleId.AllyHealed,
            value: 1,
            rank: Ranks.C,
            week: 2,
          },
        ],
      },
      {
        partyId: "p1-q1-6",
        metrics: [],
      },
    ],
  },
  {
    id: "a63",
    name: `Barkskin Rhinokin`,
    races: [AdventurerRaces.Beastkin],
    rank: Ranks.C,
    class: AdventurerClasses.Defender,
    className: "Horned Barbarian",
    bio: `As long as he keeps his cool, he'll keep you safe.`,
    clanId: "c9",
    nicknames: [],
    statusHistory: [],
    traits: [],
    questParties: [
      {
        partyId: "p4-q3-8",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            rank: Ranks.D,
            value: 1,
            week: 3,
          },
        ],
      },
      {
        partyId: "p2-q2-3",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 2,
            rank: Ranks.D,
            week: 2,
          },
        ],
      },
      {
        partyId: "p2-q1-4",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 5,
            rank: Ranks.D,
            week: 1,
          },
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 2,
            rank: Ranks.C,
            week: 1,
          },
        ],
      },
    ],
  },
  {
    id: "a64",
    name: `Steve`,
    races: [AdventurerRaces.Human],
    rank: Ranks.E,
    class: AdventurerClasses.Attacker,
    className: "Puncher",
    bio: `He punches. That's it.`,
    clanId: "c9",
    statusHistory: [],
    nicknames: [],
    traits: [],
    questParties: [
      {
        partyId: "p5-q3-8",
        metrics: [],
      },
      {
        partyId: "p1-q2-5",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            rank: Ranks.E,
            value: 2,
            week: 2,
          },
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            rank: Ranks.D,
            value: 1,
            week: 2,
          },
        ],
      },
    ],
  },
  {
    id: "a65",
    name: `Freya Geisergard`,
    races: [AdventurerRaces.Dwarf],
    rank: Ranks.D,
    class: AdventurerClasses.Defender,
    className: "Hydrologer",
    bio: `Competent water and ice mage. Obsessed with local water quality.`,
    clanId: "c10",
    nicknames: [],
    statusHistory: [
      {
        startWeek: 4,
        status: AdventurerStatuses.Dead,
      },
    ],
    traits: [],
    questParties: [
      {
        partyId: "p1-q3-2",
        metrics: [
          {
            metricRuleId: MetricRuleId.Death,
            value: 1,
            week: 3,
          },
        ],
      },
      {
        partyId: "p1-q2-8",
        metrics: [],
      },
      {
        partyId: "p2-q1-7",
        lateAddition: true,
        metrics: [],
      },
    ],
  },
  {
    id: "a66",
    name: `Fleeting Whisp Landorin`,
    races: [AdventurerRaces.Elf],
    rank: Ranks.E,
    class: AdventurerClasses.Defender,
    className: "Waif Wall",
    bio: `What possessed this scrawny elf to become a front line defender after living for 276 years is anybody's guess.`,
    clanId: "c1",
    nicknames: [],
    statusHistory: [
      {
        status: AdventurerStatuses.Injured,
        startWeek: 2,
        endWeek: 2,
      },
    ],
    traits: [],
    questParties: [
      {
        partyId: "p5-q2-5",
        metrics: [],
      },
      {
        partyId: "p5-q1-7",
        metrics: [],
      },
    ],
  },
  {
    id: "a60",
    name: `Philagula`,
    races: [AdventurerRaces.Spirit],
    rank: Ranks.C,
    class: AdventurerClasses.Generalist,
    className: "Sentient Slime",
    bio: `Philagula is a sentient bacteria which can infect a host and take over its mind, however the host immune system will eventually adapt and Philagula must escape.`,
    clanId: "c10",
    nicknames: ["Phil"],
    statusHistory: [],
    traits: [],
    questParties: [
      {
        partyId: "p1-q3-2",
        metrics: [],
      },
      {
        partyId: "p1-q2-8",
        metrics: [],
      },
      {
        partyId: "p2-q1-7",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 2,
            rank: Ranks.C,
            week: 1,
          },
        ],
      },
    ],
  },
  {
    id: "a67",
    name: `Raphiel Di Carpio`,
    races: [AdventurerRaces.Human],
    rank: Ranks.E,
    class: AdventurerClasses.Generalist,
    className: "Actor",
    bio: `A pretty face who is often cast the hero in plays. Is convinced being a hero for real wouldn't be much different.`,
    nicknames: [],
    statusHistory: [],
    traits: [],
    questParties: [],
  },
]);
