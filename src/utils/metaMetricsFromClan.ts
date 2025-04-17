import {
  adventurersById,
  adventurersByPartyId,
} from "data/queries/adventurers";
import { questsByAdventurerId, questsById } from "../data/queries/quests";
import { IClan } from "../types/Clan";
import {
  IMetricsWithMeta,
  IQuest,
  MetricRuleId,
  QuestStatus,
} from "../types/Quest";

export function metaMetricsFromClan(clan: IClan, currentWeek: number) {
  const { quests } = clan;
  const sortedQuests = sortQuestsByWeek({ currentWeek, quests });

  const metrics: IMetricsWithMeta[] = Object.entries(sortedQuests).map(
    ([week, quests]) => {
      return calculateSingleWeekMetrics({ week: Number(week), clan, quests });
    },
  );

  return metrics;
}

function sortQuestsByWeek(params: { currentWeek: number; quests: IQuest[] }) {
  const { currentWeek, quests } = params;
  const weeks: {
    [week: number]: IQuest[];
  } = {};
  for (let i = 1; i <= currentWeek; i++) {
    weeks[i] = [];
  }

  quests.forEach((q) => {
    if (!q.parties) return;
    q.parties.forEach((p) => {
      if (!weeks[p.startWeek]) return;
      weeks[p.startWeek].push(q);
    });
  });

  return weeks;
}

function calculateSingleWeekMetrics(params: {
  week: number;
  clan: IClan;
  quests: IQuest[];
}) {
  const { week, clan, quests } = params;
  const { adventurers, rank } = clan;
  
  let deathCount = 0;
  let totalGold = 0;
  let civiliansSaved = 0
  let civiliansDead = 0
  
  const completeQuests = quests.filter((q) => {
    const parties = questsById[q.id].parties;
    const clanParties = parties.filter((p) => p.clanId === clan.id);
    clanParties.forEach(p =>{
      p.metrics.forEach((m) => {
        if (m.metricRuleId === MetricRuleId.RewardGold){
          totalGold += m.value;
        }
        if (m.metricRuleId === MetricRuleId.PropertyDamaged) {
          totalGold -= m.value;
        }
        if (m.metricRuleId === MetricRuleId.CivilianSaved) {
          civiliansSaved += m.value;
        }
        if (m.metricRuleId === MetricRuleId.CiviliansDead) {
          civiliansDead += m.value;
        }
      })
    })
    const complete = clanParties.find((p) => p.status === QuestStatus.Success);
    return !!complete;
  });
  const activeAdventurers: Set<string> = new Set();

  adventurers.forEach((a) => {
    const aQuests = questsByAdventurerId[a.id];
    aQuests.forEach((q) => {
      q.parties.forEach((p) => {
        if (p.startWeek === week) {
          activeAdventurers.add(a.id);
          const questDetails = adventurersById[a.id].questParties.find(
            (qp) => qp.partyId === p.id,
          );

          questDetails?.metrics.forEach((m) => {
            if (m.metricRuleId === MetricRuleId.Death) deathCount += m.value;
            if (m.metricRuleId === MetricRuleId.RewardGold)
              totalGold += m.value;
            if (m.metricRuleId === MetricRuleId.PropertyDamaged)
              totalGold -= m.value;
          });
        }
      });
    });
  });

  const metrics = [
    {
      metricRuleId: MetricRuleId.QuestsAccepted,
      value: quests.length,
      week,
    },
    {
      metricRuleId: MetricRuleId.QuestsComplete,
      value: completeQuests.length,
      week,
    },
    {
      metricRuleId: MetricRuleId.ActiveMembers,
      value: activeAdventurers.size,
      week,
    },
    {
      metricRuleId: MetricRuleId.InactiveMembers,
      value: adventurers.length - activeAdventurers.size,
      week,
    },
    {
      metricRuleId: MetricRuleId.Death,
      value: deathCount,
      week,
    },
    {
      metricRuleId: MetricRuleId.RewardGold,
      value: totalGold,
      week,
    },
    {
      metricRuleId: MetricRuleId.CivilianSaved,
      value: civiliansSaved,
      week,
    },
    {
      metricRuleId: MetricRuleId.CiviliansDead,
      value: civiliansDead,
      week,
    },
  ];

  return {
    name: "Week" + week,
    rank,
    metrics: metrics.filter((m) => m.value !== 0),
  };
}
