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
  {
    id: "q1-7",
    name: "Pre-festival Monster Management",
    reward: 500,
    postedWeek: 1,
    expireWeek: 2,
    claimType: "Individual",
    questType: "Kill",
    questRank: "C",
    postedBy: "Trade Guild",
    description:
      "Since we'll be having many people from the region coming to Morton we should make the roads safer by culling the local monster numbers.",
    parties: [],
  },
  {
    id: "q1-9",
    name: "Lost Pet",
    reward: 0,
    postedWeek: 1,
    expireWeek: 3,
    claimType: "Individual",
    questType: "Fetch",
    questRank: "E",
    postedBy: "Silky Bunnykin",
    description: "There's a child's drawing of a small, fuzzy, crying animal.",
    parties: [],
  },
  {
    id: "q1-4.2",
    name: "Valeon supply Caravan Escort",
    reward: 150,
    postedWeek: 1,
    expireWeek: 1,
    claimType: "Clan",
    questType: "Guard",
    questRank: "C",
    postedBy: "Trade Guild",
    description:
      "With the Festival coming up in a couple of weeks we need capable parties to guard the wagons as merchants head out to get supplies. Eastern Caravan: From Valeon, the Capital city.",
    parties: [],
  },
  {
    id: "q1-6",
    name: "Spice Quest",
    reward: 0,
    postedWeek: 1,
    expireWeek: 1,
    claimType: "Clan",
    questType: "Fetch",
    questRank: "C",
    postedBy: "The Chairman",
    description: "To make the ultimate dish.: you need the ultimate spices!",
    parties: [],
  },
  {
    id: "q1-1",
    name: "A Noble Escort",
    reward: 500,
    postedWeek: 1,
    expireWeek: 1,
    claimType: "Clan",
    questType: "Guard",
    questRank: "B",
    postedBy: "Cliff Vanderbliff",
    description:
      'A group of nobles lead Count Clifford Vanderbliff and their retinue will be from Valeon (the capitol) to Morton to attend the annual festival. They require, "A competent local guard detail. Must be an established party, in good reputation, with knowledge of regional dangers."',
    parties: [],
  },
  {
    id: "q1-4.3",
    name: "Furthbrand supply Caravan Escort",
    reward: 100,
    postedWeek: 1,
    expireWeek: 1,
    claimType: "Clan",
    questType: "Guard",
    questRank: "C",
    postedBy: "Trade Guild",
    description:
      "With the Festival coming up in a couple of weeks we need capable parties to guard the wagons as merchants head out to get supplies. Western Caravan: to the mountains, and the industrial powerhouse Furthbrand",
    parties: [],
  },
  {
    id: "q1-8",
    name: "A family heirloom",
    reward: 50,
    postedWeek: 1,
    expireWeek: 1,
    claimType: "Individual",
    questType: "Fetch",
    questRank: "D",
    postedBy: "Trimble Dinklesbean",
    description:
      '"Someone has purloined a priceless timepiece of great... sentimental... value. How it makes its way back to me I do not care, nor will I ask."',
    parties: [],
  },
  {
    id: "q1-5",
    name: "Herb Gathering",
    reward: 50,
    postedWeek: 1,
    expireWeek: 1,
    claimType: "Individual",
    questType: "Fetch",
    questRank: "D",
    postedBy: "Church of the Holy Mother",
    description:
      "We're running low on medical herbs. reward depends upon the quality of the herbs obtained.",
    parties: [],
  },
  {
    id: "q1-4.1",
    name: "Serpentina Supply Caravan Escort",
    reward: 100,
    postedWeek: 1,
    expireWeek: 1,
    claimType: "Clan",
    questType: "Guard",
    questRank: "C",
    postedBy: "Trade Guild",
    description:
      "With the Festival coming up in a couple of weeks we need capable parties to guard the wagons as merchants head out to get supplies. Southern Caravan from the Port city of Serpentina.",
    parties: [],
  },
  {
    id: "q1-3",
    name: "Forest Shrine Maintenance",
    reward: 1,
    postedWeek: 1,
    expireWeek: 1,
    claimType: "Individual",
    questType: "Other",
    questRank: "E",
    postedBy: "Elder K'Tar",
    description:
      '"The Shrine to Mamut is falling apart. I am old. I need help repairing it."',
    parties: [],
  },
  {
    id: "q1-2",
    name: "Too Many Rats",
    reward: 100,
    postedWeek: 1,
    expireWeek: 1,
    claimType: "Clan",
    questType: "Kill",
    questRank: "D",
    postedBy: "Mayor Corque",
    description:
      "\"I hear you. We can't keep ignoring the sewer problem. The rats keep multiplying and getting bigger. They're attacking people in the street. Focus groups tell us this is not a great look for our town. We have to fix this before the Bounty Festival. What will people think if we have dog sized rats? One gold for every dead rat brought back this week.\"",
    parties: [],
  },
] as IRawQuest[]);
