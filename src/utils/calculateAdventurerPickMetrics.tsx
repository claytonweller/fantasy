import { IAdventurer } from "types/Adventurer";
import { IMetricsWithMeta } from "types/Quest";
import { Ranks } from "types/Ranks";
import { RosterPositions } from "types/Roster";
import { metaMetricsFromAdventurerQuest } from "./metaMetricsFromAdventurerQuest";
import { combineMetaMetrics } from "./combineMetricsArrays";

export function calculateAdventurerPickMetrics(
  adventurer: IAdventurer,
  week: number,
  position?: RosterPositions | Ranks,
): IMetricsWithMeta {
  const all = adventurer.quests.map((q) => {
    return metaMetricsFromAdventurerQuest({
      name: adventurer.name,
      rank: position,
      quest: q,
      week,
    });
  });
  if (all.length) return combineMetaMetrics(all);
  return {
    name: adventurer.name,
    rank: adventurer.rank,
    metrics: [],
    week,
  };
}
