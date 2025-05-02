import { IRules } from "../data/getRules";
import { CardTypes } from "../types/Card";
import { IMetricsWithMeta } from "../types/Quest";
import { Ranks } from "../types/Ranks";
import { ISearchParams } from "../types/SearchParams";
import { IVillager } from "../types/Villager";
import Card from "./Card";
import MetricGrid from "./MetricGrid";
import { IVillagerMetrics } from "./Villagers";

export default function VillagerCard(props: {
  villager: IVillager;
  search: ISearchParams;
  rules: IRules;
  villagerMetrics: IVillagerMetrics;
  makeSearchable: (text: string) => JSX.Element;
}) {
  const { villager, search, rules, makeSearchable, villagerMetrics } = props;
  const { name } = villager;

  const weeklyRosters = villagerMetrics.weekly.map((p) => {
    return formatRoster({ ...p, makeSearchable, rules });
  });

  return (
    <Card
      color="#332233"
      search={search}
      data={villager}
      name={`${name} - ${villagerMetrics.total}pts`}
      type={CardTypes.Villager}
      research={villager.research}
      showRank={false}
    >
      <div>
        <b>Player Name</b> - {villager.playerName}{" "}
      </div>
      <div>
        <b>Profession</b> - {villager.profession}{" "}
      </div>
      <div>
        <b>Race</b> - {villager.races}{" "}
      </div>
      <div>
        <b>Running Total : {villagerMetrics.total}</b>
      </div>
      {weeklyRosters}
    </Card>
  );
}

function formatRoster(params: {
  week: number;
  metaMetrics: IMetricsWithMeta[];
  rules: IRules;
  total: number;
  makeSearchable: (text: string) => JSX.Element;
}) {
  const { week, metaMetrics, rules, total, makeSearchable } = params;
  return (
    <div
      style={{
        border: "rgb(100, 100, 100)",
        borderStyle: "solid",
        margin: "5px",
        padding: "10px",
      }}
      key={"roster" + week}
    >
      <h3>Week {week} Roster</h3>
      <div style={{ padding: 10 }}>
        <b>Weekly Total {total}</b>
      </div>
      <MetricGrid
        metaMetrics={metaMetrics}
        makeSearchable={makeSearchable}
        rules={rules}
      />
    </div>
  );
}
