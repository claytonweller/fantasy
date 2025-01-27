import { IAdventurer, IAdventurerQuest } from "../types/Adventurer";
import { CardTypes } from "../types/Card";
import { IMetricsWithMeta } from "../types/Quest";
import { ISearchParams } from "../types/SearchParams";
import Card from "./Card";
import MetricGrid from "./MetricGrid";

export default function AdventurerCard ({adventurer, search, makeSearchable}: {
  adventurer: IAdventurer, 
  search: ISearchParams, 
  makeSearchable: (text: string) => JSX.Element
}){
  const {name, bio, clan, quests, rank} = adventurer 
  const metaMetrics: IMetricsWithMeta[] = quests.map(q =>{
    return metaMetricsFromAdventurerQuest(q)
  })
  const questSection = (
    <MetricGrid metaMetrics={metaMetrics} makeSearchable={makeSearchable}/>
  )
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
        <b>Bio</b>: {bio}
      </div>
      <div>
        <b>Quests</b>: {questSection}
      </div>
    </Card>
  )
}

function metaMetricsFromAdventurerQuest(q: IAdventurerQuest){
  const personalMetrics = q.metrics
  const partyMetrics = q.parties
    .filter(p => p.questId === q.details.id)
    .map(p => p.metrics)
    .flat()
  return {
    name: q.details.name,
    rank: q.details.questRank,
    metrics: [...personalMetrics, ...partyMetrics]
  }
}