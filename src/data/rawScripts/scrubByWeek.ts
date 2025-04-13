import { scrubAdventurers } from "./scrubAdventurers";
import { scrubQuests } from "./scrubQuests";
import { setWeek } from "./setWeek";
import { IScrubParams } from "./types";

export function scrubByWeek(params: IScrubParams) {

  setWeek(params.week);
  // It's important that we scrub the Adventurers first
  // That way we don't wind up with a lack of Parties to reference
  scrubAdventurers(params);
  scrubQuests(params);
}
