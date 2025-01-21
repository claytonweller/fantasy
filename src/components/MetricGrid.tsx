import { IAdventurerQuest } from "../types/Adventurer";
import { IDbQuestAdventurerMetric, IDbQuestPartyMetric } from "../types/Quest";
import { Ranks } from "../types/Ranks";
import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter";
import { sortStringsAlphabetical } from "../utils/sortStringsAlphabetical";
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

  const keys: string[] = quests.map(q =>{
    const {parties} = q

    const personalMetricKeys = q.metrics.map(m => formatRuleNameFromMetric(m))
    let partyMetricKeys: string[] = []
    parties.forEach(p =>{
      const keys = p.metrics.map(m => formatRuleNameFromMetric(m))
      partyMetricKeys = [...partyMetricKeys, ...keys]
    })
    return [...personalMetricKeys, ...partyMetricKeys]
  }).flat()

  const sortedKeys = sortStringsAlphabetical(keys)
  
  let emptyRow: IMetricRow = {
    title: 'Default title',
    rank: Ranks.E,
    ... createEmptyCells(sortedKeys)
  }
  return emptyRow
}

function createEmptyCells(metricKeys: string[]){
  const emptyCells: IEmptyMetricRow = {}
  metricKeys.forEach(mk =>{
    // Right now we're using the metricRuleId to be the columnName
    // In the future when we have custom metric rules will have a name 
    // property which will be human readable.

    emptyCells[mk] = 0
  })
  return emptyCells
}

export function formatRuleNameFromMetric (m: IDbQuestAdventurerMetric | IDbQuestPartyMetric){
  return m.rank
  ? `${m.metricRuleId}(${m.rank})`
  : m.metricRuleId
}

export interface IMetricRow extends IEmptyMetricRow{
  title: string | JSX.Element
  rank: Ranks | JSX.Element
}

export interface IEmptyMetricRow {
  [columnName: string]: number | string | JSX.Element
}