import { IMetricsWithMeta } from "../types/Quest";
import { Ranks } from "../types/Ranks";
import { formatRuleNameFromMetric, IMetricRow } from "./MetricGrid";


export default function MetricRow (params:{
  meta: IMetricsWithMeta,
  emptyRow: IMetricRow 
  makeSearchable: (text: string) => JSX.Element
}){
  const {meta, emptyRow, makeSearchable} = params
  // We spread here to create a shallow copy so our
  // mutations don't affect other rows
  const row: IMetricRow = { 
    ...emptyRow, 
    name: makeSearchable(meta.name),
    rank: meta.rank || Ranks.E
  }

  meta.metrics.forEach(m => {
    row[formatRuleNameFromMetric(m)] = m.value
  })

  const cells = Object.values(row).map(value =>{
    return (
      <td>{value}</td>
    )
  })
  
  return (
    <tr>
      {cells}
    </tr>
  )
}