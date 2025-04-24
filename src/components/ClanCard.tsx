import { IRules } from "../data/getRules";
import { CardTypes } from "../types/Card";
import { IClan } from "../types/Clan";
import { ISearchParams } from "../types/SearchParams";
import { metaMetricsFromClan } from "../utils/metaMetricsFromClan";
import Card from "./Card";
import MetricGrid from "./MetricGrid";

export default function ClanCard({
  clan,
  search,
  makeSearchable,
  rules,
  currentWeek,
}: {
  clan: IClan;
  search: ISearchParams;
  rules: IRules;
  currentWeek: number;
  makeSearchable: (text: string) => JSX.Element;
}) {
  const { name, rank, mission, adventurers, quests } = clan;
  const adventurerNames = adventurers.map((a, i) => (
    <div key={"aName" + i}>{makeSearchable(a.name)}</div>
  ));
  const questNames = [...new Set(quests.map((q) => q.name))];
  const questTitles = questNames.map((name, i) => (
    <div key={"qName" + i}>{makeSearchable(name)}</div>
  ));
  const metrics = metaMetricsFromClan(clan, currentWeek);

  return (
    <Card
      search={search}
      color="#224433"
      data={clan}
      rank={rank}
      name={name}
      type={CardTypes.Clan}
      research={clan.research}
    >
      <div>
        <b>Adventurers</b>: {adventurerNames}
      </div>
      <div>
        <b>Quests</b>: {questTitles}
      </div>
      <div style={{ padding: "10px" }}>
        <b>Mission</b>: {mission}
      </div>
      <MetricGrid
        metaMetrics={metrics}
        makeSearchable={makeSearchable}
        rules={rules}
      />
    </Card>
  );
}
