import {
  IDbMetric,
  IDbQuest,
  IDbQuestParty,
  MetricRuleId,
  QuestClaimType,
  QuestStatus,
  QuestTypes,
} from "types/Quest";
import { Ranks } from "types/Ranks";
import { shuffleQuestsByWeek } from "utils/shuffleQuestsByWeek";

export interface IRawQuest extends IDbQuest {
  parties: IRawQuestParty[];
}

export interface IRawQuestParty extends Omit<IDbQuestParty, "questId"> {
  metrics: IDbMetric[];
}

export const rawQuests: IRawQuest[] = shuffleQuestsByWeek([
  // Week 5
  {
    id: "q5-1",
    name: "Purify The Cemetery",
    reward: 10,
    postedWeek: 5,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Other,
    questRank: Ranks.B,
    postedBy: "Sister Lasiter",
    description: `"Holy Mother bless us with your light. The bodies were not exhumed by any living hand, but are exhuming themselves. Currently the undead are contained within the cemetery walls, but I worry the gates won't hold of ever. Please be the blessed mother's purifying sword and put these souls to rest."`,

    parties: [],
  },
  {
    id: "q5-2",
    name: "Slay the Mad God Jachectapolk",
    reward: 3000,
    postedWeek: 5,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Kill,
    questRank: Ranks.A,
    postedBy: "Guildmaster Vahn",
    description: `"Hey! Shut it! Hey! Hey! Don't make me smash another table! QUIET! Yeah, so I'm sure you've all heard about the cult by now. The cult of Jaborkapek? Did I say it right? Japortachenk? Joborkapelt? Ja- whatever, it doesn't matter what they're called. They summoned their mad god. Classic cult thing. I need you all to do what you do best and Kill this damn thing!"`,

    parties: [],
  },
  {
    id: "q5-3",
    name: "Keep the Chimeras Out",
    reward: 500,
    postedWeek: 5,
    claimType: QuestClaimType.Individual,
    questType: QuestTypes.Guard,
    questRank: Ranks.C,
    postedBy: "Mayor Corque",
    description: `"You've spoken and I've heard you. You don't want to be devoured by horrible chimera monsters. I understand. I hope cowering for our lives from the amalgamated bodies for forest beasts can be viewed as an opportunity for growth as a community."`,

    parties: [],
  },
  {
    id: "q5-4",
    name: "Deal with Jachectapolk Cultists",
    reward: 500,
    postedWeek: 5,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Kill,
    questRank: Ranks.B,
    postedBy: "Guildmaster Vahn",
    description: `"Oh yeah! One more thing. The Jaterbajek... Jakerpapok... Jagoffadong whatever cultists. Gotta get rid of them along with the mad god."`,

    parties: [],
  },
  {
    id: "q5-5",
    name: "Free Mamut",
    reward: 5,
    postedWeek: 5,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Other,
    questRank: Ranks.A,
    postedBy: "Elder K'Tar",
    description: `"These Cultists have our forest god Mamut. In the sewers. The Azure wolf must be freed."`,

    parties: [],
  },
  {
    id: "q5-6",
    name: "A Nobel Retreat",
    reward: 5000,
    postedWeek: 5,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Guard,
    questRank: Ranks.A,
    postedBy: "Cliff Vanderbliff",
    description: `"Get me out of here!"`,

    parties: [],
  },

  // Week 4
  {
    id: "q4-1",
    name: "Grave Robbers?",
    reward: 5,
    postedWeek: 4,
    claimType: QuestClaimType.Individual,
    questType: QuestTypes.Kill,
    questRank: Ranks.D,
    postedBy: "Sister Lasiter",
    description: `"Something is amiss in the city Graveyard. Bodies have been exhumed. Please keep watch, and may the holy mother watch you."`,

    parties: [],
  },
  {
    id: "q4-2",
    name: "Where is Mamut?",
    reward: 5,
    postedWeek: 4,
    claimType: QuestClaimType.Individual,
    questType: QuestTypes.Kill,
    questRank: Ranks.D,
    postedBy: "Elder K'Tar",
    description: `"The Azure Wolf Father Mamut is no longer in the town square. He must be returned to the Sacred Grove, or things will only get worse."`,

    parties: [],
  },
  {
    id: "q4-3",
    name: "Help from the capitol",
    reward: 300,
    postedWeek: 4,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Other,
    questRank: Ranks.B,
    postedBy: "Mayor Corque",
    description: `"Everyone remain calm. I know. None of use want to be trapped inside the city walls. I hear you. We are sending some of our best to tell the capitol what's happening here."`,

    parties: [],
  },
  {
    id: "q4-4",
    name: "Remove A Pest",
    reward: 500,
    postedWeek: 4,
    claimType: QuestClaimType.Individual,
    questType: QuestTypes.Kill,
    questRank: Ranks.B,
    postedBy: "Gorn Wigby",
    description: `"It appears the noisy gnat is spawning a brood. Those close to me are, not accustomed to such... discomfort. A talented (and discrete) pest handler would be well appreciated."`,

    parties: [],
  },

  // Week 3
  {
    id: "q3-1",
    name: "Capture Forest Monster",
    reward: 1500,
    postedWeek: 3,
    expireWeek: 3,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Kill,
    questRank: Ranks.A,
    postedBy: "Guildmaster Vahn",
    description: `The Adventurer Guild has found that there is an enraged monster in the center of the Norther Forest: A gigantic blue wolf. 
    Guildmanster Vahn: "Hey! Shut Up! Hey! HEY!... sorry I'll pay for that... Ok. Anyway. I'm sure you've heard about the giant wolf. It's berserk and attacking anything that moves. It's scared all of the monsters out of the forest. Count Vanderbliff would like to say something.
    Count Vanderbliff: "This monster must be stopped. It killed my people. However, I will match the guild reward if it is captured alive."`,
    parties: [
      {
        id: "p1-q3-1",
        startWeek: 3,
        notes:
          "If there was ever a quest for Mythril trap this was it. They would have gone to hunt the giant wolf even if there were no reward. They set out and immediately caught signs of it. Broken trees. Scattered bodies. Shay tracked the beast and vince laid traps. Everything was going according to plan. The snared beast and began hitting it with paralyzing and sleep arrows. But as it was looking like it would go down without much of a fight, the blue beast broke suddenly sent white hot bolts of plasma out from its body, completely ripping loose from the snares. Metalfang stepped in just in time to protect the rest of the party, and was knocked briefly unconscious, seeing this his sister went into a blind rage. The monster's electric blast had obviously taken the last of its energy. Vince shouted about needing to keep the beast alive. But Stoneclaw was was about to end it. Metalfang had regained his senses and jumped to hold his sister back before the killing blow. She kept lashing, severely wounding her brother and Vince in the process. In the end Brother Chilpin who they had paid to wait by the edge of the forest for just such an occasion patched them up. They brought the beast in and it was displayed in a giant electric proof cage at the closing night of the festival.",
        status: QuestStatus.Success,
        clanId: "c3",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 1,
            rank: Ranks.A,
            week: 3,
          },
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 3000,
            week: 3,
          },
        ],
      },
    ],
  },
  {
    id: "q3-2",
    name: "Protect Sacred Grove",
    reward: 15,
    postedWeek: 3,
    expireWeek: 3,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Guard,
    questRank: Ranks.C,
    postedBy: "Elder K'Tar",
    description: `"Corruption spreads in the forest. I worry that it will reach the sacred grove."`,
    parties: [
      {
        id: "p1-q3-2",
        startWeek: 3,
        notes: `The Verdant Glade set out for the Northern forest. After their disturbing experience in the mystic spring they had earned enough of Elder K'Tar's trust to be taken deep in to the forest to the grove. Upon their arrival the Elder said, "There's no sign of Mamut. He nev-" suddenly magic pits appeared below both him and Tall Pine Marlon. In a split second Freya jumped to push K'Tar out of the way. The magic void snapped shut cutting her instantly in half, leaving only her torso. Marlon avoided a similar fate with an instant vine net. They were then attacked by people in dark orange and purple robes. It was a close fight but the Verdant Glade come out on top, keeping the Elder safe. The remaining attackers fled after seeing their compatriots crushed by an ancient birch, including the mage who set the trap in the first place. Tall Pine wept when he saw that the Giant Father tree of the grove had been bored out in the middle and black ooze was dripping out of it.`,
        status: QuestStatus.Failed,
        clanId: "c10",
        metrics: [
          {
            metricRuleId: MetricRuleId.QuestFailed,
            rank: Ranks.C,
            value: 1,
            week: 3,
          },
          {
            metricRuleId: MetricRuleId.TrapTriggered,
            value: 2,
            week: 3,
          },
          {
            metricRuleId: MetricRuleId.CivilianSaved,
            value: 1,
            week: 3,
          },
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 15,
            week: 3,
          },
        ],
      },
    ],
  },
  {
    id: "q3-3",
    name: "A Pesky Fly",
    reward: 100,
    postedWeek: 3,
    expireWeek: 3,
    claimType: QuestClaimType.Individual,
    questType: QuestTypes.Kill,
    questRank: Ranks.C,
    postedBy: "Gorn Wigby",
    description: `"There is a pesky fly buzzing by my ear... I would pay handsomely to have it swatted."`,
    parties: [
      {
        id: "p1-q3-3",
        startWeek: 3,
        notes: `Marcus returned to the guild hall limping, surly, and covered in leaves.`,
        status: QuestStatus.Failed,
        clanId: "c2",
        metrics: [
          {
            metricRuleId: MetricRuleId.QuestFailed,
            rank: Ranks.C,
            value: 1,
            week: 3,
          },
        ],
      },
    ],
  },
  {
    id: "q3-4",
    name: "Allez Cuisine!",
    reward: 130,
    postedWeek: 3,
    expireWeek: 3,
    claimType: QuestClaimType.Individual,
    questType: QuestTypes.Other,
    questRank: Ranks.C,
    postedBy: "The Chairman",
    description: `It's a cook off! Julia Pepperschild, the iron chef is taking on any challengers. At the festival. The "Who's cuisine will reign supreme?!"`,
    parties: [
      {
        id: "p1-q3-4",
        startWeek: 3,
        notes:
          "The iron chef has held on to her title for another year. It was a fierce final match with the Brass Saucier of Serpentina, but Julia's cockatrice shank with gelatinous cube demi-glace was a revelation. She may have been the only champion, but the judges agree that no one was a loser.",
        status: QuestStatus.Success,
        clanId: "c7",
        metrics: [
          {
            metricRuleId: MetricRuleId.RewardGold,
            rank: Ranks.C,
            value: 130,
            week: 3,
          },
        ],
      },
    ],
  },
  {
    id: "q3-5",
    name: "Peace Time? NO! Time Piece Revenge!",
    reward: 150,
    postedWeek: 3,
    expireWeek: 3,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Fetch,
    questRank: Ranks.D,
    postedBy: "Trimble Dinklesbean",
    description: `"Get me that damn watch!"`,
    parties: [
      {
        id: "p1-q3-5",
        startWeek: 3,
        notes: `Trimble, bandaged from being mugged by Gad last week, approached Jan directly about the request. She returned the watch in the first two weeks ago after all. But while they were talking Syd showed up, "Ah it's the guild lady! Where's my money?". Simultaneously down the street Gad tracked down Moira who he heard stole the watch form him. Moira spotted him coming and immediately ran away. As she was dashing by she saw Jan, "Hey! Servant lady, You didn't tell the guild and I didn't get my reward!" Jan was uncharacteristically speechless then Trimble recognizes Gad running his way, "The mugger! Guards!" Gad, enraged, tries to throw a knife at Moira, it misses and hits Mr. Dinklesbean right in between the eyes killing him instantly. The guards showed up to see this, "All of you are under arrest!" A brief pause... then Jan exclaimed, "Guards! Thank goodness you're here! These ruffians killed my husband!" Another pause... All the other adventurers bolted off in different directions. One by one Fixer grabbed them and brought them to a safe house. He then fixed the problem.`,
        status: QuestStatus.Failed,
        metrics: [
          {
            metricRuleId: MetricRuleId.QuestFailed,
            rank: Ranks.D,
            value: 1,
            week: 3,
          },
        ],
      },
    ],
  },
  {
    id: "q3-6.1",
    name: "Where is my husband?",
    reward: 10,
    postedWeek: 3,
    claimType: QuestClaimType.Individual,
    questType: QuestTypes.Fetch,
    questRank: Ranks.D,
    postedBy: "Cynthia Durkle",
    description: `My husband Charles hasn't been home in a week. Last I heard he was heading out to the sawmill.`,
    parties: [],
  },
  {
    id: "q3-7",
    name: "Extra Festival Security",
    reward: 300,
    postedWeek: 3,
    expireWeek: 3,
    claimType: QuestClaimType.Individual,
    questType: QuestTypes.Guard,
    questRank: Ranks.C,
    postedBy: "Trade guild",
    description: `It's going to be busy in Morton this week with the festival. We'll need capable people to guard the merchants and their wares.`,
    parties: [
      {
        id: "p1-q3-7",
        startWeek: 3,
        notes: "Louis walked some drunks home. Vivian stopped a mugging.",
        status: QuestStatus.Success,
        clanId: "c6",
        metrics: [
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 150,
            week: 3,
          },
        ],
      },
      {
        id: "p2-q3-7",
        startWeek: 3,
        notes:
          "Sheila stymied some would be burglars at the accessory shop. Drea's presence at the city square was enough to keep even the surliest of partiers in line.",
        status: QuestStatus.Success,
        clanId: "c4",
        metrics: [
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 150,
            week: 3,
          },
        ],
      },
    ],
  },
  {
    id: "q3-8",
    name: "Bounty Battle",
    reward: 500,
    postedWeek: 3,
    expireWeek: 3,
    claimType: QuestClaimType.Individual,
    questType: QuestTypes.Other,
    questRank: Ranks.S,
    postedBy: "The Bureau for a Better Bounty Battle",
    description: `One of the big draws the the Morton Bounty Festival is the one on one fighting tournament. It's a winner takes all event, and happens over the course of the week. Anyone can enter regardless of their skill, rank, social status, or race. Everyone has the right to get kicked in the head.`,
    parties: [
      {
        id: "p1-q3-8",
        startWeek: 3,
        notes:
          "Ken was expected to beat Sir Robin in the first round, but he loses his fight with the knight's maid squire, Clara, instead. He recognizes her right away, and does not seem surprised to lose.",
        status: QuestStatus.Failed,
        clanId: "c9",
        metrics: [
          {
            metricRuleId: MetricRuleId.QuestFailed,
            rank: Ranks.D,
            value: 1,
            week: 3,
          },
        ],
      },
      {
        id: "p2-q3-8",
        startWeek: 3,
        notes:
          "Fissure was far and away the favorite to win this year's tournament, most fighters can't even hit her. Fissure beat Lydia and Barkskin to make it to the finals against Clara. Before the match she gave a questioning glance to Mara. Mara just nodded, and Fissure shrugged and got in position.",
        status: QuestStatus.Failed,
        clanId: "c9",
        metrics: [
          {
            metricRuleId: MetricRuleId.QuestFailed,
            rank: Ranks.D,
            value: 1,
            week: 3,
          },
        ],
      },
      {
        id: "p3-q3-8",
        startWeek: 3,
        notes:
          "Lydia was put up against Fissure in the first round. She left the ring covered in tiny bruises.",
        status: QuestStatus.Failed,
        clanId: "c9",
        metrics: [
          {
            metricRuleId: MetricRuleId.QuestFailed,
            rank: Ranks.D,
            value: 1,
            week: 3,
          },
        ],
      },
      {
        id: "p4-q3-8",
        startWeek: 3,
        notes:
          "Barkskin beat Shelly in the first round. But he couldn't land a single hit on Fissure. It took a while, but eventually he forfeited the round after being blinded and deafened by 4 precise strikes from the pixie.",
        status: QuestStatus.Failed,
        clanId: "c9",
        metrics: [
          {
            metricRuleId: MetricRuleId.QuestFailed,
            rank: Ranks.D,
            value: 1,
            week: 3,
          },
        ],
      },
      {
        id: "p5-q3-8",
        startWeek: 3,
        notes:
          "Steve tried to punch Geoffrey. Geoffrey dodged. Steve couldn't punch out a win today.",
        status: QuestStatus.Failed,
        clanId: "c9",
        metrics: [
          {
            metricRuleId: MetricRuleId.QuestFailed,
            rank: Ranks.D,
            value: 1,
            week: 3,
          },
        ],
      },
      {
        id: "p6-q3-8",
        startWeek: 3,
        notes: `Right before his match with Ken, Sir Robin claimed to have a terrible bout of indigestion. Mara looked at Clara and crossed her arms. The maid squire grumbled, "You never said which one of us had to win." Then she stepped in the ring. After beating Ken & Geoffrey soundly she set off against fissure. The fight was almost to fast for people to see. Clara's left arm and leg were quick paralyzed. But then at the last moment the Fissure went flying out of the ring and smashed into a wall. Clara scowled at Mara, grabbed her bag of gold and ran off without a word.`,
        status: QuestStatus.Success,
        clanId: "c1",
        metrics: [
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 500,
            week: 3,
          },
        ],
      },
      {
        id: "p7-q3-8",
        startWeek: 3,
        notes: `Geoffrey beat punching Steve in the first round. In the second round he was against Clara Kimberflorn. He began the match by saying, "Surely you jest! It wouldn't be right for me to fight such a delicate flow-." He awoke 10 minutes later missing a tooth.`,
        status: QuestStatus.Failed,
        clanId: "c6",
        metrics: [
          {
            metricRuleId: MetricRuleId.QuestFailed,
            rank: Ranks.D,
            value: 1,
            week: 3,
          },
        ],
      },
      {
        id: "p8-q3-8",
        startWeek: 3,
        notes:
          "Shelly and Barkskin had the longest match of the night. It was an endurance contest, and Shelly gave out in the end. Though she stayed around as healed all the fighters after their matches. ",
        status: QuestStatus.Failed,
        clanId: "c8",
        metrics: [
          {
            metricRuleId: MetricRuleId.QuestFailed,
            rank: Ranks.D,
            value: 1,
            week: 3,
          },
        ],
      },
    ],
  },
  {
    id: "q3-9",
    name: "Adventurer guild sales squad",
    reward: 0,
    postedWeek: 3,
    expireWeek: 3,
    claimType: QuestClaimType.Individual,
    questType: QuestTypes.Other,
    questRank: Ranks.S,
    postedBy: "Adventurer guild",
    description: `The Adventurer guild has a prominent position in town right off the town square. Every year during the Bounty Festival they allow adventurers to use the space for selling monster parts, items they've crafted or found, or to perform. The Guild takes a flat fee plus a small percentage of all income. Any Rank adventurer can participate.`,
    parties: [
      {
        id: "p1-q3-9",
        startWeek: 3,
        notes:
          "This was Clockwork Chisels time to shine. And shone they did! Their products were completely sold out by the end of the week.",
        status: QuestStatus.Success,
        clanId: "c5",
        metrics: [],
      },
      {
        id: "p2-q3-9",
        startWeek: 3,
        notes:
          "The mime was creeping everyone out. But then they joined in perfectly with the Duffenklampf twins in their sword dance. Applause abounding.",
        status: QuestStatus.Success,
        metrics: [],
      },
      {
        id: "p3-q3-9",
        startWeek: 3,
        notes:
          "Derb's army of dancing rats disgusted and delighted in equal measure.",
        status: QuestStatus.Success,
        clanId: "c1",
        metrics: [],
      },
      {
        id: "p4-q3-9",
        startWeek: 3,
        notes:
          "Elnar made very good money selling potions this year. The aphrodisiacs were particularly popular.",
        status: QuestStatus.Success,
        clanId: "c8",
        metrics: [],
      },
      {
        id: "p5-q3-9",
        startWeek: 3,
        notes:
          "The twins are know for their perfectly sync'd movements but no one knew they were so graceful.",
        status: QuestStatus.Success,
        clanId: "c8",
        metrics: [
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 100,
            week: 3,
          },
        ],
      },
    ],
  },

  // Week 2
  {
    id: "q2-1",
    name: "That's a big rat(s?)",
    reward: 200,
    postedWeek: 2,
    expireWeek: 2,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Kill,
    questRank: Ranks.B,
    postedBy: "Mayor Corque",
    description: `"Ok, so the rats in the sewer... they combined into what people are telling me is a rat king. And it has, how do I put it diplomatically?... dispatched a couple adventurers and has doubled in size. Thankfully the nobles visiting from the capitol have been kind enough to foot the subjugation bill."`,
    parties: [
      {
        id: "p1-q2-1",
        startWeek: 2,
        notes:
          "The Mythril trap went to the section of the sewer where the previous parties had gotten surrounded and initially found nothing. Not even the typical rats. But after a bit of searching they began to hear the sound of music in the distance. They followed it and eventually came to a large chamber that looked more like an entrance to a ruin than a sewer. In the corner of the chamber was a mountain of rats slowly swaying to the sound of a weakly playing trumpet. An exhausted, Derb Alperd poked his head around the rodent mound and when he saw the other adventurers he shouted in delight. In that moment The Rats coalesced into the shape of a giant rat, hissed, andwa swarmed the emaciated bard. The Mythril Trap adventurers leapt into action and subdued the Rat King.",
        status: QuestStatus.Success,
        clanId: "c3",
        metrics: [
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 100,
            week: 2,
          },
        ],
      },
    ],
  },
  {
    id: "q2-2",
    name: "Missing Retinue",
    reward: 300,
    postedWeek: 2,
    expireWeek: 2,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Fetch,
    questRank: Ranks.C,
    postedBy: "Cliff Vanderbliff",
    description: `In transit from the Capitol to Morton, several members of the Counts Retinue went missing during a monster attack near the northern forest. "I wish to know their fate, and will pay a premium if their bodies are returned."`,
    parties: [
      {
        id: "p1-q2-2",
        startWeek: 2,

        notes:
          "After the abysmal performance of the Radiantia Clan, Count Vanderbliff was approached by Marcus McStain, and proposed finding the missing retinue. They started where the attack happened and went north from there into the forest. There a couple signs: a blood trail here. Some torn silk there. They all lead deeper into the forest. There's the sound of screaming, and a one of the missing nobles rushes out. He's soon followed by splintering trees as a gigantic blue and white wolf beast the size of a building bursts forth. The party escapes, worse for wear. The Noble does not. They wait for the wolf to leave, and go back to the clearing and retrieve whats left of the body. The count says little upon their return and pays them the agreed reward.",
        status: QuestStatus.Success,
        clanId: "c2",
        metrics: [
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 300,
            week: 2,
          },
          {
            metricRuleId: MetricRuleId.CiviliansDead,
            value: 1,
            week: 2,
          },
        ],
      },
    ],
  },
  {
    id: "q2-3",
    name: "Inspect The Northern Forest",
    reward: 200,
    postedWeek: 2,
    expireWeek: 2,
    claimType: QuestClaimType.Individual,
    questType: QuestTypes.Other,
    questRank: Ranks.B,
    postedBy: "Guildmaster Vahn",
    description: `The head of the adventurer guild addressed the increase in monsters to the North of town, "Hey! Attention! Listen up you crazy buggers! Oh! Sorry didn't mean to hit you with that... Anyway, something's up with the Forest. The monsters are moving out of the depths to the edges near the road. Heck Vince Dawn even caught a greater porcubears near the east check point. Get out there and figure out what the heck is going on. No heroics. We just need info. This is on the guild's tab."`,
    parties: [
      {
        id: "p1-q2-3",
        startWeek: 2,
        notes:
          "Shiela and Arc set off into the woods. Other than the oddly aggressive beasts, they didn't find anything of note, but they lost track of time and had to set up camp for the night. In a brief moment when Shiela nodded off during her turn as watch they were ambushed. Arc immediately took care of all of the assailants, before Sheila could even wake up. He thought they were beasts, but realized they were people dressed in monster hides.",
        status: QuestStatus.Success,
        clanId: "c4",
        metrics: [
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 50,
            week: 2,
          },
        ],
      },
      {
        id: "p2-q2-3",
        startWeek: 2,
        notes:
          "Barkskin and Fissure decided to check the lumber yard and the mill. They were completely deserted. Planks were left half cut in the rain, and tools were strewn around on the ground. A couple of nearby trees look like they had been ripped out of the ground.",
        status: QuestStatus.Success,
        clanId: "c9",
        metrics: [
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 50,
            week: 2,
          },
        ],
      },
      {
        id: "p3-q2-3",
        startWeek: 2,
        notes:
          "Vivian is determined to redeem herself and show that she is worthy of her position as the heir to the Crestmor family. She hired Norn to accompany her. Geoffrey insisted he come along for their safety. Geoffrey returned considerably later than the two women. They reported seeing blood on the trees and a few eviscerated monster corpses.",
        status: QuestStatus.Success,
        clanId: "c6",
        metrics: [
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 75,
            week: 2,
          },
        ],
      },
    ],
  },
  {
    id: "q2-4",
    name: "Protein Quest",
    reward: 0,
    postedWeek: 2,
    expireWeek: 2,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Fetch,
    questRank: Ranks.C,
    postedBy: "The Chairman",
    description: `To make the ultimate dish: you need the choicest centerpieces! This weeks featured ingredient is... Fish!`,
    parties: [
      {
        id: "p1-q2-4",
        startWeek: 2,
        notes:
          "After much splishing they subdued the vicious but delicious fishious Pescadomos!",
        status: QuestStatus.Success,
        clanId: "c7",
        metrics: [],
      },
    ],
  },
  {
    id: "q2-5",
    name: "Trouble in the Burbs",
    reward: 70,
    postedWeek: 2,
    expireWeek: 3,
    claimType: QuestClaimType.Individual,
    questType: QuestTypes.Guard,
    questRank: Ranks.D,
    postedBy: "The Town Guard",
    description: `Morton has grown quite a bit since the city wall was erected. So now many of the townsfolk are living outside. With the increased Beast activity from the North the guards are spread thin.`,
    parties: [
      {
        id: "p1-q2-5",
        startWeek: 2,
        notes:
          "Steve punched a hole in a slime. Steve punched a hole in a moncoon. Steve punched a hole in a blade deer. Steve accidentally punched a hole in a house.",
        status: QuestStatus.Success,
        clanId: "c9",
        metrics: [
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 15,
            week: 2,
          },
          {
            metricRuleId: MetricRuleId.CostsOrDamages,
            value: 7,
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
        id: "p2-q2-5",
        startWeek: 2,
        notes:
          "There were a lot of extra monsters. Guy had no problem dispatching them. He also saved a couple of village kids trapped in a barley field.",
        status: QuestStatus.Success,
        clanId: "c1",
        metrics: [
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 15,
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
        id: "p3-q2-5",
        startWeek: 2,
        notes:
          "Margrave was followed by a mime. Every time he killed a monster the mime killed one too.",
        status: QuestStatus.Success,
        metrics: [
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 30,
            week: 2,
          },
        ],
      },
      {
        id: "p4-q2-5",
        startWeek: 3,
        notes: "TODO - Guy",
        status: QuestStatus.Failed,
        clanId: "c1",
        metrics: [
          {
            metricRuleId: MetricRuleId.QuestFailed,
            rank: Ranks.D,
            value: 1,
            week: 3,
          },
        ],
      },
      {
        id: "p5-q2-5",
        startWeek: 3,
        notes: "TODO - Tad - Dies",
        status: QuestStatus.Failed,
        clanId: "c1",
        metrics: [
          {
            metricRuleId: MetricRuleId.QuestFailed,
            rank: Ranks.D,
            value: 1,
            week: 3,
          },
        ],
      },
      {
        id: "p6-q2-5",
        startWeek: 3,
        notes: "TODO - Landorin, Dies, but is resurrected by Luna",
        status: QuestStatus.Failed,
        clanId: "c1",
        metrics: [
          {
            metricRuleId: MetricRuleId.QuestFailed,
            rank: Ranks.D,
            value: 1,
            week: 3,
          },
        ],
      },
    ],
  },
  {
    id: "q2-6.1",
    name: "Serpentina Merchant Escort",
    reward: 70,
    postedWeek: 2,
    expireWeek: 2,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Guard,
    questRank: Ranks.D,
    postedBy: "The Trade Guild",
    description: `As Morton has become a common stop in trade routes, its Bounty festival has grown in popularity. Even people from the larger cities like the major port of Serpetina make the trip to enjoy the festivities. The merchants come in a week early`,
    parties: [
      {
        id: "p1-q2-6.1",
        startWeek: 2,
        notes:
          "The caravan was targeted by Bandits. Sir Robin was hit on the head and passed out. Clara defended him and the rest of the caravan. At the end she was about to get hit by an arrow when Mara stepped in and caught it out of mid air. Mara pointed at Sir Robin's unconscious body and said, 'This is the man you love?' To which Clara replied 'Mah-om' while clobbering right in the jaw.",
        status: QuestStatus.Success,
        clanId: "c1",
        metrics: [
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 70,
            week: 2,
          },
          {
            metricRuleId: MetricRuleId.CivilianSaved,
            value: 6,
            week: 2,
          },
        ],
      },
    ],
  },
  {
    id: "q2-6.2",
    name: "Valeon Merchant Escort",
    reward: 120,
    postedWeek: 2,
    expireWeek: 2,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Guard,
    questRank: Ranks.C,
    postedBy: "The Trade Guild",
    description: `As Morton has become a common stop in trade routes, its Bounty festival has grown in popularity. Even people from the royal capitol of Valeon make the trip to enjoy the festivities. The merchants come in a week early`,
    parties: [
      {
        id: "p1-q2-6.2",
        startWeek: 2,
        notes:
          "The road from Valeon has become quite dangerous since it goes by the edge of the northern forest. But Louis was not caught by surprise by this like with the Noble escort last week. The Duffenklampf twins scouted ahead and when there was any sign of monsters the went off the main road. They only got caught by surprise once, and despite Juniper barfing and passing out while treating a minor injury on Louis' arm, no one was really hurt.",
        status: QuestStatus.Success,
        clanId: "c6",
        metrics: [
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 120,
            week: 2,
          },
          {
            metricRuleId: MetricRuleId.CivilianSaved,
            value: 8,
            week: 2,
          },
        ],
      },
    ],
  },
  {
    id: "q2-6.3",
    name: "Furthbrand Merchant Escort",
    reward: 100,
    postedWeek: 2,
    expireWeek: 2,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Guard,
    questRank: Ranks.C,
    postedBy: "The Trade Guild",
    description: `As Morton has become a common stop in trade routes, its Bounty festival has grown in popularity. Even people from the larger cities like the industrial powerhouse Furthbrand make the trip to enjoy the festivities. The merchants come in a week early.`,
    parties: [
      {
        id: "p1-q2-6.3",
        startWeek: 2,
        notes:
          "P'Tark, Squeakela, and Icenose bit off more than they could chew. The mountain roads are treacherous in the best of times, but with a quick onset storm they couldn't keep all the merchants safe, let alone the cargo. Luckily Elnar though to go check on them when they were late coming back.",
        status: QuestStatus.Failed,
        clanId: "c1",
        metrics: [
          {
            metricRuleId: MetricRuleId.QuestFailed,
            rank: Ranks.D,
            value: 1,
            week: 2,
          },
          {
            metricRuleId: MetricRuleId.CostsOrDamages,
            value: 200,
            week: 2,
          },
          {
            metricRuleId: MetricRuleId.CiviliansDead,
            value: 3,
            week: 2,
          },
        ],
      },
    ],
  },
  {
    id: "q2-7",
    name: "Stolen Watch",
    reward: 100,
    postedWeek: 2,
    expireWeek: 2,
    claimType: QuestClaimType.Individual,
    questType: QuestTypes.Fetch,
    questRank: Ranks.D,
    postedBy: "Dorf Mucklebunk",
    description: `My Family watch has been stolen! I swear I saw Trimble Dinklesbean with it. The sneak was eyeing it at the lodge hall! I will pay handsomely if someone were to... persuade him... that it should return to its rightful owner.`,
    parties: [
      {
        id: "p1-q2-7",
        startWeek: 2,
        status: QuestStatus.Success,
        notes:
          "Gad tailed Trimble Dinklesbean for a while then when the mark went down the wrong alley he roughed him up and took the watch. Unbeknownst to Gad, he was also being tailed by Moira. As he was heading to the guild to report she pick pocketed the watch. She assumed the delivered it to one of Dorf's servants, but it was actually Jan Fandle in disguise, who in turn handed the watch in for the reward.",
        metrics: [],
      },
    ],
  },
  {
    id: "q2-8",
    name: "Forest Cavern Vandalism",
    reward: 10,
    postedWeek: 2,
    expireWeek: 2,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Other,
    questRank: Ranks.D,
    postedBy: "Elder K'Tar",
    description: `"The cavern housing the mystic spring has been desecrated. I can't clean it up by myself."`,
    parties: [
      {
        id: "p1-q2-8",
        startWeek: 2,
        status: QuestStatus.Success,
        clanId: "c10",
        notes:
          "The second Freya saw this quest posted she immediately claimed it. K'Tar brought them to the mystic spring which had strange runes scrawled all over the back of the cave. There was a strong scent of sulphur coming off the water. Shortly after they began the cleanup, a monster which appear to be a random assortment of human limbs attached to a viscose slime burst out of the pool and lunged at the Elder. The party acted with perfect teamwork.",
        metrics: [
          {
            metricRuleId: MetricRuleId.CivilianSaved,
            value: 1,
            week: 2,
          },
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 10,
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
  // TODO - add in a missing person thing

  // Week 1
  {
    id: "q1-1",
    name: "A Noble Escort",
    reward: 500,
    postedWeek: 1,
    expireWeek: 1,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Guard,
    questRank: Ranks.B,
    postedBy: "Cliff Vanderbliff",
    description: `A group of nobles lead Count Clifford Vanderbliff and their retinue will be from Valeon (the capitol) to Morton to attend the annual festival. They require, "A competent local guard detail. Must be an established party, in good reputation, with knowledge of regional dangers."`,

    parties: [
      {
        id: "p1-q1-1",
        startWeek: 1,
        endWeek: 1,
        status: QuestStatus.Failed,
        notes:
          "It went incredibly poorly. The caravan was ambushed by unusually strong monsters while traveling by the northern forest. 2 Nobles died along with many members of the staff. A few people were also lost in the woods during the attack, including adventurer, Reginald Spintsmunge IV. To add insult to injury: Count Vanderbliff's Carriage was completely destroyed and for the remainder of the trip he was forced to ride with a lesser nobel.",
        clanId: "c6",
        metrics: [
          {
            metricRuleId: MetricRuleId.QuestFailed,
            rank: Ranks.B,
            value: 1,
            week: 1,
          },
          {
            metricRuleId: MetricRuleId.CiviliansDead,
            value: 10,
            week: 1,
          },
          {
            metricRuleId: MetricRuleId.CivilianSaved,
            value: 12,
            week: 1,
          },
          {
            metricRuleId: MetricRuleId.CostsOrDamages,
            value: 112,
            week: 1,
          },
        ],
      },
    ],
  },
  {
    id: "q1-2",
    name: "Too Many Rats",
    reward: 100,
    postedWeek: 1,
    expireWeek: 1,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Kill,
    questRank: Ranks.D,
    postedBy: "Mayor Corque",
    description: `"I hear you. We can't keep ignoring the sewer problem. The rats keep multiplying and getting bigger. They're attacking people in the street. Focus groups tell us this is not a great look for our town. We have to fix this before the Bounty Festival. What will people think if we have dog sized rats? One gold for every dead rat brought back this week."`,

    parties: [
      {
        id: "p1-q1-2",
        startWeek: 1,
        status: QuestStatus.Success,
        notes:
          "There were so many rats! They were so much bigger than expected! Sir Robin bravely ran away. But they did kill the requested number of rats.",
        clanId: "c1",
        metrics: [
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 50,
            week: 1,
          },
        ],
      },
      {
        id: "p2-q1-2",
        startWeek: 1,
        status: QuestStatus.Success,
        notes:
          "There were so many rats! They were so much bigger than expected! The party's escape route was completely blocked and the team. Thanks to Chargla's brave (but stupid) sacrifice, Carlsbad and Tad Faddler were able to make it out alive. They're telling everyone about a gigantic rat with eyes all over its body deep in the sewers. Despite this they did kill the requested number of rats.",
        clanId: "c1",
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
    id: "q1-3",
    name: "Forest Shrine Maintenance",
    reward: 1,
    postedWeek: 1,
    expireWeek: 1,
    claimType: QuestClaimType.Individual,
    questType: QuestTypes.Other,
    questRank: Ranks.E,
    postedBy: "Elder K'Tar",
    description: `"The Shrine to Mamut is falling apart. I am old. I need help repairing it."`,

    parties: [
      {
        id: "p1-q1-3",
        startWeek: 1,
        status: QuestStatus.Success,
        clanId: "c10",
        notes:
          "Bandits attacked the shrine. Luckily Ash & Icenose were there to help!",
        metrics: [
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 1,
            week: 1,
          },
          {
            metricRuleId: MetricRuleId.CivilianSaved,
            value: 1,
            week: 1,
          },
        ],
      },
      {
        id: "p2-q1-3",
        startWeek: 1,
        status: QuestStatus.Success,
        clanId: "c1",
        notes:
          "Bandits attacked the shrine. Luckily Ash & Icenose were there to help!",
        metrics: [
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 1,
            week: 1,
          },
          {
            metricRuleId: MetricRuleId.CivilianSaved,
            value: 1,
            week: 1,
          },
        ],
      },
    ],
  },
  {
    id: "q1-4.1",
    name: "Serpentina Supply Caravan Escort",
    reward: 100,
    postedWeek: 1,
    expireWeek: 1,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Guard,
    questRank: Ranks.C,
    postedBy: "Trade Guild",
    description: `With the Festival coming up in a couple of weeks we need capable parties to guard the wagons as merchants head out to get supplies. Southern Caravan from the Port city of Serpentina.`,
    parties: [
      {
        id: "p1-q1-4",
        startWeek: 1,
        status: QuestStatus.Success,
        clanId: "c6",
        notes:
          "It was a completely uneventful trip. But despite that, Geoffrey managed to return with a black eye anyway.",
        metrics: [
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
    id: "q1-4.2",
    name: "Valeon supply Caravan Escort",
    reward: 150,
    postedWeek: 1,
    expireWeek: 1,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Guard,
    questRank: Ranks.C,
    postedBy: "Trade Guild",
    description: `With the Festival coming up in a couple of weeks we need capable parties to guard the wagons as merchants head out to get supplies. Eastern Caravan: From Valeon, the Capital city.`,

    parties: [
      {
        id: "p2-q1-4",
        startWeek: 1,
        status: QuestStatus.Success,
        clanId: "c9",
        notes:
          "Near the northern forest there were more beasts than usual. But luckily Barkskin was able to keep the entire party and Caravan safe.",
        metrics: [
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 150,
            week: 1,
          },
          {
            metricRuleId: MetricRuleId.CostsOrDamages,
            value: 30,
            week: 1,
          },
          {
            metricRuleId: MetricRuleId.CivilianSaved,
            value: 12,
            week: 1,
          },
        ],
      },
    ],
  },
  {
    id: "q1-4.3",
    name: "Furthbrand supply Caravan Escort",
    reward: 100,
    postedWeek: 1,
    expireWeek: 1,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Guard,
    questRank: Ranks.C,
    postedBy: "Trade Guild",
    description: `With the Festival coming up in a couple of weeks we need capable parties to guard the wagons as merchants head out to get supplies. Western Caravan: to the mountains, and the industrial powerhouse Furthbrand`,

    parties: [
      {
        id: "p3-q1-4",
        startWeek: 1,
        clanId: "c5",
        status: QuestStatus.Success,
        notes:
          "The A couple of the members of Clockwork Chisel were originally from the mountain stronghold of Furthbrand which is where the caravan set out from. On top of defending the merchants from bandits and beasts they also plied their trades and made some extra coin.",
        metrics: [
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 100,
            week: 1,
          },
          {
            metricRuleId: MetricRuleId.CivilianSaved,
            value: 9,
            week: 1,
          },
        ],
      },
    ],
  },
  {
    id: "q1-5",
    name: "Herb Gathering",
    reward: 50,
    postedWeek: 1,
    expireWeek: 1,
    claimType: QuestClaimType.Individual,
    questType: QuestTypes.Fetch,
    questRank: Ranks.D,
    postedBy: "Church of the Holy Mother",
    description: `We're running low on medical herbs. reward depends upon the quality of the herbs obtained.`,

    parties: [
      {
        id: "p1-q1-5",
        startWeek: 1,
        status: QuestStatus.Success,
        clanId: "c8",
        notes:
          "Elnar brought back what would normally have sold for hundreds of gold, but he wasn't doing it for the money.",
        metrics: [
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 35,
            week: 1,
          },
        ],
      },
      {
        id: "p2-q1-5",
        startWeek: 1,
        status: QuestStatus.Failed,
        clanId: "c8",
        notes:
          "Szuuth realized they had no idea what the were looking for and mostly brought back weeds. Sister Lasiter gave her a gold for the flowers because they were pretty.",
        metrics: [
          {
            metricRuleId: MetricRuleId.QuestFailed,
            rank: Ranks.E,
            value: 1,
            week: 1,
          },
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 1,
            week: 1,
          },
        ],
      },
      {
        id: "p3-q1-5",
        startWeek: 1,
        status: QuestStatus.Success,
        metrics: [
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
    id: "q1-6",
    name: "Spice Quest",
    reward: 0,
    postedWeek: 1,
    expireWeek: 1,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Fetch,
    questRank: Ranks.C,
    postedBy: "The Chairman",
    description: `To make the ultimate dish.: you need the ultimate spices!`,

    parties: [
      {
        id: "p1-q1-6",
        startWeek: 1,
        notes: "They found the elusive Currymingo!",
        status: QuestStatus.Success,
        clanId: "c7",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 1,
            rank: Ranks.B,
            week: 1,
          },
        ],
      },
    ],
  },
  {
    id: "q1-7",
    name: "Pre-festival Monster Management",
    reward: 500,
    postedWeek: 1,
    expireWeek: 2,
    claimType: QuestClaimType.Individual,
    questType: QuestTypes.Kill,
    questRank: Ranks.C,
    postedBy: "Trade Guild",
    description: `Since we'll be having many people from the region coming to Morton we should make the roads safer by culling the local monster numbers.`,
    parties: [
      {
        id: "p1-q1-7",
        startWeek: 1,
        status: QuestStatus.Success,
        clanId: "c3",
        notes:
          "Vince captured a greater porcubear, which is not unusual. What IS unusual is that it was near the EDGE of the northern forest at the eastern checkpoint. Which is generally safe.",
        metrics: [
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 120,
            week: 1,
          },
        ],
      },
      {
        id: "p2-q1-7",
        startWeek: 1,
        status: QuestStatus.Success,
        clanId: "c10",
        notes:
          "Phil found and possessed a flamboar and made it fight a screamer. They killed eachother. He gave half of his reward money to Freya since he couldn't carry the bodies back alone.",
        metrics: [
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 50,
            week: 1,
          },
        ],
      },
      {
        id: "p3-q1-7",
        startWeek: 1,
        status: QuestStatus.Success,
        clanId: "c2",
        notes: "Tjorn crushed a bismuth tortoise if you can believe it.",
        metrics: [
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 50,
            week: 1,
          },
        ],
      },
      {
        id: "p4-q1-7",
        startWeek: 1,
        status: QuestStatus.Success,
        clanId: "c4",
        notes:
          "Sheila was bored with no Clan quests. Drea came along for company. They just wound up having a nice picnic and killing a bunch of slimes",
        metrics: [
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 3,
            week: 1,
          },
        ],
      },
      {
        id: "p5-q1-7",
        startWeek: 1,
        status: QuestStatus.Success,
        clanId: "c1",
        notes:
          "Landorin bit off more than he could chew when he tried to take on a pack of sveldtvulfs. Luckily Guy Norman, he new guy, showed up to help. He managed to single handedly bring down the entire pack and save Landorin in the process. Guy split the reward anyway.",
        metrics: [
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 40,
            week: 1,
          },
        ],
      },
      {
        id: "p6-q1-7",
        startWeek: 2,
        status: QuestStatus.Claimed,
        clanId: "c4",
        notes:
          "Drea was able to take down a caustipede before it could cary a swineherd to its larval brood.",
        metrics: [
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 110,
            week: 2,
          },
        ],
      },
      {
        id: "p7-q1-7",
        startWeek: 2,
        status: QuestStatus.Claimed,
        clanId: "c5",
        notes:
          "Bjork is the only member of Clockwork Chisel who isn't preparing for the festival. So she wen out and fought some long burrow munchers.",
        metrics: [
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 30,
            week: 2,
          },
        ],
      },
      {
        id: "p8-q1-7",
        startWeek: 2,
        status: QuestStatus.Claimed,
        clanId: "c9",
        notes: "Someone has to kill those slimes!",
        metrics: [
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 7,
            week: 2,
          },
        ],
      },
    ],
  },
  {
    id: "q1-8",
    name: "A family heirloom",
    reward: 50,
    postedWeek: 1,
    expireWeek: 1,
    claimType: QuestClaimType.Individual,
    questType: QuestTypes.Fetch,
    questRank: Ranks.D,
    postedBy: "Trimble Dinklesbean",
    description: `"Someone has purloined a priceless timepiece of great... sentimental... value. How it makes its way back to me I do not care, nor will I ask."`,

    parties: [
      {
        id: "p1-q1-8",
        startWeek: 1,
        status: QuestStatus.Success,
        notes:
          "Syd got a couple of his orphan friends to distract Trimble and while he wasn't looking he yoinked the Watch. He went to the guild and Jan pretended to be a receptionist. She claimed the reward for herself.",
        metrics: [],
      },
    ],
  },
  {
    id: "q1-9",
    name: "Lost Pet",
    reward: 0,
    postedWeek: 1,
    expireWeek: 3,
    claimType: QuestClaimType.Individual,
    questType: QuestTypes.Fetch,
    questRank: Ranks.E,
    postedBy: "Silky Bunnykin",
    description: `There's a child's drawing of a small, fuzzy, crying animal.`,

    parties: [
      {
        id: "p1-q1-9",
        startWeek: 1,
        status: QuestStatus.Failed,
        notes: "Tinky never reported in to the Adventurers Guild.",
        metrics: [
          {
            metricRuleId: MetricRuleId.QuestFailed,
            rank: Ranks.E,
            value: 1,
            week: 1,
          },
        ],
      },
      {
        id: "p2-q1-9",
        startWeek: 2,
        status: QuestStatus.Failed,
        notes: "Who's Goldorf again?",
        metrics: [
          {
            metricRuleId: MetricRuleId.QuestFailed,
            rank: Ranks.E,
            value: 1,
            week: 2,
          },
        ],
      },
      {
        id: "p3-q1-9",
        startWeek: 3,
        status: QuestStatus.Failed,
        notes: `Buster was found jabbering to himself after the festival. When people approached he would grab them and say something along the lines of, "The eyed mouth opens its pupil teeth. We must away to the lightning!"`,
        metrics: [
          {
            metricRuleId: MetricRuleId.QuestFailed,
            rank: Ranks.E,
            value: 1,
            week: 3,
          },
        ],
      },
    ],
  },
]);
