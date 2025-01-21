import { IAdventurer } from "../types/Adventurer";
import { CardTypes } from "../types/Card";
import { ISearchParams } from "../types/SearchParams";
import Card from "./Card";
import MetricGrid from "./MetricGrid";
import MetricRow from "./MetricRow";

export default function AdventurerCard ({adventurer, search, makeSearchable}: {
  adventurer: IAdventurer, 
  search: ISearchParams, 
  makeSearchable: (text: string) => JSX.Element
}){
  const {name, bio, clan, quests, rank} = adventurer 
  const questSection = (
    <MetricGrid quests={quests} makeSearchable={makeSearchable}/>
  )
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
        <b>Bio</b>: {bio}
      </div>
      <div>
        <b>Quests</b>: {questSection}
      </div>
    </Card>
  )
}