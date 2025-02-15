import { IRules } from "../data/getRules";
import { CardTypes } from "../types/Card";
import { IMetricsWithMeta } from "../types/Quest";
import { Ranks } from "../types/Ranks";
import { ISearchParams } from "../types/SearchParams";
import { IVillager } from "../types/Villager";
import { combineMetaMetrics } from "../utils/combineMetricsArrays";
import { metaMetricsFromAdventurerQuest } from "../utils/metaMetricsFromAdventurerQuest";
import Card from "./Card";
import MetricGrid from "./MetricGrid";

export default function VillagerCard ({villager, search, rules, currentWeek, makeSearchable}: {
  villager: IVillager, 
  search: ISearchParams, 
  rules: IRules,
  currentWeek: number,
  makeSearchable: (text: string) => JSX.Element
}){
  const {name, rosters} = villager
  const currentRoster = rosters.find(r => r.week === currentWeek)
  // TODO separate by week
  const weeklyProps = rosters
    .sort((a, b) => b.week - a.week)
    .map(r =>{
    const metaMetrics:IMetricsWithMeta[] = r.rosterPicks.map((test) => {
      const {pick, position} = test
      const all = pick.quests.map(q =>{
        return metaMetricsFromAdventurerQuest({
          name: pick.name,
          rank: position,
          quest: q,
          week: r.week
        })
      })
      
      return combineMetaMetrics(all)
      
    })
    const total = metaMetrics.reduce((tot, mm) =>{
      let subTotal = 0
      mm.metrics.forEach(m => {
        const pointCalculator = rules.calculators[m.metricRuleId]
        const metricPoints = pointCalculator(m)
        subTotal += metricPoints
      })
      return tot + subTotal
    }, 0)
    return  {
      total,
      week: r.week,
      metaMetrics
    }  
  })

  const weeklyRosters = weeklyProps.map(p =>{
    return formatRoster({...p, makeSearchable, rules})
  })

  const runningTotal = weeklyProps.reduce((total, props) =>{
    return total + props.total
  }, 0)

  return (
    <Card 
      color='#332233' 
      search={search} 
      data={villager}
      rank={Ranks.A}
      name={name}
      type={CardTypes.Villager}
    >
      <div>
        <b>Running Total : {runningTotal}</b>
      </div>
      {weeklyRosters}
    </Card>
  )
}

function formatRoster (params:{
  week: number
  metaMetrics: IMetricsWithMeta[]
  rules: IRules,
  total: number,
  makeSearchable: (text: string) => JSX.Element
}) {
  const {week, metaMetrics, rules, total, makeSearchable} = params
  return  (
    <div>
      <h3>Week {week} Roster</h3>
      <div><b>Weekly Total {total}</b></div>
      <MetricGrid 
          metaMetrics={metaMetrics} 
          makeSearchable={makeSearchable}
          rules= {rules}
        />
    </div>
  )   
}