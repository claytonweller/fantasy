import { IRules } from "../data/getRules";
import {  questsById } from "../data/queries/quests";
import { IDbAdventurer } from "../types/Adventurer";
import { CardTypes } from "../types/Card";
import { IClan } from "../types/Clan";
import { IDbQuest, IMetricsWithMeta, IQuest, MetricRuleId, QuestStatus } from "../types/Quest";
import { ISearchParams } from "../types/SearchParams";
import Card from "./Card";
import MetricGrid from "./MetricGrid";

export default function ClanCard ({clan, search, makeSearchable, rules, currentWeek}: {
  clan: IClan, 
  search: ISearchParams,
  rules: IRules,
  currentWeek: number,
  makeSearchable: (text: string) => JSX.Element
}){
  const {name, rank, mission, adventurers, quests } = clan 
  const adventurerNames = adventurers.map(a => <div>{makeSearchable(a.name)}</div>)
  const questNames = [...new Set(quests.map(q => q.name))]
  const questTitles = questNames.map(name => <div>{makeSearchable(name)}</div>)
  const metrics = calculateWeeklyMetrics(clan, currentWeek)

  return (
    <Card 
      search={search} 
      color='#224433' 
      data={clan}
      rank={rank}
      name={name}
      type={CardTypes.Clan}
    >
      <div>
        <b>Rank</b>: {rank}
      </div>
      <div>
        <b>Adventurers</b>: {adventurerNames}
      </div>
      <div>
        <b>Quests</b>: {questTitles}
      </div>
      <MetricGrid 
        metaMetrics={metrics} 
        makeSearchable={makeSearchable} 
        rules={rules}
      />
      <div>
        <b>Mission</b>: {mission}
      </div>
    </Card>
  )
}
function calculateWeeklyMetrics(clan: IClan, currentWeek: number){
  const {quests} = clan
  const sortedQuests = sortQuestsByWeek({currentWeek, quests})
  
  const metrics: IMetricsWithMeta[] = Object.entries(sortedQuests).map(([week, quests])=>{
    return calculateSingleWeekMetrics({week: Number(week), clan, quests})
  })

  return metrics
}

function sortQuestsByWeek(params:{
  currentWeek: number,
  quests: IQuest[]
}){
  const {currentWeek, quests} = params
  const weeks:{
    [week: number]: IQuest[]
  } = {}
  for (let i = 1; i <= currentWeek; i++) {
    weeks[i] = []
  }

  quests.forEach(q => {
    q.parties.forEach(p =>{
      weeks[p.startWeek].push(q)
    })
  })

  return weeks
}



function calculateSingleWeekMetrics (params:{
  week: number, 
  clan: IClan, 
  quests:IQuest[], 
}){
  const {week, clan, quests} = params
  const {adventurers, rank} = clan
  const completeQuests = quests.filter(q =>{
    const parties = questsById[q.id].parties
    const clanParties = parties.filter(p => p.clanId === clan.id)
    const complete = clanParties.find(p => p.status === QuestStatus.Success)
    return !!complete
  })

  const activeAdventurers: Set<string> = new Set()
  quests.forEach( q =>{
    q.parties?.forEach( p =>{
      p.adventurers?.forEach( a =>{
        activeAdventurers.add(a.id)
      })
    })
  })
  return {
    name: 'Week'+week,
    rank,
    metrics:[
      {
        metricRuleId: MetricRuleId.QuestsAccepted,
        value: quests.length,
        week,
      },
      {
        metricRuleId: MetricRuleId.QuestsComplete,
        value: completeQuests.length,
        week,

      },
      {
        metricRuleId: MetricRuleId.ActiveMembers,
        value: activeAdventurers.size,
        week,
      },
      {
        metricRuleId: MetricRuleId.InactiveMembers,
        value: adventurers.length - activeAdventurers.size,
        week,
      },
    ]
 }
}