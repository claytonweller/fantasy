import { scrubAdventurers } from "./scrubAdventurers";
import { scrubQuests } from "./scrubQuests";
import { IScrubParams } from "./types";

export function scrubByWeek(params: IScrubParams) {
  // It's important that we scrub the Adventurers first
  // That way we don't wind up with a lack of Parties to reference
  scrubAdventurers(params);
  scrubQuests(params);
}
