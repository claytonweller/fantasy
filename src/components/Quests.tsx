import { ISearchParams } from "types/SearchParams"
import CardGroup from "./CardGroup"
import { IRules } from "data/getRules"
import { CardTypes } from "types/Card"
import QuestCard from "./QuestCard"
import { getQuests } from "data/getQuests"
import { QuestStatus, QuestTypes } from "types/Quest"
import { useEnumFilterState } from "hooks/useEnumFilterState"

export default function Quests (props: {
  search: ISearchParams, 
  rules: IRules,
  cardTypeFilters: {[key in CardTypes]: boolean}
  makeSearchable: (text: string) => JSX.Element
}){
  const { cardTypeFilters, search, rules, makeSearchable} = props
  const statusFilter = useEnumFilterState(QuestStatus, 'Status')
  const questTypeFilter = useEnumFilterState(QuestTypes, 'QuestType')
  const typeSpecificFilters = [statusFilter, questTypeFilter]
  const quests = getQuests()
  const allQuests = quests.map((q, i) =>{
    return <QuestCard 
      key={`Quest${i}`} 
      quest={q} 
      search={search}
      rules={rules}
      makeSearchable={makeSearchable}
      typeSpecificFilters={typeSpecificFilters}
    />
  })

  return (
    <CardGroup 
      cardType={CardTypes.Quest} 
      color='#402222'
      cardTypeFilters={cardTypeFilters} 
      typeSpecificFilters={typeSpecificFilters}
    >
      {allQuests}
    </CardGroup>

  )
}