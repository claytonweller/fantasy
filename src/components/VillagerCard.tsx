import { IRules } from "../data/getRules";
import { IAdventurer, IAdventurerQuest } from "../types/Adventurer";
import { CardTypes } from "../types/Card";
import { IMetricsWithMeta } from "../types/Quest";
import { Ranks } from "../types/Ranks";
import { ISearchParams } from "../types/SearchParams";
import { IVillager } from "../types/Villager";
import Card from "./Card";
import MetricGrid from "./MetricGrid";

export default function VillagerCard ({villager, search, rules, makeSearchable}: {
  villager: IVillager, 
  search: ISearchParams, 
  rules: IRules,
  makeSearchable: (text: string) => JSX.Element
}){
  const {name} = villager 
  return (
    <Card 
      color='#554433' 
      search={search} 
      data={villager}
      rank={Ranks.A}
      name={name}
      type={CardTypes.Villager}
    >
      <div>
        <b>Note</b> : Nothing much
      </div>
    </Card>
  )
}