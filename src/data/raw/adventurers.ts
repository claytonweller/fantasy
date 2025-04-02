import { AdventurerClasses, AdventurerRaces, AdventurerStatuses, IDbAdventurer } from "types/Adventurer";
import { IDbMetric, IDbQuestPartyAdventurer, MetricRuleId } from "types/Quest";
import { Ranks } from "types/Ranks";

export const rawAdventurers:IRawAdventurer[] = [
  {
    // DB - Adventurer
    id: 'a1',
    name: 'Gad',
    races: [AdventurerRaces.Human],
    nicknames: [],
    rank: Ranks.D,
    class: AdventurerClasses.Attacker,
    className: 'Ruffian',
    bio: 'Kind of a prick',
    status: [],
    traits: [],
    questParties: [
    //   {
    //     partyId: 'party2',
    //     metrics:[
    //       {
    //         metricRuleId: MetricRuleId.MonsterKill, 
    //         value: 3,
    //         rank: Ranks.D,
    //         week: 1
    //       }
    //     ]
    //   },
    //   {
    //     partyId: 'party5',
    //     metrics:[
    //       {
    //         metricRuleId: MetricRuleId.MonsterKill, 
    //         value: 1,
    //         rank: Ranks.E,
    //         week: 1
    //       },
    //       {
    //         metricRuleId: MetricRuleId.MonsterKill, 
    //         value: 2,
    //         rank: Ranks.D,
    //         week: 1
    //       }
    //     ]
    //   },
    ]
  },
  {
    id: 'a2',
    name: 'Elise Shadowthread',
    races: [AdventurerRaces.Human],
    nicknames: [],
    rank: Ranks.B,
    class: AdventurerClasses.Attacker,
    className: 'Assassin',
    bio: 'A spider catches her prey through patience and planning.',
    clanId: 'c2',
    status: [],
    traits: [],
    questParties: [
    ]
  },
  {
    id: 'a3',
    name: 'Tjorn Bone Crusher',
    races: [AdventurerRaces.Dwarf],
    nicknames: [],
    rank: Ranks.C,
    class: AdventurerClasses.Defender,
    className: 'Hammerman',
    bio: `Got bones? Tjorn'll crush'em.`,
    clanId: 'c2',
    status: [],
    traits: [],
    questParties: [
    ]
  },
  {
    id: 'a4',
    name: 'Marcus McStain',
    races: [AdventurerRaces.Human],
    nicknames: [],
    rank: Ranks.C,
    class: AdventurerClasses.Attacker,
    className: 'Sorcerer',
    bio: `Disowned 2nd son of the minor noble house, McStain.`,
    clanId: 'c2',
    status: [],
    traits: [],
    questParties: [
    ]
  },
  {
    id: 'a5',
    name: 'Chargla The Brave',
    races: [AdventurerRaces.Gnome, AdventurerRaces.Dwarf],
    nicknames: [],
    rank: Ranks.D,
    class: AdventurerClasses.Defender,
    className: 'Shield Masochist',
    bio: `She will always jump in the way of an arrow... Even if it's not heading for someone.`,
    clanId: 'c1',
    status: [],
    traits: [],
    questParties: [
    ]
  },
  {
    id: 'a6',
    name: 'Chiff Biffly',
    races: [AdventurerRaces.Gnome],
    rank: Ranks.C,
    class: AdventurerClasses.Support,
    className: 'Metalmancer',
    bio: `Loves making magical trinkets. (And garden paraphernalia)`,
    clanId: 'c5',
    nicknames: [],
    status: [],
    traits: [],
    questParties: [
    ]
  },
  {
    id: 'a7',
    name: `Sk'tar`,
    races: [AdventurerRaces.Spirit, AdventurerRaces.Human],
    rank: Ranks.C,
    class: AdventurerClasses.Support,
    className: 'Blood Bard',
    bio: `Lovely music. Morally vague. It's not a demon thing. Don't be racist.`,
    clanId: 'c2',
    nicknames: [],
    status: [],
    traits: [],
    questParties: [
    ]
  },
  {
    id: 'a8',
    name: `Sleek Wind Shay`,
    races: [AdventurerRaces.Elf],
    rank: Ranks.A,
    class: AdventurerClasses.Attacker,
    className: 'Huntress',
    bio: `There is no one swifter or deadlier with a bow.`,
    clanId: 'c3',
    nicknames: [],
    status: [],
    traits: [],
    questParties: [
    ]
  },
  {
    id: 'a9',
    name: `Vince Dawn`,
    races: [AdventurerRaces.Human, AdventurerRaces.Gnome],
    rank: Ranks.B,
    class: AdventurerClasses.Support,
    className: 'Trapper',
    bio: `Once caught an earth dragon alive. Didn't have a way to transport it. But he did catch it.`,
    clanId: 'c3',
    nicknames: [],
    status: [],
    traits: [],
    questParties: [
    ]
  },
  {
    id: 'a10',
    name: `Stoneclaw Bengalkin`,
    races: [AdventurerRaces.Beastkin],
    rank: Ranks.B,
    class: AdventurerClasses.Attacker,
    className: 'Weretiger Berserker',
    bio: `Metalfang's, twin sister. Usually doesn't completely lose control... Usually... Hopefully her brother is there to calm her down.`,
    clanId: 'c3',
    nicknames: [],
    status: [],
    traits: [],
    questParties: [
    ]
  },
  {
    id: 'a11',
    name: `Metalfang Bengalkin`,
    races: [AdventurerRaces.Beastkin],
    rank: Ranks.B,
    class: AdventurerClasses.Defender,
    className: 'Weretiger Sentry',
    bio: `Stoneclaw's twin brother. A wall of a man. Easily distracted.`,
    clanId: 'c3',
    nicknames: [],
    status: [],
    traits: [],
    questParties: [
    ]
  },
  {
    id: 'a12',
    name: `Tinky`,
    races: [AdventurerRaces.Spirit],
    rank: Ranks.D,
    class: AdventurerClasses.Defender,
    className: 'The Muscle',
    bio: `She's not smart. But she is big.`,
    nicknames: [],
    status: [],
    traits: [],
    questParties: [
    ]
  },
  {
    id: 'a13',
    name: `Tundrapaw Wolfkin`,
    races: [AdventurerRaces.Beastkin],
    rank: Ranks.D,
    class: AdventurerClasses.Attacker,
    className: 'Wolf Chef',
    bio: `Loves making soups.`,
    clanId: 'c7',
    nicknames: [],
    status: [],
    traits: [],
    questParties: [
    ]
  },
  {
    id: 'a14',
    name: `Fixer`,
    races: [AdventurerRaces.Unknown],
    rank: Ranks.B,
    class: AdventurerClasses.Support,
    className: 'The Fixer',
    bio: `You've made a mess. Fixer is here... for a fee`,
    clanId: 'c2',
    nicknames: [],
    status: [],
    traits: [],
    questParties: [
    ]
  },
  {
    id: 'a15',
    name: `Arc Northstar`,
    races: [AdventurerRaces.Human],
    rank: Ranks.A,
    class: AdventurerClasses.Defender,
    className: 'Star Paladin',
    bio: `Leader of the Blessed Sword Clan. He stands up for what's right and good, which of course are in no way subjective.`,
    clanId: 'c4',
    nicknames: [],
    status: [],
    traits: [],
    questParties: [
    ]
  },
  {
    id: 'a16',
    name: `Luna Stillgard`,
    races: [AdventurerRaces.Dwarf],
    rank: Ranks.B,
    class: AdventurerClasses.Support,
    className: 'Moon Healer',
    bio: `There is no more calming or nourishing presence than Luna. Though she can be a bit aloof.`,
    clanId: 'c4',
    nicknames: [],
    status: [],
    traits: [],
    questParties: [
    ]
  },
  {
    id: 'a17',
    name: `Dash Light Drea`,
    races: [AdventurerRaces.Elf],
    rank: Ranks.B,
    class: AdventurerClasses.Attacker,
    className: 'Dragoon',
    bio: `A spear like a bolt of lighting. Loves high places.`,
    clanId: 'c4',
    nicknames: [],
    status: [],
    traits: [],
    questParties: [
    ]
  },
  {
    id: 'a18',
    name: `Vicious Syd`,
    races: [AdventurerRaces.Human],
    rank: Ranks.E,
    class: AdventurerClasses.Generalist,
    className: 'Local Tough',
    bio: `Was the head of a gang of orphans.`,
    nicknames: [],
    status: [],
    traits: [],
    questParties: [
    ]
  },
  {
    id: 'a19',
    name: `Sheila Solara`,
    races: [AdventurerRaces.Human],
    rank: Ranks.C,
    class: AdventurerClasses.Generalist,
    className: 'The Fixer',
    bio: `The newest addition to the Blessed Sword Clan. She's young but shows great potential.`,
    clanId: 'c4',
    nicknames: [],
    status: [],
    traits: [],
    questParties: [
    ]
  },
  {
    id: 'a20',
    name: `Vlort`,
    races: [AdventurerRaces.Spirit],
    rank: Ranks.A,
    class: AdventurerClasses.Generalist,
    className: 'Primordial',
    bio: `Leader of the Mill clan. He was here before Morten was even a hamlet. Some say he was here before Heavens Cross was a country.`,
    clanId: 'c1',
    nicknames: [],
    status: [],
    traits: [],
    questParties: [
    ]
  },
  {
    id: 'a21',
    name: `Thorin Brassburn`,
    races: [AdventurerRaces.Dwarf],
    rank: Ranks.B,
    class: AdventurerClasses.Defender,
    className: 'Ancient Smith',
    bio: `Leader of the Clockwork Chisel clan. The good thing about being old as rocks is you know everything that can be made from them.`,
    clanId: 'c5',
    nicknames: [],
    status: [],
    traits: [],
    questParties: [
    ]
  },
  {
    id: 'a22',
    name: `Vivian Crestmor`,
    races: [AdventurerRaces.Human],
    rank: Ranks.B,
    class: AdventurerClasses.Support,
    className: 'Time Mage',
    bio: `Leader of the Radiantia Clan. The Crestmor family is the largest nobel house in Morton. In order for a child of the family to be in line for succession they must demonstrate prowess in Time manipulation magic. `,
    clanId: 'c6',
    nicknames: [],
    status: [],
    traits: [],
    questParties: [
    ]
  },
  {
    id: 'a23',
    name: `Carlsbad`,
    races: [AdventurerRaces.Spirit],
    rank: Ranks.D,
    class: AdventurerClasses.Attacker,
    className: 'Tooth Mage',
    bio: `Most mages carry tomes. Carlsbad carries a binder filled with fangs of various monsters.`,
    clanId: 'c1',
    nicknames: [],
    status: [],
    traits: [],
    questParties: [
    ]
  },
  {
    id: 'a24',
    name: `Corporal Margrave`,
    races: [AdventurerRaces.Human],
    rank: Ranks.D,
    class: AdventurerClasses.Attacker,
    className: 'Cavalier',
    bio: `Don't ask why he's and adventurer now.`,
    clanId: undefined,
    nicknames: [],
    status: [],
    traits: [],
    questParties: [
    ]
  },
  {
    id: 'a25',
    name: `Reginald Spintsmunge IV`,
    races: [AdventurerRaces.Human],
    rank: Ranks.D,
    class: AdventurerClasses.Attacker,
    className: 'Duelist',
    bio: `First son of Reginal Spintsmunge III. Owner of the fabled sword Needlewind. Undefeated duelist.`,
    clanId: 'c6',
    nicknames: [],
    status: [],
    traits: [],
    questParties: [
    ]
  },
  {
    id: 'a26',
    name: `Lydia Stiles`,
    races: [AdventurerRaces.Human],
    rank: Ranks.E,
    class: AdventurerClasses.Attacker,
    className: 'Boxer',
    bio: `Tired of fighting in the ring.`,
    clanId: 'c9',
    nicknames: [],
    status: [],
    traits: [],
    questParties: [
    ]
  },
  {
    id: 'a27',
    name: `Bjork Dragonsvein`,
    races: [AdventurerRaces.Dwarf],
    rank: Ranks.C,
    class: AdventurerClasses.Defender,
    className: 'Soul Miner',
    bio: `Sturdy hands. Swift pickaxe. Claims to be able to smell every metal known.`,
    clanId: 'c5',
    nicknames: [],
    status: [],
    traits: [],
    questParties: [
    ]
  },
  {
    id: 'a28',
    name: `Louis Lasiter`,
    races: [AdventurerRaces.Human],
    rank: Ranks.C,
    class: AdventurerClasses.Attacker,
    className: 'Noble Knight',
    bio: `The youngest son of the Lasiter house, which is known for public service. Louis wishes to prove himself as an adventurer and join the Kings Guard in the capitol some day.`,
    clanId: 'c6',
    nicknames: [],
    status: [],
    traits: [],
    questParties: [
    ]
  },
  {
    id: 'a29',
    name: `Frost Bough Elnar`,
    races: [AdventurerRaces.Elf],
    rank: Ranks.C,
    class: AdventurerClasses.Support,
    className: 'Apothecary',
    bio: `If a plant can be used for medicine, he's used it.`,
    clanId: 'c8',
    nicknames: [],
    status: [],
    traits: [],
    questParties: [
    ]
  },
  {
    id: 'a30',
    name: `Jan Fandle`,
    races: [AdventurerRaces.Human],
    rank: Ranks.D,
    class: AdventurerClasses.Generalist,
    className: 'Smooth talker',
    bio: `Somehow if feels right that she gets the lion's share`,
    clanId: 'c1',
    nicknames: [],
    status: [],
    traits: [],
    questParties: [
    ]
  },
  {
    id: 'a31',
    name: `Guy Norman`,
    races: [AdventurerRaces.Human],
    rank: Ranks.D,
    class: AdventurerClasses.Generalist,
    className: 'Mercenary',
    bio: `New to town.`,
    clanId: 'c1',
    nicknames: [],
    status: [],
    traits: [],
    questParties: [
    ]
  },
  {
    id: 'a32',
    name: `Moira Tabbykin`,
    races: [AdventurerRaces.Beastkin],
    rank: Ranks.D,
    class: AdventurerClasses.Generalist,
    className: 'Cat Burglar',
    bio: `Make sure you check our coinpurse.`,
    clanId: 'c1',
    nicknames: [],
    status: [],
    traits: [],
    questParties: [
    ]
  },
  {
    id: 'a33',
    name: `Clarna`,
    races: [AdventurerRaces.Spirit],
    rank: Ranks.C,
    class: AdventurerClasses.Support,
    className: 'Demon Alchemist',
    bio: `Demon spirits have their own chemistry. It doesn't always work as expected.`,
    clanId: 'c5',
    nicknames: [],
    status: [],
    traits: [],
    questParties: [
    ]
  },
  {
    id: 'a34',
    name: `Juniper Montrose`,
    races: [AdventurerRaces.Human],
    rank: Ranks.D,
    class: AdventurerClasses.Support,
    className: 'White mage apprentice',
    bio: `She's just started as an adventurer.`,
    clanId: 'c8',
    nicknames: [],
    status: [],
    traits: [],
    questParties: [
    ]
  },
  {
    id: 'a35',
    name: `Tad Faddler`,
    races: [AdventurerRaces.Gnome],
    rank: Ranks.E,
    class: AdventurerClasses.Support,
    className: 'Dirtmancer',
    bio: `"You got something in your eyes?! It's probably DIRT HAHAHAHAH!"`,
    clanId: 'c1',
    nicknames: [],
    status: [],
    traits: [],
    questParties: [
    ]
  },
  {
    id: 'a36',
    name: `??????`,
    races: [AdventurerRaces.Unknown],
    rank: Ranks.E,
    class: AdventurerClasses.Generalist,
    className: 'Mime',
    bio: `Anything you can do, They can do... also. --- They can also do anything you can do too. --- Yes they can. Yest they can. Yes they can.`,
    clanId: undefined,
    nicknames: [],
    status: [],
    traits: [],
    questParties: [
    ]
  },  
  {
    id: 'a37',
    name: `Ash Catsup`,
    races: [AdventurerRaces.Human],
    rank: Ranks.E,
    class: AdventurerClasses.Support,
    className: 'Beast Tamer',
    bio: `He's going to be the very best. The best there ever was.`,
    clanId: undefined, // TODO CLAN
    nicknames: [],
    status: [],
    traits: [],
    questParties: [
    ]
  },  
  {
    id: 'a38',
    name: `Axel Gearlywhirl`,
    races: [AdventurerRaces.Gnome, AdventurerRaces.Dwarf],
    rank: Ranks.C,
    class: AdventurerClasses.Support,
    className: 'Inventor',
    bio: `Constantly tinkering and creating new devices. They don't usually fail catastrophically... seriously. This one won't maim anyone.`,
    clanId: 'c5',
    nicknames: [],
    status: [],
    traits: [],
    questParties: [
    ]
  },  
  {
    id: 'a39',
    name: `Clara Kimberflorn`,
    races: [AdventurerRaces.Human],
    rank: Ranks.E,
    class: AdventurerClasses.Generalist,
    className: 'Squire maid',
    bio: `Sir Robin's squire. Also his maid.`,
    clanId: undefined, // TODO CLAN
    nicknames: [],
    status: [],
    traits: [],
    questParties: [
    ]
  },  
  {
    id: 'a40',
    name: `Mara Wright`,
    races: [AdventurerRaces.Human],
    rank: Ranks.A,
    class: AdventurerClasses.Attacker,
    className: 'Martial Arts Master',
    bio: `Master of the Explosive Fist style. Has trained many pupils, but currently has no successor.`,
    clanId: 'c9',
    nicknames: [],
    status: [],
    traits: [],
    questParties: [
    ]
  },
  {
    id: 'a41',
    name: `Sir Robin`,
    races: [AdventurerRaces.Human],
    rank: Ranks.D,
    class: AdventurerClasses.Defender,
    className: 'Brave Knight',
    bio: `Brave, brave sir Robin.`,
    clanId: undefined, // TODO CLAN
    nicknames: [],
    status: [],
    traits: [],
    questParties: [
    ]
  },
  {
    id: 'a42',
    name: `Diggle Biggly`,
    races: [AdventurerRaces.Gnome],
    rank: Ranks.E,
    class: AdventurerClasses.Support,
    className: 'Tooting Bard',
    bio: `He's out to prove everyone wrong. You can be bard and play the trumpet.`,
    clanId: 'c1',
    nicknames: [],
    status: [],
    traits: [],
    questParties: [
    ]
  },
  {
    id: 'a43',
    name: `Geoffrey Sonterfeld`,
    races: [AdventurerRaces.Human],
    rank: Ranks.C,
    class: AdventurerClasses.Attacker,
    className: 'Roguish Fancyman',
    bio: `His smile sparkles. His hair is fabulous. He knows just how to swing his cape.`,
    clanId: 'c6',
    nicknames: [],
    status: [],
    traits: [],
    questParties: [
    ]
  },
  {
    id: 'a44',
    name: `Goldorf the Old`,
    races: [AdventurerRaces.Human],
    rank: Ranks.E,
    class: AdventurerClasses.Generalist,
    className: 'Aged Wizard',
    bio: `His magic tome store has gone out of business. So despite being very old he has decided to become an adventurer.`,
    clanId: undefined, // TODO CLAN
    nicknames: [],
    status: [],
    traits: [],
    questParties: [
    ]
  },
  {
    id: 'a45',
    name: `Icenose Huskykin`,
    races: [AdventurerRaces.Beastkin],
    rank: Ranks.E,
    class: AdventurerClasses.Generalist,
    className: 'Sniff Scout',
    bio: `Just came of age. He has a great nose, and is very excited.`,
    clanId: undefined, // TODO CLAN
    nicknames: [],
    status: [],
    traits: [],
    questParties: [
    ]
  },
  {
    id: 'a46',
    name: `Julia Pepperschild`,
    races: [AdventurerRaces.Dwarf],
    rank: Ranks.C,
    class: AdventurerClasses.Defender,
    className: 'Iron Chef',
    bio: `Because of their constitution dwarves are known to be able to eat food that's nearly inedible. But this wasn't enough for Julia. She studied for years in a faraway land to become a great chef.`,
    clanId: 'c7',
    nicknames: [],
    status: [],
    traits: [],
    questParties: [
    ]
  },
  {
    id: 'a47',
    name: `P'Tark`,
    races: [AdventurerRaces.Spirit],
    rank: Ranks.E,
    class: AdventurerClasses.Attacker,
    className: 'Shade Warrior',
    bio: `P'Tark is a shade spirit. If it gets too bright he looses his form.`,
    clanId: undefined, // TODO CLAN
    nicknames: [],
    status: [],
    traits: [],
    questParties: [
    ]
  },
  {
    id: 'a48',
    name: `Bushi Raccoonkin`,
    races: [AdventurerRaces.Beastkin],
    rank: Ranks.D,
    class: AdventurerClasses.Attacker,
    className: 'Fruit Ninja',
    bio: `Can a vegetable peeler be used to kill a man? Absolutely. But Pamela has given that up for a simpler life.`,
    clanId: 'c7',
    nicknames: [],
    status: [],
    traits: [],
    questParties: [
    ]
  },
  {
    id: 'a49',
    name: `Squeakela Mousekin`,
    races: [AdventurerRaces.Dwarf],
    rank: Ranks.E,
    class: AdventurerClasses.Support,
    className: 'Tiny Dancer',
    bio: `As hard to his as she is cute.`,
    clanId: undefined, // TODO CLAN
    nicknames: [],
    status: [],
    traits: [],
    questParties: [
    ]
  },
  {
    id: 'a50',
    name: `The Chairman`,
    races: [AdventurerRaces.Unknown],
    rank: Ranks.C,
    class: AdventurerClasses.Generalist,
    className: 'Gourmand',
    bio: `Leader and financier of the Crockpot Clan. Little is known about the chairman other than his love for food.`,
    clanId: 'c7',
    nicknames: [],
    status: [],
    traits: [],
    questParties: [
    ]
  },
]

export interface IRawAdventurer extends IDbAdventurer{
  questParties: IRawParty[]
}

export interface IRawParty extends Omit<IDbQuestPartyAdventurer, "id" | 'adventurerId'> {
  metrics: IDbMetric[]
}