import { IRoster, RosterPositions } from "types/Roster";
import { calculateAdventurerPickMetrics } from "./calculateAdventurerPickMetrics";
import { calculateClanPickMetrics } from "./calculateClanPickMetrics";
import { IMetricsWithMeta } from "types/Quest";
import { IRules } from "data/getRules";

export function calculateVillagerRosterMetrics(roster: IRoster, rules: IRules) {
  const metaMetrics: IMetricsWithMeta[] = roster.rosterPicks.map(
    (rosterPick) => {
      const { pick, position } = rosterPick;
      if (pick.adventurer) {
        return calculateAdventurerPickMetrics(
          pick.adventurer,
          roster.week,
          position,
        );
      }
      if (pick.clan)
        return calculateClanPickMetrics(
          pick.clan,
          roster.week,
          RosterPositions.Clan,
        );
      return {
        name: "clan",
        rank: RosterPositions.Clan,
        metrics: [],
        week: roster.week,
      };
    },
  );
  const total = metaMetrics.reduce((tot, mm) => {
    let subTotal = 0;
    mm.metrics.forEach((m) => {
      const pointCalculator = rules.calculators[m.metricRuleId];
      const metricPoints = pointCalculator(m);
      subTotal += metricPoints;
    });
    return tot + subTotal;
  }, 0);
  return {
    total,
    week: roster.week,
    metaMetrics,
  };
}
