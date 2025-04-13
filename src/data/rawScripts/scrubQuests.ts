import { rawQuests } from "../raw/quests";
import { writeFileSync } from "fs";

console.info("Scrubbing Quests");

let week = 100;
let shouldScrubParties = false;

process.argv.forEach((arg, i) => {
  if (arg === "--week") {
    week = parseInt(process.argv[i + 1]);
    if (Number.isNaN(week)) week = 100;
  }
  console.info("Scrubbing quests after week ", week);

  if (arg === "--scrub-parties") {
    console.info("Scrubbing parties from new quests");
    shouldScrubParties = true;
  }
});

const temporallyAccurateQuests = rawQuests.filter((q) => q.postedWeek <= week);
const formattedQuests = temporallyAccurateQuests.map((q) => {
  if (shouldScrubParties) {
    const parties = q.parties.filter((p) => p.startWeek <= week);
    return { ...q, parties };
  }
  return q;
});

const output = `
import {
  IDbMetric,
  IDbQuest,
  IDbQuestParty,
  QuestClaimType,
  QuestStatus,
  QuestTypes,
} from "types/Quest";
import { Ranks } from "types/Ranks";

export const rawQuests = ${JSON.stringify(formattedQuests)} as IRawQuest[]

export interface IRawQuest extends IDbQuest {
  parties: IRawQuestParty[];
}

export interface IRawQuestParty extends Omit<IDbQuestParty, "questId"> {
  metrics: IDbMetric[];
}
`;

writeFileSync("src/data/raw/quests.ts", output);

console.log("Squeaky clean!");

// const scrubbedResearch: IResearch[] = rawResearch.filter((r: IResearch) => {
//   return r.isPublic;
// });
// console.log("Scrubbing research secrets");

// const output = `
// import { IResearch } from "types/Research";

// export const rawResearch = ${JSON.stringify(scrubbedResearch)} as IResearch[]
// `;

// writeFileSync("src/data/raw/research.ts", output);

// console.log("Squeaky clean!");
