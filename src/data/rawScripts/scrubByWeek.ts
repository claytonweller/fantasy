import { scrubAdventurers } from "./scrubAdventurers";
import { scrubQuests } from "./scrubQuests";
import { IScrubParams } from "./types";

const INFINITE_FUTURE = 1000

export function scrubByWeek(params: IScrubParams){

  // It's important that we scrub the Adventurers first
  // That way we don't wind up with a lack of Parties to reference
  scrubAdventurers(params)
  scrubQuests(params)
}

if (require.main === module) {

  let week = INFINITE_FUTURE;
  let shouldScrubMetrics = false;
  let shouldScrubParties = false

  process.argv.forEach((arg, i) => {
    if (arg === "--week") {
      week = parseInt(process.argv[i + 1]);
      if (Number.isNaN(week)) week = INFINITE_FUTURE;
    }
    console.info("Scrubbing parties after week ", week);

    if (arg === "--parties") {
      console.info("Scrubbing parties from new quests");
      shouldScrubParties = true;
    }

    if (arg === "--metrics") {
      console.info("Scrubbing metrics from new quests");
      shouldScrubMetrics = true;
    }
  });

  scrubByWeek({ week, shouldScrubMetrics, shouldScrubParties });
}
