import {
  IDbMetric,
  IDbQuest,
  IDbQuestParty,
  QuestClaimType,
  QuestStatus,
  QuestTypes,
} from "types/Quest";
import { Ranks } from "types/Ranks";

export interface IRawQuest extends IDbQuest {
  parties: IRawQuestParty[];
}

export interface IRawQuestParty extends Omit<IDbQuestParty, "questId"> {
  metrics: IDbMetric[];
}

export const rawQuests: IRawQuest[] = [
  // Week 5
  {
    id: 'q5-1',
    name:'Purify The Cemetery',
    reward: 10,
    postedWeek: 5,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Other,
    questRank: Ranks.B,
    postedBy: 'Sister Lasiter',
    description: `"Holy Mother bless us with your light. The bodies were not exhumed by any living hand, but are exhuming themselves. Currently the undead are contained within the cemetery walls, but I worry the gates won't hold of ever. Please be the blessed mother's purifying sword and put these souls to rest."`,
    // Composite
    parties:[
    ]
  },
  {
    id: 'q5-2',
    name: 'Slay the Mad God Jachectapolk',
    reward: 3000,
    postedWeek: 5,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Kill,
    questRank: Ranks.A,
    postedBy: 'Guildmaster Vahn',
    description: `"Hey! Shut it! Hey! Hey! Don't make me smash another table! QUIET! Yeah, so I'm sure you've all heard about the cult by now. The cult of Jaborkapek? Did I say it right? Japortachenk? Joborkapelt? Ja- whatever, it doesn't matter what they're called. They summoned their mad god. Classic cult thing. I need you all to do what you do best and Kill this damn thing!"`,
    // Composite
    parties:[
    ]
  },
  {
    id: 'q5-3',
    name: 'Keep the Chimeras Out',
    reward: 500,
    postedWeek: 5,
    claimType: QuestClaimType.Individual,
    questType: QuestTypes.Guard,
    questRank: Ranks.C,
    postedBy: 'Mayor Corque',
    description: `"You've spoken and I've heard you. You don't want to be devoured by horrible chimera monsters. I understand. I hope cowering for our lives from the amalgamated bodies for forest beasts can be viewed as an opportunity for growth as a community."`,
    // Composite
    parties:[
    ]
  },
  {
    id: 'q5-4',
    name: 'Deal with Jachectapolk Cultists',
    reward: 500,
    postedWeek: 5,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Kill,
    questRank: Ranks.B,
    postedBy: 'Guildmaster Vahn',
    description: `"Oh yeah! One more thing. The Jaterbajek... Jakerpapok... Jagoffadong whatever cultists. Gotta get rid of them along with the mad god."`,
    // Composite
    parties:[
    ]
  },
  {
    id: 'q5-5',
    name:'Free Mamut',
    reward: 5,
    postedWeek: 5,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Other,
    questRank: Ranks.A,
    postedBy: 'Elder K\'Tar',
    description: `"These Cultists have our forest god Mamut. In the sewers. The Azure wolf must be freed."`,
    // Composite
    parties:[
    ]
  },
  {
    id: 'q5-6',
    name:'A Nobel Retreat',
    reward: 5000,
    postedWeek: 5,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Guard,
    questRank: Ranks.A,
    postedBy: 'Cliff Vanderbliff',
    description:`"Get me out of here!"`,
    // Composite
    parties:[
    ]
  },

  // Week 4
  {
    id: 'q4-1',
    name:'Grave Robbers?',
    reward: 5,
    postedWeek: 4,
    claimType: QuestClaimType.Individual,
    questType: QuestTypes.Kill,
    questRank: Ranks.D,
    postedBy: 'Sister Lasiter',
    description: `"Something is amiss in the city Graveyard. Bodies have been exhumed. Please keep watch, and may the holy mother watch you."`,
    // Composite
    parties:[
    ]
  },
  {
    id: 'q4-2',
    name:'Where is Mamut?',
    reward: 5,
    postedWeek: 4,
    claimType: QuestClaimType.Individual,
    questType: QuestTypes.Kill,
    questRank: Ranks.D,
    postedBy: 'Elder K\'Tar',
    description: `"The Azure Wolf Father Mamut is no longer in the town square. He must be returned to the Sacred Grove, or things will only get worse."`,
    // Composite
    parties:[
    ]
  },
  {
    id: 'q4-3',
    name: 'Help from the capitol',
    reward: 300,
    postedWeek: 4,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Other,
    questRank: Ranks.B,
    postedBy: 'Mayor Corque',
    description: `"Everyone remain calm. I know. None of use want to be trapped inside the city walls. I hear you. We are sending some of our best to tell the capitol what's happening here."`,
    // Composite
    parties:[
    ]
  },
  {
    id: 'q4-4',
    name:'Remove A Pest',
    reward: 500,
    postedWeek: 4,
    claimType: QuestClaimType.Individual,
    questType: QuestTypes.Kill,
    questRank: Ranks.B,
    postedBy: 'Gorn Wigby',
    description: `"It appears the noisy gnat is spawning a brood. Those close to me are, not accustomed to such... discomfort. A talented (and discrete) pest handler would be well appreciated."`,
    // Composite
    parties:[
    ]
  }, 
  
  // Week 3
  {
    id: 'q3-1',
    name:'Capture Forest Monster',
    reward: 1500,
    postedWeek: 3,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Kill,
    questRank: Ranks.A,
    postedBy: 'Guildmaster Vahn',
    description: `The Adventurer Guild has found that there is an enraged monster in the center of the Norther Forest: A gigantic blue wolf. 
    Guildmanster Vahn: "Hey! Shut Up! Hey! HEY!... sorry I'll pay for that... Ok. Anyway. I'm sure you've heard about the giant wolf. It's berserk and attacking anything that moves. It's scared all of the monsters out of the forest. Count Vanderbliff would like to say something.
    Count Vanderbliff: "This monster must be stopped. It killed my people. However, I will match the guild reward if it is captured alive."`,
    // Composite
    parties:[
    ]
  },
  {
    id: 'q3-2',
    name:'Protect Sacred Grove',
    reward: 5,
    postedWeek: 3,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Guard,
    questRank: Ranks.C,
    postedBy: 'Elder K\'Tar',
    description: `There's corruption in the forest. I worry that it will reach the sacred grove.`,
    // Composite
    parties:[
    ]
  },
  {
    id: 'q3-3',
    name:'A Pesky Fly',
    reward: 100,
    postedWeek: 3,
    claimType: QuestClaimType.Individual,
    questType: QuestTypes.Kill,
    questRank: Ranks.C,
    postedBy: 'Gorn Wigby',
    description: `"There is a pesky fly buzzing by my ear... I would pay handsomely to have it swatted."`,
    // Composite
    parties:[
    ]
  },
  
  // Week 2
    {
      id: 'q2-1',
      name:'That\'s a big rat',
      reward: 100,
      postedWeek: 2,
      claimType: QuestClaimType.Clan,
      questType: QuestTypes.Kill,
      questRank: Ranks.B,
      postedBy: 'Mayor Corque',
      description: `"Ok, so the rats in the sewer... they combined into what people are telling me is a rat king. And it has, how do I put it diplomatically?... dispatched a couple adventurers and has doubled in size. Thankfully the nobles visiting from the capitol have been kind enough to foot the subjugation bill."`,
      // Composite
      parties:[
      ]
    },
    {
      id: 'q2-2',
      name:'Missing Retinue',
      reward: 300,
      postedWeek: 2,
      claimType: QuestClaimType.Clan,
      questType: QuestTypes.Fetch,
      questRank: Ranks.C,
      postedBy: 'Cliff Vanderbliff',
      description: `In transit from the Capitol to Morton, several members of the Counts Retinue went missing during a monster attack near the norther forest. "I wish to know their fate, and will pay a premium if their bodies are returned."`,
      // Composite
      parties:[
      ]
    },
    {
      id: 'q2-3',
      name:'Inspect The Northern Forest',
      reward: 100,
      postedWeek: 2,
      claimType: QuestClaimType.Individual,
      questType: QuestTypes.Other,
      questRank: Ranks.C,
      postedBy: 'Guildmaster Vahn',
      description: `The head of the adventurer guild addressed the increase in monsters to the North of town, "Hey! Attention! Listen up you crazy buggers! Sorry didn't mean to hit you with that... Anyway, something's up with the Forest. The monsters are moving out of the depths to the edges near the road. Heck Elder K'Tar even seen some greater porcubears from the east check point. Get out there and figure out what the heck is going on. No heroics. We just need info. This is on the guild's tab."`,
      // Composite
      parties:[
      ]
    },
  
  // Week 1
  {
    id: "q1-1",
    name: "A Noble Escort",
    reward: 500,
    postedWeek: 1,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Guard,
    questRank: Ranks.B,
    postedBy: "Cliff Vanderbliff",
    description: `A group of nobles lead Count Clifford Vanderbliff and their retinue will be from the capitol to Morton to attend the annual festival. They require, "A competent local guard detail. Must be an established party, in good reputation, with knowledge of regional dangers."`,
    // Composite
    parties: [
      {
        id: "p1-q1-1",
        startWeek: 1,
        status: QuestStatus.Claimed,
        // notes: string,
        // endWeek: number,
        clanId: "c6",
        metrics: [],
      },
    ],
  },
  {
    id: "q1-2",
    name: "Too Many Rats",
    reward: 100,
    postedWeek: 1,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Kill,
    questRank: Ranks.D,
    postedBy: "Mayor Corque",
    description: `"I hear you. We can't keep ignoring the sewer problem. The rats keep multiplying and getting bigger. They're attacking people in the street. Focus groups tell us this is not a great look for our town. We have to fix this before the Bounty Festival. What will people think if we have dog sized rats? One gold for every dead rat brought back this week."`,
    // Composite
    parties: [
      {
        id: "p1-q1-2",
        startWeek: 1,
        status: QuestStatus.Claimed,
        // notes: string,
        // endWeek: number,
        clanId: "c1",
        metrics: [],
      },
      {
        id: "p2-q1-2",
        startWeek: 1,
        status: QuestStatus.Claimed,
        // notes: string,
        // endWeek: number,
        clanId: "c1",
        metrics: [],
      },
    ],
  },
  {
    id: "q1-3",
    name: "Forest Shrine Maintenance",
    reward: 1,
    postedWeek: 1,
    claimType: QuestClaimType.Individual,
    questType: QuestTypes.Other,
    questRank: Ranks.E,
    postedBy: "Elder K'Tar",
    description: `"The Shrine to Mamut is falling apart. I am old. I need help repairing it."`,
    // Composite
    parties: [
      {
        id: "p1-q1-3",
        startWeek: 1,
        status: QuestStatus.Claimed,
        // notes: string,
        // endWeek: number,
        metrics: [],
      },
      {
        id: "p2-q1-3",
        startWeek: 1,
        status: QuestStatus.Claimed,
        // notes: string,
        // endWeek: number,
        metrics: [],
      },
    ],
  },
  {
    id: "q1-4.1",
    name: "Southern Merchant Caravan Escorts",
    reward: 100,
    postedWeek: 1,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Guard,
    questRank: Ranks.C,
    postedBy: "Trade Guild",
    description: `With the Festival coming up in a couple of weeks we capable parties to guard the wagons as they come in. Southern Caravan from the Port city of Serpentina.`,
    // Composite
    parties: [
      {
        id: "p1-q1-4",
        startWeek: 1,
        status: QuestStatus.Claimed,
        clanId: "c6",
        // endWeek: number,
        metrics: [],
      },
    ],
  },
  {
    id: "q1-4.2",
    name: "Eastern Merchant Caravan Escorts",
    reward: 150,
    postedWeek: 1,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Guard,
    questRank: Ranks.C,
    postedBy: "Trade Guild",
    description: `With the Festival coming up in a couple of weeks we capable parties to guard the wagons as they come in. Eastern Caravan: From the capitol.`,
    // Composite
    parties: [
      {
        id: "p2-q1-4",
        startWeek: 1,
        status: QuestStatus.Claimed,
        clanId: "c9",
        notes: "Eastern Caravan: From the capitol.",
        // endWeek: number,
        metrics: [],
      },
    ],
  },
  {
    id: "q1-4.3",
    name: "Western Merchant Caravan Escorts",
    reward: 100,
    postedWeek: 1,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Guard,
    questRank: Ranks.C,
    postedBy: "Trade Guild",
    description: `With the Festival coming up in a couple of weeks we capable parties to guard the wagons as they come in. Eastern Caravan: Western Caravan: From the mountains.`,
    // Composite
    parties: [
      {
        id: "p3-q1-4",
        startWeek: 1,
        clanId: "c5",
        status: QuestStatus.Claimed,
        // endWeek: number,
        metrics: [],
      },
    ],
  },
  {
    id: "q1-5",
    name: "Herb Gathering",
    reward: 50,
    postedWeek: 1,
    claimType: QuestClaimType.Individual,
    questType: QuestTypes.Fetch,
    questRank: Ranks.D,
    postedBy: "Church of the Holy Mother",
    description: `We're running low on medical herbs. reward depends upon the quality of the herbs obtained.`,
    // Composite
    parties: [
      {
        id: "p1-q1-5",
        startWeek: 1,
        status: QuestStatus.Claimed,
        // endWeek: number,
        metrics: [],
      },
      {
        id: "p2-q1-5",
        startWeek: 1,
        status: QuestStatus.Claimed,
        // endWeek: number,
        metrics: [],
      },
      {
        id: "p3-q1-5",
        startWeek: 1,
        status: QuestStatus.Claimed,
        // endWeek: number,
        metrics: [],
      },
    ],
  },
  {
    id: "q1-6",
    name: "Spice Quest",
    reward: 0,
    postedWeek: 1,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Fetch,
    questRank: Ranks.C,
    postedBy: "The Chairman",
    description: `To make the ultimate dish.: you need the ultimate spices!`,
    // Composite
    parties: [
      {
        id: "p1-q1-6",
        startWeek: 1,
        status: QuestStatus.Claimed,
        clanId: "c7",
        notes: "Southern Caravan: from the port/ocean.",
        // endWeek: number,
        metrics: [],
      },
    ],
  },
  {
    id: "q1-7",
    name: "Monster Management",
    reward: 200,
    postedWeek: 1,
    claimType: QuestClaimType.Individual,
    questType: QuestTypes.Kill,
    questRank: Ranks.C,
    postedBy: "Trade Guild",
    description: `Since we'll be having many people from the region coming to Morton we should make the roads safer by culling the local monster numbers.`,
    // Composite
    parties: [
      {
        id: "p1-q1-7",
        startWeek: 1,
        status: QuestStatus.Claimed,
        // endWeek: number,
        metrics: [],
      },
      {
        id: "p2-q1-7",
        startWeek: 1,
        status: QuestStatus.Claimed,
        // endWeek: number,
        metrics: [],
      },
      {
        id: "p3-q1-7",
        startWeek: 1,
        status: QuestStatus.Claimed,
        // endWeek: number,
        metrics: [],
      },
      {
        id: "p4-q1-7",
        startWeek: 1,
        status: QuestStatus.Claimed,
        // endWeek: number,
        metrics: [],
      },
    ],
  },
  {
    id: "q1-8",
    name: "A family heirloom",
    reward: 50,
    postedWeek: 1,
    claimType: QuestClaimType.Individual,
    questType: QuestTypes.Fetch,
    questRank: Ranks.C,
    postedBy: "Trimble Dinklesbean",
    description: `"Someone has purloined our a priceless timepiece of great sentimental value. How it makes its way back to me I do not care, nor will I ask."`,
    // Composite
    parties: [
      {
        id: "p1-q1-8",
        startWeek: 1,
        status: QuestStatus.Claimed,
        // endWeek: number,
        metrics: [],
      },
      {
        id: "p2-q1-8",
        startWeek: 1,
        status: QuestStatus.Claimed,
        // endWeek: number,
        metrics: [],
      },
    ],
  },
  {
    id: "q1-9",
    name: "Missing Pet",
    reward: 0,
    postedWeek: 1,
    claimType: QuestClaimType.Individual,
    questType: QuestTypes.Fetch,
    questRank: Ranks.E,
    postedBy: "Silky Bunnykin",
    description: `There's a child's drawing of a small, fuzzy, crying animal.`,
    // Composite
    parties: [
      {
        id: "p1-q1-9",
        startWeek: 1,
        status: QuestStatus.Claimed,
        // endWeek: number,
        metrics: [],
      },
    ],
  },
];


