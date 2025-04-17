import { rawQuests } from "../raw/quests";
import { writeFileSync } from "fs";
import { IScrubParams } from "./types";
import { QuestStatus } from "types/Quest";

export function scrubQuests(params: IScrubParams) {
  console.info("Scrubbing Quests");
  const {
    week = 1000,
    shouldScrubMetrics = false,
    shouldScrubParties = false,
  } = params;
  const temporallyAccurateQuests = rawQuests.filter(
    (q) => q.postedWeek <= week,
  );
  const formattedQuests = temporallyAccurateQuests.map((q) => {
    let parties = q.parties;

    parties = parties.filter((p) => {
      if (shouldScrubParties) return p.startWeek < week;
      return p.startWeek <= week;
    });

    parties = parties.map((p) => {
      const metrics = p.metrics.filter((m) => {
        if (shouldScrubMetrics) return m.week < week;
        return m.week <= week;
      });
      const scrubStoryInfo = shouldScrubMetrics && p.startWeek === week;
      const status = scrubStoryInfo ? QuestStatus.Claimed : p.status;
      const notes = scrubStoryInfo ? undefined : p.notes;
      return { ...p, metrics, status, notes };
    });
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
  
  export interface IRawQuest extends IDbQuest {
    parties: IRawQuestParty[];
  }

  export interface IRawQuestParty extends Omit<IDbQuestParty, "questId"> {
    metrics: IDbMetric[];
  }

  export const rawQuests = ${JSON.stringify(formattedQuests)} as IRawQuest[]
  `;

  writeFileSync("src/data/raw/quests.ts", output);

  console.log("Squeaky clean!");
}
