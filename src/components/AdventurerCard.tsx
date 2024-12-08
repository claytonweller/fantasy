import { IAdventurer } from "../types/Adventurer";
import Card from "./Card";

export default function AdventurerCard ({adventurer}: {adventurer: IAdventurer}){
  const {name, bio, clanName, quests} = adventurer 
  const questTitles = quests?.map(a => <div>{a.title}</div>)
  
  return (
    <Card color = '#554433'>
      <h2>Adventurer {name}</h2>
      <div>
        <b>Clan</b>: {clanName}
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