import { IAdventurerQuest } from "../types/Adventurer";
import { IDbQuestAdventurerMetric, IDbQuestPartyMetric } from "../types/Quest";
import { Ranks } from "../types/Ranks";
import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter";
import MetricRow from "./MetricRow";


export default function MetricGrid (params:{
  quests: IAdventurerQuest[], 
  makeSearchable: (text: string) => JSX.Element
}){
  const {quests, makeSearchable} = params
  const emptyRow = createEmptyRow(quests)
  const headers = Object.keys(emptyRow).map(key => <th>{capitalizeFirstLetter(key)}</th>)
  const rows = quests.map(q =>{
    return (<MetricRow 
      quest={q} 
      emptyRow={emptyRow}
      makeSearchable={makeSearchable}
    />)
  });
  return (
   <div style={{display: 'flex', justifyContent: 'center'}}>
    <table>
      <thead>
        <tr>
          {headers}
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>

   </div>    
  )
}

function createEmptyRow (quests: IAdventurerQuest[]){
  let emptyRow: IMetricRow = {
    title: 'Default title',
    rank: Ranks.E
  }
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

export interface IMetricRow extends IEmptyMetricRow{
  title: string | JSX.Element
  rank: Ranks | JSX.Element
}

export interface IEmptyMetricRow {
  [columnName: string]: number | string | JSX.Element
}