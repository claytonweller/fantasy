import { DataStates, setDataState } from "./setDataState";

const INFINITE_FUTURE = 1000;

let week = INFINITE_FUTURE;
let dataState = DataStates.WeekComplete;

process.argv.forEach((arg, i) => {
  const nextValue = process.argv[i + 1];
  if (arg === "--week") {
    week = parseInt(nextValue);
    if (Number.isNaN(week)) week = INFINITE_FUTURE;
  }
  console.info("Setting data state to week: ", week);

  if (arg === "--state") {
    if (nextValue === "quests-only") {
      console.info("Only quests");
      dataState = DataStates.QuestsOnly;
    } else if (nextValue === "before-points") {
      console.info("Before points");
      dataState = DataStates.BeforePoints;
    } else {
      console.info("Unknown state defaulting to complete week");
    }
  }
});

setDataState(week, dataState);
