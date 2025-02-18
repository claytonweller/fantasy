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
import { IAdventurer } from "../types/Adventurer";
import { IRoster, RosterPositions } from "../types/Roster";
import { metaMetricsFromClan } from "../utils/metaMetricsFromClan";
import { IClan } from "../types/Clan";

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
    .map((input, i) =>{
      return (
        <VillagerCard
          key={'VCard' + i}
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
        if(pick.adventurer) {
          return calculateAdventurerPickMetrics(pick.adventurer, position, r.week);
        } 
        if(pick.clan) return calculateClanPickMetrics(pick.clan, r.week)
        return {
          name: 'clan',
          rank: RosterPositions.Clan,
          metrics:[]
        }
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

function calculateClanPickMetrics (clan: IClan, week: number) {
  const clanMetrics = metaMetricsFromClan(clan, week)
  const weekMetrics = clanMetrics.filter(cm => {
    return cm.metrics.find(m => m.week === week)
  })
  return {
    name: clan.name,
    rank: RosterPositions.Clan,
    metrics: weekMetrics[0].metrics
  } 
}

function calculateAdventurerPickMetrics (
  adventurer: IAdventurer, 
  position: RosterPositions, 
  week: number
){
  const all = adventurer.quests.map(q =>{
    return metaMetricsFromAdventurerQuest({
      name: adventurer.name,
      rank: position,
      quest: q,
      week
    })
  })
  return combineMetaMetrics(all)
}

export interface IVillagerMetrics {
  total: number;
  weekly: {
    week: number;
    total: number
    metaMetrics: IMetricsWithMeta[];
  }[]
}