import { MetricRuleId, QuestMetricType } from "types/Quest";

export const rawMetricRules: IRawMetricRule[] = [
  {
    metricRuleId: MetricRuleId.EnemyKill,
    questMetricType: QuestMetricType.PointByRank,
    multiplier: 0.25,
  },
  {
    metricRuleId: MetricRuleId.ChestOpened,
    questMetricType: QuestMetricType.Count,
    multiplier: 1,
  },
  {
    metricRuleId: MetricRuleId.TrapDisarmed,
    questMetricType: QuestMetricType.Count,
    multiplier: 2,
  },
  {
    metricRuleId: MetricRuleId.TrapTriggered,
    questMetricType: QuestMetricType.Count,
    multiplier: -1,
  },
  {
    metricRuleId: MetricRuleId.Death,
    questMetricType: QuestMetricType.Count,
    multiplier: -5,
  },
  {
    metricRuleId: MetricRuleId.GoneMissing,
    questMetricType: QuestMetricType.Count,
    multiplier: -2,
  },
  {
    metricRuleId: MetricRuleId.AllyResurrect,
    questMetricType: QuestMetricType.PointByRank,
    multiplier: 3,
  },
  {
    metricRuleId: MetricRuleId.AllyHealed,
    questMetricType: QuestMetricType.PointByRank,
    multiplier: 0.25,
  },
  {
    metricRuleId: MetricRuleId.CivilianSaved,
    questMetricType: QuestMetricType.Count,
    multiplier: 1,
  },
  {
    metricRuleId: MetricRuleId.CiviliansDead,
    questMetricType: QuestMetricType.Count,
    multiplier: -2,
  },
  {
    metricRuleId: MetricRuleId.RewardGold,
    questMetricType: QuestMetricType.GoldConvert,
    multiplier: 1,
  },
  {
    metricRuleId: MetricRuleId.PropertyDamaged,
    questMetricType: QuestMetricType.GoldConvert,
    multiplier: -1,
  },
  {
    metricRuleId: MetricRuleId.QuestsAccepted,
    questMetricType: QuestMetricType.Count,
    multiplier: -1,
  },
  {
    metricRuleId: MetricRuleId.QuestsComplete,
    questMetricType: QuestMetricType.Count,
    multiplier: 1.5,
  },
  {
    metricRuleId: MetricRuleId.ActiveMembers,
    questMetricType: QuestMetricType.Count,
    multiplier: 1,
  },
  {
    metricRuleId: MetricRuleId.InactiveMembers,
    questMetricType: QuestMetricType.Count,
    multiplier: -1,
  },
];

export interface IRawMetricRule {
  questMetricType: QuestMetricType;
  multiplier: number;
  metricRuleId: MetricRuleId;
}
