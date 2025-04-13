import { questsByPartyId } from "data/queries/quests";
import { rawAdventurers } from "data/raw/adventurers";
import { writeFileSync } from "fs";
import { IScrubParams } from "./types";

export function scrubAdventurers(params: IScrubParams) {
  const { week = 1000, shouldScrubMetrics = false, shouldScrubParties = false } = params;

  console.info("Scrubbing Adventurers");

  const scrubbedAdventurers = rawAdventurers.map((a) => {
    let questParties = a.questParties.filter((p) => {
      const quest = questsByPartyId[p.partyId];
      const party = quest.parties.find(
        (questParty) => questParty.id === p.partyId,
      );
      if(!party) return false
      if( shouldScrubParties ) return party.startWeek < week
      return  party.startWeek <= week;
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
}

