import { IAdventurer } from "../types/Adventurer";
import { CardTypes } from "../types/Card";
import Card from "./Card";

export default function AdventurerCard ({adventurer, search}: {adventurer: IAdventurer, search: {searchText: string}}){
  const {name, bio, clan, quests} = adventurer 
  const questTitles = quests?.map(a => <div>{a.name}</div>)
  
  return (
    <Card 
      color='#554433' 
      search={search} 
      data={adventurer}
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