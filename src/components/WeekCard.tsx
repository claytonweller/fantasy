import { IClan } from "types/Clan";
import { IRules } from "../data/getRules";
import { CardTypes } from "../types/Card";
import { IQuest, MetricRuleId } from "../types/Quest";
import { IVillager } from "../types/Villager";
import Card from "./Card";
import { AdventurerStatuses, IAdventurer } from "types/Adventurer";
import { ISearchParams } from "types/SearchParams";
import { calculateAdventurerPickMetrics } from "utils/calculateAdventurerPickMetrics";
import { Ranks } from "types/Ranks";
import { roundToHundredths } from "utils/roundToHundredths";
import { calculateClanPickMetrics } from "utils/calculateClanPickMetrics";
import { calculateVillagerRosterMetrics } from "utils/calculateVillagerRosterMetrics";
import { RosterPositions } from "types/Roster";
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

  const adventurerFacts = calculateAdventurerFacts({
    adventurers,
    week,
    rules,
    makeSearchable,
  });
  const clanFacts = calculateClanFacts({ clans, week, rules, makeSearchable });
  const bestRosterFacts = calculateBestRoster(
    adventurerFacts.allSorted,
    clanFacts.sortedClans,
    makeSearchable,
  );

  return (
    <Card
      color="#333344"
      search={search}
      name={`Week ${week}`}
      type={CardTypes.Week}
      showRank={false}
    >
      {clanFacts.display}
      {adventurerFacts.display}
      <VillagerFacts villagers={villagers} week={week} rules={rules} />
      {bestRosterFacts.display}
    </Card>
  );
}

