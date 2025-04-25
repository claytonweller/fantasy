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
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Kill,
    questRank: Ranks.A,
    postedBy: "Guildmaster Vahn",
    description: `The Adventurer Guild has found that there is an enraged monster in the center of the Norther Forest: A gigantic blue wolf. 
    Guildmanster Vahn: "Hey! Shut Up! Hey! HEY!... sorry I'll pay for that... Ok. Anyway. I'm sure you've heard about the giant wolf. It's berserk and attacking anything that moves. It's scared all of the monsters out of the forest. Count Vanderbliff would like to say something.
    Count Vanderbliff: "This monster must be stopped. It killed my people. However, I will match the guild reward if it is captured alive."`,

    parties: [],
  },
  {
    id: "q3-2",
    name: "Protect Sacred Grove",
    reward: 5,
    postedWeek: 3,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Guard,
    questRank: Ranks.C,
    postedBy: "Elder K'Tar",
    description: `There's corruption in the forest. I worry that it will reach the sacred grove.`,

    parties: [],
  },
  {
    id: "q3-3",
    name: "A Pesky Fly",
    reward: 100,
    postedWeek: 3,
    claimType: QuestClaimType.Individual,
    questType: QuestTypes.Kill,
    questRank: Ranks.C,
    postedBy: "Gorn Wigby",
    description: `"There is a pesky fly buzzing by my ear... I would pay handsomely to have it swatted."`,

    parties: [],
  },

  // Week 2
  {
    id: "q2-1",
    name: "That's a big rat",
    reward: 100,
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
    expireWeek: 2,
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
        metrics: [
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 15,
            week: 2,
          },
          {
            metricRuleId: MetricRuleId.PropertyDamaged,
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
        notes: "The caravan was targeted by Bandits. Sir Robin was hit on the head and passed out. Clara defended him and the rest of the caravan. At the end she was about to get hit by an arrow when Mara stepped in and caught it out of mid air. Mara pointed at Sir Robin's unconscious body and said, 'This is the man you love?' To which Clara replied 'Mah-om' while clobbering right in the jaw.",
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
        notes: "The road from Valeon has become quite dangerous since it goes by the edge of the northern forest. But Louis was not caught by surprise by this like with the Noble escort last week. The Duffenklampf twins scouted ahead and when there was any sign of monsters the went off the main road. They only got caught by surprise once, and despite Juniper barfing and passing out while treating a minor injury on Louis' arm, no one was really hurt.",
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
    questRank: Ranks.D,
    postedBy: "The Trade Guild",
    description: `As Morton has become a common stop in trade routes, its Bounty festival has grown in popularity. Even people from the larger cities like the industrial powerhouse Furthbrand make the trip to enjoy the festivities. The merchants come in a week early.`,
    parties: [
      {
        id: "p1-q2-6.3",
        startWeek: 2,
        notes: "P'Tark, Squeakela, and Icenose bit off more than they could chew. The mountain roads are treacherous in the best of times, but with a quick onset storm they couldn't keep all the merchants safe, let alone the cargo. Luckily Elnar though to go check on them when they were late coming back.",
        status: QuestStatus.Failed,
        clanId: "c1",
        metrics: [
          {
            metricRuleId: MetricRuleId.PropertyDamaged,
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
        notes: "The second Freya saw this quest posted she immediately claimed it. K'Tar brought them to the mystic spring which had strange runes scrawled all over the back of the cave. There was a strong scent of sulphur coming off the water. Shortly after they began the cleanup, a monster which appear to be a random assortment of human limbs attached to a viscose slime burst out of the pool and lunged at the Elder. The party acted with perfect teamwork.",
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
            metricRuleId: MetricRuleId.EnemyKill,
            value: 1,
            rank: Ranks.B,
            week: 2,
          },
        ],
      },
    ],
  },

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
            metricRuleId: MetricRuleId.PropertyDamaged,
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
          "There were so many rats! They were so much bigger than expected! Sir Robin bravely ran away.",
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
          "There were so many rats! They were so much bigger than expected! The party's escape route was completely blocked and the team. Thanks to Chargla's brave (but stupid) sacrifice, Carlsbad and Tad Faddler were able to make it out alive. They're telling everyone about a gigantic rat with eyes all over its body deep in the sewers.",
        // endWeek: number,
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
        notes:
          "Bandits attacked the shrine. Luckily Ash & Icenose were there to help!",
        // endWeek: number,
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
            metricRuleId: MetricRuleId.PropertyDamaged,
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
        notes:
          "Szuuth realized they had no idea what the were looking for and mostly brought back weeds. Sister Lasiter gave her a gold for the flowers because they were pretty.",
        metrics: [
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
        // endWeek: number,
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
        metrics: [],
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
        notes: "Bjork is the only member of Clockwork Chisel who isn't preparing for the festival. So she wen out and fought some long burrow munchers.",
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
        notes: "Someone has to kill those slimes!",
        metrics: [
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 7,
            week: 2,
          }
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
        metrics: [],
      },
      {
        id: "p2-q1-9",
        startWeek: 2,
        status: QuestStatus.Failed,
        notes: "Who's Goldorf again?",
        metrics: [],
      },
    ],
  },
]);
