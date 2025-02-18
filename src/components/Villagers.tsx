import { IRules } from "../data/getRules";
import { getVillagers } from "../data/getVillagers";
import { CardTypes } from "../types/Card";
import { ISearchParams } from "../types/SearchParams";
import CardGroup from "./CardGroup";
import VillagerCard from "./VillagerCard";
import { IVillager } from "../types/Villager";
import { combineMetaMetrics } from "../utils/combineMetricsArrays";
import { metaMetricsFromAdventurerQuest } from "../utils/metaMetricsFromAdventurerQuest";
import { IMetricsWithMeta } from "../types/Quest";

export default function Villagers (props: {
  search: ISearchParams, 
  rules: IRules,
  cardTypeFilters: {[key in CardTypes]: boolean}
  makeSearchable: (text: string) => JSX.Element
}){
  const { cardTypeFilters, search, rules, makeSearchable} = props
  const villagers = getVillagers()
  const allVillagers = villagers
    .map((villager) =>{
      const metrics = computeVillagerMetrics({rules, villager})
      return { villager, metrics }
    })
    .sort((a, b) => b.metrics.total - a.metrics.total)
    .map((input) =>{
      return (
        <VillagerCard
          villager={input.villager}
          search={search}
          rules={rules}
          villagerMetrics={input.metrics}
          makeSearchable={makeSearchable}
        />
      )
    })

  return (
    <div>
      <CardGroup
          cardTypeFilters={cardTypeFilters} 
          cardType={CardTypes.Villager} 
          color='#221128'
      >
        {allVillagers}
      </CardGroup>
    </div>

  )
}

function computeVillagerMetrics(props:{rules:IRules, villager: IVillager}){
  const {rules, villager:{rosters}} = props
  const weekly = rosters
    .sort((a, b) => b.week - a.week)
    .map(r =>{
      const metaMetrics:IMetricsWithMeta[] = r.rosterPicks.map((rosterPick) => {
        const {pick, position} = rosterPick
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

  const runningTotal = weekly.reduce((total, props) =>{
    return total + props.total
  }, 0)

  return {
    total: runningTotal,
    weekly
  }
}

export interface IVillagerMetrics {
  total: number;
  weekly: {
    week: number;
    total: number
    metaMetrics: IMetricsWithMeta[];
  }[]
}