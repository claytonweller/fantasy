import { IClan } from "types/Clan";
import { IRules } from "../data/getRules";
import { CardTypes } from "../types/Card";
import { IQuest } from "../types/Quest";
import { IVillager } from "../types/Villager";
import Card from "./Card";
import { IAdventurer } from "types/Adventurer";
import { ISearchParams } from "types/SearchParams";
import { calculateAdventurerPickMetrics } from "utils/calculateAdventurerPickMetrics";
import { Ranks } from "types/Ranks";
import { roundToHundredths } from "utils/roundToHundredths";
import { calculateClanPickMetrics } from "utils/calculateClanPickMetrics";
import { calculateVillagerRosterMetrics } from "utils/calculateVillagerRosterMetrics";

export default function WeekCard(props: {
  week: number;
  villagers: IVillager[];
  clans: IClan[];
  adventurers: IAdventurer[];
  quests: IQuest[];
  rules: IRules;
  search: ISearchParams;
  makeSearchable: (text: string) => JSX.Element;
}) {
  const {
    villagers,
    clans,
    week,
    adventurers,
    quests,
    rules,
    search,
    makeSearchable,
  } = props;

  return (
    <Card
      color="#333344"
      search={search}
      name={`Week ${week}`}
      type={CardTypes.Week}
      showRank={false}
    >
      <ClanFacts clans={clans} week={week} rules={rules} />
      <AdventurerFacts adventurers={adventurers} week={week} rules={rules} />
      <VillagerFacts villagers={villagers} week={week} rules={rules} />
    </Card>
  );
}

function VillagerFacts(props: {
  villagers: IVillager[];
  week: number;
  rules: IRules;
}) {
  const { villagers, week, rules } = props;

  const villagerWithStats = villagers.map((v) => {
    const roster = v.rosters.find((r) => r.week === week);
    const points = roster
      ? calculateVillagerRosterMetrics(roster, rules).total
      : 0;

    return {
      ...v,
      points,
    };
  });

  const villagerFacts = villagerWithStats
    .sort((a, b) => b.points - a.points)
    .map((v, i) => {
      return (
        <div style={{ padding: 5 }}>
          <b>
            {i + 1}. 
          </b>{" "}
          {v.name} - {v.points}
        </div>
      );
    });
  return (
    <div>
      <h3 style={{ paddingTop: 20 }}>Villager Facts</h3>
      {villagerFacts}
    </div>
  );
}

function ClanFacts(props: { clans: IClan[]; week: number; rules: IRules }) {
  const { clans, week, rules } = props;

  const clansWithMetrics = clans.map((c) => {
    const weeklyMetrics = calculateClanPickMetrics(c, week, c.rank);
    let points = 0;
    weeklyMetrics.metrics.forEach((m) => {
      const pointCalculator = rules.calculators[m.metricRuleId];
      const metricPoints = pointCalculator(m);
      points += metricPoints;
    });
    return {
      ...c,
      points,
    };
  });
  let totalPoints = 0;
  let highest = { points: 0 } as IClan & { points: number };
  let lowest = { points: 100 } as IClan & { points: number };
  clansWithMetrics.forEach((c) => {
    totalPoints += c.points;
    if (c.points > highest.points) highest = c;
    if (c.points < lowest.points) lowest = c;
  });
  const average = roundToHundredths(totalPoints / clans.length);

  return (
    <div>
      <h3 style={{ paddingTop: 20 }}>Clan Facts</h3>
      <div style={{ padding: 5 }}>
        <b>Average</b> - {average}
      </div>
      <div style={{ padding: 5 }}>
        <b>Highest</b> - {highest.name}: {highest.points}
      </div>
      <div style={{ padding: 5 }}>
        <b>Lowest</b> - {lowest.name}: {lowest.points}
      </div>
    </div>
  );
}

interface AdventurerWithMetrics extends IAdventurer {
  points: number;
  isActive: boolean;
}

function AdventurerFacts(props: {
  adventurers: IAdventurer[];
  week: number;
  rules: IRules;
}) {
  const { adventurers, week, rules } = props;
  const adventurersWithMetrics: AdventurerWithMetrics[] = adventurers.map(
    (a) => {
      const weeklyMetrics = calculateAdventurerPickMetrics(a, week, a.rank);
      let points = 0;
      weeklyMetrics.metrics.forEach((m) => {
        const pointCalculator = rules.calculators[m.metricRuleId];
        const metricPoints = pointCalculator(m);
        points += metricPoints;
      });
      const isActive = !!weeklyMetrics.metrics.length;
      return {
        ...a,
        isActive,
        points,
      };
    },
  );

  let totalPoints = 0;
  let activeCount = 0;
  const adventurerFacts: { [key: string]: IAdventurer & { points: number } } = {
    highest: { points: 0 } as IAdventurer & { points: number },
    secondHighest: { points: 0 } as IAdventurer & { points: number },
    thirdHighest: { points: 0 } as IAdventurer & { points: number },
    lowest: { points: 0 } as IAdventurer & { points: number },
    highestA: { points: 0 } as IAdventurer & { points: number },
    highestB: { points: 0 } as IAdventurer & { points: number },
    highestC: { points: 0 } as IAdventurer & { points: number },
    highestD: { points: 0 } as IAdventurer & { points: number },
    highestE: { points: 0 } as IAdventurer & { points: number },
  };

  adventurersWithMetrics.forEach((a) => {
    const { points } = a;
    totalPoints += points;
    if (a.isActive) activeCount += 1;
    if (adventurerFacts.thirdHighest.points < points) {
      if (adventurerFacts.secondHighest.points < points) {
        adventurerFacts.thirdHighest = adventurerFacts.secondHighest;
        if (adventurerFacts.highest.points < points) {
          adventurerFacts.secondHighest = adventurerFacts.highest;
          adventurerFacts.highest = a;
        } else {
          adventurerFacts.secondHighest = a;
        }
      } else {
        adventurerFacts.thirdHighest = a;
      }
    }

    if (adventurerFacts.lowest.points > points) {
      adventurerFacts.lowest = a;
    }

    if (adventurerFacts.lowest.points > points) adventurerFacts.lowest = a;
    if (a.rank === Ranks.A && adventurerFacts.highestA.points < points)
      adventurerFacts.highestA = a;
    if (a.rank === Ranks.B && adventurerFacts.highestB.points < points)
      adventurerFacts.highestB = a;
    if (a.rank === Ranks.C && adventurerFacts.highestC.points < points)
      adventurerFacts.highestC = a;
    if (a.rank === Ranks.D && adventurerFacts.highestD.points < points)
      adventurerFacts.highestD = a;
    if (a.rank === Ranks.E && adventurerFacts.highestE.points < points)
      adventurerFacts.highestE = a;
  });

  const adventurerFactsDisplay = Object.entries(adventurerFacts).map(
    ([key, a]) => {
      const uppercaseKey =
        String(key).charAt(0).toUpperCase() + String(key).slice(1);
      return (
        <div key={"fact" + week + key} style={{ padding: 5 }}>
          <b>{uppercaseKey}</b> - {a.name}: {a.points}
        </div>
      );
    },
  );

  const average = roundToHundredths(totalPoints / adventurers.length);
  const averageActive = roundToHundredths(totalPoints / activeCount);

  return (
    <div>
      <h3 style={{ paddingTop: 20 }}>Adventurer Facts</h3>
      <div style={{ padding: 5 }}>
        <b>Average All</b>: {average}
      </div>
      <div style={{ padding: 5 }}>
        <b>Average Active</b>: {averageActive}
      </div>
      {adventurerFactsDisplay}
    </div>
  );
}
