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
  // Clan = 'Clan',
  A = Ranks.A,
  B1 = Ranks.B,
  B2 = Ranks.B,
  C1 = Ranks.C,
  C2 = Ranks.C,
  C3 = Ranks.C,
}

export interface IRosterPick extends IDbRosterPick {
  pick: IAdventurer 
  // pick: IAdventurer | IDbClan
  pickQuests: IDbQuest[]
}

export interface IRoster extends IDbRoster{
  rosterPicks: IRosterPick[]
}