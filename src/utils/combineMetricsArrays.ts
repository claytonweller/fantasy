import { Ranks } from "types/Ranks";
import { formatRuleNameFromMetric } from "../components/MetricGrid";
import { IMetric, IMetricsWithMeta } from "../types/Quest";

export function combineMetaMetrics(
  metaMetrics: IMetricsWithMeta[],
): IMetricsWithMeta {
  const combinedMap: { [metricId: string]: IMetric } = {};
  metaMetrics.forEach((meta) => {
    meta.metrics.forEach((m) => {
      const name = formatRuleNameFromMetric(m);
      const exists = combinedMap[name];
      if (!exists) {
        combinedMap[name] = m;
        return;
      }
      combinedMap[name] = {
        ...combinedMap[name],
        value: combinedMap[name].value + m.value,
      };
    });
  });
  if (!metaMetrics[0]?.name) {
    console.warn(metaMetrics);
  }
  const combinedMetrics = Object.values(combinedMap);
  return {
    name: metaMetrics[0].name,
    rank: metaMetrics[0].rank,
    metrics: combinedMetrics,
  };
}
