import { IAdventurer } from "../types/Adventurer";
import { CardTypes } from "../types/Card";
import { ISearchParams } from "../types/SearchParams";
import Card from "./Card";

export default function AdventurerCard ({adventurer, search, makeSearchable}: {
  adventurer: IAdventurer, 
  search: ISearchParams, 
  makeSearchable: (text: string) => JSX.Element
}){
  const {name, bio, clan, quests, rank} = adventurer 
  const questTitles = quests?.map(q => <div>{makeSearchable(q.details.name)}</div>)
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
        <b>Clan</b> :{makeSearchable(clan?.name || 'None')}
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