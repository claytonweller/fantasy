import { IDbAdventurer } from "./Adventurer"
import { IQuest } from "./Quest"
import { Ranks } from "./Ranks"
import { IResearch } from "./Research"

export interface IClan extends IDbClan{
  adventurers: IDbAdventurer[]
  quests: IQuest[]
  research: IResearch[]
}

export interface IDbClan {
  id: string
  name: string
  rank: Ranks
  mission: string
}
