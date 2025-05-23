import { roundToHundredths } from "utils/roundToHundredths";
import { IRules } from "../data/getRules";
import { IMetricsWithMeta } from "../types/Quest";
import { Ranks } from "../types/Ranks";
import { formatRuleNameFromMetric, IMetricRow } from "./MetricGrid";
import { CURRENT_WEEK } from "config";

export default function MetricRow(params: {
  meta: IMetricsWithMeta;
  emptyRow: IMetricRow;
  rules: IRules;
  makeSearchable: (text: string) => JSX.Element;
}) {
  const { meta, emptyRow, makeSearchable, rules } = params;
  const week = meta.week;
  // We spread here to create a shallow copy so our
  // mutations don't affect other rows
  const row: IMetricRow = {
    ...emptyRow,
    week,
    points: 0,
    name: makeSearchable(meta.name),
    rank: meta.rank || Ranks.E,
  };

  meta.metrics.forEach((m) => {
    const pointCalculator = rules.calculators[m.metricRuleId];
    const metricPoints = pointCalculator(m);
    row.points += metricPoints;
    row[formatRuleNameFromMetric(m)] = `${m.value}`;
  });

  row.points = roundToHundredths(row.points);

  const cells = Object.values(row).map((value, i) => {
    return <td key={`cell${i}`}>{value}</td>;
  });

  return <tr>{cells}</tr>;
}
