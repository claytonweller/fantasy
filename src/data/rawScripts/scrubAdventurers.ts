import { questsByPartyId } from "data/queries/quests";
import { IRawAdventurer, rawAdventurers } from "data/raw/adventurers";
import { writeFileSync } from "fs";
import { IScrubParams } from "./types";

export function scrubAdventurers(params: IScrubParams) {
  const {
    week = 1000,
    shouldScrubMetrics = false,
    shouldScrubParties = false,
  } = params;

  console.info("Scrubbing Adventurers");

  const scrubbedAdventurers: IRawAdventurer[] = rawAdventurers.map((a) => {
    const questParties = a.questParties
      .filter((p) => {
        const quest = questsByPartyId[p.partyId];
        const party = quest.parties.find(
          (questParty) => questParty.id === p.partyId,
        );
        if (!party || quest.postedWeek > week) return false;
        if (shouldScrubParties) return party.startWeek < week;
        return party.startWeek <= week;
      })
      .map((p) => {
        const metrics = p.metrics.filter((m) => {
          if (shouldScrubMetrics) return m.week < week;
          return m.week <= week;
        });
        return { ...p, metrics };
      });

    const statusHistory = a.statusHistory
      .filter((h) => {
        const startInFuture = h.startWeek <= week;
        return startInFuture;
      })
      .map((h) => {
        const endInFuture = h.endWeek && h.endWeek >= week;
        if (endInFuture) return { ...h, endWeek: undefined };
        return h;
      });

    return { ...a, statusHistory, questParties };
  });

  const output = `
  import {
    AdventurerClasses,
    AdventurerRaces,
    AdventurerStatuses,
    IDbAdventurer,
    IDbAdventurerStatusHistory,
  } from "types/Adventurer";
  import { IDbMetric, IDbQuestPartyAdventurer, MetricRuleId } from "types/Quest";
  import { Ranks } from "types/Ranks";
  import { shuffleArray } from "utils/shuffleArray";

  export interface IRawAdventurer extends Omit<IDbAdventurer, "currentStatuses"> {
    statusHistory: Omit<IDbAdventurerStatusHistory, "id" | "adventurerId">[];
    questParties: IRawParty[];
  }

  export interface IRawParty
    extends Omit<IDbQuestPartyAdventurer, "id" | "adventurerId"> {
    metrics: IDbMetric[];
  }
  
  export const rawAdventurers = shuffleArray(${JSON.stringify(scrubbedAdventurers)}) as IRawAdventurer[]
  
  `;

  writeFileSync("src/data/raw/adventurers.ts", output);

  console.log("Squeaky clean!");
}
