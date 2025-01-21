import { IAdventurerQuest } from "../types/Adventurer";
import { Ranks } from "../types/Ranks";
import { IEmptyMetricRow } from "./MetricGrid";


export default function MetricRow (params:{
  quest: IAdventurerQuest,
  emptyRow: IEmptyMetricRow 
}){
  const {quest, emptyRow} = params
  const {name: title, questRank: rank} = quest.details
  const row: IEmptyMetricRow & {title: string, rank: Ranks} = {
    title,
    rank,
    ...emptyRow
  }

  quest.metrics.forEach(m => {
    row[m.metricRuleId] = m.value
  })

  quest.parties.forEach(p => {
    p.metrics.forEach(m =>{
      row[m.metricRuleId] = m.value
    })
  })

  
  return (
   <div>
    {JSON.stringify(row)}
   </div>    
  )
}