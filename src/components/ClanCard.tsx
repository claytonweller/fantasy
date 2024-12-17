import { CardTypes } from "../types/Card";
import { IClan } from "../types/Clan";
import { ISearchParams } from "../types/SearchParams";
import Card from "./Card";

export default function ClanCard ({clan, search, makeSearchable}: {
  clan: IClan, 
  search: ISearchParams
  makeSearchable: (text: string) => JSX.Element
}){
  const {name, rank, mission, adventurers, quests } = clan 
  const adventurerNames = adventurers.map(a => <div>{makeSearchable(a.name)}</div>)
  const questTitles = quests.map(q => <div>{makeSearchable(q.name)}</div>)
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
      <div>
        <b>Mission</b>: {mission}
      </div>
    </Card>
  )
}