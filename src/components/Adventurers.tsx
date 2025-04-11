import { getAdventurers } from "data/getAdventurers"
import { IRules } from "data/getRules"
import { CardTypes } from "types/Card"
import { ISearchParams } from "types/SearchParams"
import AdventurerCard from "./AdventurerCard"
import CardGroup from "./CardGroup"
import { useEnumFilterState } from "hooks/useEnumFilterState"
import { ActivityStates, AdventurerClasses, AdventurerRaces, AdventurerStatuses } from "types/Adventurer"

export default function Adventurers(props: {
  search: ISearchParams, 
  rules: IRules,
  cardTypeFilters: {[key in CardTypes]: boolean}
  currentWeek: number,
  makeSearchable: (text: string) => JSX.Element
}){
  const { cardTypeFilters, search, rules, currentWeek, makeSearchable} = props
  const raceFilter = useEnumFilterState(AdventurerRaces, 'Race')
  const classFilter = useEnumFilterState(AdventurerClasses, 'Class')
  const statusFilter = useEnumFilterState(AdventurerStatuses, 'Status', true)
  const activeFilter = useEnumFilterState(ActivityStates, 'Activity')
  const typeSpecificFilters = [raceFilter, classFilter, statusFilter, activeFilter]
  const adventurers = getAdventurers()
  const allAdventurers = adventurers.map((a, i) =>{
    return <AdventurerCard 
    key={`Adv${i}`}
    adventurer={a} 
    search={search}
    makeSearchable={makeSearchable} 
    rules={rules}
    typeSpecificFilters={typeSpecificFilters}
    currentWeek={currentWeek}
  />
  })

  return (
    <CardGroup 
      cardType={CardTypes.Adventurer} 
      color='#332620'
      cardTypeFilters={cardTypeFilters}
      typeSpecificFilters={typeSpecificFilters}
    >
      {allAdventurers}
    </CardGroup>

  )
}

