import { scrubByWeek } from "./scrubByWeek";

const INFINITE_FUTURE = 1000;

let week = INFINITE_FUTURE;
let shouldScrubMetrics = false;
let shouldScrubParties = false;

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
