import { CardTypes } from "../types/Card";
import { IClan } from "../types/Clan";
import Card from "./Card";

export default function ClanCard ({clan, search}: {clan: IClan, search: {searchText: string}}){
  const {name, rank, mission, adventurers, quests } = clan 
  const adventurerNames = adventurers.map(a => <div>{a.name}</div>)
  const questTitles = quests.map(q => <div>{q.name}</div>)
  return (
    <Card 
      search={search} 
      color='#224433' 
      data={clan}
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