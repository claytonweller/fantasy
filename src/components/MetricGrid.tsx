import { IAdventurerQuest } from "../types/Adventurer";
import { IDbQuestAdventurerMetric, IDbQuestPartyMetric } from "../types/Quest";
import MetricRow from "./MetricRow";


export default function MetricGrid (params:{
  quests: IAdventurerQuest[], 
  makeSearchable: (text: string) => JSX.Element
}){
  const {quests, makeSearchable} = params
  const emptyRow = createEmptyRow(quests)
  
  const rows = quests.map(q =>(
    <div>
      <div>Title: {makeSearchable(q.details.name)}</div>
      <MetricRow quest={q} emptyRow={emptyRow}/>
    </div>

  ));
  return (
   <div>
    {rows}
   </div>    
  )
}

function createEmptyRow (quests: IAdventurerQuest[]){
  let emptyRow: IEmptyMetricRow = {}
  quests.forEach(q =>{
    const {parties} = q
    const personalMetricsCells = createEmptyCells(q.metrics)
    emptyRow = {...emptyRow, ...personalMetricsCells}
    parties.forEach(p =>{
      const partyMetricsCells = createEmptyCells(p.metrics)
      emptyRow = {...emptyRow, ...partyMetricsCells}
    })
  })
  return emptyRow
}

function createEmptyCells(metrics: (IDbQuestAdventurerMetric | IDbQuestPartyMetric)[]){
  const emptyCells: IEmptyMetricRow = {}
  metrics.forEach(m =>{
    // Right now we're using the metricRuleId to be the columnName
    // In the future when we have custom metric rules will have a name 
    // property which will be human readable.
    const ruleName = m.metricRuleId
    emptyCells[ruleName] = 0
  })
  return emptyCells
}

export interface IEmptyMetricRow {
  [columnName: string]: number | string
}