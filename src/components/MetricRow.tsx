import { IAdventurerQuest } from "../types/Adventurer";
import { formatRuleNameFromMetric, IMetricRow } from "./MetricGrid";


export default function MetricRow (params:{
  quest: IAdventurerQuest,
  emptyRow: IMetricRow 
  makeSearchable: (text: string) => JSX.Element
}){
  const {quest, emptyRow, makeSearchable} = params
  // We spread here to create a shallow copy so our
  // mutations don't affect other rows
  const row: IMetricRow = { 
    ...emptyRow, 
    title: makeSearchable(quest.details.name),
    rank: quest.details.questRank
  }

  quest.metrics.forEach(m => {
    row[formatRuleNameFromMetric(m)] = m.value
  })

  quest.parties.forEach(p => {
    p.metrics.forEach(m =>{
      row[formatRuleNameFromMetric(m)] = m.value
    })
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