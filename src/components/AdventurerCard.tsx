import { IRules } from "../data/getRules";
import { IAdventurer } from "../types/Adventurer";
import { CardTypes } from "../types/Card";
import { IMetricsWithMeta } from "../types/Quest";
import { ISearchParams } from "../types/SearchParams";
import { metaMetricsFromAdventurerQuest } from "../utils/metaMetricsFromAdventurerQuest";
import Card from "./Card";
import MetricGrid from "./MetricGrid";

export default function AdventurerCard ({adventurer, search, rules, makeSearchable}: {
  adventurer: IAdventurer, 
  search: ISearchParams, 
  rules: IRules,
  makeSearchable: (text: string) => JSX.Element
}){
  const {name, bio, clan, quests, rank, status} = adventurer 
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
  return (
    <Card 
      color='#554433' 
      search={search} 
      data={adventurer}
      rank={rank}
      name={name}
      type={CardTypes.Adventurer}
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
        <b>Bio</b>: {bio}
      </div>
      <div>
        <b>Quests</b>: {questSection}
      </div>
    </Card>
  )
}