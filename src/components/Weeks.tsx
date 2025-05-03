import { IRules } from "../data/getRules";
import { CardTypes } from "../types/Card";
import { ISearchParams } from "../types/SearchParams";
import CardGroup from "./CardGroup";
import { IVillager } from "../types/Villager";
import { IQuest } from "../types/Quest";
import { IAdventurer } from "../types/Adventurer";
import { IClan } from "../types/Clan";
import WeekCard from "./WeekCard";
import { CURRENT_WEEK } from "config";

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

  const weekCards = []
  for (let i = 0; i < CURRENT_WEEK; i++) {
    weekCards.push(
      <WeekCard
        week={i+1}
        key={"WeekCard" + (i+1)}
        villagers={villagers}
        clans={clans}
        quests={quests}
        adventurers={adventurers}
        search={search}
        rules={rules}
        makeSearchable={makeSearchable}
      />
    )
    
  }

  return (
    <div>
      <CardGroup
        cardTypeFilters={cardTypeFilters}
        cardType={CardTypes.Week}
        color="#222244"
      >
        {weekCards}
      </CardGroup>
    </div>
  );
}
