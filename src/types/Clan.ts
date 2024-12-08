import { IDbAdventurer } from "./Adventurer"
import { IDbQuest } from "./Quest"
import { Ranks } from "./Ranks"

export interface IClan extends IDbClan{
  adventurers: IDbAdventurer[]
  quests: IDbQuest[]
}

export interface IDbClan {
  id: string
  name: string
  rank: Ranks
  mission: string
}
