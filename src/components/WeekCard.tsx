import { IClan } from "types/Clan";
import { IRules } from "../data/getRules";
import { CardTypes } from "../types/Card";
import { IMetricsWithMeta, IQuest } from "../types/Quest";
import { IVillager } from "../types/Villager";
import Card from "./Card";
import { IAdventurer } from "types/Adventurer";
import { ISearchParams } from "types/SearchParams";
import { calculateAdventurerPickMetrics } from "utils/calculateAdventurerPickMetrics";
import { Ranks } from "types/Ranks";

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
  const { villagers, clans, week, adventurers, quests, rules, search, makeSearchable } =
    props;

  const adventurersWithMetrics = adventurers.map(a=>{
    const weeklyMetrics = calculateAdventurerPickMetrics(a, week, a.rank)
    let points = 0
    weeklyMetrics.metrics.forEach((m) => {
      const pointCalculator = rules.calculators[m.metricRuleId];
      const metricPoints = pointCalculator(m);
      points += metricPoints;
    });
    return {
      ...a,
      points
    }
  })

  const adventurerFacts: {[key: string]: (IAdventurer & {points: number}) } = {
    highest: {points: 0} as IAdventurer & {points: number},
    secondHighest: {points: 0} as IAdventurer & {points: number},
    thirdHighest: {points: 0} as IAdventurer & {points: number},
    thirdLowest: {points: 0} as IAdventurer & {points: number},
    secondLowest: {points: 0} as IAdventurer & {points: number},
    lowest: {points: 0} as IAdventurer & {points: number},
    highestA: {points: 0} as IAdventurer & {points: number},
    highestB: {points: 0} as IAdventurer & {points: number},
    highestC: {points: 0} as IAdventurer & {points: number},
    highestD: {points: 0} as IAdventurer & {points: number},
    highestE: {points: 0} as IAdventurer & {points: number},
  }

  adventurersWithMetrics.forEach(a =>{
    const {points} = a
    if(adventurerFacts.thirdHighest.points < points){
      if(adventurerFacts.secondHighest.points < points){
        adventurerFacts.thirdHighest = adventurerFacts.secondHighest
        if(adventurerFacts.highest.points < points ) {
          adventurerFacts.secondHighest = adventurerFacts.highest
          adventurerFacts.highest = a
        } else {
          adventurerFacts.secondHighest = a
        }
      } else {
        adventurerFacts.thirdHighest = a
      }
    }

    if(adventurerFacts.thirdLowest.points > points){
      if(adventurerFacts.secondLowest.points > points){
        adventurerFacts.thirdLowest = adventurerFacts.secondLowest
        if(adventurerFacts.lowest.points > points ) {
          adventurerFacts.secondLowest = adventurerFacts.lowest
          adventurerFacts.lowest = a
        } else {
          adventurerFacts.secondLowest = a
        }
      } else {
        adventurerFacts.thirdLowest = a
      }
    }


    if(adventurerFacts.lowest.points > points ) adventurerFacts.lowest = a
    if(a.rank === Ranks.A && adventurerFacts.highestA.points < points ) adventurerFacts.highestA = a
    if(a.rank === Ranks.B && adventurerFacts.highestB.points < points ) adventurerFacts.highestB = a
    if(a.rank === Ranks.C && adventurerFacts.highestC.points < points ) adventurerFacts.highestC = a
    if(a.rank === Ranks.D && adventurerFacts.highestD.points < points ) adventurerFacts.highestD = a
    if(a.rank === Ranks.E && adventurerFacts.highestE.points < points ) adventurerFacts.highestE = a
  })

  const adventurerFactsDisplay = Object.entries(adventurerFacts).map(([key, a])=>{
    const uppercaseKey = String(key).charAt(0).toUpperCase() + String(key).slice(1)
    return (
      <div style={{padding:5}}><b>{uppercaseKey}</b> - {a.name}: {a.points}</div>
    )
  })

  return (
    <Card
      color="#333344"
      search={search}
      name={`Week ${week}`}
      type={CardTypes.Week}
      showRank={false}
    >
      <div>
        {adventurerFactsDisplay}
      </div>
    </Card>
  );
}

// function evaluateFacts