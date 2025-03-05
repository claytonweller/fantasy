import { IEnumFilter } from "hooks/useEnumFilterState";
import { IRules } from "../data/getRules";
import { IAdventurer } from "../types/Adventurer";
import { CardTypes } from "../types/Card";
import { IMetricsWithMeta } from "../types/Quest";
import { ISearchParams } from "../types/SearchParams";
import { metaMetricsFromAdventurerQuest } from "../utils/metaMetricsFromAdventurerQuest";
import Card from "./Card";
import MetricGrid from "./MetricGrid";
import { setVisibilityFromFilterState } from "utils/setVisibilityFromFilterState";

export default function AdventurerCard (props: {
  adventurer: IAdventurer, 
  search: ISearchParams, 
  rules: IRules,
  makeSearchable: (text: string) => JSX.Element,
  typeSpecificFilters?: IEnumFilter<string>[]
}){
  const {adventurer, search, rules, makeSearchable, typeSpecificFilters} = props
  const {name, bio, clan, quests, rank, status, races} = adventurer 
  const metaMetrics: IMetricsWithMeta[] = quests.map(quest =>{
    return metaMetricsFromAdventurerQuest({quest})
  })
  const questSection = (
    <MetricGrid 
      metaMetrics={metaMetrics} 
      makeSearchable={makeSearchable}
      rules={rules}
    />
  )
  const formattedStatus = status.length
    ? status.join(', ')
    : 'Normal'

  const isClassMatch = setVisibilityFromFilterState(
    'Class', adventurer.class, typeSpecificFilters
  )
  const isRaceMatch = setVisibilityFromFilterState(
    'Race', races, typeSpecificFilters
  )
  const isStatusMatch = setVisibilityFromFilterState(
    'Status', status, typeSpecificFilters
  )
  
  const isVisible = isClassMatch && isRaceMatch && isStatusMatch
  return (
    <div style={{display: isVisible? 'block': 'none'}}>
      <Card 
        color='#554433' 
        search={search} 
        data={adventurer}
        rank={rank}
        name={name}
        type={CardTypes.Adventurer}
        research={adventurer.research}
      >
        <div>
          <b>Clan</b> :{makeSearchable(clan?.name || 'None')}
        </div>
        <div>
          <b>Status</b>: {formattedStatus}
        </div>
        <div>
          <b>Job (Class)</b>: {adventurer.className} ({adventurer.class})
        </div>
        <div>
          <b>Race(s)</b>: {races.join(', ')}
        </div>
        <div>
          <b>Bio</b>: {bio}
        </div>
        <div>
          <b>Quests</b>: {questSection}
        </div>
      </Card>
    </div>
    
  )
}