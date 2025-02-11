import { IDbMetric, MetricRuleId, QuestMetricType } from "../../types/Quest";
import { Ranks } from "../../types/Ranks";

export const rawMetricRules: IRawMetricRule[]  = [
  {
    metricRuleId: MetricRuleId.MonsterKill,
    questMetricType: QuestMetricType.PointByRank,
    multiplier: 0.25
  },
  {
    metricRuleId: MetricRuleId.ChestOpened,
    questMetricType: QuestMetricType.Count,
    multiplier: 1
  },
  {
    metricRuleId: MetricRuleId.TrapDisarmed,
    questMetricType: QuestMetricType.Count,
    multiplier: 2
  },
  {
    metricRuleId: MetricRuleId.TrapTriggered,
    questMetricType: QuestMetricType.Count,
    multiplier: -1
  },
  {
    metricRuleId: MetricRuleId.Death,
    questMetricType: QuestMetricType.Count,
    multiplier: -5
  },
  {
    metricRuleId: MetricRuleId.AllyResurrect,
    questMetricType: QuestMetricType.PointByRank,
    multiplier: 3
  },
  {
    metricRuleId: MetricRuleId.AllyHealed,
    questMetricType: QuestMetricType.PointByRank,
    multiplier: 0.25
  },
  {
    metricRuleId: MetricRuleId.CivilianSaved,
    questMetricType: QuestMetricType.Count,
    multiplier: 1
  },
  {
    metricRuleId: MetricRuleId.CiviliansDead,
    questMetricType: QuestMetricType.Count,
    multiplier: -2
  },
  {
    metricRuleId: MetricRuleId.RewardGold,
    questMetricType: QuestMetricType.GoldConvert,
    multiplier: 1
  },
  {
    metricRuleId: MetricRuleId.PropertyDamaged,
    questMetricType: QuestMetricType.GoldConvert,
    multiplier: -1
  },
  {
    metricRuleId: MetricRuleId.QuestsAccepted,
    questMetricType: QuestMetricType.Count,
    multiplier: -0.5
  },  {
    metricRuleId: MetricRuleId.QuestsComplete,
    questMetricType: QuestMetricType.Count,
    multiplier: 1
  },  {
    metricRuleId: MetricRuleId.ActiveMembers,
    questMetricType: QuestMetricType.Count,
    multiplier: 1
  },  {
    metricRuleId: MetricRuleId.InactiveMembers,
    questMetricType: QuestMetricType.Count,
    multiplier: -1
  },
]

export const metricPointCalculators: MetricCalculators = rawMetricRules.reduce((calculators, rule)=>{
  const ruleCalculator = rawMetricToCalculator(rule)
  return {...calculators, [rule.metricRuleId]: ruleCalculator}
}, {} as MetricCalculators)

function rawMetricToCalculator (rawMetric: IRawMetricRule):MetricCalculator{
  const {questMetricType, multiplier} = rawMetric
  if(questMetricType === QuestMetricType.PointByRank) {
    return (metric: IDbMetric) => pointByRank(metric, multiplier)
  } 
  if(questMetricType === QuestMetricType.GoldConvert) {
    return (metric: IDbMetric) => pointByGold(metric, multiplier)
  } 
  return (metric: IDbMetric) => pointByCount(metric, multiplier)
}

function pointByCount (metric:IDbMetric, multiplier = 1){
  const {value} = metric
  return value * multiplier
}

function pointByRank (metric:IDbMetric, multiplier = 1){
  const {value, rank} = metric
  const rankMultiplier = rank
    ? rankMultipliers[rank]
    : 1
  return value * rankMultiplier * multiplier
}

function pointByGold (metric:IDbMetric, multiplier = 1){
 
  // Starting from 1 we add a point for every decimal place
  // 3g => 1pt
  // 453g => 3pt
  // 12345g = 5pt

  const moneyPoints = Math.floor(Math.log10(metric.value)) + 1
  return multiplier * moneyPoints

}

const rankMultipliers ={
  [Ranks.S]: 50,
  [Ranks.A]: 16,
  [Ranks.B]: 8,
  [Ranks.C]: 4,
  [Ranks.D]: 2,
  [Ranks.E]: 1
}

interface IRawMetricRule {
  questMetricType: QuestMetricType,
  multiplier: number
  metricRuleId: MetricRuleId
}

type MetricCalculator = (metric:IDbMetric) => number

type MetricCalculators = Record<MetricRuleId, MetricCalculator>;

