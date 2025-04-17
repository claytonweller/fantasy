import { rawQuests } from "data/raw/quests";
import { setWeek } from "./setWeek";

const argument = process.argv[2];
if (!argument) {
  const descending = rawQuests.sort((a, b) => b.postedWeek - a.postedWeek);
  const highestWeek = descending[0].postedWeek;
  setWeek(highestWeek);
  process.exit(0);
}

const week = parseInt(argument);
if (Number.isNaN(week)) {
  console.warn(argument, "is not an integer");
  process.exit(1);
}
setWeek(week);
