import { scrubByWeek } from "./scrubByWeek";

export function setDataState(week: number, dataState: DataStates) {
  if (dataState === DataStates.QuestsOnly) {
    return scrubByWeek({
      week,
      shouldScrubParties: true,
      shouldScrubMetrics: true,
    });
  }
  if (dataState === DataStates.BeforePoints) {
    return scrubByWeek({ week, shouldScrubMetrics: true });
  }
  return scrubByWeek({ week });
}

export enum DataStates {
  QuestsOnly = "QuestsOnly",
  BeforePoints = "BeforePoints",
  WeekComplete = "WeekComplete",
}
