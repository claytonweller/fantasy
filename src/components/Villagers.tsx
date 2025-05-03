import { IRules } from "../data/getRules";
import { CardTypes } from "../types/Card";
import { ISearchParams } from "../types/SearchParams";
import CardGroup from "./CardGroup";
import VillagerCard from "./VillagerCard";
import { IVillager } from "../types/Villager";
import { IMetricsWithMeta } from "../types/Quest";
import { RosterPositions } from "../types/Roster";
import { calculateAdventurerPickMetrics } from "utils/calculateAdventurerPickMetrics";
import { calculateClanPickMetrics } from "utils/calculateClanPickMetrics";
import { calculateVillagerRosterMetrics } from "utils/calculateVillagerRosterMetrics";

export default function Villagers(props: {
  search: ISearchParams;
  rules: IRules;
  cardTypeFilters: { [key in CardTypes]: boolean };
  villagers: IVillager[];
  makeSearchable: (text: string) => JSX.Element;
}) {
  const { cardTypeFilters, search, rules, villagers, makeSearchable } = props;
  const allVillagers = villagers
    .map((villager) => {
      const metrics = computeVillagerMetrics({ rules, villager });
      return { villager, metrics };
    })
    .sort((a, b) => b.metrics.total - a.metrics.total)
    .map((input) => {
      return (
        <VillagerCard
          key={"VCard" + input.villager.id}
          villager={input.villager}
          search={search}
          rules={rules}
          villagerMetrics={input.metrics}
          makeSearchable={makeSearchable}
        />
      );
    });

  return (
    <div>
      <CardGroup
        cardTypeFilters={cardTypeFilters}
        cardType={CardTypes.Villager}
        color="#221128"
      >
        {allVillagers}
      </CardGroup>
    </div>
  );
}

function computeVillagerMetrics(props: { rules: IRules; villager: IVillager }) {
  const {
    rules,
    villager: { rosters },
  } = props;
  const weekly = rosters
    .sort((a, b) => b.week - a.week)
    .map((r) => calculateVillagerRosterMetrics(r, rules));

  const runningTotal = weekly.reduce((total, props) => {
    return total + props.total;
  }, 0);

  return {
    total: runningTotal,
    weekly,
  };
}

export interface IVillagerMetrics {
  total: number;
  weekly: {
    week: number;
    total: number;
    metaMetrics: IMetricsWithMeta[];
  }[];
}
