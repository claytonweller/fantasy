import { rawQuests } from "../raw/quests";
import { writeFileSync } from "fs";

console.info("Scrubbing Quests");

let week = 100;
let shouldScrubParties = false;
let shouldScrubMetrics = false;

process.argv.forEach((arg, i) => {
  if (arg === "--week") {
    week = parseInt(process.argv[i + 1]);
    if (Number.isNaN(week)) week = 100;
  }
  console.info("Scrubbing quests after week ", week);

  if (arg === "--parties") {
    console.info("Scrubbing parties from new quests");
    shouldScrubParties = true;
  }

  if (arg === "--metrics") {
    console.info("Scrubbing metrics from new quests");
    shouldScrubMetrics = true;
  }
});

const temporallyAccurateQuests = rawQuests.filter((q) => q.postedWeek <= week);
const formattedQuests = temporallyAccurateQuests.map((q) => {
  let parties = q.parties;

  if (shouldScrubParties) {
    parties = parties.filter((p) => p.startWeek <= week);
  }

  if (shouldScrubMetrics) {
    parties = parties.map((p) => {
      const metrics = p.metrics.filter((m) => m.week < week);
      return { ...p, metrics };
    });
  }
  return { ...q, parties };
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
