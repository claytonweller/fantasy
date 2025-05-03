import { IRules } from "../data/getRules";
import { CardTypes } from "../types/Card";
import { ISearchParams } from "../types/SearchParams";
import CardGroup from "./CardGroup";
import { IVillager } from "../types/Villager";
import { IQuest } from "../types/Quest";
import { IAdventurer } from "../types/Adventurer";
import { IClan } from "../types/Clan";
import WeekCard from "./WeekCard";

export default function Weeks(props: {
  villagers: IVillager[];
  clans: IClan[];
  adventurers: IAdventurer[];
  quests: IQuest[];
  rules: IRules;
  search: ISearchParams;
  cardTypeFilters: { [key in CardTypes]: boolean };
  makeSearchable: (text: string) => JSX.Element;
}) {
  const {
    villagers,
    clans,
    quests,
    adventurers,
    search,
    rules,
    cardTypeFilters,
    makeSearchable,
  } = props;

  return (
    <div>
      <CardGroup
        cardTypeFilters={cardTypeFilters}
        cardType={CardTypes.Week}
        color="#222244"
      >
        <WeekCard
          week={1}
          key={"WeekCard" + 1}
          villagers={villagers}
          clans={clans}
          quests={quests}
          adventurers={adventurers}
          search={search}
          rules={rules}
          makeSearchable={makeSearchable}
        />
      </CardGroup>
    </div>
  );
}
