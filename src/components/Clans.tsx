import { IRules } from "data/getRules";
import { CardTypes } from "types/Card";
import { ISearchParams } from "types/SearchParams";
import CardGroup from "./CardGroup";
import { getClans } from "data/getClans";
import ClanCard from "./ClanCard";
import { IClan } from "types/Clan";

export default function Clans(props: {
  search: ISearchParams;
  rules: IRules;
  cardTypeFilters: { [key in CardTypes]: boolean };
  clans: IClan[];
  makeSearchable: (text: string) => JSX.Element;
  currentWeek: number;
}) {
  const { cardTypeFilters, search, rules, makeSearchable, currentWeek, clans } =
    props;

  const allClans = clans.map((c) => {
    return (
      <ClanCard
        key={`Clan${c.id}`}
        clan={c}
        search={search}
        currentWeek={currentWeek}
        rules={rules}
        makeSearchable={makeSearchable}
      />
    );
  });

  return (
    <CardGroup
      cardTypeFilters={cardTypeFilters}
      cardType={CardTypes.Clan}
      color="#223322"
    >
      {allClans}
    </CardGroup>
  );
}
