import { IDbClan } from "./Clan"
import { IDbQuest } from "./Quest"
import { Ranks } from "./Ranks"

export interface IAdventurer extends IDbAdventurer{
  clan?: IDbClan
  quests: IDbQuest[]
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
  Defender = 'Defender'
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
  Deamon = 'Demon',
  Gnome = 'Gnome',
  Unknown = 'Unknown',
}