import { IClan } from "../types/Clan";
import Card from "./Card";

export default function ClanCard ({clan}: {clan: IClan}){
  const {name, rank, mission, adventurers, quests } = clan 
  const adventurerNames = adventurers.map(a => <div>{a.name}</div>)
  const questTitles = quests.map(q => <div>{q.title}</div>)
  return (
    <Card color = '#224433'>
      <h2>Clan {name}</h2>
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