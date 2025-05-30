import { EntityTypes, IResearch } from "types/Research";

export const rawResearch: IResearch[] = [
  {
    note: `You see Vlort chilling on the city wall taking swigs from a large bottle. His focus is loose. He's not looking at anything in particular. As people are rushing back and forth trying to prepare for the worst, he's completely unfazed. If anything he looks bored.`,
    weekHappened: 5,
    villagerPrompts: [
      {
        villagerId: "v1",
        week: 5,
        text: "Vlort has been sitting on the sidelines this whole time. Has he been waiting for his moment to put on a grand show? Are the stakes finally high enough that he will get off his ass and actually save the town… nay, the world?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v1",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a20",
      },
    ],
  },
  {
    note: `Clara has been hanging around with the Exploding fist crew ever since Mara's death. They seem to know who she is, and are all very affectionate toward her. She seems to have a fire in her eyes behind the tears.`,
    weekHappened: 5,
    villagerPrompts: [
      {
        villagerId: "v1",
        week: 5,
        text: "Clara Kimberflorn has had a series of good weeks. How has she been sustaining her stamina this whole time? Does she have it in her to go another week?",
      },
      {
        villagerId: "v3",
        week: 5,
        text: "Clara Kimberflorn's sudden appearance as a powerhouse the last couple weeks has been quite a twist.  Who is this mysterious person, and is there any reason to believe that The Mill might suddenly turn into something useful with her helping them?",
      },
      {
        villagerId: "v5",
        week: 5,
        text: "With Mara dead will Clara take up the leadership of the guild?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v1",
      },
      {
        entityType: EntityTypes.Villager,
        entityId: "v3",
      },
      {
        entityType: EntityTypes.Villager,
        entityId: "v5",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a40",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a39",
      },
      {
        entityType: EntityTypes.Clan,
        entityId: "c9",
      },
    ],
  },
  {
    note: `Tall Pine Marlon has been very clear that he's going to try and get Mamut (the giant wolf) back to the sacred grove deep in the northern forest. So, he is going to have plenty of trees to work with.`,
    weekHappened: 5,
    villagerPrompts: [
      {
        villagerId: "v1",
        week: 5,
        text: "How many trees are left standing that Tall Pine Marlon can deploy to fight against whatever monstrosities that attack? Are those battles going to be in the woods where it is strategically useful for Tall Pine Marlon? ",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v1",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a59",
      },
      {
        entityType: EntityTypes.Quest,
        entityId: "q5-5",
      },
    ],
  },
  {
    note: `You go for a walk to clear your head. There aren't many places inside to get away from people now, but the area near where Axel's contraption exploded has a bit of a taboo feeling, so it's the best you've got. As you turn a corner you freeze. You see Tall Pine Marlon, talking to a gigantic blue wolf, "PHIL!? You're in there?! I thought you were dead for sure!" The wolf gives the elf a huge sloppy lick, lifting him 6 inches off the ground leaving him drenched with slobber, "Well solves the problem of finding Mamut I guess!"`,
    weekHappened: 5,
    villagerPrompts: [
      {
        villagerId: "v2",
        week: 5,
        text: "Sick",
      },
      {
        villagerId: "v6",
        week: 5,
        text: "????",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v2",
      },
      {
        entityType: EntityTypes.Villager,
        entityId: "v6",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a59",
      },
      {
        entityType: EntityTypes.Quest,
        entityId: "q5-5",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a60",
      },
    ],
  },
  {
    note: `Arc Northstar walks by you with purpose, he's quickly followed by Sheila Solara. "We're doing this right?! We're going to take on this glorp god right?! YEAH! WOO! This is hero stuff right here. ALRIGHT! YEAH!" Arc doesn't turn around, and keeps walking, "This isn't a game." But you see him clench his fist and smile ever so slightly.`,
    weekHappened: 5,
    villagerPrompts: [
      {
        villagerId: "v2",
        week: 5,
        text: "sick",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v2",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a19",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a15",
      },
      {
        entityType: EntityTypes.Quest,
        entityId: "q5-2",
      },
    ],
  },
  {
    note: `You grease some palms with the little money you have left, "Don't tell anyone I told ya... but Gorn is the front fer tha' Valeon Count Vanderbliff. 'Parently he's trying to weasel his way out'a town. Don't know how well that's gonna go fer him though... hear he's the guy wot got us in this mess the first place." He spits.`,
    weekHappened: 5,
    villagerPrompts: [
      {
        villagerId: "v3",
        week: 5,
        text: "Who is Gorn Wigby's benefactor, and what is it that they want?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v3",
      },
      {
        entityType: EntityTypes.Villager,
        entityId: "q5-6",
      },
    ],
  },
  {
    note: `You chat up some of your bookie "friends" while moving stuff to a more defensible location, "I mean that Northstar guy has a stick up his ass for sure. I'm normally all about Night Cowel, they're my kind of people. Buuuuuut listen... let's just say if I was drowning in the river... I know who I'd rather have on the bank ya' hear me? The only way I'm not sinking to the bottom with Night Cowl is if they know: 1. I'm rich. 2. They'll only get paid if I'm alive." He puts a crate down and looks at you seriously, "Alls I'm sayin' is that right now we're all in a river buddy... and you're sure as hell not rich."`,
    weekHappened: 5,
    villagerPrompts: [
      {
        villagerId: "v3",
        week: 5,
        text: "I know Night Cowl ended up a big fat flop last week, but of the A and B tier clans, only them and Blessed Sword are still at full strength.  While Blessed Sword has been almost boringly consistently strong the entire game, Night Cowl are the ones who can turn the tables when dark mysterious shit is happening.  What's the word on the street about the members of Night Cowl and what they're up to this week?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v3",
      },
      {
        entityType: EntityTypes.Clan,
        entityId: "c2",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a15",
      },
    ],
  },
  {
    note: `You ask this question to the one of the clerks at the Adventurers guild, "Finally! Yes! Someone gets it! Hard choices all around, they're all so great." Apparently the staff a the guild are in it for more than just the money, "Ok ok ok. I mean... all of them. Like all of them are so... you know?" Eyebrows and a whistle, "Ok for me personally I think I would absolutely have to marry Shay, she's so reliable. Then I'd get busy with Elise because, I mean, damn. You get it. I can tell, YOU get it. She'd be like, A LOT, with all the threads and stuff you know?! Ugh but then I'd have to kill Vince and he's super nice to everyone at the guild, and so funny. Ugh maybe I marry him?! Yeah. Ok then I have to kill Shay! NO!"... this continues for a long time. Long after you leave.`,
    weekHappened: 5,
    villagerPrompts: [
      {
        villagerId: "v4",
        week: 5,
        text: "I'm dealing with a horrible demon. Fuck Marry Kill: Vince Dawn, sleek Wind Shay, Elise Shadowthread.",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v4",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a2",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a9",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a8",
      },
    ],
  },
  {
    note: `You see Buster filling a giant backpack with holy water, magic scrolls, and stakes. Nearby is a silver hammer as big as his body. Also, you notice that he's shirtless... and pants-less... ok he's wearing only a loin cloth. Oh and now he's oiling his body up. He's muttering a lot. Why does he smacking himself? He's definitely up to... something.`,
    weekHappened: 5,
    villagerPrompts: [
      {
        villagerId: "v4",
        week: 5,
        text: "How does buster zeddemore feel about zombies?",
      },
      {
        villagerId: "v5",
        week: 5,
        text: "Will Buster actually do something about the undead?",
      },
      {
        villagerId: "v7",
        week: 5,
        text: "Has anyone actually dealt with the undead before?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v4",
      },
      {
        entityType: EntityTypes.Villager,
        entityId: "v5",
      },
      {
        entityType: EntityTypes.Villager,
        entityId: "v7",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a57",
      },
      {
        entityType: EntityTypes.Quest,
        entityId: "q5-1",
      },
    ],
  },
  {
    note: `While helping Sister Lasiter carry a stretcher you ask her about the church and the cult, " Oh! Looking for light in the darkness I see. The Church of the Holy Mother has been around for hundreds of years. It was founded by the four children of the Holy Mother herself, after she purified the wastes of Volgoth..." The description goes on quite a while, you eventually interrupt to ask about it's relation to the cult, she stares at you, "There are many old gods, lesser deities, and unknowable entities in this world... some prey on the weak of soul. They feed on the madness of man. They offer nothing but promises and pain. As long as there are people who will fight these false divinities will always falter and fade."`,
    weekHappened: 5,
    villagerPrompts: [
      {
        villagerId: "v4",
        week: 5,
        text: "How is the cult and sacred mother religion related? Is anyone at risk of joining this cult?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v4",
      },
    ],
  },
  {
    note: `Clockwork Chisel is pretty much out of commission. They're all laid up in the Church of the Holy Mother's infirmary. Axel in particular is really banged up. Though Norn has to keep bringing Thorin back to his bed, because he keeps trying to help repair the wall.`,
    weekHappened: 5,
    villagerPrompts: [
      {
        villagerId: "v5",
        week: 5,
        text: "Is clockwork chizel going to do anything to make up for their failures last week?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v5",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a38",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a52",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a21",
      },
      {
        entityType: EntityTypes.Clan,
        entityId: "c5",
      },
    ],
  },
  {
    note: `Derb approaches you because he can now control rats, and he now feels you're kind of a colleague. He tells you about The Mill, "You know I joined because it was literally the only clan that would take me... but now that Guy is there he's kind of become a defacto leader. Filling to hole that Vlort leaves you know? Anyway, he's really listening to all of us and pulling us into a team. I was scared before, but now I don't know. Maybe we can do this!" He toots his horn and rats bring him his leather helmet.`,
    weekHappened: 5,
    villagerPrompts: [
      {
        villagerId: "v6",
        week: 5,
        text: "?????",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v6",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a42",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a20",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a31",
      },
      {
        entityType: EntityTypes.Clan,
        entityId: "c1",
      },
    ],
  },
  {
    note: `You check in at the town square where Crockpot is running the refuge mess tent. There doesn't seem to be much food left in the crates and barrels. You see The Chairman pacing around, he looks pretty sweaty. Julia Pepperschild and Tundrapaw are keeping a close eye on him. They look nervous. Spicetro comes in with a weird looking root, "Look this is what I could find." The Chairman immediately snatches it and devours it, then goes back to pacing. Everyone watches them warily. You leave before whatever happens... happens.`,
    weekHappened: 5,
    villagerPrompts: [
      {
        villagerId: "v7",
        week: 5,
        text: "Are we running out of food?!?",
      },
      {
        villagerId: "v2",
        week: 5,
        text: "sick",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v7",
      },
      {
        entityType: EntityTypes.Villager,
        entityId: "v2",
      },
      {
        entityType: EntityTypes.Clan,
        entityId: "c7",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a50",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a46",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a13",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a62",
      },
    ],
  },
  {
    note: `You're not alone in this feeling of helplessness. The town is safe for now on the inside, but it feels like a pressure cooker. You happen to be walking by and hear Guildmaster Vahn mention quietly to Arc Northstar, "I don't want to get anyone's hopes up, but the paired magic ring that Vivian Crestmor gave me just turned white. Looks like the talks with Valeon went well and they're on their way back."`,
    weekHappened: 5,
    villagerPrompts: [
      {
        villagerId: "v7",
        week: 5,
        text: "What is even happening!??! We do we even have city walls?!?! It seems like it's just as dangerous inside as it is outside.",
      },
      {
        villagerId: "v6",
        week: 5,
        text: "?????",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v7",
      },
      {
        entityType: EntityTypes.Villager,
        entityId: "v6",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a15",
      },
      {
        entityType: EntityTypes.Quest,
        entityId: "q4-3",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a22",
      },
    ],
  },


  {
    note: `Vlort might not living up to his rank and protecting the weak. But though she may be aloof, everyone knows there isn't anyone who cares more for the people of Morton than Sleek Wind Shay`,
    weekHappened: 4,
    villagerPrompts: [
      {
        villagerId: "v1",
        week: 4,
        text: "What's the deal with newcomer Vlort?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v1",
      },
      {
        entityType: EntityTypes.Villager,
        entityId: "v1",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a20",
      },
    ],
  },
  {
    note: `When Mogreal tried to leach one of those afflicted by the scourge the leach grew to 3 times it's normal size, and merged directly into the patient's body. It had to be cut off causing incredible pain. Hopefully one of the parties looking for medical herbs can find a cure.`,
    weekHappened: 4,
    villagerPrompts: [
      {
        villagerId: "v1",
        week: 4,
        text: "Does Mogreal Thunderbottom have enough leaches to prevent the impending plague?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v1",
      },
      {
        entityType: EntityTypes.Quest,
        entityId: "q4-5",
      },
    ],
  },
  {
    note: `You approach The Chairman and ask him if you have what it takes. "There is a chef that lives in all of us. We are all made of iron. Feed first. Glory will follow!" He then takes a huge bite of a bell pepper and walks away. He seems pretty fired up.`,
    weekHappened: 4,
    villagerPrompts: [
      {
        villagerId: "v1",
        week: 4,
        text: "Do I, Angus Jeter, have what it takes to become the next Iron Chef? Can I make enough bread and soup to feed the hungry masses and prevent the town from rioting?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v1",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a50",
      },
      {
        entityType: EntityTypes.Quest,
        entityId: "q4-10",
      },
    ],
  },
  {
    note: `Most of the healers have their hands full tending to the sick. Finding a cure will be left to those most suited to surviving outside of the wall with minimal support. If they do find a cure it will save tons of people.`,
    weekHappened: 4,
    villagerPrompts: [
      {
        villagerId: "v2",
        week: 4,
        text: "Which healers seem like they are best equipped to heal and/or understand what is causing this mysterious illness?",
      },
      {
        villagerId: "v3",
        week: 4,
        text: "All the diseases and darkness make me think healers will be especially powerful this week.  No one in Breath of Life is sick, injured, or dead... are any of their members particularly suited to this kind of desperate situation?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v2",
      },
      {
        entityType: EntityTypes.Villager,
        entityId: "v3",
      },
      {
        entityType: EntityTypes.Quest,
        entityId: "q4-10",
      },
    ],
  },
  {
    note: `You overhear a discussion between some bedraggled town guards, "Where did that Norman guy come from? He's incredible." "Who cares where he came from. I just hope he doesn't decide to leave. I wouldn't have my legs if he weren't there this morning"`,
    weekHappened: 4,
    villagerPrompts: [
      {
        villagerId: "v2",
        week: 4,
        text: "Did Guy Norman get lucky, or does he remain on a monster killing spree?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v2",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a31",
      },
    ],
  },
  {
    note: `Because of Stoneclaw's berserker fit, both MetalFang and Vince are out of commission. You see them while bringing supplies to the infirmary at the church. Vince is blabbing, "Our girls will get help from Valeon. Don't you worry. No one knows the northern forest like they do!"`,
    weekHappened: 4,
    villagerPrompts: [
      {
        villagerId: "v2",
        week: 4,
        text: "Can Mythril Trap find and trap the wolf AGAIN??",
      },
      {
        villagerId: "v7",
        week: 4,
        text: "EMPTY",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v2",
      },
      {
        entityType: EntityTypes.Villager,
        entityId: "v7",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a10",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a11",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a9",
      },
      {
        entityType: EntityTypes.Quest,
        entityId: "q4-3",
      },
    ],
  },
  {
    note: `You're poking around at the magic shop, and you seem Marcus McStain. He looks pretty tired, you hide behind a shelf and eavesdrop as he's talking to the clerk. "What do you mean you're out of Mana potions. I told you-know-who I would bring them... for the thing."`,
    weekHappened: 4,
    villagerPrompts: [
      {
        villagerId: "v3",
        week: 4,
        text: "The dark lesions appearing on the townfolk, the oily black smudge that won't come off the quest board from that creepy lost pet quest, the grave robbing, and the swarm of flies.... if I didn't know better, I'd think there was a necromancer or a lich loose in town.  Any word on characters acting weird, dabbling in dark magic, or other such dark nonsense?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v3",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a4",
      },
    ],
  },
  {
    note: `Your connections are more than happy to talk. "Everyone knows they're going to leave tonight. They even got Night Cowl completely booked to sneak them through the west gate. If I weren't so scared of Tjorn doing his thing to my bones you know I'd be following them."`,
    weekHappened: 4,
    villagerPrompts: [
      {
        villagerId: "v3",
        week: 4,
        text: "Stimbar Kolnok's people have been running their mouths at the pubs around town.  This \"tour\" ain't what it seems.  What's the inside scoop on the tour?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v3",
      },
      {
        entityType: EntityTypes.Clan,
        entityId: "c2",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a3",
      },
      {
        entityType: EntityTypes.Quest,
        entityId: "q4-6",
      },
    ],
  },
  {
    note: `Blessed Sword is going to be trying to secure an escape route for the civilians, so if anyone is going to find a cure it's Breath of Life. Though they are definitely going to focus on curing the plague before your foot. We all need them to do that first for sure.
`,
    weekHappened: 4,
    villagerPrompts: [
      {
        villagerId: "v4",
        week: 4,
        text: "I have a horrible case of bog foot, more advanced than what I can cure with usual cattail-cricket poultice. I am shopping around for the best healers: how will Blessed sword heal me versus breath of life folk?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v4",
      },
      {
        entityType: EntityTypes.Clan,
        entityId: "c4",
      },
      {
        entityType: EntityTypes.Clan,
        entityId: "c8",
      },
      {
        entityType: EntityTypes.Quest,
        entityId: "q4-5",
      },
    ],
  },
  {
    note: `Chilpin looks like he might almost fall over from exhaustion. He's doing the work of five healers on his own. If you cuddled him he would probably collapse. Frost Bough or Shelly hopefully will find a cure so he can finally sleep.`,
    weekHappened: 4,
    villagerPrompts: [
      {
        villagerId: "v4",
        week: 4,
        text: "What is brother chilpin up to this evening?  Would he enjoy a cuddle (for a cost) or is he busy?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v4",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a61",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a53",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a29",
      },
      {
        entityType: EntityTypes.Quest,
        entityId: "q4-5",
      },
    ],
  },
  {
    note: `You make the mistake of asking this question to a beastkin, they glare at you, "Oh! Oh right!? Because I'm a wolfkin I'm friends with the wolf? Hey... HEY HEY! How's your uncle? You know, that dirty swamp gorilla." She spits and walks away. Derb pats you on the shoulder, "You're not the first human to make that mistake." He toots his trumpet and a bunch of rats start searching around town.`,
    weekHappened: 4,
    villagerPrompts: [
      {
        villagerId: "v4",
        week: 4,
        text: "Do any of these beast-kins personally know this wolf?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v4",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a42",
      },
      {
        entityType: EntityTypes.Quest,
        entityId: "q4-2",
      },
    ],
  },
  {
    note: `You go to the church of The Holy Mother and ask, a sister replies, "Well we used to have an exorcist... buuuuuut... he's a little-" Just then Buster Zedmore grabs you buy the shirtfront, "The Mass! The pulsing purple! It is born of the blood of blue lightning! We must to the hollow tree!" He smacks you a few times, smacks himself a few times, then runs off. The sister tips her head in his direction apologetically.`,
    weekHappened: 4,
    villagerPrompts: [
      {
        villagerId: "v5",
        week: 4,
        text: "Between missing people and exhumed bodies, I fear that we're looking at undead. Who are the most experienced adventurers in dealing with undead problems?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v5",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a57",
      },
    ],
  },
  {
    note: `You ask the town guard who is most excited to help with the wall. "Well Clockwork Chisel is setting up a post on the top of the wall to the north. The beasts are coming from thatways. I worry that they might be taking this a bit lightly though. Lotsa talk about how this is no problem. Where were they when the monsters came the first time." He looks forlonly out over the mass of writhing monsters, "Too bad that Norman fella isn't helping out this week."`,
    weekHappened: 4,
    villagerPrompts: [
      {
        villagerId: "v5",
        week: 4,
        text: "Which clan has the best resources and willingness to shore up the defenses of the town?",
      },
      {
        villagerId: "v6",
        week: 4,
        text: "Would a snake in the dike do?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v5",
      },
      {
        entityType: EntityTypes.Villager,
        entityId: "v6",
      },
      {
        entityType: EntityTypes.Clan,
        entityId: "c5",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a31",
      },
      {
        entityType: EntityTypes.Quest,
        entityId: "q4-7",
      },
    ],
  },
  {
    note: `Axel actually makes a stop into the watch shop. You notice him grabbing a bunch of supplies. You see that he's grabbing a bunch of low grade gears and try to talk to him about it. He cuts you off, "Oy! Gearboy, I'm not talking to you. Let the real artisans do the talking."`,
    weekHappened: 4,
    villagerPrompts: [
      {
        villagerId: "v5",
        week: 4,
        text: "Does Axel Gearlywhirl's monster device actually work? Has it been effective in testing?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v5",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a38",
      },
      {
        entityType: EntityTypes.Quest,
        entityId: "q4-7",
      },
    ],
  },
  {
    note: `The sentiment around town is that the three most dangerous and important quests this week are to: Get Reinforcements from Valeon, Curing the Plague, and Securing an Escape Route. If any of those is successful they will be huge. Though a lot of things have to go right for the escape route to work. It's not just Blessed Sword that will need to succeed.`,
    weekHappened: 4,
    villagerPrompts: [
      {
        villagerId: "v6",
        week: 4,
        text: "What quest is likely to produce the most points?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v6",
      },
      {
        entityType: EntityTypes.Quest,
        entityId: "q4-3",
      },
      {
        entityType: EntityTypes.Quest,
        entityId: "q4-5",
      },
      {
        entityType: EntityTypes.Quest,
        entityId: "q4-9",
      },
      {
        entityType: EntityTypes.Clan,
        entityId: "c4",
      },
    ],
  },
  {
    note: `Everybody is talking about the mysterious newcomer Guy Norman. Also, because of the disease many people are banking on healers.`,
    weekHappened: 4,
    villagerPrompts: [
      {
        villagerId: "v6",
        week: 4,
        text: "Who is likely to be the adventurer of the week?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v6",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a31",
      },
      {
        entityType: EntityTypes.Clan,
        entityId: "c8",
      },
    ],
  },
  {
    note: `You're feeling under the weather. You hope you don't have the sickness everyone is talking about. You're staying in today in hopes you recouperate, out of your window you see Clara and Sir Robin. Clara is exasperated, "You took the easiest quest?! Robin, sir. How will we prove to my mother you're not the boob she thinks you are?--- Fine. If we're going to do it. Let's do it right. There has to be more going on with the cemetery than just robbers. It looks really strange over there."`,
    weekHappened: 4,
    villagerPrompts: [
      {
        villagerId: "v7",
        week: 4,
        text: "EMPTY",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v7",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a39",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a41",
      },
      {
        entityType: EntityTypes.Quest,
        entityId: "q4-1",
      },
    ],
  },
  {
    note: `You do feel better the next day. Seems like it was just fatigue and nerves. You are on a supply run and you see Axel Gearlywhirl leaving the watch shop. Gartok comes out and mumbles, "That guy just left with a bunch of defective gears." You both watch as he rushes away.`,
    weekHappened: 4,
    villagerPrompts: [
      {
        villagerId: "v7",
        week: 4,
        text: "EMPTY",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v7",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a38",
      },
      {
        entityType: EntityTypes.Quest,
        entityId: "q4-7",
      },
    ],
  },

  /// Week 3

  {
    note: `While getting treated for a strange rash at the church infirmary, you mention Vince offhandedly. One of the sisters perks up at the name and says, "Vince Dawn? He was in here the other day talking to Brother Chilpin. Apparently Mythril Trap wanted a healer to be on standby incase something went wrong with a big quest."`,
    weekHappened: 3,
    villagerPrompts: [
      {
        villagerId: "v1",
        week: 3,
        text: "How is Vince Dawn feeling after two weeks of rockin it?",
      },
      {
        villagerId: "v5",
        week: 3,
        text: "Are any adventurers/clans excited or enthusiastic about trying to capture the monster in the forest?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v1",
      },
      {
        entityType: EntityTypes.Villager,
        entityId: "v5",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a9",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a61",
      },
      {
        entityType: EntityTypes.Clan,
        entityId: "c3",
      },
    ],
  },
  {
    note: `Phil, their current host (a wooly badger), and the rest of Verdant glade all look a little rough around the edges. Apparently their work last week has left them pretty bushed.`,
    weekHappened: 3,
    villagerPrompts: [
      {
        villagerId: "v1",
        week: 3,
        text: "How is the hosts immune system doing for Philagula? Will she be in good form this week?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v1",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a60",
      },
      {
        entityType: EntityTypes.Clan,
        entityId: "c10",
      },
    ],
  },
  {
    note: `Anastasia is feeling about as well as Alexandria... and vice versa. They're both very excited for the festival and plan to take it easy since they made pretty good money last week. You overhear them talking about their excitement about Julia Pepperschild competing again.`,
    weekHappened: 3,
    villagerPrompts: [
      {
        villagerId: "v1",
        week: 3,
        text: "How is Anastasia Von Duffenklampf feeling this week?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v1",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a46",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a56",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a55",
      },
    ],
  },
  {
    note: `At the market you see a trapper selling pelts and ask him about the wolf. He mentions that he's heard rumors of a giant wolf in the Northern Forest before this, but has never met anyone (credible) who's seen it before. He's convinced the only clan that stands a chance is Mythril Trap`,
    weekHappened: 3,
    villagerPrompts: [
      {
        villagerId: "v2",
        week: 3,
        text: "What is known (or assumed?) about how to track and capture this wolf? Has it been done before?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v2",
      },
      {
        entityType: EntityTypes.Clan,
        entityId: "c3",
      },
      {
        entityType: EntityTypes.Quest,
        entityId: "q3-1",
      },
    ],
  },
  {
    note: `Everyone in town knows Arc is a fish that's too big for the Morton pond. The question is not if, but when he is finally going to go on a true Hero's quest. The only being in town who might even pose a real threat to him is Vlort, but that's debatable, since the primordial very rarely bothers to do much other than loaf around and watch all the mortals do mortal stuff... like dying.`,
    weekHappened: 3,
    villagerPrompts: [
      {
        villagerId: "v2",
        week: 3,
        text: "Is Arc Northstar known as a consistently powerful adventurer, or does he tend to lose steam the more he works?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v2",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a15",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a20",
      },
    ],
  },
  {
    note: `You overhear a fight out in the street outside the Broken Leg. Mara Wright is shouting at someone, "Girl. What're ya doin'? Just come take my spot at the dojo. We both know yer stronger'n me now... what? No. No he's not. He's about as tough as a soggy piece of bread... he couldn't possibly win the Bounty Battle. You could, but... fine. Sure I'll let it go if one of you wins the thing."`,
    weekHappened: 3,
    villagerPrompts: [
      {
        villagerId: "v2",
        week: 3,
        text: "What's something unexpected that I overheard at the broken leg this week?",
      },
      {
        villagerId: "v5",
        week: 3,
        text: "Is the Bounty Battle always won by an A or S ranker?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v2",
      },
      {
        entityType: EntityTypes.Villager,
        entityId: "v5",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a39",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a40",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a41",
      },
      {
        entityType: EntityTypes.Quest,
        entityId: "q3-8",
      },
    ],
  },
  {
    note: `You mention the drawing to the guild receptionist. They remark that no one knows who put it up. And when they take it down it always gets replaced. Also it's not put up with a pin like other quests. It's stuck on there and behind it is a sticky, dark mark which the guild staff cannot seem to remove no matter how hard they try.`,
    weekHappened: 3,
    villagerPrompts: [
      {
        villagerId: "v3",
        week: 3,
        text: "These weird little quests are starting to get pretty eerie. The damn watch feels like a distraction, and the lost pet with the creepy drawings hints at something pretty sinister. Any rumors on the street about which of the D and E tier quests might point to something bigger?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v3",
      },
      {
        entityType: EntityTypes.Quest,
        entityId: "q1-9",
      },
    ],
  },
  {
    note: `You talk to a man bringing in a bunch of pelts for sale at the Festival, "Mythril Trap is gonna' bag that wolf. Mark my words. They're the only clan what can do it reckon. Also, I hear tell that tiger lady is really fired up, feeling pretty let down 'bout not having big prey last week an all."`,
    weekHappened: 3,
    villagerPrompts: [
      {
        villagerId: "v3",
        week: 3,
        text: "Mythril Trap is one of the only powerful clans with no one injured, and some of the quests seem right up their alley. Especially the big blue wolf. What kind of trouble are they going to be up to this week?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v3",
      },
    ],
  },
  {
    note: `You overhear a conversation at the gambling hall as they set up for the event, "Weird year this. Normally there'd be more travlin' adventurers to compete, but this year it's all local. It's strange to say it, maybe it'll be boring. Who can even stand up to that little pixie?" His fellow compatriot replies, "Yeah. Since Mara banned Arc, and her daughter's missin' and all. Not a lot of the regular heavy hitters in there."`,
    weekHappened: 3,
    villagerPrompts: [
      {
        villagerId: "v3",
        week: 3,
        text: "Who do you like in the big fist fighting competition? Lot of good brawlers in this town",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v3",
      },
    ],
  },
  {
    note: `Some say those with eternity lose their lust for life, but Vlort is the devil advocating otherwise. Where there is an ale to be drunk, Vlort will be there. Where there's a new story of mishaps or triumphs being told, Vlort appears. Vlort loves watching mortals expressing their mortality. Vlort just wants stuff to happen because it's fun. A clan seemed a good way to have a front row seat for viewing interesting people into interesting situations. Also, rumor has it Vlort already saved the world, so he's bored of that.`,
    weekHappened: 3,
    villagerPrompts: [
      {
        villagerId: "v4",
        week: 3,
        text: "Vlort, founder of the Mill: why is his clan so diverse, so multi-skilled, and the other clans are more homogenous?  Was that intentional?",
      },
      {
        villagerId: "v1",
        week: 4,
        text: "What's the deal with newcomer Vlort?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v4",
      },
      {
        entityType: EntityTypes.Villager,
        entityId: "v1",
      },
      {
        entityType: EntityTypes.Villager,
        entityId: "a20",
      },
      {
        entityType: EntityTypes.Clan,
        entityId: "c1",
      },
    ],
  },
  {
    note: `The owner of the apothecary commented after that 'someone' left, "That person must have been taking their medicinal tinctures with booze, because by all accounts this wolf is eleven shades of pissed off. At least that's what everyone sane is saying. Personally, I hope Sleek Wind Shay takes that quest so we don't have to worry any more. She's incredible. Also have you seen her skin? Divine."`,
    weekHappened: 3,
    villagerPrompts: [
      {
        villagerId: "v4",
        week: 3,
        text: "I heard at the apothecary, someone saw a blue white wolf in the woods and they saw someone whispering in its ear. Who was it?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v4",
      },
      {
        entityType: EntityTypes.Villager,
        entityId: "a8",
      },
      {
        entityType: EntityTypes.Quest,
        entityId: "q3-1",
      },
    ],
  },
  {
    note: `You hand out your multiple choice pamphlet in the middle of town square. Many ignore you. Most who take it immediately throw it in the bin. Those who look at it appear confused. Someone knocks you from behind and all the pamphlets scatter onto the street. Only one stranger helps you pick them up. He looks at one of them, "I like to think it's F) all of the above. But I don't know if I'm allowed to take this survey." He winks, and leaves.`,
    weekHappened: 3,
    villagerPrompts: [
      {
        villagerId: "v4",
        week: 3,
        text: "Guy Norman is obviously a skilled man. He's destined for great things. What is he most skilled at: A)strategy? B) Blade? C)Ambush? D)Tracking?  E) Teamwork (I am skilled at spooning a man, while feeding him stew. Tell your friends)",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v4",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a31",
      },
    ],
  },
  {
    note: `Depends upon who you ask. But you decide to ask a town guard... they know security, right? She replies, "The big issue is the merchants, the trade guild, and all the rich visitors pay a premium for personal guards IN the city. That siphons away any extra help we might'a paid for to keep the people outside the wall safe. This year especially with the monsters crazy like they are... I worry someones gonna get hurt. Last week we just barely kept things together. Can't believe that Norman guy is just E rank. We were lucky to have him."`,
    weekHappened: 3,
    villagerPrompts: [
      {
        villagerId: "v5",
        week: 3,
        text: "What are the biggest security concerns for the festival?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v5",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a31",
      },
      {
        entityType: EntityTypes.Quest,
        entityId: "q2-5",
      },
    ],
  },
  {
    note: `Mara is reffing the Bounty Battle. Arc looked at the quest board and sighed. Vlort has already been pre-gaming for the past two weeks. The only A Rank adventurer questing is Sleek Wind Shay. Everyone agrees that if anyone can capture the berserk wolf in the Northern Forest it's her.`,
    weekHappened: 3,
    villagerPrompts: [
      {
        villagerId: "v6",
        week: 3,
        text: "What are the grade A adventurers up to this week?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v6",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a8",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "q3-1",
      },
    ],
  },
  {
    note: `There will actually be quite a few lower rank adventurers performing at the festival this year! The Duffenklampf twins will be doing a sword dance, Derb will be playing some music and has been hiding something under a big overturned basket, plus that weird mime will be around. Of all of them most people are excited to see Julia Pepperschild take on the Brass Saucier.`,
    weekHappened: 3,
    villagerPrompts: [
      {
        villagerId: "v6",
        week: 3,
        text: "Who are the lower tier adventurers to watch?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v6",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a46",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a55",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a56",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a42",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a36",
      },
      {
        entityType: EntityTypes.Quest,
        entityId: "q3-9",
      },
      {
        entityType: EntityTypes.Quest,
        entityId: "q3-4",
      },
    ],
  },
  {
    note: `Many people in the city are remarking about a strange sensation they're having, where they feel like they're being drawn somewhere. It seems like a non-insignificant portion of the city is even newly experiencing sleep walking. You have a strange dream about a giant tree, it suddenly opens in an inexplicable uncorking, and out of the massive hole it oozes a terrible mass of human limbs. You awake with a sense of dread about the northern forest, and when your senses finally come to you find yourself standing near your snake shack.`,
    weekHappened: 3,
    villagerPrompts: [
      {
        villagerId: "v6",
        week: 3,
        text: "Where is my mind…?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v6",
      },
      {
        entityType: EntityTypes.Quest,
        entityId: "q3-2",
      },
    ],
  },
  {
    note: `The guild receptionist whumps a huge ledger on the counter and rubs her hands together, "Time for some research." In the end you are left with a dizzying amount of statistics about long dead adventurers, but your big takeaways are these: 1. Vlort has the most recorded kills. But he's immortal, so it's kind of cheating. 2. Mythril trap is the most active monster exterminator currently. 3. The staff at the guild are real dorks.`,
    weekHappened: 3,
    villagerPrompts: [
      {
        villagerId: "v7",
        week: 3,
        text: "Who's killed the most monsters?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v7",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a20",
      },
      {
        entityType: EntityTypes.Clan,
        entityId: "c3",
      },
    ],
  },
  {
    note: `That must be the work of the Brass Saucier from Serpentina. He's challenging Julia Pepperschild this year and he must be worried, so he's trying underhanded techniques.`,
    weekHappened: 3,
    villagerPrompts: [
      {
        villagerId: "v7",
        week: 3,
        text: "I heard someone cleared out the market and bought all the spices.",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v7",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a46",
      },
      {
        entityType: EntityTypes.Quest,
        entityId: "q3-4",
      },
    ],
  },
  {
    note: `"Arc's asshole is busy with the stick that's up there.", remarked a nosey, wealthy stained glass patron, "I hear he has a real temper. Again. Probably because of the stick. Wouldn't want to be in the same neighborhood when he loses his composure. And no, I'm not saying this just because he turned me down for my portrait study. I'm an avid painter you know..." They kept blabbing, but it only got more pedantic from there.`,
    weekHappened: 3,
    villagerPrompts: [
      {
        villagerId: "v7",
        week: 3,
        text: "I really don't like arc. What is his high falooting problem and why won't he let me glory hole blast his asshole?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v7",
      },
    ],
  },

  {
    note: `Philagula tried to take ahold of Mamut during the Jachektapolk joining ceremony. But he got stuck inside.`,
    weekHappened: 4,
    villagerPrompts: [],
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a60",
      },
      {
        entityType: EntityTypes.Quest,
        entityId: "q4-2",
      },
    ],
  },
  {
    note: `Buster saw the true face of Jachectapolk while trying to find the lost pet. He was able to physically escape but his mind wasn't so lucky`,
    weekHappened: 3,
    villagerPrompts: [],
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a57",
      },
    ],
  },
  {
    note: `The strange sickness spreading through town is spreading the healers thin, so they're not taking quests this week.`,
    weekHappened: 4,
    villagerPrompts: [],
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a61",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a34",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a54",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a52",
      },
    ],
  },
  {
    note: `Steve can often be seen working a speedbag or punching bag near the Exploding Fist Dojo. Despite being physically fit, he's an otherwise average sized human guy. Trimble Dinklesbean is a Gnome who has lucrative a trade selling tiny statues, he's about twice the size of Steve's fist. If Steve punched the little guy he would probably explode. Him exploding would not bother too many people, though he does seem to get into a lot of trouble for such a little guy.`,
    weekHappened: 2,
    villagerPrompts: [
      {
        villagerId: "v1",
        week: 2,
        text: "What is the size difference between Steve and Trimble Dinklesbean?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v1",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a64",
      },
    ],
  },
  {
    note: `You surreptitiously walk by Axel as he's talking to someone, "... and that's when the visor exploded into his eyes! If that healer... what was her name? Nern Bernalby? Marn Dorndergy? Shit. Anyway if she hadn't been there this guys eyes would have fallen out. She's a lifesaver... No don't turn that crank that way-!!" You couldn't hear much beyond the grinding sound and the sputtering gas.`,
    weekHappened: 2,
    villagerPrompts: [
      {
        villagerId: "v1",
        week: 2,
        text: "Has Axel Girlywhirl successfully built and tested spy equipment?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v1",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a52",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a38",
      },
    ],
  },
  {
    note: `As you walk around town you keep hearing faint, echo-y sounds of trumpet playing. The ghostly tooting seems to drift in from everywhere and nowhere? Even late at night. Where is it coming from?!`,
    weekHappened: 2,
    villagerPrompts: [
      {
        villagerId: "v2",
        week: 2,
        text: "Any chance Derb Alperd could still be alive? He plays trumpet, right? Could he be lulling the rats into a trap?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v2",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a42",
      },
    ],
  },
  {
    note: `Steve McFist spills the beans. Many members of exploding fist are real go-getters, but the quest last week left them a little shaken. They know they got lucky.`,
    weekHappened: 2,
    villagerPrompts: [
      {
        villagerId: "v2",
        week: 2,
        text: "Is it likely that exploding fist will conquer again? Or are they ready for some R&R?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v2",
      },
      {
        entityType: EntityTypes.Clan,
        entityId: "c9",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a64",
      },
    ],
  },
  {
    note: `You overhear a conversation at a table late into the night, "It's boarshit. If I'm a part of another party, and they suggest that healers should get paid less again, I'll quit on the spot. How many times have I saved their asses? Hmmm? Without me they'd literally be full of holes!"`,
    weekHappened: 2,
    villagerPrompts: [
      {
        villagerId: "v2",
        week: 2,
        text: "What mid-low level adventurer might I notice at The Broken Leg that I think has more potential than everyone gives them credit for?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v2",
      },
      {
        entityType: EntityTypes.Clan,
        entityId: "c8",
      },
    ],
  },
  {
    note: `You did see Sheila excitedly dragging Arc into the Guild hall. She didn't seem particularly jubilant on the way out, but Arc was walking with purpose toward the northern gate and she eventually followed him.`,
    weekHappened: 2,
    villagerPrompts: [
      {
        villagerId: "v3",
        week: 2,
        text: "Those goody-two-shoes over at Blessed Sword didn't get much done last week.  But with several big monster quests around, I expect they're probably at the top of the list for some action.  I put out some feelers for any inside info on what they're up to, and what kind of shape they're in.",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v3",
      },
      {
        entityType: EntityTypes.Clan,
        entityId: "c4",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a15",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a19",
      },
    ],
  },
  {
    note: `You pay one of the wagon drivers a small coin and he tells you: The road to Furthbrad is treacherous and the weather is quite bad not a good place to set up a hideout. The road to Valeon typically has some bandits but most people worry about the beasts. If bandits are what you're worried about, the way Serpentina is where they typically pop up, but generally that road is shortest and safest.`,
    weekHappened: 2,
    villagerPrompts: [
      {
        villagerId: "v3",
        week: 2,
        text: "With merchants coming into town from all over, the bandits are foaming at the mouth.  Which of the 3 paths (Valeon, Furthbrand, or Serpentina) has the most monster and bandit activity?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v3",
      },
      {
        entityType: EntityTypes.Quest,
        entityId: "q2-6.3",
      },
      {
        entityType: EntityTypes.Quest,
        entityId: "q2-6.2",
      },
      {
        entityType: EntityTypes.Quest,
        entityId: "q2-6.1",
      },
    ],
  },
  {
    note: `You ask some pest control professionals about killing the rat. One tells you that for their money it's gotta be Vince Dawn. But their buddy pipes in saying they're full of shit, and it will totally be one of those tigers he's always with. A third pipes in that they're both wrong and it will be the Pretty Elf. This argument continues long after you leave.`,
    weekHappened: 2,
    villagerPrompts: [
      {
        villagerId: "v3",
        week: 2,
        text: "Mayor Corque and his useless bunch of hangers-on seem surprisingly concerned about the rat king.  They haven't given a rat's ass about all the rats when it was just us in the streets who had to look at them.  Who has the best chance of dispatching the rat king?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v3",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a9",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a10",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a11",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a8",
      },
    ],
  },
  {
    note: `You remember a story you heard from some old dude when you were bragging about your tooth. Apparently before the church of the Holy Mother moved in the people whole lived in morton had a religion with many different gods. One was a water deity who was very shy, but loved all creatures. She was only a minor god and a servant to a different god or something... and you can't recall more than that.`,
    weekHappened: 2,
    villagerPrompts: [
      {
        villagerId: "v4",
        week: 2,
        text: "I once hid from a thunderstorm in the Cavern with the Sacred Spring. I splashed water on me face and me teeth grew back for exactly 1 day(no one believes me). For who else is the spring sacred?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v4",
      },
      {
        entityType: EntityTypes.Quest,
        entityId: "q2-8",
      },
    ],
  },
  {
    note: `The members of Verdant Glade are sometimes unpopular for all their Monster's rights talk. This often means they take on less profitable quests.`,
    weekHappened: 2,
    villagerPrompts: [
      {
        villagerId: "v4",
        week: 2,
        text: "What clan would rather negotiate with the beasts than kill them?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v4",
      },
      {
        entityType: EntityTypes.Clan,
        entityId: "c10",
      },
    ],
  },
  {
    note: `Elise can certainly come off as sneaky because she doesn't talk much. And sure, she's helped smuggled her fair share of contraband for shifty Nobles. Oh yeah, and also she'll definitely kill someone for the right price. But... wait what was I talking about? Oh yeah. She ONLY kisses with tongue, and she'll never teach. She's looking pretty vivacious this week.`,
    weekHappened: 2,
    villagerPrompts: [
      {
        villagerId: "v4",
        week: 2,
        text: "Elise Shadowthread seems sneaky. Should her fellow clans folk trust her?  Should I trust her? Does she know how to kiss with tongue and would she tell me how?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v4",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a2",
      },
    ],
  },
  {
    note: `Exploding fist, was seen buying a bunch of healing potions after their trip. Those things are expensive. Though word on the street is Fissure was disappointed she missed the action last week.`,
    weekHappened: 2,
    villagerPrompts: [
      {
        villagerId: "v5",
        week: 2,
        text: "Did any members of the Exploding Fist level up or gain notable new equipment after their successes?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v5",
      },
      {
        entityType: EntityTypes.Clan,
        entityId: "c9",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a51",
      },
    ],
  },
  {
    note: `You try to talk to Vince Dawn about the Northern Forest. He makes you buy him a beer. Then then asks you about Orc culture. He makes you buy him another beer. He blabs a bit about trapping in the Drifting Desert. He makes you buy him another beer. Then as he's leaving he says, "You should have bought that old koot K'Tar a beer. I have no idea what's going on."`,
    weekHappened: 2,
    villagerPrompts: [
      {
        villagerId: "v5",
        week: 2,
        text: "Does Vince Dawn have a theory as to what is happening in the forest north of town?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v5",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a9",
      },
    ],
  },
  {
    note: `Periodically through the week you see Icenose Huskykin bragging to anyone who will listend about how he took out the bandits at the Forest Shrine last week. He seems really excited about fighting monster this time. Though none of the experienced adventurers are listening, let alone partying up with the young beastkin.`,
    weekHappened: 2,
    villagerPrompts: [
      {
        villagerId: "v5",
        week: 2,
        text: "Who is partying hard after their last round of successes (and might be too drunk or hungover to perform well in the next round)?",
      },
      {
        villagerId: "v1",
        week: 2,
        text: "Does Icenose Huskykin have reasonable impulse control when encountering animals smaller than himself? ",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v5",
      },
      {
        entityType: EntityTypes.Villager,
        entityId: "v1",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a45",
      },
    ],
  },
  {
    note: `Clockwork Chisel is hunkering down this week to get all their wares ready for the festival. Though Bjork is more of a gatherer than a crafter so she might go solo.`,
    weekHappened: 2,
    villagerPrompts: [
      {
        villagerId: "v6",
        week: 2,
        text: "Clockwork chisel likes to do merchant escorts. Will they be taking one this week?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v6",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a27",
      },
    ],
  },
  {
    note: `You see Vince Dawn wandering around town looking for new traps this week. Though he doesn't take you up on your offer-conda.`,
    weekHappened: 2,
    villagerPrompts: [
      {
        villagerId: "v6",
        week: 2,
        text: "A rat king sounds like a job for a really big snake, which I just so happen to have… is there any one looking to rent it to help them defeat the monster?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v6",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a9",
      },
      {
        entityType: EntityTypes.Quest,
        entityId: "q2-1",
      },
    ],
  },
  {
    note: `The rumor mill is indeed churning this week. Julia and the Crockpot clan all have some big fish to fry this week. Though Julia is rarely the one who deals the killing blow, shes more often the one doing the work after its dead.`,
    weekHappened: 2,
    villagerPrompts: [
      {
        villagerId: "v6",
        week: 2,
        text: "I heard a rumor that Julia Pepperschild will be taking on the protein quest to further her reputation as the iron chef. Is it true?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v6",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a46",
      },
      {
        entityType: EntityTypes.Quest,
        entityId: "p1-q2-4",
      },
      {
        entityType: EntityTypes.Clan,
        entityId: "c7",
      },
    ],
  },
  {
    note: `You often see Tundrapaw angling down at the stream. Her bucket is always full of fish.`,
    weekHappened: 2,
    villagerPrompts: [
      {
        villagerId: "v7",
        week: 2,
        text: "Who's the best fisher person?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v7",
      },
      {
        entityType: EntityTypes.Quest,
        entityId: "q2-4",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a13",
      },
    ],
  },
  {
    note: `Two weeks ago Night Cowl had a huge win. No one knows the specifics, but they were partying hard last week. Morale is still high. They look well rested and ready to go. On top of that it looks like Marcus McStain has a little bit of his connections left with the nobility.`,
    weekHappened: 2,
    villagerPrompts: [
      {
        villagerId: "v7",
        week: 2,
        text: "How's night cowls morale?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v7",
      },
      {
        entityType: EntityTypes.Clan,
        entityId: "c2",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a4",
      },
    ],
  },
  {
    note: `Bjork popped her head into the stained glass shop. She was dropping of some ground pigments for dying glass. She mentioned she's the only member of Clockwork Chisel who doesn't have stuff to make this week before the festival. You noticed she brought her battle pick-axe with her.`,
    weekHappened: 2,
    villagerPrompts: [
      {
        villagerId: "v7",
        week: 2,
        text: "Has anyone been shopping for stained glass recently?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Villager,
        entityId: "v7",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a27",
      },
    ],
  },

  {
    note: `The picture is no longer there. On the quest board behind where it used to be there is an oily black smudge that the guild staff can't clean off.`,
    weekHappened: 3,
    weekPublic: 4,
    villagerPrompts: [],
    tags: [
      {
        entityType: EntityTypes.Quest,
        entityId: "q1-9",
      },
    ],
  },
  {
    note: `While removing a particularly noisy client from your establishment you overhear a gossipy lady comment: "Count Vanderbliff? I hear he is not well known among commoners, especially outside of the capitol... but word is he is quite important to internal affairs at a high level"`,
    weekHappened: 1,
    villagerPrompts: [
      {
        villagerId: "v1",
        week: 1,
        text: "What is Cliff Vanderbliff's reputation among commoners and nobility alike? ",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Quest,
        entityId: "q1-1",
      },
      {
        entityType: EntityTypes.Villager,
        entityId: "v1",
      },
    ],
  },
  {
    note: `The rats rarely come out during the day, and often they stay away from people. Everyone has a story about killing a big rat, but no one would let their small children play near the sewer drains. One is manageable, but a bunch would be a problem.`,
    weekHappened: 1,
    villagerPrompts: [
      {
        villagerId: "v1",
        week: 1,
        text: "What is known about the process and dangers of killing the city's dog sized rats?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Quest,
        entityId: "q1-2",
      },
      {
        entityType: EntityTypes.Villager,
        entityId: "v1",
      },
    ],
  },
  {
    note: `While at the market buying food supplies you hear the Chairman talk about a fearsome bird whose bones when ground into a powder makes a much sought after additive: the Currymingo.`,
    weekHappened: 1,
    villagerPrompts: [
      {
        villagerId: "v1",
        week: 1,
        text: "What is considered the ultimate spice and what are the risks involved in retrieving it?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Quest,
        entityId: "q1-6",
      },
      {
        entityType: EntityTypes.Villager,
        entityId: "v1",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a50",
      },
    ],
  },
  {
    note: `Everyone on the street agrees that the monster management quest is almost perfect for anyone in the Mythril trap clan. Though Dash Light Drea is often prone to just go kill big monsters for fun. If either sign up they're pretty sure bets.`,
    weekHappened: 1,
    villagerPrompts: [
      {
        villagerId: "v3",
        week: 1,
        text: "The pre-festival monster management quest seems like something a lot of the powerful people in town would want to make sure gets done right. I've been asking around to find out who's involved and what their game is.",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Clan,
        entityId: "c3",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a17",
      },
      {
        entityType: EntityTypes.Quest,
        entityId: "q1-7",
      },
      {
        entityType: EntityTypes.Villager,
        entityId: "v3",
      },
    ],
  },
  {
    note: `Night cowl is laying low this week. They had a big job last week that has left them flush with cash and a little hung over. Though you overhear The Fixer talking about a silly watch and that it probably won't be worth anyone's time.`,
    weekHappened: 1,
    villagerPrompts: [
      {
        villagerId: "v3",
        week: 1,
        text: "I run in some of the same circles as Elise Shadowthread and the Night Cowl, so I put out some feelers on what they're up to and who they're working with.",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Clan,
        entityId: "c2",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a14",
      },
      {
        entityType: EntityTypes.Quest,
        entityId: "q1-8",
      },
      {
        entityType: EntityTypes.Villager,
        entityId: "v3",
      },
    ],
  },
  {
    note: `The caravan coordinator at Morton often has his wires crossed. The Furthbrand caravan is managed by another Furtbrandian transplant, Thorin Brassburn. That will probably go as planned. Though, he does let loose that one of the other high profile caravans has a really strange supply manifest.`,
    weekHappened: 1,
    villagerPrompts: [
      {
        villagerId: "v3",
        week: 1,
        text: "My old contacts in Furthbrand sent word that the Furthbrand supply caravan isn't what it seems. Whatever clan picks that up better be on the lookout for funny business.",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a21",
      },
      {
        entityType: EntityTypes.Quest,
        entityId: "q2-6.3",
      },
      {
        entityType: EntityTypes.Quest,
        entityId: "q1-1",
      },
      {
        entityType: EntityTypes.Villager,
        entityId: "v3",
      },
    ],
  },
  {
    note: `While snooping around the armory quarter Thorin Brassburn tells you, "Look, gear boy, everyone's saving up for the new stuff brought in by the merchants during the festival. I'm taking my stuff out to Furthbrand this week, myself along with the supply caravan. Going to make a load of money out there like I do every year."`,
    weekHappened: 1,
    villagerPrompts: [
      {
        villagerId: "v5",
        week: 1,
        text: "I ask around to see which adventurers have purchased new gear. Especially interested in any powerful magical gear that they may have purchased.",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Quest,
        entityId: "q1-4.3",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a21",
      },
      {
        entityType: EntityTypes.Villager,
        entityId: "v5",
      },
    ],
  },
  {
    note: `It's a very busy week for the Breath of Life. They have members helping out on most of the caravan quests. Historically they do quite well when helping on long trips.`,
    weekHappened: 1,
    villagerPrompts: [
      {
        villagerId: "v5",
        week: 1,
        text: "I wanted to check out the Breath of Life guild and find out which ones have already committed themselves to a team of adventurers.",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Quest,
        entityId: "q1-1",
      },
      {
        entityType: EntityTypes.Quest,
        entityId: "q1-4.1",
      },
      {
        entityType: EntityTypes.Quest,
        entityId: "q1-4.2",
      },
      {
        entityType: EntityTypes.Villager,
        entityId: "v5",
      },
    ],
  },
  {
    note: `You see Icenose Huskykin excited going from adventurer to adventurer trying to form a party. He seems very motivated. But no one is taking him up on the offer.`,
    weekHappened: 1,
    villagerPrompts: [
      {
        villagerId: "v5",
        week: 1,
        text: "I ask around at a few of the pubs to see which E rank adventurer is the most ambitious and interested in moving up in rank.",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a45",
      },
      {
        entityType: EntityTypes.Villager,
        entityId: "v5",
      },
    ],
  },
  {
    note: `After he gets drunk someone makes the mistake of asking him. He gets really mad and decks them, while blubbering, "I didn't run away I tell you! My men... I didn't..." The person he punched carried him home.`,
    weekHappened: 1,
    villagerPrompts: [
      {
        villagerId: "v2",
        week: 1,
        text: "I know you said not to ask, but why is Corporal Margrave an adventurer now when he used to be a member of the royal army??",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a24",
      },
      {
        entityType: EntityTypes.Villager,
        entityId: "v2",
      },
    ],
  },
  {
    note: `You notice that the rats in the alley behind the bar are much less aggressive when music is playing... but the second it stops they go absolutely nuts.`,
    weekHappened: 1,
    villagerPrompts: [
      {
        villagerId: "v2",
        week: 1,
        text: "Will the rat and monster problems likely be solved through violence? Is killing the only way to get rid of these beasts?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Quest,
        entityId: "q1-2",
      },
      {
        entityType: EntityTypes.Quest,
        entityId: "q2-1",
      },
      {
        entityType: EntityTypes.Villager,
        entityId: "v2",
      },
    ],
  },
  {
    note: `The big gossip you hear is that all of the established adventurers are NOT excited about going into the sewers. It's gross, dark, and confusing down there. So the people going in will probably not be the cream of the crop. The experienced people will definitely be heading out of town to get monsters.`,
    weekHappened: 1,
    villagerPrompts: [
      {
        villagerId: "v2",
        week: 1,
        text: "Are there any whisperings about which (if any) of the clans or adventurers will be taking on the rat and/or monster problem? I hear a lot of gossip at The Broken Leg, so I would know!",
      },
      {
        villagerId: "v6",
        week: 1,
        text: "I see there is a bounty on rats. I put the word out that I have just the snakes for the job. Have any of the adventurers shown any interest?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Quest,
        entityId: "q1-2",
      },
      {
        entityType: EntityTypes.Villager,
        entityId: "v2",
      },
      {
        entityType: EntityTypes.Villager,
        entityId: "v6",
      },
    ],
  },
  {
    note: `The members of the Crockpot clan were stocking up on shrimp. Lots of shrimp. Like a crazy amount of shrimp. Looks like they're trying to lure in a rare monster which loves the little sea bugs. They look very excited and well prepared.`,
    weekHappened: 1,
    villagerPrompts: [
      {
        villagerId: "v4",
        week: 1,
        text: "I was looking for a crew to eat my extra leeches since I hate for them to go to waste. Thought of the crockpot clan. Tracked them down at the general store. What were they doing there?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Clan,
        entityId: "c7",
      },
      {
        entityType: EntityTypes.Quest,
        entityId: "q1-6",
      },
      {
        entityType: EntityTypes.Villager,
        entityId: "v4",
      },
    ],
  },
  {
    note: `You bother the local gossipmonger until she tells you, "Oddly enough he went to a series of shops specializing in rare oddities and luxury goods. Not the kind of place beginner adventurers usually go."`,
    weekHappened: 1,
    villagerPrompts: [
      {
        villagerId: "v4",
        week: 1,
        text: "What was Guy Norman's first stop when coming into town.",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a31",
      },
      {
        entityType: EntityTypes.Villager,
        entityId: "v4",
      },
    ],
  },
  {
    note: `You ask around in the pleasure Quarter about Geoffrey. THe women there immediately know who you're talking about and say, "You can have him." or just scowl at the mention of his name.`,
    weekHappened: 1,
    villagerPrompts: [
      {
        villagerId: "v4",
        week: 1,
        text: "Do you think I'd get any business from the likes of Geoffrey Sonderfeld?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a43",
      },
      {
        entityType: EntityTypes.Villager,
        entityId: "v4",
      },
    ],
  },
  {
    note: `You hear correctly. Young, Ash Catsup was looking to do his first quest by himself. And the rest of the Clan encouraged him to take the shrine quest. He's telling everyone who will listen about it.`,
    weekHappened: 1,
    villagerPrompts: [
      {
        villagerId: "v6",
        week: 1,
        text: "I heard a rumor that some one from Verdant Glade would be repairing the forest shrine. Have you heard who it was?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a37",
      },
      {
        entityType: EntityTypes.Villager,
        entityId: "v6",
      },
    ],
  },
  {
    note: `While dealing with some roaches down at the stables you run into the caravan coordinator. He mentions, "Many of the clans will escort caravans, it pays good money to work with merchants. But between you and me the Clockwork Chisel guys get to double dip. They get the money from the escort, plus the get to sell their wares in Furthbrand. Make a killing while they keep people from being killed if you know what I mean."`,
    weekHappened: 1,
    villagerPrompts: [
      {
        villagerId: "v6",
        week: 1,
        text: "Are any of the guilds known to escort caravans?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Quest,
        entityId: "q1-4.3",
      },
      {
        entityType: EntityTypes.Clan,
        entityId: "c5",
      },
      {
        entityType: EntityTypes.Villager,
        entityId: "v6",
      },
    ],
  },
  {
    note: `You hear from the guild receptionist. There hasn't been much interest. Strangely enough no one saw the flier get put on the board. Which is weird, because the quest board is visible from everywhere in the main hall and it's nearly constantly being looked at.`,
    weekHappened: 1,
    villagerPrompts: [
      {
        villagerId: "v7",
        week: 1,
        text: "Has anyone taken the number from the bottom of the lost pet flyer? Cause I'm a little worried. ",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Quest,
        entityId: "q1-9",
      },
      {
        entityType: EntityTypes.Villager,
        entityId: "v7",
      },
    ],
  },
  {
    note: `Ask anyone in Morton. The members of Verdant glade are definitely pretty radical with all their monster rights talk. It often puts them at odds with other more conservative adventurers. Though despite their relatively low ranks everyone knows not to mess with them.`,
    weekHappened: 1,
    villagerPrompts: [
      {
        villagerId: "v7",
        week: 1,
        text: "What's up with verdant glade? Are they hippies or what? I think they might like some of my amateur stained glass work. Thoughts?",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Clan,
        entityId: "c10",
      },
      {
        entityType: EntityTypes.Villager,
        entityId: "v7",
      },
    ],
  },
  {
    note: `The Radiantia clan is an institution in Morton. They're one of the most historied clans in the entire guild. Many of the members are well known if not well liked. However The recent addition of Reginald Spintsmunge IV is strange indeed. No one has heard of the Spintsmunge family. Though local merchants don't ask because his money spends as well as any nobles.`,
    weekHappened: 1,
    villagerPrompts: [
      {
        villagerId: "v7",
        week: 1,
        text: "I heard one of the adventurers talking about guarding that noble, but didn't recognize them. ",
      },
    ],
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a25",
      },
      {
        entityType: EntityTypes.Clan,
        entityId: "c6",
      },
      {
        entityType: EntityTypes.Villager,
        entityId: "v7",
      },
    ],
  },
  {
    note: `Shelly and Barkskin fell for each other during the bounty Battle.`,
    weekHappened: 3,
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a53",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a63",
      },
      {
        entityType: EntityTypes.Quest,
        entityId: "q3-8",
      },
    ],
  },
  {
    note: `Mara will be the referee for the Bounty Battle (and make sure no one gets killed).`,
    weekHappened: 2,
    weekPublic: 3,
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a40",
      },
      {
        entityType: EntityTypes.Quest,
        entityId: "q3-8",
      },
    ],
  },
  {
    note: `Mara has goaded Clara into claiming Sir Robin could win the Bounty Battle. Mara gets her daughter to agree to no longer have anything to do with the cowardly knight if they don't win the tournament.`,
    weekHappened: 3,
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a39",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a40",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a40",
      },
      {
        entityType: EntityTypes.Quest,
        entityId: "q3-8",
      },
    ],
  },
  {
    note: `Gorn is a fake name of a cult member working on behalf of Count Vanderbliff.`,
    weekHappened: 3,
    tags: [
      {
        entityType: EntityTypes.Quest,
        entityId: "q3-3",
      },
    ],
  },
  {
    note: `Ever since Derb came up from the sewers Squeakela has been enfatuated with him.`,
    weekHappened: 3,
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a42",
      },
      {
        entityType: EntityTypes.Quest,
        entityId: "q2-1",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a49",
      },
    ],
  },
  {
    note: `Geoffrey made a pass at Mara after the Bounty Battle. He lost another tooth, and both of his eyes are swollen shut.`,
    weekHappened: 3,
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a43",
      },
      {
        entityType: EntityTypes.Quest,
        entityId: "q3-8",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a40",
      },
    ],
  },
  {
    note: `The healers of Breath of life are overloaded with all the sickness that's spreading around town. They won't be able to help adventurers out this week.`,
    weekHappened: 4,
    tags: [
      {
        entityType: EntityTypes.Clan,
        entityId: "c8",
      },
    ],
  },
  {
    note: `Derb can now control rats at will using his trumpet.`,
    weekHappened: 2,
    weekPublic: 4,
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a42",
      },
      {
        entityType: EntityTypes.Quest,
        entityId: "q2-1",
      },
    ],
  },
  {
    note: `Sheila noticed that even though the bandits wearing hides, they were surprisingly well kempt, but she didn't say anything to Arc.`,
    weekHappened: 2,
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a19",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a15",
      },
      {
        entityType: EntityTypes.Quest,
        entityId: "q2-3",
      },
    ],
  },
  {
    note: `Geoffrey made an unwelcome pass at Norn, and Vivian stood up for her. Yet another female friendship solidified by a terrible man.`,
    weekHappened: 2,
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a22",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a52",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a43",
      },
      {
        entityType: EntityTypes.Quest,
        entityId: "q2-3",
      },
    ],
  },
  {
    note: `Marcus is trying to get in good graces with Count Vanderbliff. He wouldn't say he's a believer in the cult. But he's viewing his membership and cooperation with the cult as a pragmatic tool to regain standing with the Nobility. They know about Mamut, and are hoping that marcus can get it to go into a rage.`,
    weekHappened: 2,
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a4",
      },
      {
        entityType: EntityTypes.Quest,
        entityId: "q2-2",
      },
    ],
  },
  {
    note: `Corporal Margrave made the mistake of tipping the street performing mime. Now the mime is following him around doing everything he's doing.`,
    weekHappened: 2,
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a24",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a36",
      },
    ],
  },
  {
    note: `Mara has decided to tail her daughter and see what this Sir Robin is all about.`,
    weekHappened: 2,
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a40",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a39",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a41",
      },
      {
        entityType: EntityTypes.Quest,
        entityId: "q2-6.1",
      },
    ],
  },
  {
    note: `Elnar overheard Icenose, Squeakela, and P'Tark, all inexperienced members of the mill planning to take on an escort quest to Furthbrand, and is planning to join them if no other experienced adventurers do.`,
    weekHappened: 2,
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a29",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a45",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a49",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a47",
      },
      {
        entityType: EntityTypes.Quest,
        entityId: "q2-6.3",
      },
      {
        entityType: EntityTypes.Clan,
        entityId: "c1",
      },
    ],
  },
  {
    note: `Some people swear they're hearing the sound of a trumpet coming out of the sewers. Derb is down there trapped by the rats. Every time he stops playing they start trying to eat him.`,
    weekHappened: 2,
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a42",
      },
    ],
  },
  {
    note: `Juniper became fast friends with the Duffenklampf twins after they all had a terrible experience with Geoffry while on the road to Serpentina`,
    weekHappened: 1,
    tags: [
      {
        entityType: EntityTypes.Quest,
        entityId: "q1-4.1",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a34",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a55",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a56",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a43",
      },
    ],
  },
  {
    note: `Now the picture has a picture a sad little beastkin girl who is also crying.`,
    weekHappened: 2,
    weekPublic: 3,
    tags: [
      {
        entityType: EntityTypes.Quest,
        entityId: "q1-9",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a12",
      },
    ],
  },
  {
    note: `Silky Bunnykin is the avatar of Jachectapolk. She is luring in sacrifices.`,
    weekHappened: 1,
    tags: [
      {
        entityType: EntityTypes.Quest,
        entityId: "q1-9",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a12",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a44",
      },
    ],
  },
  {
    note: `Most of the members of the Clockwork Chisel aren't doing quests this week so that they can get ready for Bounty Festival. It's a really good time for business for craftsmen.`,
    weekHappened: 2,
    tags: [
      {
        entityType: EntityTypes.Clan,
        entityId: "c5",
      },
    ],
  },
  {
    note: `Reginald Spintsmunge IV, is part of the Cliff Vanderbliff's Cult. When he goes missing during the Nobel escort quest it's to loop in with the rest of the members to operate in the shadows.`,
    weekHappened: 1,
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a25",
      },
      {
        entityType: EntityTypes.Quest,
        entityId: "q1-1",
      },
    ],
  },
  {
    note: `Vlort is very lazy. He very rarely takes quests. He runs the Mill because its entertaining.`,
    weekHappened: 0,
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a20",
      },
    ],
  },
  {
    note: `Corporal Margrave, fled from battle, his entire company was decimated, and he was discharged from the kings guard.`,
    weekHappened: 0,
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a24",
      },
    ],
  },
  {
    note: `Reginald Spintsmunge IV bought his way into the Radiantia Clan. He has never actually had a duel, and it is up for debate whether the Spintsmunges are really of nobel blood.`,
    weekHappened: 0,
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a25",
      },
      {
        entityType: EntityTypes.Clan,
        entityId: "c6",
      },
    ],
  },
  {
    note: `Guy Norman is actually a high rank adventurer running away from a neighboring country. His real name is Hiro Flamburge.`,
    weekHappened: 0,
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a31",
      },
    ],
  },
  {
    note: `It's unfortunate that Juniper Montrose gets queasy at the sight of blood.`,
    weekHappened: 0,
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a34",
      },
    ],
  },
  {
    note: `No one wants to be in a party with them because they're creeped out.`,
    weekHappened: 0,
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a36",
      },
    ],
  },
  {
    note: `Kimberflorn isn't Clara's real last name. She's actually the daughter of Mara Wright, the Master of The Exploding fist. She was training under her mother until she fell in love with Sir Robin. She is hiding her true strength to not hurt his feelings.`,
    weekHappened: 0,
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a39",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a40",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a41",
      },
    ],
  },
  {
    note: `Mara Wright is Clara Kimberflorn's Mother. She does not approve of her daughter's love for Sir Robin. She is trying to figure out ways to sabotage their relationship.`,
    weekHappened: 0,
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a39",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a40",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a41",
      },
    ],
  },
  {
    note: `Sir Robin has no idea that Clara Kimberflorn is in love with him. Or that she's always saving his life.`,
    weekHappened: 0,
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a39",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a41",
      },
    ],
  },
  {
    note: `He's a terrible womanizer, and will only do quests if women are in the party. Said women often do not suffer a second outing.`,
    weekHappened: 0,
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a43",
      },
    ],
  },
  {
    note: `Szuuth was forced to torture people at the Capitol, and has fled to Morton.`,
    weekHappened: 0,
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a54",
      },
    ],
  },
  {
    note: `Arc Northstar is the leader of the Blessed Sword Clan`,
    weekHappened: 0,
    weekPublic: 0,
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a15",
      },
      {
        entityType: EntityTypes.Clan,
        entityId: "c4",
      },
    ],
  },
  {
    note: `Mara Wright is master of the Explosive Fist clan and dojo.`,
    weekHappened: 0,
    weekPublic: 0,
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a40",
      },
      {
        entityType: EntityTypes.Clan,
        entityId: "c9",
      },
    ],
  },
  {
    note: `Vlort is the "leader" of The Mill clan.`,
    weekHappened: 0,
    weekPublic: 0,
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a20",
      },
      {
        entityType: EntityTypes.Clan,
        entityId: "c1",
      },
    ],
  },
  {
    note: `Thorin Brassburn is the leader of the Clowork Chisel clan.`,
    weekHappened: 0,
    weekPublic: 0,
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a21",
      },
      {
        entityType: EntityTypes.Clan,
        entityId: "c5",
      },
    ],
  },
  {
    note: `Vince Dawn is the Leader of the Mythril Trap clan.`,
    weekHappened: 0,
    weekPublic: 0,
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a9",
      },
      {
        entityType: EntityTypes.Clan,
        entityId: "c3",
      },
    ],
  },
  {
    note: `Elise Shadowthread is the leader of the Night Cowl clan.`,
    weekHappened: 0,
    weekPublic: 0,
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a2",
      },
      {
        entityType: EntityTypes.Clan,
        entityId: "c2",
      },
    ],
  },
  {
    note: `Vivian Crestmor is the leader of the Radiantia clan.`,
    weekHappened: 0,
    weekPublic: 0,
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a22",
      },
      {
        entityType: EntityTypes.Clan,
        entityId: "c6",
      },
    ],
  },
  {
    note: `The Chairman is the leader and financier of the Crockpot clan.`,
    weekHappened: 0,
    weekPublic: 0,
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a50",
      },
      {
        entityType: EntityTypes.Clan,
        entityId: "c7",
      },
    ],
  },
  {
    note: `Mettalfang is Stoneclaw's older brother.`,
    weekHappened: 0,
    weekPublic: 0,
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a10",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a11",
      },
    ],
  },
  {
    note: `The Duffenklampf twins are inseparable. They always do every thing together. Duke Duffenklampf attempted to marry off Anastasia, but literally couldn't physically pry her away from Alexandria. He forced them to get their own income.`,
    weekHappened: 0,
    weekPublic: 0,
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a55",
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a56",
      },
    ],
  },
  {
    note: `Tall Pine Marlon is the leader of Verdant Glade clan`,
    weekHappened: 0,
    weekPublic: 0,
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a59",
      },
      {
        entityType: EntityTypes.Clan,
        entityId: "c10",
      },
    ],
  },
  {
    note: `On top of being an active member of the Church of the Holy Mother, Pendle Chilpin is one of the most acclaimed healing mages in all of Morton as well as the leader of the Breath of Life clan.`,
    weekHappened: 0,
    weekPublic: 0,
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: "a61",
      },
      {
        entityType: EntityTypes.Clan,
        entityId: "c8",
      },
    ],
  },
];
