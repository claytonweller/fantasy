import { IMetricsWithMeta, IMetric } from "../types/Quest";
import { Ranks } from "../types/Ranks";
import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter";
import { sortStringsAlphabetical } from "../utils/sortStringsAlphabetical";
import MetricRow from "./MetricRow";


export default function MetricGrid (params:{
  metaMetrics: IMetricsWithMeta[], 
  makeSearchable: (text: string) => JSX.Element
}){
  const {metaMetrics, makeSearchable} = params
  const emptyRow = createEmptyRow(metaMetrics)
  const headers = Object.keys(emptyRow).map(key => <th>{capitalizeFirstLetter(key)}</th>)
  const rows = metaMetrics.map(m =>{
    return (<MetricRow 
      meta={m} 
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

function createEmptyRow (metrics: IMetricsWithMeta[]){
  const ruleNames: string[] = metrics.map(meta =>{
    const names = meta.metrics.map(m => formatRuleNameFromMetric(m))
    return names
  }).flat()

  const sortedNames = sortStringsAlphabetical(ruleNames)
  
  let emptyRow: IMetricRow = {
    name: 'Default title',
    rank: Ranks.E,
    ...createEmptyCells(sortedNames)
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

export function formatRuleNameFromMetric (m: IMetric){
  return m.rank
  ? `${m.metricRuleId}(${m.rank})`
  : m.metricRuleId
}

export interface IMetricRow extends IEmptyMetricRow{
  name: string | JSX.Element
  rank: Ranks | JSX.Element
}

export interface IEmptyMetricRow {
  [columnName: string]: number | string | JSX.Element
}