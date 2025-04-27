import { IEnumFilter } from "hooks/useEnumFilterState";
import { IRules } from "../data/getRules";
import {
  ActivityStates,
  AdventurerStatuses,
  IAdventurer,
} from "../types/Adventurer";
import { CardTypes } from "../types/Card";
import { IMetricsWithMeta } from "../types/Quest";
import { ISearchParams } from "../types/SearchParams";
import { metaMetricsFromAdventurerQuest } from "../utils/metaMetricsFromAdventurerQuest";
import Card from "./Card";
import MetricGrid from "./MetricGrid";
import { setVisibilityFromFilterState } from "utils/setVisibilityFromFilterState";

export default function AdventurerCard(props: {
  adventurer: IAdventurer;
  search: ISearchParams;
  rules: IRules;
  makeSearchable: (text: string) => JSX.Element;
  currentWeek: number;
  typeSpecificFilters?: IEnumFilter<string>[];
}) {
  const {
    adventurer,
    search,
    rules,
    makeSearchable,
    currentWeek,
    typeSpecificFilters,
  } = props;
  const { name, bio, clan, quests, rank, currentStatuses, races } = adventurer;
  const metaMetrics: IMetricsWithMeta[] = quests.map((quest) => {
    
    return metaMetricsFromAdventurerQuest({ quest, week: quest.parties[0].startWeek });
  });
  const questSection = (
    <MetricGrid
      metaMetrics={metaMetrics}
      makeSearchable={makeSearchable}
      rules={rules}
    />
  );

  const formattedStatus = currentStatuses.length
    ? currentStatuses.join(", ")
    : "Normal";

  const activityFilter = typeSpecificFilters?.find(
    (f) => f.name === "Activity",
  );
  let isActivityMatch = false;
  if (activityFilter) {
    const activeThisWeek = adventurer.lastActiveWeek === currentWeek;
    const lookingForActiveThisWeek =
      activityFilter.state[ActivityStates.ActiveThisWeek];
    const lookingForInactiveThisWeek =
      activityFilter.state[ActivityStates.InactiveThisWeek];
    isActivityMatch =
      (activeThisWeek && lookingForActiveThisWeek) ||
      (!activeThisWeek && lookingForInactiveThisWeek);
  }
  const isClassMatch = setVisibilityFromFilterState(
    "Class",
    adventurer.class,
    typeSpecificFilters,
  );
  const isRaceMatch = setVisibilityFromFilterState(
    "Race",
    races,
    typeSpecificFilters,
  );
  const isStatusMatch = setVisibilityFromFilterState(
    "Status",
    currentStatuses,
    typeSpecificFilters,
  );

  const isVisible =
    isClassMatch && isRaceMatch && isStatusMatch && isActivityMatch;
  const expired = !!adventurer.currentStatuses.includes(
    AdventurerStatuses.Dead,
  );

  // We do this so the search function doesn't eventually return all
  // Adventurers for ever query
  const reducedQuests = quests.map((q) => {
    return {
      ...q,
      parties: undefined,
      details: { ...q.details, parties: undefined },
    };
  });

  return (
    <div style={{ display: isVisible ? "block" : "none" }}>
      <Card
        color="#554433"
        search={search}
        data={{ ...adventurer, quests: reducedQuests }}
        rank={rank}
        name={name}
        type={CardTypes.Adventurer}
        research={adventurer.research}
        expired={expired}
      >
        <div>
          <b>Clan</b>: {makeSearchable(clan?.name || "None")}
        </div>
        <div>
          <b>Status</b>: {formattedStatus}
        </div>
        <div>
          <b>Job (Class)</b>: {adventurer.className} ({adventurer.class})
        </div>
        <div>
          <b>Race(s)</b>: {races.join(", ")}
        </div>
        <div>
          <b>Bio</b>: {bio}
        </div>
        <div>
          <b>Quests</b>: {questSection}
        </div>
      </Card>
    </div>
  );
}
