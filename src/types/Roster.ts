import { IAdventurer } from "./Adventurer"
import { IDbClan } from "./Clan"
import { IDbQuest } from "./Quest"
import { Ranks } from "./Ranks"

export interface IDbRoster {
  id: string
  villagerId: string
  week: number
}

export interface IDbRosterPick {
  id: string
  rosterId: string
  pickId: string
  pickType: RosterPickTypes
  position: RosterPositions
}

export enum RosterPickTypes {
  Clan = 'Clan',
  Adventurer = 'Adventurer'
} 

// Currently this is hard coded for the MVP version
// In the future we probably want to the roster layout to
// vary depending upon the league/season and possibly custom setups
export enum RosterPositions {
  Clan = 'Clan',
  A = "A",
  B1 = "B1",
  B2 = "B2",
  C1 = "C1",
  C2 = "C2",
  C3 = "C3",
}

export interface IRosterPick extends IDbRosterPick {
  pick: IAdventurer 
  // pick: IAdventurer | IDbClan
  pickQuests: IDbQuest[]
}

export interface IRoster extends IDbRoster{
  rosterPicks: IRosterPick[]
}