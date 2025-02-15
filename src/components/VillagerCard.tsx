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
  const roster = rosters[0]
  const metaTest:IMetricsWithMeta[] = roster.rosterPicks.map((test) => {
    const {pick, position} = test
    const all = pick.quests.map(q =>{
      return metaMetricsFromAdventurerQuest({
        name: pick.name,
        rank: position,
        quest: q,
        week: roster.week
      })
    })
    
    return combineMetaMetrics(all)
    
  })

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
        <b>Note</b> : Nothing much
      </div>
      <div>
        <h3>Week ___ Roster</h3>
        <MetricGrid 
            metaMetrics={metaTest} 
            makeSearchable={makeSearchable}
            rules= {rules}
          />
      </div>
    </Card>
  )
}