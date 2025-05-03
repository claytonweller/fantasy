import { ISearchParams } from "types/SearchParams";
import CardGroup from "./CardGroup";
import { IRules } from "data/getRules";
import { CardTypes } from "types/Card";
import QuestCard from "./QuestCard";
import { getQuests } from "data/getQuests";
import { IQuest, QuestClaimType, QuestStatus, QuestTypes } from "types/Quest";
import { useEnumFilterState } from "hooks/useEnumFilterState";

export default function Quests(props: {
  search: ISearchParams;
  rules: IRules;
  cardTypeFilters: { [key in CardTypes]: boolean };
  quests: IQuest[];
  makeSearchable: (text: string) => JSX.Element;
}) {
  const { cardTypeFilters, search, rules, makeSearchable, quests } = props;
  const statusFilter = useEnumFilterState(QuestStatus, "Status");
  const questTypeFilter = useEnumFilterState(QuestTypes, "QuestType");
  const claimTypeFilter = useEnumFilterState(QuestClaimType, "ClaimType");
  const typeSpecificFilters = [statusFilter, questTypeFilter, claimTypeFilter];
  const allQuests = quests.map((q) => {
    return (
      <QuestCard
        key={`Quest${q.id}`}
        quest={q}
        search={search}
        rules={rules}
        makeSearchable={makeSearchable}
        typeSpecificFilters={typeSpecificFilters}
      />
    );
  });

  return (
    <CardGroup
      cardType={CardTypes.Quest}
      color="#402222"
      cardTypeFilters={cardTypeFilters}
      typeSpecificFilters={typeSpecificFilters}
    >
      {allQuests}
    </CardGroup>
  );
}
