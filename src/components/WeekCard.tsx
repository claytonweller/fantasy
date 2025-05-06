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
import { IRosterPick } from "types/Roster";
import { adventurersById } from "data/queries/adventurers";
import { clansById } from "data/queries/clans";

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
      <ClanFacts
        clans={clans}
        week={week}
        rules={rules}
        makeSearchable={makeSearchable}
      />
      <AdventurerFacts
        adventurers={adventurers}
        week={week}
        rules={rules}
        makeSearchable={makeSearchable}
      />
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

  const pickCounts: { [id: string]: number } = {};

  const villagerWithStats = villagers.map((v) => {
    const roster = v.rosters.find((r) => r.week === week);
    roster?.rosterPicks.forEach((pick) => {
      if (!pickCounts[pick.pickId]) pickCounts[pick.pickId] = 0;
      pickCounts[pick.pickId] += 1;
    });
    const points = roster
      ? calculateVillagerRosterMetrics(roster, rules).total
      : 0;

    return {
      ...v,
      points,
    };
  });

  // This code is about listing the most popular picks.
  const sorted = Object.entries(pickCounts).sort((a, b) => b[1] - a[1]);
  const allHighest = sorted.reduce(
    (highest, entry) => {
      if (!highest[0]) return [entry];
      if (entry[1] < highest[0][1]) return highest;
      return [...highest, entry];
    },
    [] as [string, number][],
  );
  const highestNames = allHighest
    .map(([id]) => {
      const entity = adventurersById[id] || clansById[id];
      return entity.name;
    })
    .join(", ");
  const highestCount = sorted[0] ? sorted[0][1] : 0;

  const villagerFacts = villagerWithStats
    .sort((a, b) => b.points - a.points)
    .map((v, i) => {
      return (
        <div style={{ padding: 5 }}>
          <b>{i + 1}.</b> {v.name} - {v.points}
        </div>
      );
    });

  return (
    <div>
      <h3 style={{ paddingTop: 20 }}>Villager Facts</h3>
      <div style={{ padding: 5 }}>
        <b>Most picked (@{highestCount}) -</b> {highestNames}
      </div>
      {villagerFacts}
    </div>
  );
}

function ClanFacts(props: {
  clans: IClan[];
  week: number;
  rules: IRules;
  makeSearchable: (text: string) => JSX.Element;
}) {
  const { clans, week, rules, makeSearchable } = props;

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
        <b>Highest</b> - {makeSearchable(highest.name)}: {highest.points}
      </div>
      <div style={{ padding: 5 }}>
        <b>Lowest</b> - {makeSearchable(lowest.name)}: {lowest.points}
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
  makeSearchable: (text: string) => JSX.Element;
}) {
  const { adventurers, week, rules, makeSearchable } = props;
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
          <b>{uppercaseKey}</b> - {makeSearchable(a.name)}: {a.points}
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
