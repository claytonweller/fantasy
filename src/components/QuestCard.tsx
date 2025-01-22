import { adventurersById } from "../data/queries/adventurers";
import { CardTypes } from "../types/Card";
import { IQuest } from "../types/Quest";
import { Ranks } from "../types/Ranks";
import { ISearchParams } from "../types/SearchParams";
import { addCommasToNumber } from "../utils/addCommasToNumber";
import { sortByRank } from "../utils/sortByRank";
import Card from "./Card";
import MetricGrid from "./MetricGrid";

export default function QuestCard ({quest, search, makeSearchable}: {
  quest: IQuest, 
  search: ISearchParams
  makeSearchable: (text: string) => JSX.Element
}){
  const {name, reward, postedBy, questType, claimedByName = 'Default', description, questRank, parties } = quest 
  
  const partyComponents = parties.map(p =>{
    const adventurerMetrics = p.adventurers?.map(a => {
      const compositeAdventurer = adventurersById[a.id]
      const questParty = compositeAdventurer.questParties.find(qp => qp.partyId === p.id)
      const metrics = questParty?.metrics.map(m => ({...m, questAdventurerId: 'Placeholder'}))
      return {
        name: a.name,
        rank: a.rank,
        metrics: metrics || []
      }
    }) || []
    const highestAdventurerRank = sortByRank(p.adventurers)[0]?.rank || Ranks.E
   
    const partyMetrics = {
      name: 'Party',
      rank: highestAdventurerRank,
      metrics: p.metrics.map(m => ({...m, questPartyId: 'Placeholder'}))
    }
    const metaMetrics = [
      partyMetrics, 
      ...adventurerMetrics
    ]
    return(
      <div style={{
        border: 'rgb(50, 0, 0)', 
        borderStyle: 'solid', 
        padding: '5px',
        margin: '5px'
      }}>
        <div>
          <div>Status: {p.status}</div>
          <MetricGrid metaMetrics={metaMetrics} makeSearchable={makeSearchable}/>
        </div>
      </div>
    )
  })
  return (
    <Card 
      color='#552211' 
      search={search}
      rank={questRank}
      data={quest}
      type={CardTypes.Quest}
      name={name}
    >
      <div>
        <b>Reward</b>: {addCommasToNumber(reward)}
      </div>
      <div>
        <b>Posted By</b>: {makeSearchable(postedBy)}
      </div>
      <div>
        <b>Quest Type</b>: {questType}
      </div>
      <div>
        <b>Rank</b>: {questRank}
      </div>
      <div>
        <b>Claimed by</b>: {makeSearchable(claimedByName)}
      </div>
      <div>
        {partyComponents}
      </div>
      <div>
        <b>Description</b>: {description}
      </div>
    </Card>
  )
}