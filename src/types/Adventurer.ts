import { IDbClan } from "./Clan"
import { IDbQuest, IDbQuestAdventurerMetric, IDbQuestPartyAdventurer, IQuestParty } from "./Quest"
import { Ranks } from "./Ranks"
import { IResearch } from "./Research"

export interface IAdventurer extends IDbAdventurer {
  clan?: IDbClan
  lastActiveWeek: number;
  quests: IAdventurerQuest[]
  research: IResearch[]
}

export interface IAdventurerQuest extends IDbQuestPartyAdventurer {
  metrics: IDbQuestAdventurerMetric[]
  details: IDbQuest
  parties: IQuestParty[]
}

export interface IDbAdventurer {
  id: string
  name: string
  races: AdventurerRaces[]
  nicknames: string[]
  rank: Ranks
  class: AdventurerClasses
  className: string
  clanId?: string
  bio: string
  status: AdventurerStatuses[]
  traits: string[]
}

export enum AdventurerClasses { 
  Support = 'Support',
  Attacker = 'Attacker',
  Defender = 'Defender',
  Generalist = 'Generalist'
}

export enum AdventurerStatuses {
  Dead = 'Dead',
  Injured = 'Injured',
  Sick = 'Sick',
  MentalIllness = 'MentalIllness',
  Criminal = 'Criminal',
  Imprisoned = 'Imprisoned',
  ManaDepletion = 'ManaDepletion'
} 

export enum AdventurerRaces {
  Human = 'Human',
  Dwarf = 'Dwarf',
  Beastkin = 'Beastkin',
  Elf = 'Elf',
  Spirit  = 'Spirit',
  Halfling = 'Halfling',
  Unknown = 'Unknown',
}

export enum ActivityStates {
  ActiveThisWeek = 'ActiveThisWeek',
  InactiveThisWeek = 'InactiveThisWeek'
}