import { IDbAdventurer } from "./Adventurer";
import { Ranks } from "./Ranks";

export interface IQuest extends IDbQuest {
  claimedByName: string
  adventurers: IDbAdventurer[]
}

export interface IDbQuest {
  id: string,
  name:string, 
  reward: number, 
  postedBy: string,
  claimType: QuestClaimType
  claimedById?: string,
  questType: QuestTypes, 
  description: string, 
  questRank: Ranks
  startWeek?: number,
  completeWeek?: number,
}

export enum QuestTypes {
  Fetch = 'Fetch',
  Guard = 'Guard',
  Kill = 'Kill',
}

export enum QuestClaimType {
  Clan = 'Clan',
  Individual = 'Individual'
}