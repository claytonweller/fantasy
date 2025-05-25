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
    expireWeek: 5,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Other,
    questRank: Ranks.B,
    postedBy: "Sister Lasiter",
    description: `"Holy Mother, bless us with your light. The bodies were not exhumed by any living hand, but are exhuming themselves. Currently the undead are contained within the cemetery walls, but I worry the gates won't hold much longer. Please be the blessed Mother's purifying sword and put these souls to rest."`,
    parties: [
      {
        id: "p1-q5-1",
        startWeek: 5,
        notes: `This was Sir Robin's last chance. Clara made that clear. He had to prove himself. He would march right back to that graveyard and re-kill those undead. He snuck in over the side wall, he tip toed around the larger groups, he found a place where it looked like he could easily retreat if need be. He found a solitary skeleton, raised his sword, closed his eyes, and swung as hard as he could. There was a sonorous BONG. He had missed and instead struck large metal bell. All of the undead in the area stopped moving... then immediately rushed him. 
        His escape path was blocked. He swung his sword wildly as he ran for the only gap. Then right in front of him Buster Zeddmore appeared. He was only wearing a loin cloth, a sigil of the holy mother, and a huge backpack. The exorcist gnome was throwing vials of holy water, casting holy flame scrolls, bashing skeletons with a silver hammer, and screaming, "THE HOLY MOTHER'S LOVE BE WITH YOU! AND YOU! AND ESPECIALLY YOU!" Robin followed him for the remainder of the night.`,
        status: QuestStatus.Claimed,
        clanId: "c1",
        metrics: [
          // {
          //   metricRuleId: MetricRuleId.RewardGold,
          //   value: 10,
          //   week: 5,
          // },
        ],
      },
      {
        id: "p2-q5-1",
        startWeek: 5,
        notes: `Sister Lasiter asked her brother Louis for help when she realized the only one who had signed up to deal with the undead was Sir Robin. He agreed and got the Duffenklampf twins to back him up. Juniper, now best friends with the twins, also tagged along. Friendship aside, a white mage is a must against undead. 
        Right as they arrived at the barricade, there was a hug resonant BONG from from inside of the graveyard. Moments later a wall undead crashed through the makeshift barrier. Louis and the twins went to work. The second the first ghoul fell apart Juniper immediately vomited in disgust... but she kept casting holy spells and healing her three compatriots... but also kep vomiting. 
        They did their best to keep the threat contained, but the wave was too much, eventually they were struggling to stay alive, let alone stop the tide. All looked like it was lost. Until all at once the corpses and skeletons all collapsed. Jachectapolk had been slain, and their motive force was removed. 
        In the distance they saw Sir Robin standing on top a mountain of decaying bodies carrying a mostly naked Gnome on his back.`,
        status: QuestStatus.Claimed,
        clanId: "c6",
        metrics: [
          // {
          //   metricRuleId: MetricRuleId.RewardGold,
          //   value: 10,
          //   week: 5,
          // },
        ],
      },
    ],
  },
  {
    id: "q5-2",
    name: "Slay the Mad God Jachectapolk",
    reward: 3000,
    postedWeek: 5,
    expireWeek: 5,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Kill,
    questRank: Ranks.A,
    postedBy: "Guildmaster Vahn",
    description: `"Hey! Shut it! Hey! Hey! Don't make me smash another table! QUIET! Yeah, so I'm sure you've all heard about the cult by now. The cult of Jaborkapek? Did I say it right? Japortachenk? Joborkapelt? Ja- whatever, it doesn't matter what they're called. They summoned their gloopy god. Classic cult thing. I need you all to do what you do best and dispatch that disarranged deity!"`,
    parties: [
      {
        id: "p1-q5-2",
        startWeek: 5,
        notes: `Jachectapolk, the god of joining, burst forth from beneath the noble estate pulling any who were close enough to it into its pulsing purple mass. Blessed Sword led the charge. Arc immediately started doing massive swings, but every time he chopped off one of its "appendages" it would form into a smaller monster and start acting on its own. Drea and Sheila quickly dispatched those, but then the main body would pull the dead parts back into itself and reanimate them. They were slowing its advance to the city center, but not completely stopping it. The civilians fled as it moved into the city proper but not all could make it away in time. Those screaming souls were captured, ripped into their constituent pieces, and subsumed into the amalgam. 
          TODO - Circle destroyed 
          TODO - Grove Fixed
          TODO - Monsters Join
          TODO - Undead Join
          TODO - Reinforcements Arrive
          TODO - Vlort?
          TODO - Jachectapolk Defeated
        `,
        status: QuestStatus.Claimed,
        clanId: "c4",
        metrics: [
          // {
          //   metricRuleId: MetricRuleId.RewardGold,
          //   value: 10,
          //   week: 5,
          // },
        ],
      },
    ],
  },
  {
    id: "q5-3",
    name: "Keep the Chimeras Out",
    reward: 500,
    postedWeek: 5,
    expireWeek: 5,
    claimType: QuestClaimType.Individual,
    questType: QuestTypes.Guard,
    questRank: Ranks.C,
    postedBy: "Mayor Corque",
    description: `"You've spoken and I've heard you. You don't want to be devoured by horrible chimera monsters. I understand. I hope cowering for our lives from the amalgamated bodies of forest beasts can be viewed as an opportunity for growth as a community, and when election time comes we all remember how I cowered with you."`,
    parties: [
      {
        id: "p1-q5-3",
        startWeek: 5,
        notes: `What with all of the Jachectapolk stuff going on it was impractical to prepare a proper meal. That made The Chairman hangry: you wouldn't like him when he's Hangry. The rest of Crockpot could only follow him on his path of destruction. He destroyed a shed, a well, a monster with legs where its eyes should be and eyes where its ass should be, another shed, and then... a hole in the city wall, letting in a stream of chimera beasts. The barrage of monstrosities started rushing toward Jachectapolk.`,
        status: QuestStatus.Claimed,
        clanId: "c7",
        metrics: [
          // {
          //   metricRuleId: MetricRuleId.RewardGold,
          //   value: 10,
          //   week: 5,
          // },
        ],
      },
      {
        id: "p2-q5-3",
        startWeek: 5,
        notes: `Geoffrey found some female guards on the wall. Helped them stave off some chimeras. Then got a little too "friendly", was definitively rejected, and while he was throwing a fit about it not being fair he was pulled from the wall by a beast with a dog body and lizard legs covered in way too many eyes. Luckily, right before the beast landed the killing blow, Jachectapolk was slain and the chimera immediately fell apart in gooey corpse pile.`,
        status: QuestStatus.Claimed,
        clanId: "c6",
        metrics: [
          // {
          //   metricRuleId: MetricRuleId.RewardGold,
          //   value: 10,
          //   week: 5,
          // },
        ],
      },
      {
        id: "p3-q5-3",
        startWeek: 5,
        notes: `Despite their battered bodies from their mechanical mishap on the wall, Thorin, Bjork and Kizz set out to the wall again to keep everyone safe. They did their best. They knew they were in over their heads. They might not be in a position to fight but they could reinforce the wall.`,
        status: QuestStatus.Claimed,
        clanId: "c5",
        metrics: [
          // {
          //   metricRuleId: MetricRuleId.RewardGold,
          //   value: 10,
          //   week: 5,
          // },
        ],
      },
      {
        id: "p4-q5-3",
        startWeek: 5,
        notes: `Norn and Chilpin ran a mobile healing operation. They saved a countless number of lives, but by the end of the ordeal they were actively hallucinating from sleep deprivation and mana depletion. Norn was seen putting sutures in a loaf of bread while Chilpin was doing chest compressions on a tailors dummy shouting, "Not another one! NOT ON MY WATCH!"`,
        status: QuestStatus.Claimed,
        clanId: "c8",
        metrics: [
          // {
          //   metricRuleId: MetricRuleId.RewardGold,
          //   value: 10,
          //   week: 5,
          // },
        ],
      },
    ],
  },
  {
    id: "q5-4",
    name: "Deal with Jachectapolk Cultists",
    reward: 500,
    postedWeek: 5,
    expireWeek: 5,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Kill,
    questRank: Ranks.B,
    postedBy: "Guildmaster Vahn",
    description: `"Oh yeah! One more thing. The Jaterbajek... Jakerpapok... Jagoffadong whatever cultists. Gotta get rid of them too."`,
    parties: [
      {
        id: "p1-q5-4",
        startWeek: 5,
        notes: `Guy Norman took charge of The Mill. Vlort certainly wasn't going to do it. Squeakela and Derb recounted their trip into the sewer and how they found the Cultists and released Mamut (the blue wolf). Guy had them lead the way to the ritual chamber and when the party arrived, the still glowing summoning circle was protected by a large group of cultists. Under Guy's leadership they subdued them with no casualties to their party. 
        Carlsbad then attempted to touch the circle and was blown back. 
        A pause. 
        Guy tried the same thing with the same result. 
        A longer pause. 
        Everyone looked at each other. 
        Fleeting Whisp Landorin rolled his eyes and groaned, before stepping forward, "Fine. Fine... FINE! Ok, you spend a couple hundred years as a mage. You say, 'That's enough, time to pursue your dream'. But then they bring you b---", he continued to grumble while walking around the perimeter of the circle. He sat. He closed his eyes. He chanted at a breakneck speed for 15 seconds, his hair floating as magic coursed through the room. The entire chamber began to shake, and the circle started shooting off sparks. Then Landorin opened his eyes and pushed his hands forward. The circle shone blindingly white, then disappeared, leaving the room in complete darkness. 
        Another long pause. 
        Landorin groaned, "Ok I'll do the light too then." The light orb spell revealed a gobsmacked group of adventurers.`,
        status: QuestStatus.Claimed,
        clanId: "c1",
        metrics: [
          // {
          //   metricRuleId: MetricRuleId.RewardGold,
          //   value: 10,
          //   week: 5,
          // },
        ],
      },
      {
        id: "p2-q5-4",
        startWeek: 5,
        notes: `Clara lit the funeral pyre for her mother, Mara, behind the Exploding Fist dojo.  Barkskin put his hand on her shoulder, "This isn't how we wanted you back pipsqueak. But we're glad you're here." 
        She hugged him, then everyone came in for a group hug. 
        Suddenly Fissure flew into the dojo. After her own set of tears and reunions she let them know that she had been attacked by Elise Shadowthread and that she and Night Cowl were attempting to escape the city with Cliff Vanderbliff and some other noble cultists. Clara wiped the snot off her nose, "Time to bash some skulls." 
        Everyone cheered, and they rushed after Cliff Vanderbliff. 
        They had to fight through some chimeras, but eventually they caught up with the fleeing count and his entourage. 
        ---Continued in 'A Nobel Retreat' ---`,
        status: QuestStatus.Claimed,
        clanId: "c9",
        metrics: [
          // {
          //   metricRuleId: MetricRuleId.RewardGold,
          //   value: 10,
          //   week: 5,
          // },
        ],
      },
    ],
  },
  {
    id: "q5-5",
    name: "Homeward Bound",
    reward: 0,
    postedWeek: 5,
    expireWeek: 5,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Other,
    questRank: Ranks.A,
    postedBy: "Tall Pine Marlon",
    description: `"The giant blue wolf is actually Mamut, the god of the northern forest. If we don't return him to the sacred grove and heal the All-tree with the mystic water the curse of Jachectapolk will be permanent." Blank stares. "If we don't get this big guy back to the forest we're never growing any more crops and all the monsters will be like this permanently." Nodding and knowing murmuring.`,
    parties: [
      {
        id: "p1-q5-5",
        startWeek: 5,
        notes: `Tall Pine swallowed his pride and asked Vince for help. They didn't have to like each other or agree on beasts rights, but they could work together to save Morton. Icenose used his keen nose to track down the wolf... and it was just hiding behind an abandoned house. When it saw them it ran over with its tail wagging. 
        Philagula was inside! Phil couldn't control Mamut but they could translate for the wolf. 
        The party set off out of the north gate, villagers ran in horror despite the parties insistence that they were safe. With the aid of Mamut they made quick progress to the Northern Forest and into the sacred grove. Just as they were about to heal the All-tree... 
        --- Continued w/ Marcus Below ---`,
        status: QuestStatus.Claimed,
        clanId: "c3",
        metrics: [
          // {
          //   metricRuleId: MetricRuleId.RewardGold,
          //   value: 10,
          //   week: 5,
          // },
        ],
      },
      {
        id: "p2-q5-5",
        startWeek: 5,
        notes: `Marcus McStain knew what was at stake. Everything that had been taken from him: his title, his fortune, his estate, his pride. If he could keep Count Vanderbliff safe he could have it again, and more. He focused ever mote of mana left in his body opened the portal. There was only one place he could go. He hadn't retrieved the trap yet, and he wasn't powerful enough to set a waypoint with magic alone. It would have to do. He pulled the count in along with a few cultists (he wouldn't be able to get through the forest to Valeon alone after using all of his mana). 
        They floated in the lightless void. His liminal space. It was full a floating liquid. Must be blood. He hadn't emptied it yet. He shouted, "Ok this is gonna be rough." A tear in the void cracked open below them, gravity returned and they all fell out. 
        Marcus landed on top of a less lucky cultist, then got hit in the head with the lower torso of his victim (that hydrophile dwarf he offed last week). As he recovered for the shock, he watched the cultists get absolutely obliterated by some adventurers. Then Count Vanderbliff was chomped, swung back and forth, and swallowed whole by that damn wolf. 
        Then the elf noticed him. Marcus tried to run but was impaled by what felt like a hundred tiny spears. Shit. This was plant guy. Marcus would no longer be a blemish on the McStain family name, just a blood stained core of a magic sapling.`,
        status: QuestStatus.Claimed,
        clanId: "c2",
        metrics: [
          // {
          //   metricRuleId: MetricRuleId.RewardGold,
          //   value: 10,
          //   week: 5,
          // },
        ],
      },
    ],
  },
  {
    id: "q5-6",
    name: "A Nobel Retreat",
    reward: 5000,
    postedWeek: 5,
    expireWeek: 5,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Guard,
    questRank: Ranks.A,
    postedBy: "Gorn Wigby",
    description: `I have a message from my reclusive benefactor. It reads thusly, "Get me out of here!"`,
    parties: [
      {
        id: "p1-q5-6",
        startWeek: 5,
        notes: `Count Clifford Vanderbliff was not prepared for the magnitude of the joined-one's arrival. Nor was he satisfied with it's unwillingness to be controlled. Obviously this was everyone elses fault, this was not what he was owed. So, he would take his leave of this backwater hamlet. Night Cowl had been a useful tool for him, they were easily swayed by money, and that he had in abundance. Yes, they would ferry him back to Valeon, where he would regroup, make preparations, and properly return for Jachectapolk. Then the world would be finally be his. 
        He made it out of the city undetected (Fixer and Sk'tar at work). 
        He fought off the children of great rearranger (Marcus, Elise, and Tjorn). 
        And just when they were nearly away he was accosted by a rabble of peasants (Exploding Fist). It hardly seemed worth his notice, but for some reason his escorts were not up to the task and were summarily bested by these ruffians. One by one his guards were knocked unconscious. 
        Before it got any worse he grabbed the only person of peerage amongst his employ, some lesser noble mage (Marcus), "You! You wish to be an earl, yes? Of course you do. Well, magic us away from here and it is done." 
        The dullard began to respond, "Right now, the only place I can go is--" 
        Cliff smacked him, "Do it fool!" 
        Marcus immediately opened a void portal and said, "Can't be worse than here I guess." 
        --- Continued in 'Homeward Bound' ---`,
        status: QuestStatus.Claimed,
        clanId: "c2",
        metrics: [
          // {
          //   metricRuleId: MetricRuleId.RewardGold,
          //   value: 10,
          //   week: 5,
          // },
        ],
      },
    ],
  },

  // Week 4
  {
    id: "q4-1",
    name: "Grave Robbers?",
    reward: 10,
    postedWeek: 4,
    expireWeek: 4,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Guard,
    questRank: Ranks.E,
    postedBy: "Brother Merl",
    description: `"Something is amiss in the city Graveyard. Bodies have been exhumed. Please keep watch, and may the holy mother watch you."`,
    parties: [
      {
        id: "p1-q4-1",
        startWeek: 4,
        notes: `Sir Robin bravely took the only E rank quest available. They went to the graveyard. Everything seemed normal... until corpses started emerging from the ground. Sir Robing made a tactical retreat while Clara bashed some skeletons and ghouls. Oddly, the corpses were sticking together with a purple ooze which abosrbed all the dismembered pieces of the downed undead. Luckily the cemetery has a fairly high wall, and Clara had the foresight to bar the gate. So the problem is contained... for now.`,
        status: QuestStatus.Success,
        clanId: "c1",
        metrics: [
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 10,
            week: 4,
          },
        ],
      },
    ],
  },
  {
    id: "q4-2",
    name: "Find Mamut",
    reward: 5,
    postedWeek: 4,
    expireWeek: 4,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Other,
    questRank: Ranks.D,
    postedBy: "Elder K'Tar",
    description: `"The Azure Wolf Father, Mamut, must be returned to the Sacred Grove, or things will only get worse. He was in the town square, but where is he now?"`,
    parties: [
      {
        id: "p1-q4-2",
        startWeek: 4,
        notes: `Verdant Glade immediately takes the quest to find the god of the Northern forest. They need a good tracker and Ash suggest Icenose. The young beastkin eagerly agrees to lend his sharp sense of smell to the cause. He leads them to the Noble quarter of town, they wait until nightfall to continue their investigation. The trail leads to the Mansion where Count Vanderbliff is staying, they hop the fence and sneak behind the building. They find a hidden doorway in the back of the maintenance shed which leads deep underground. At the base of the stairs there is a series of corridors. They here strange chanting, and quietly sneak to where it's coming from. In a large chamber, illuminated by torches, there are 40 or so people in the same orange and purple robes from the Sacred Grove. They are chanting and drawing a giant magic circle on the floor in the center stands a small rabbitkin girl with glowing eyes surrounded by unconscious bodies of missing townspeople and adventurers. At the far side of the room Mamut is chained to the wall and floor. His fur is stained red with blood. What appears to be a high priest holds aloft a curved spear. Followers wait at the ready with bowls. It is now clear what the robed figures are using to paint their magic circle. Just as the spear is about to lash again, Ash shouts, "No!" Every hooded figure freezes then slowly turn their heads in unison to face the intruders. The high priest just takes off his hood, "You're too late! Jachectapolk will begin the joining!" It's Count Vanderbliff! He slashes at the beast, blood sprays all over him, all the torches extinguish, then the bloody circle glows brighter and brighter. Screams can be heard as a roiling roiling purple ooze pulses out of the body of the rabbitkin, it rips everyone it touches into pieces and pulls them into its mass. The robed ones are not spared if they are too close. The great wolf lets out a howl. The Verdant Glade run as the mass follows them up and out of the catacombs. They make it near enough to the surface that Tall Pine can use the tree roots from above to collapse the tunneling stairway behind them crushing some of the writhing purple monstrosity. They rush to the Adventure guild to tell everyone what they have seen.`,
        status: QuestStatus.Success,
        clanId: "c10",
        metrics: [
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 5,
            week: 4,
          },
        ],
      },
    ],
  },
  {
    id: "q4-3",
    name: "Reinforcements... please!",
    reward: 750,
    expireWeek: 4,
    postedWeek: 4,
    claimType: QuestClaimType.Individual,
    questType: QuestTypes.Fetch,
    questRank: Ranks.B,
    postedBy: "Mayor Corque",
    description: `"Everyone remain calm. Please. Keep order. I know. I know. None of us want to be trapped inside the city walls. I hear you. We are sending some of our best to tell the capitol what's happening here."`,
    parties: [
      {
        id: "p1-q4-3",
        startWeek: 4,
        notes: `Stoneclaw and Sleekwind are obvious choices as they spend lots of time hunting in the Northern forest, but Vivian demands to come along, because "Who in their right mind is going to listen to you? I mean just look at... all this..." She gestures generally to the two huntresses. They laugh at the noblewoman, but shrug and let her tag along. Stoneclaw snorts, "Be sure to stay close. Don't want you blaming me if you get hurt." The Monsters in the forest are in an absolute frenzy, but they successfully make it to Valeon. They immediately make for the Royal castle. The guards laugh when the trappers ask for an audience. Vivian stops time, and changes into a formal dress, then appears between the two. The guards immediately know who she is and let her in. She smirks at Stoneclaw, "Be sure to stay close. Don't want you blaming me if you get hurt."`,
        status: QuestStatus.Success,
        metrics: [
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 750,
            week: 4,
          },
        ],
      },
    ],
  },
  {
    id: "q4-4",
    name: "Remove A Pest",
    reward: 500,
    expireWeek: 4,
    postedWeek: 4,
    claimType: QuestClaimType.Individual,
    questType: QuestTypes.Kill,
    questRank: Ranks.B,
    postedBy: "Gorn Wigby",
    description: `"It appears the noisy gnat is spawning a brood. Those close to me are, not accustomed to such... discomfort. A talented (and discrete) pest handler would be well appreciated."`,
    parties: [
      {
        id: "p1-q4-4",
        startWeek: 4,
        notes: `Elise's reward was deposited into the Night Cowl safe at the Guild hall. This isn't unusual for her. She likes to stay in the shadows.`,
        status: QuestStatus.Success,
        clanId: "c2",
        metrics: [
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 500,
            week: 4,
          },
        ],
      },
    ],
  },
  {
    id: "q4-5",
    name: "Wasting Away",
    reward: 100,
    expireWeek: 4,
    postedWeek: 4,
    claimType: QuestClaimType.Individual,
    questType: QuestTypes.Fetch,
    questRank: Ranks.C,
    postedBy: "Sister Lasiter",
    description: `"There is a strange affliction spreading through the city. People suddenly collapsing. Then if they don't receive treatment, their trunk and neck are covered in dark, spidering lesions. We're nearly out of medicinal herbs. May the holy mother save us all."`,
    parties: [
      {
        id: "p1-q4-5",
        startWeek: 4,
        notes: `Shelly and Barkskin have been inseparable since the Bounty Battle. Romance knows no time but the present. Their first date was gathering healing herbs whilst dispatching berserk beasts.`,
        status: QuestStatus.Success,
        clanId: "c9",
        metrics: [
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 30,
            week: 4,
          },
        ],
      },
      {
        id: "p2-q4-5",
        startWeek: 4,
        notes: `As Fissure and Elnar were about to leave to look for medicinal herbs, Elder K'tar stopped them. "Take me with you." They didn't have a reason to refuse. He led them directly to the newly cleaned Mystic Spring. Before the adventurers could ask what they were doing there he immediately started chanting. A couple of moments later, the water burbled and formed itself into the shape of a six armed woman. She looked at the two adventurers and then leaned forward and kissed K'tar on the forehead. Then glowing gold water poured from her fingertips into a large waterskin that the elder was holding. The liquid woman winked and then sunk back into the spring. "Let's head ba--" and his arm fell to the ground with a light thud. In a flash Fissure launched herself into the dark recesses of the cavern, while Chilpin rushed to the old orc's side to stanch the bleeding. K'Tar pushed the waterskin into Chiplin's arms, "For Mamut. He must return to the grove." Another flash from the back of the cave and a thin line of red appeared at K'Tar's neck. The light immediately left his eyes. Fissure called out from the back of the cave, "Elnar Run! I'll hold her off!" Chilpin scrambled back to Morton alone and terrified, but he was a healer through and through and used the Mystic Spring water to heal all those afflicted by the sickness... Fissure still hasn't returned.`,
        status: QuestStatus.Success,
        clanId: "c8",
        metrics: [
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 70,
            week: 4,
          },
          {
            metricRuleId: MetricRuleId.CiviliansDead,
            value: 1,
            week: 4,
          },
          {
            metricRuleId: MetricRuleId.CivilianSaved,
            value: 30,
            week: 4,
          },
          {
            metricRuleId: MetricRuleId.TrapTriggered,
            value: 1,
            week: 4,
          },
        ],
      },
    ],
  },
  {
    id: "q4-6",
    name: "Cabin Fever",
    reward: 1000,
    expireWeek: 4,
    postedWeek: 4,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Guard,
    questRank: Ranks.B,
    postedBy: "Stimbar Kolnok",
    description: `Now we all know that the city is on lockdown. It's not safe to leave. We would never think of trying. But perhaps some enterprising adventurers would be willing to... show some out of town merchants like ourselves around town? Just a tour of the city and nothing more. We would pay handsomely for such a... tour.`,
    parties: [
      {
        id: "p1-q4-6",
        startWeek: 4,
        notes: `The Night Cowl crew got, "lost" during their tour and wound up outside the city walls. It became obvious very quickly that this was a terrible place to go sightseeing. All of the "tourists" were immediately killed by ravenous monsters. Luckily fixer had negotiated to receive half of their wages before the jaunt began.`,
        status: QuestStatus.Failed,
        clanId: "c2",
        metrics: [
          {
            metricRuleId: MetricRuleId.QuestFailed,
            rank: Ranks.B,
            value: 1,
            week: 4,
          },
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 500,
            week: 4,
          },
          {
            metricRuleId: MetricRuleId.CiviliansDead,
            value: 10,
            week: 4,
          },
        ],
      },
    ],
  },
  {
    id: "q4-7",
    name: "Finger in the dike",
    reward: 100,
    expireWeek: 4,
    postedWeek: 4,
    claimType: QuestClaimType.Individual,
    questType: QuestTypes.Guard,
    questRank: Ranks.C,
    postedBy: "The Town Guard",
    description: `Look, the town walls are pretty strong. But with all these trapped civilians, if even one of these tough monsters gets in here, it's going to be bad time.`,
    parties: [
      {
        id: "p1-q4-7",
        startWeek: 4,
        notes: `Louis paid the mime a coin during the Bounty festival, and they started following the knight around copying him. The mime even followed him to the wall. Every time he killed a monster, so did the mime. Though how they blocked the acid spray with an imaginary shield was anyone's guess.`,
        status: QuestStatus.Success,
        clanId: "c6",
        metrics: [
          {
            metricRuleId: MetricRuleId.CivilianSaved,
            value: 2,
            week: 4,
          },
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 20,
            week: 4,
          },
        ],
      },
      {
        id: "p2-q4-7",
        startWeek: 4,
        notes: `Clockwork Chisel set up on the northeastern wall, which was the side most beset by monsters. Everything was going well... until one of Axel's bomb turrets failed catastrophically. The blast injured everyone around it, blew a hole hold in the wall, and sent Bjork flying into the middle of the monster swarm. Chiff quickly patched up the wall with the last of his magic power, as Thorin tried to hold back the monster rush, but a few rabid beasts managed to get in. Thorin managed to make it out to Bjork and they made it back to the safely.`,
        status: QuestStatus.Failed,
        clanId: "c5",
        metrics: [
          {
            metricRuleId: MetricRuleId.QuestFailed,
            rank: Ranks.C,
            value: 1,
            week: 4,
          },
          {
            metricRuleId: MetricRuleId.CiviliansDead,
            value: 10,
            week: 4,
          },
          {
            metricRuleId: MetricRuleId.CostsOrDamages,
            value: 1000,
            week: 4,
          },
        ],
      },
      {
        id: "p3-q4-7",
        startWeek: 4,
        notes: `Corporal Margrave fought bravely. He gave his life to keep the wall from falling to an enraged batterhino. He drenched himself in oil, lit himself on fire, and jumped off the wall and put the full force of his body behind his spear as it struck the beast directly in the eye. He was found impaled on the giant beasts horn the next morning.`,
        status: QuestStatus.Success,
        metrics: [
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 10,
            week: 4,
          },
        ],
      },
      {
        id: "p4-q4-7",
        startWeek: 4,
        notes: `The break in the wall was just up the way from the Church, where all of those afflicted with the sickness were being held, including Mara Wright. Who hearing the screams immediately sprung into action. She fought bravely, but the monsters and the sickness were too much for her to tackle alone. She died in the jaws of a ferrous komododon. Just as the light was fading from her eyes, Clara returned from the cemetery, she yelled, "Mom! No!" She ripped the giant lizard's lower jaw off, hoisted the beast over her head, and then suplexed it so hard only it's hind legs were visible in the blood crater. Only Clara heard what her mother said before Mara passed away moments later.`,
        clanId: "c9",
        status: QuestStatus.Success,
        metrics: [
          {
            metricRuleId: MetricRuleId.CivilianSaved,
            value: 20,
            week: 4,
          },
        ],
      },
    ],
  },
  {
    id: "q4-8",
    name: "Where is everyone?",
    reward: 350,
    expireWeek: 4,
    postedWeek: 4,
    claimType: QuestClaimType.Individual,
    questType: QuestTypes.Fetch,
    questRank: Ranks.D,
    postedBy: "Various",
    description: `The board is covered with missing persons postings. It doesn't help that the there are over five times as many people in the walls as usual. Most of whom are not familiar with the city, but that alone wouldn't account for this volume.`,
    parties: [
      {
        id: "p1-q4-8",
        startWeek: 4,
        notes: `Carlsbad took a job from a rich merchant to find his lost son. Luckily the merchant had saved the sons baby teeth, which allowed the tooth mage to easily follow a trail. It led directly to the sewers. Carlsbad, after his experiences with the rat quest decided to cut his losses.`,
        status: QuestStatus.Failed,
        clanId: "c1",
        metrics: [
          {
            metricRuleId: MetricRuleId.QuestFailed,
            rank: Ranks.D,
            value: 1,
            week: 4,
          },
        ],
      },
      {
        id: "p2-q4-8",
        startWeek: 4,
        notes: `Guy Norman spends some time interviewing several of the people who posted the missing persons requests. Notices that there's a pattern where they're predominantly from poorer neighborhoods surrounding the Noble quarter. After knocking some skulls in the underbelly of the city he gets a lead on a shifty organization paying good money for random kidnappings. He makes a solo raid on a strange catacomb where a bunch of fanatics in robes are holding citizens and a couple of adventurers in cages. He kicks butt, and sets them free.`,
        status: QuestStatus.Success,
        clanId: "c1",
        metrics: [],
      },
      {
        id: "p2.1-q4-8",
        startWeek: 4,
        notes: `Reginald Spintzmunge, was one of the butts that Guy Norman kicked in his raid. He was taken prisoner and was more than happy to tell everyone who would listen the about the Cult of Jachectapolk and its plans (in so far as he understood them... which might not have been well)`,
        status: QuestStatus.Failed,
        clanId: "c6",
        metrics: [
          {
            metricRuleId: MetricRuleId.QuestFailed,
            rank: Ranks.D,
            value: 1,
            week: 4,
          },
        ],
      },
      {
        id: "p3-q4-8",
        startWeek: 4,
        notes: `Squeakela asked derb to help her find some lost beastkin. Derb sent the rats out into the city and after a day they came back and led the duo into the sewer. Eventually they made it back to the large chamber where the rat king was killed, and the rats showed them a hidden door leading into the catacombs, and after a series branching paths they made it to a make shift prison filled with beastkin prisoners. Derb sic'd his rats on them and while they were distracted Squeakela got the keys. They released the beastkin. As they were escaping they heard some strange chanting, and then screams. The looked though a large archway and were next to a huge blue and white wolf. They couldn't make out what wast happening, but there was a lot of yelling, pulsing lights, and strange squelching noises. The great wolf lets out a howl. Then a terrified, posh looking man in a robe ran past them... he looked a lot like Count Vaderbliff. Squeakela used the prison key to unlock the wolf, which gave her a serious look, then hobbled out into the sewers. Derb and Squeakela led the beastkin prisoners to the relative safety of town.`,
        status: QuestStatus.Success,
        clanId: "c1",
        metrics: [
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 20,
            week: 4,
          },
          {
            metricRuleId: MetricRuleId.CivilianSaved,
            value: 9,
            week: 4,
          },
        ],
      },
    ],
  },
  {
    id: "q4-9",
    name: "Blaze a trail",
    reward: 500,
    expireWeek: 4,
    postedWeek: 4,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Kill,
    questRank: Ranks.B,
    postedBy: "Guildmaster Vahn",
    description: `"Shut up. Hey. Quiet! That's coming out of your reward gold. It's your fault for not shutting your gob. You too! Shut it! Look It's not going to get better until we get some of these scared people out of here. But in order to do that we need to clear a safe enough path to somewhere else. Valeon is out of the question. That's right through the belly of the beast. Furthbrand is a dangerous enough trip even if it wasn't having horrible storms right now. So the only option is going south to Serpentina. Go out there and thin the beasts out, and hopefully Axel Gearlywhirl's monster deterring dohicky works well enough to keep the road clear long enough to get people out of here."`,
    parties: [
      {
        id: "p1-q4-9",
        startWeek: 4,
        notes: `Blessed Sword is so good it's almost boring some times. That's why it came as surprise when they were unable to deliver. It's not that they couldn't kill the monsters: there were simply so many beasts which were so furious, that the plan itself was doomed to fail. Then when Clockwork chisel blew up the wall they had to rush back. Arc was so furious with them he blew up three houses. The rest of the party had to restrain Arc to get him to throw in the towel. Looks like the "festival" is going to go into its third week.`,
        status: QuestStatus.Failed,
        clanId: "c4",
        metrics: [
          {
            metricRuleId: MetricRuleId.QuestFailed,
            rank: Ranks.B,
            value: 1,
            week: 4,
          },
        ],
      },
    ],
  },
  {
    id: "q4-10",
    name: "Many mouths to feed",
    reward: 50,
    expireWeek: 4,
    postedWeek: 4,
    claimType: QuestClaimType.Clan,
    questType: QuestTypes.Kill,
    questRank: Ranks.C,
    postedBy: "Trade Guild",
    description: `We don't know how long all these people are going to be trapped here. If we don't feed them, we're going to have a riot on our hands. Riots are terrible for business.`,
    parties: [
      {
        id: "p1-q4-10",
        startWeek: 4,
        notes: `The Crockpot clan went "fishing" off the the wall and brought up, a spotted vulperaptor, a warted gobloid (which they threw back), a couple mandrake drakes, and grooved onion turtle. They made a giant stew and set up an emergency soup kitchen. Even the Chairman rolled up his sleeves and got his hands dirty.`,
        status: QuestStatus.Success,
        clanId: "c7",
        metrics: [
          {
            metricRuleId: MetricRuleId.RewardGold,
            value: 50,
            week: 4,
          },
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            rank: Ranks.B,
            value: 1,
            week: 4,
          },
        ],
      },
    ],
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
    Guildmaster Vahn: "Hey! Shut Up! Hey! HEY!... sorry I'll pay for that... Ok. Anyway. I'm sure you've heard about the giant wolf. It's berserk and attacking anything that moves. It's scared all of the monsters out of the forest. Count Vanderbliff would like to say something.
    Count Vanderbliff: "This monster must be stopped. It killed my people. However, I will match the guild reward if it is captured alive."`,
    parties: [
      {
        id: "p1-q3-1",
        startWeek: 3,
        notes:
          "If there was ever a quest for Mythril Trap this was it. They would have gone to hunt the giant wolf even if there were no reward. They set out and immediately caught signs of it. Broken trees. Scattered bodies. Shay tracked the beast and vince laid traps. Everything was going according to plan. They snared beast and began hitting it with paralyzing and sleep arrows. But as it was looking like it would go down without much of a fight, the blue beast broke suddenly sent white hot bolts of plasma out from its body, completely ripping loose from the snares. Metalfang stepped in just in time to protect the rest of the party, and was knocked briefly unconscious, seeing this his sister went into a blind rage. The monster's electric blast had obviously taken the last of its energy. Vince shouted about needing to keep the beast alive. But Stoneclaw was was about to end it. Metalfang had regained his senses and jumped to hold his sister back before the killing blow. She kept lashing, severely wounding her brother and Vince in the process. In the end Brother Chilpin who they had paid to wait by the edge of the forest for just such an occasion patched them up (Stoneclaw paid the majority of his commission because she felt so bad). They brought the beast in and it was displayed in a giant electric proof cage at the closing night of the festival.",
        status: QuestStatus.Success,
        clanId: "c3",
        metrics: [
          {
            metricRuleId: MetricRuleId.EnemyDefeat,
            value: 1,
            rank: Ranks.A,
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
        notes: `Trimble, bandaged from being mugged by Gad last week, approached Jan directly about the request. She returned the watch in the first two weeks ago after all. But while they were talking Syd showed up, "Ah it's the guild lady! Where's my money?". Simultaneously down the street Gad tracked down Moira who he heard stole the watch form him. Moira spotted him coming and immediately ran away. As she was dashing by she saw Jan, "Hey! Servant lady, You didn't tell the guild and I didn't get my reward!" Jan was uncharacteristically speechless then Trimble recognizes Gad running his way, "The mugger! Guards!" Gad, enraged, tries to throw a knife at Moira, it misses and hits Mr. Dinklesbean right in between the eyes killing him instantly. The guards showed up to see this, "All of you are under arrest!" A brief pause... then Jan exclaimed, "Guards! Thank goodness you're here! These ruffians killed my husband!" Another pause... All the other adventurers bolted off in different directions. One by one Fixer grabbed them and brought them to a safe house. He then fixed the problem. Later he and Jan were seen sharing a drink with Dorf Mucklebunk.`,
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
    expireWeek: 3,
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
        notes:
          "Louis walked some drunks home. Vivian's presence at the city square was enough to keep even the surliest of partiers in line.",
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
          "Sheila stymied some would be burglars at the accessory shop. Drea stopped a mugging ",
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
        notes: `Right before his match with Ken, Sir Robin claimed to have a terrible bout of indigestion. Mara looked at Clara and crossed her arms. The maid squire grumbled, "Fine... I'll do it." Then she stepped in the ring. After beating Ken & Geoffrey soundly she set off against fissure. The fight was almost too fast for people to see. Clara's left arm and leg were quickly paralyzed. But then at the last moment the Fissure went flying out of the ring and smashed into a wall. Clara scowled at Mara, grabbed her bag of gold and ran off without a word.`,
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
          "Elnar made very good money selling potions this year. Oddly many people are feeling under the weather.",
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
            value: 200,
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
            value: 600,
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
          "After much splishing they subdued the vicious but delicious fishious Pescadomos! Tundrapaw was reeling it in for over 4 hours.",
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
        notes:
          "Guy Norman saved the day. But he couldn't save everyone. The dawn after the monster hoard attack, he was seen burying a small body.",
        status: QuestStatus.Failed,
        clanId: "c1",
        metrics: [
          {
            metricRuleId: MetricRuleId.QuestFailed,
            rank: Ranks.D,
            value: 1,
            week: 3,
          },
          {
            metricRuleId: MetricRuleId.CiviliansDead,
            value: 1,
            week: 3,
          },
          {
            metricRuleId: MetricRuleId.CivilianSaved,
            value: 10,
            week: 3,
          },
        ],
      },
      {
        id: "p5-q2-5",
        startWeek: 3,
        notes:
          "The monsters were on a whole different level this week. Tad never stood a chance. It didn't matter how much dirt he manced. He was skewered by a spire wolf and then crushed by wartoise. Corpse eaten by a slothnor.",
        status: QuestStatus.Failed,
        clanId: "c1",
        metrics: [
          {
            metricRuleId: MetricRuleId.QuestFailed,
            rank: Ranks.D,
            value: 1,
            week: 3,
          },
          {
            metricRuleId: MetricRuleId.CiviliansDead,
            value: 4,
            week: 3,
          },
        ],
      },
      {
        id: "p6-q2-5",
        startWeek: 3,
        notes:
          "Landorin was not prepared for the wall of beasts inexplicably drawn to the city. A beastkin family of shepherds was about to be ravaged by a herd of flamboars. He used a light spell to steal the monsters attention and then was promptly trampled. Luckily Luna was taking a moment to get away from the noise of the festival by sitting on the city wall. She saw the bright light and then found Landorin's body in time to resurrect him. He immediately ran off and got killed 2 more times defending (distracting). Luna had to knock him out after the last resurrection and carry him to safety.",
        status: QuestStatus.Failed,
        clanId: "c1",
        metrics: [
          {
            metricRuleId: MetricRuleId.QuestFailed,
            rank: Ranks.D,
            value: 1,
            week: 3,
          },
          {
            metricRuleId: MetricRuleId.CivilianSaved,
            value: 6,
            week: 3,
          },
          {
            metricRuleId: MetricRuleId.CiviliansDead,
            value: 4,
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
          "The caravan was targeted by Bandits. Sir Robin was hit on the head and passed out. Clara defended him and the rest of the caravan. At the end she was about to get hit by an arrow when Mara stepped in and caught it out of mid air. Mara pointed at Sir Robin's unconscious body and said, 'This is the man you love?' To which Clara replied 'Mah-om' while clobbering a briggand right in the jaw.",
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
            value: 27,
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
            value: 41,
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
          "Landorin bit off more than he could chew when he tried to take on a pack of sveldtvulfs. Luckily Guy Norman, the new guy, showed up to help. He managed to single handedly bring down the entire pack and save Landorin in the process. Guy split the reward anyway.",
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
