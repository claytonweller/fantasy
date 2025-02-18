import { IRules } from "../data/getRules";
import { IMetricsWithMeta } from "../types/Quest";
import { Ranks } from "../types/Ranks";
import { formatRuleNameFromMetric, IMetricRow } from "./MetricGrid";


export default function MetricRow (params:{
  meta: IMetricsWithMeta,
  emptyRow: IMetricRow,
  rules: IRules,
  makeSearchable: (text: string) => JSX.Element
}){
  const {meta, emptyRow, makeSearchable, rules} = params
  // We spread here to create a shallow copy so our
  // mutations don't affect other rows
  const week = meta.metrics[0]
    ? meta.metrics[0].week
    : 0
  const row: IMetricRow = { 
    ...emptyRow,
    week,
    points: 0, 
    name: makeSearchable(meta.name),
    rank: meta.rank || Ranks.E
  }

  meta.metrics.forEach(m => {
    const pointCalculator = rules.calculators[m.metricRuleId]
    const metricPoints = pointCalculator(m)
    row.points += metricPoints
    row[formatRuleNameFromMetric(m)] = `${m.value}`
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