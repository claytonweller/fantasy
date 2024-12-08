import { IQuest } from "../types/Quest";
import { addCommasToNumber } from "../utils/addCommasToNumber";
import Card from "./Card";

export default function QuestCard ({quest}: {quest: IQuest}){
  const {title, reward, postedBy, questType, claimedByName, description, questRank, adventurers } = quest 
  const adventurerNames = adventurers?.map(a => <div>{a.name}</div>)
  return (
    <Card color = '#442211'>
      <h2>Quest: {title}</h2>
      <div>
        <b>Reward</b>: {addCommasToNumber(reward)}
      </div>
      <div>
        <b>Posted By</b>: {postedBy}
      </div>
      <div>
        <b>Quest Type</b>: {questType}
      </div>
      <div>
        <b>Rank</b>: {questRank}
      </div>
      <div>
        <b>Claimed by</b>: { claimedByName}
      </div>
      <div>
        <b>Adventurers</b>: { adventurerNames}
      </div>
      <div>
        <b>Description</b>: {description}
      </div>
    </Card>
  )
}