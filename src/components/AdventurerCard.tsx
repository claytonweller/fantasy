import { IAdventurer } from "../types/Adventurer";
import { CardTypes } from "../types/Card";
import { ISearchParams } from "../types/SearchParams";
import Card from "./Card";

export default function AdventurerCard ({adventurer, search}: {
  adventurer: IAdventurer, 
  search: ISearchParams, 
}){
  const {name, bio, clan, quests, rank} = adventurer 
  const questTitles = quests?.map(a => <div>{a.name}</div>)
  
  return (
    <Card 
      color='#554433' 
      search={search} 
      data={adventurer}
      rank={rank}
      name={name}
      type={CardTypes.Adventurer}
    >
      <div>
        <b>Clan</b>: {clan?.name || 'None'}
      </div>
      <div>
        <b>Quests</b>: {questTitles}
      </div>
      <div>
        <b>Bio</b>: {bio}
      </div>
    </Card>
  )
}