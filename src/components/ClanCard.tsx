import { adventurersById } from "data/queries/adventurers";
import { IRules } from "../data/getRules";
import { CardTypes } from "../types/Card";
import { IClan } from "../types/Clan";
import { ISearchParams } from "../types/SearchParams";
import { metaMetricsFromClan } from "../utils/metaMetricsFromClan";
import Card from "./Card";
import MetricGrid from "./MetricGrid";
import { formatAdventurerStatuses } from "data/getAdventurers";

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
  const adventurerNames = adventurers.map((a) => {
    const { currentStatuses } = formatAdventurerStatuses(adventurersById[a.id]);
    const statuses = currentStatuses.length
      ? ` - ${currentStatuses.join(", ")}`
      : "";
    return (
      <div key={"aName" + a.id}>
        {makeSearchable(a.name)} - {a.rank} {statuses}
      </div>
    );
  });
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
