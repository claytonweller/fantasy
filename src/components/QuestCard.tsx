import { IEnumFilter } from "hooks/useEnumFilterState";
import { IRules } from "../data/getRules";
import { adventurersById } from "../data/queries/adventurers";
import { CardTypes } from "../types/Card";
import { IQuest } from "../types/Quest";
import { Ranks } from "../types/Ranks";
import { ISearchParams } from "../types/SearchParams";
import { addCommasToNumber } from "../utils/addCommasToNumber";
import { sortByRank } from "../utils/sortByRank";
import Card from "./Card";
import MetricGrid from "./MetricGrid";
import { setVisibilityFromFilterState } from "utils/setVisibilityFromFilterState";

export default function QuestCard (props: {
  quest: IQuest, 
  search: ISearchParams
  rules: IRules
  makeSearchable: (text: string) => JSX.Element
  typeSpecificFilters?: IEnumFilter<string>[]
}){
  const {quest, search, makeSearchable, rules, typeSpecificFilters} = props
  const {
    name, 
    reward, 
    postedBy, 
    questType, 
    claimedByName = 'Default', 
    description, 
    questRank, 
    status
  } = quest 
  
  const partyComponents = createPartyComponents({quest, rules, makeSearchable})
  const isQuestTypeMatch = setVisibilityFromFilterState(
    'QuestType', questType, typeSpecificFilters
  )
  const isStatusMatch = setVisibilityFromFilterState(
    'Status', status, typeSpecificFilters
  )

  const isVisible = isStatusMatch && isQuestTypeMatch

  return (
    <div style={{display: isVisible? 'block': 'none'}}>

    <Card 
      color='#552211' 
      search={search}
      rank={questRank}
      data={quest}
      type={CardTypes.Quest}
      name={name}
      research={quest.research}
    >
      <div>
        <b>Reward</b>: {addCommasToNumber(reward)}g
      </div>
      <div>
        <b>Posted By</b>: {makeSearchable(postedBy)}
      </div>
      <div>
        <b>Quest Type</b>: {questType} ({quest.claimType})
      </div>
      <div>
        <b>Status</b>: {quest.status}
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
    
    </div>
  )
}

function createPartyComponents(params:{
  quest: IQuest, 
  rules: IRules
  makeSearchable: (text: string) => JSX.Element
}){
  const {quest,  makeSearchable, rules} = params
  const {
    parties, 
  } = quest 
  return  parties.map((p,i) =>{
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
    const notes = p.notes
      ?  <div>Notes: {p.notes}</div>
      : ''
    return(
      <div 
        key={'Party'+i}
        style={{
          border: 'rgb(50, 0, 0)', 
          borderStyle: 'solid', 
          padding: '5px',
          margin: '5px'
       }
      }>
        <div>
          <div>Status: {p.status}</div>
         {notes}
          <MetricGrid 
            metaMetrics={metaMetrics} 
            makeSearchable={makeSearchable}
            rules= {rules}
          />
        </div>
      </div>
    )
  })
}