function calculateBestRoster(
  sortedAdventurers: AdventurerWithMetrics[],
  sortedClans: ClanWithMetrics[],
  makeSearchable: (text: string) => JSX.Element,
) {
  const bestAdventurerPicks = [
    {
      pick: {} as AdventurerWithMetrics,
      validRanks: [Ranks.C, Ranks.D, Ranks.E],
      position: RosterPositions.C1,
    },
    {
      pick: {} as AdventurerWithMetrics,
      validRanks: [Ranks.C, Ranks.D, Ranks.E],
      position: RosterPositions.C2,
    },
    {
      pick: {} as AdventurerWithMetrics,
      validRanks: [Ranks.C, Ranks.D, Ranks.E],
      position: RosterPositions.C3,
    },
    {
      pick: {} as AdventurerWithMetrics,
      validRanks: [Ranks.B, Ranks.C, Ranks.D, Ranks.E],
      position: RosterPositions.B1,
    },
    {
      pick: {} as AdventurerWithMetrics,
      validRanks: [Ranks.B, Ranks.C, Ranks.D, Ranks.E],
      position: RosterPositions.B2,
    },
    {
      pick: {} as AdventurerWithMetrics,
      validRanks: [Ranks.A, Ranks.B, Ranks.C, Ranks.D, Ranks.E],
      position: RosterPositions.A,
    },
  ];

  sortedAdventurers.forEach((a) => {
    for (const position of bestAdventurerPicks) {
      const isValidRank = position.validRanks.includes(a.rank);
      const positionIsOpen = !position.pick.points;
      if (isValidRank && positionIsOpen) {
        position.pick = a;
        break;
      }
    }
  });

  const bestRoster = [
    ...bestAdventurerPicks,
    {
      pick: sortedClans[0],
      position: RosterPositions.Clan,
    },
  ];

  let total = 0;
  const bestRosterRows = bestRoster.map((p) => {
    total += p.pick.points;
    return (
      <div key={`pick${p.pick?.id}`} style={{ padding: 5 }}>
        <b>{p.position}:</b> {makeSearchable(p.pick.name)} - {p.pick?.points}
      </div>
    );
  });

  const display = (
    <div>
      <h3 style={{ paddingTop: 20 }}>Best Possible Roster</h3>
      <div>
        <b>Total</b> - {roundToHundredths(total)}
      </div>
      {bestRosterRows}
    </div>
  );
  return { display, bestRoster };
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
      ? roundToHundredths(calculateVillagerRosterMetrics(roster, rules).total)
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

interface ClanWithMetrics extends IClan {
  points: number;
}

function calculateClanFacts(props: {
  clans: IClan[];
  week: number;
  rules: IRules;
  makeSearchable: (text: string) => JSX.Element;
}) {
  const { clans, week, rules, makeSearchable } = props;

  const clansWithMetrics: ClanWithMetrics[] = clans.map((c) => {
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

  const sortedClans = clansWithMetrics.sort((a, b) => {
    return b.points - a.points;
  });
  let totalPoints = 0;
  clansWithMetrics.forEach((c) => {
    totalPoints += c.points;
  });
  const average = roundToHundredths(totalPoints / clans.length);
  const highest = sortedClans[0];
  const lowest = sortedClans[sortedClans.length - 1];

  const display = (
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
  return { display, sortedClans };
}

interface AdventurerWithMetrics extends IAdventurer {
  points: number;
  isActive: boolean;
  died: boolean;
}

function calculateAdventurerFacts(props: {
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
      let died = false;
      const deadNextWeek = !!a.statusHistory.find((s) => {
        return s.startWeek >= week + 1 && s.status === AdventurerStatuses.Dead;
      });
      weeklyMetrics.metrics.forEach((m) => {
        const pointCalculator = rules.calculators[m.metricRuleId];
        const metricPoints = pointCalculator(m);

        if (m.metricRuleId === MetricRuleId.Death && deadNextWeek) died = true;

        points += metricPoints;
      });
      const isActive = !!a.quests.find((q) =>
        q.parties.find((p) =>
          p.adventurers.find((pa) => pa.id === a.id && p.startWeek === week),
        ),
      );

      return {
        ...a,
        died,
        isActive,
        points: roundToHundredths(points),
      };
    },
  );

  const allSorted = adventurersWithMetrics.sort((a, b) => {
    return b.points - a.points;
  });

  const rankSorted: { [value in Ranks]: AdventurerWithMetrics[] } = {
    [Ranks.S]: [],
    [Ranks.A]: [],
    [Ranks.B]: [],
    [Ranks.C]: [],
    [Ranks.D]: [],
    [Ranks.E]: [],
  };

  let totalPoints = 0;
  let activeCount = 0;
  const whoDied: string[] = [];
  allSorted.forEach((a) => {
    const { points } = a;
    totalPoints += points;
    if (a.isActive) activeCount += 1;
    if (a.died) whoDied.push(a.name);
    rankSorted[a.rank].push(a);
  });

  const facts: [string, AdventurerWithMetrics][] = [
    ["highest", allSorted[0]],
    ["secondHighest", allSorted[1]],
    ["thirdHighest", allSorted[2]],
    ["lowest", allSorted[allSorted.length - 1]],
    ["highestA", rankSorted[Ranks.A][0]],
    ["highestB", rankSorted[Ranks.B][0]],
    ["highestC", rankSorted[Ranks.C][0]],
    ["highestD", rankSorted[Ranks.D][0]],
    ["highestE", rankSorted[Ranks.E][0]],
  ];

  const adventurerFactsDisplay = facts.map(([key, a]) => {
    const uppercaseKey =
      String(key).charAt(0).toUpperCase() + String(key).slice(1);
    return (
      <div key={"fact" + week + key} style={{ padding: 5 }}>
        <b>{uppercaseKey}</b> - {makeSearchable(a.name)}: {a.points}
      </div>
    );
  });

  const average = roundToHundredths(totalPoints / adventurers.length);
  const averageActive = roundToHundredths(totalPoints / activeCount);
  
  const display = (
    <div>
      <h3 style={{ paddingTop: 20 }}>Adventurer Facts</h3>
      <div style={{ padding: 5 }}>
        <b>Average All</b>: {average}
      </div>
      <div style={{ padding: 5 }}>
        <b>Average Active</b>: {averageActive}
      </div>
      <div style={{ padding: 5 }}>
        <b>Active #</b>: {activeCount}
      </div>
      {adventurerFactsDisplay}
      <div style={{ padding: 5 }}>
        <b>R.I.P.</b>: {whoDied.length ? whoDied.join(", ") : "Nobody!"}
      </div>
    </div>
  );

  return { display, rankSorted, allSorted };
}
