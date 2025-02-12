import { IRules } from "../data/getRules";
import { questsByAdventurerId, questsById } from "../data/queries/quests";
import { CardTypes } from "../types/Card";
import { IClan } from "../types/Clan";
import { IMetricsWithMeta, MetricRuleId, QuestStatus } from "../types/Quest";
import { ISearchParams } from "../types/SearchParams";
import Card from "./Card";
import MetricGrid from "./MetricGrid";

export default function ClanCard ({clan, search, makeSearchable, rules}: {
  clan: IClan, 
  search: ISearchParams,
  rules: IRules,
  makeSearchable: (text: string) => JSX.Element
}){
  const {name, rank, mission, adventurers, quests } = clan 
  const adventurerNames = adventurers.map(a => <div>{makeSearchable(a.name)}</div>)
  const questTitles = quests.map(q => <div>{makeSearchable(q.name)}</div>)
  const activeAdventurers = adventurers.filter(a =>{
    const quests = questsByAdventurerId[a.id]
    return quests.length > 0
  })
  const completeQuests = quests.filter(q =>{
    const parties = questsById[q.id].parties
    const clanParties = parties.filter(p => p.clanId === clan.id)
    const complete = clanParties.find(p => p.status === QuestStatus.Success)
    return !!complete
  })
  const metrics: IMetricsWithMeta[] = [
    {
      name: 'Week1',
      rank: clan.rank,
      metrics:[
        {
          metricRuleId: MetricRuleId.QuestsAccepted,
          value: quests.length,
          week: 1,
        },
        {
          metricRuleId: MetricRuleId.QuestsComplete,
          value: completeQuests.length,
          week: 1,

        },
        {
          metricRuleId: MetricRuleId.ActiveMembers,
          value: activeAdventurers.length,
          week: 1,
        },
        {
          metricRuleId: MetricRuleId.InactiveMembers,
          value: adventurers.length - activeAdventurers.length,
          week: 1,

        },
      ]
   }
  ]
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