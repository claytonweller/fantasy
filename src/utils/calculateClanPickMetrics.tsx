import { IClan } from "types/Clan";
import { metaMetricsFromClan } from "./metaMetricsFromClan";
import { RosterPositions } from "types/Roster";
import { Ranks } from "types/Ranks";

export function calculateClanPickMetrics(
  clan: IClan,
  week: number,
  position: RosterPositions | Ranks,
) {
  const clanMetrics = metaMetricsFromClan(clan, week);
  const weekMetrics = clanMetrics.filter((cm) => {
    return cm.metrics.find((m) => m.week === week);
  });
  return {
    name: clan.name,
    rank: position,
    metrics: weekMetrics[0].metrics,
    week,
  };
}
