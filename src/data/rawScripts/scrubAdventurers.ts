import { questsByPartyId } from "data/queries/quests";
import { rawAdventurers } from "data/raw/adventurers";
import { writeFileSync } from "fs";

console.info("Scrubbing Adventurers");

let week = 100;
let shouldScrubMetrics = false;

process.argv.forEach((arg, i) => {
  if (arg === "--week") {
    week = parseInt(process.argv[i + 1]);
    if (Number.isNaN(week)) week = 100;
  }
  console.info("Scrubbing parties after week ", week);

  if (arg === "--metrics") {
    console.info("Scrubbing metrics from new quests");
    shouldScrubMetrics = true;
  }
});

const scrubbedAdventurers = rawAdventurers.map((a) => {
  let questParties = a.questParties.filter((p) => {
    const quest = questsByPartyId[p.partyId];
    const party = quest.parties.find(
      (questParty) => questParty.id === p.partyId,
    );
    return party && party.startWeek <= week;
  });

  if (shouldScrubMetrics)
    questParties = questParties.map((p) => {
      const metrics = p.metrics.filter((m) => m.week < week);
      return { ...p, metrics };
    });

  return { ...a, questParties };
});

const output = `
import {
  AdventurerClasses,
  AdventurerRaces,
  AdventurerStatuses,
  IDbAdventurer,
} from "types/Adventurer";
import { IDbMetric, IDbQuestPartyAdventurer, MetricRuleId } from "types/Quest";
import { Ranks } from "types/Ranks";

export interface IRawAdventurer extends IDbAdventurer {
  questParties: IRawParty[];
}

export interface IRawParty
  extends Omit<IDbQuestPartyAdventurer, "id" | "adventurerId"> {
  metrics: IDbMetric[];
}

export const rawAdventurers = ${JSON.stringify(scrubbedAdventurers)} as IRawAdventurer[]

`;

writeFileSync("src/data/raw/adventurers.ts", output);

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
