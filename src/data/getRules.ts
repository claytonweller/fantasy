import { IDbMetric, MetricRuleId, QuestMetricType } from "../types/Quest";
import { Ranks } from "../types/Ranks";
import { IRawMetricRule, rawMetricRules } from "./raw/metricRules";

export function getRules(): {
  raw: IRawMetricRule[];
  calculators: MetricCalculators;
} {
  return {
    raw: rawMetricRules,
    calculators: makeMetricPointCalculators(),
  };
}

export interface IRules {
  raw: IRawMetricRule[];
  calculators: MetricCalculators;
}

// Calculator Logic
function makeMetricPointCalculators(): MetricCalculators {
  return rawMetricRules.reduce((calculators, rule) => {
    const ruleCalculator = rawMetricToCalculator(rule);
    return { ...calculators, [rule.metricRuleId]: ruleCalculator };
  }, {} as MetricCalculators);
}

function rawMetricToCalculator(rawMetric: IRawMetricRule): MetricCalculator {
  const { questMetricType, multiplier } = rawMetric;
  if (questMetricType === QuestMetricType.PointByRank) {
    return (metric: IDbMetric) => pointByRank(metric, multiplier);
  }
  if (questMetricType === QuestMetricType.GoldConvert) {
    return (metric: IDbMetric) => pointByGold(metric, multiplier);
  }
  return (metric: IDbMetric) => pointByCount(metric, multiplier);
}

function pointByCount(metric: IDbMetric, multiplier = 1) {
  const { value } = metric;
  return value * multiplier;
}

function pointByRank(metric: IDbMetric, multiplier = 1) {
  const { value, rank } = metric;
  const rankMultiplier = rank ? rankMultipliers[rank] : 1;
  return value * rankMultiplier * multiplier;
}

function pointByGold(metric: IDbMetric, multiplier = 1) {
  // Starting from 1 we add a point for every decimal place
  // 3g => 1pt
  // 453g => 3pt
  // 12345g = 5pt
  const moneyPoints = Math.floor(Math.log10(Math.abs(metric.value))) + 1;
  if (metric.value < 0) return -1 * multiplier * moneyPoints;
  return multiplier * moneyPoints;
}

export const rankMultipliers = {
  [Ranks.S]: 50,
  [Ranks.A]: 25,
  [Ranks.B]: 12,
  [Ranks.C]: 4,
  [Ranks.D]: 1,
  [Ranks.E]: 0.5,
};

type MetricCalculator = (metric: IDbMetric) => number;
type MetricCalculators = Record<MetricRuleId, MetricCalculator>;
