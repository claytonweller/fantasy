import { IAdventurerQuest } from "../types/Adventurer";
import { IMetricsWithMeta } from "../types/Quest";
import { Ranks } from "../types/Ranks";
import { RosterPositions } from "../types/Roster";
import { combineMetaMetrics } from "./combineMetricsArrays";

interface IAdventureQuestMetricsParams {
  quest: IAdventurerQuest;
  name?: string;
  rank?: Ranks | RosterPositions;
  week?: number;
}
export function metaMetricsFromAdventurerQuest(
  params: IAdventureQuestMetricsParams,
): IMetricsWithMeta {
  const { quest, week = 0 } = params;
  const personalMetrics =
    week === 0 ? quest.metrics : quest.metrics.filter((m) => m.week === week);
  const partyMetrics = quest.parties
    .filter((p) => {
      if (p.questId !== quest.details.id) return false;
      if (week > 0) return p.startWeek === week;
      return true;
    })
    .map((p) => {
      return p.metrics.map((m) => {
        // Larger parties mean less impact from party metrics
        const proportionalValue =
          Math.ceil((m.value * 100) / p.adventurers.length) / 100;
        return { ...m, value: proportionalValue };
      });
    })
    .flat();

  const metaPersonal = formatMetaMetrics(params, personalMetrics);
  const metaParty = formatMetaMetrics(params, partyMetrics);
  return combineMetaMetrics([metaParty, metaPersonal]);
}

function formatMetaMetrics<T>(
  params: IAdventureQuestMetricsParams,
  metrics: T[],
) {
  const { name, rank, quest } = params;
  return {
    name: name || quest.details.name,
    rank: rank || quest.details.questRank,
    metrics: metrics,
  };
}
