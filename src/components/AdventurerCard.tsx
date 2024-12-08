import { IAdventurer } from "../types/Adventurer";
import Card from "./Card";

export default function AdventurerCard ({adventurer}: {adventurer: IAdventurer}){
  const {name, bio, clanName } = adventurer 
  return (
    <Card color = '#554433'>
      <h2>Adventurer {name}</h2>
      <div>
        <b>Clan</b>: {clanName}
      </div>
      <div>
        <b>Bio</b>: {bio}
      </div>
    </Card>
  )
}