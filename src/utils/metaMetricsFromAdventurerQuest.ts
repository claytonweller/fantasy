import { IAdventurerQuest } from "../types/Adventurer";
import { IMetricsWithMeta } from "../types/Quest";
import { Ranks } from "../types/Ranks";
import { RosterPositions } from "../types/Roster";

export function metaMetricsFromAdventurerQuest(params: {
  quest: IAdventurerQuest;
  name?: string;
  rank?: Ranks | RosterPositions;
  week?: number;
}): IMetricsWithMeta {
  const { quest, name, rank, week = 0 } = params;
  const personalMetrics =
    week === 0 ? quest.metrics : quest.metrics.filter((m) => m.week === week);
  const partyMetrics = quest.parties
    .filter((p) => {
      if (p.questId !== quest.details.id) return false;
      if (week > 0) return p.startWeek === week;
      return true;
    })
    .map((p) => p.metrics)
    .flat();
  return {
    name: name || quest.details.name,
    rank: rank || quest.details.questRank,
    metrics: [...personalMetrics, ...partyMetrics],
  };
}
