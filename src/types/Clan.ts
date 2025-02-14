import { IDbAdventurer } from "./Adventurer"
import { IQuest } from "./Quest"
import { Ranks } from "./Ranks"

export interface IClan extends IDbClan{
  adventurers: IDbAdventurer[]
  quests: IQuest[]
}

export interface IDbClan {
  id: string
  name: string
  rank: Ranks
  mission: string
}
