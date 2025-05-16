import { IDbClan } from "./Clan";
import {
  IDbQuest,
  IDbQuestAdventurerMetric,
  IDbQuestPartyAdventurer,
  IQuestParty,
} from "./Quest";
import { Ranks } from "./Ranks";
import { IResearch } from "./Research";

export interface IAdventurer extends IDbAdventurer {
  clan?: IDbClan;
  lastActiveWeek: number;
  quests: IAdventurerQuest[];
  currentStatuses: AdventurerStatuses[];
  statusHistory: IDbAdventurerStatusHistory[];
  research: IResearch[];
}

export interface IAdventurerQuest extends IDbQuestPartyAdventurer {
  metrics: IDbQuestAdventurerMetric[];
  details: IDbQuest;
  parties: IQuestParty[];
}

export interface IDbAdventurer {
  id: string;
  name: string;
  races: AdventurerRaces[];
  nicknames: string[];
  rank: Ranks;
  class: AdventurerClasses;
  className: string;
  clanId?: string;
  bio: string;
  traits: string[];
}

export interface IDbAdventurerStatusHistory {
  id: string;
  adventurerId: string;
  startWeek: number;
  endWeek?: number;
  status: AdventurerStatuses;
}

export enum AdventurerClasses {
  Support = "Support",
  Attacker = "Attacker",
  Defender = "Defender",
  Generalist = "Generalist",
}

export enum AdventurerStatuses {
  Dead = "Dead",
  Injured = "Injured",
  Sick = "Sick",
  MentalIllness = "MentalIllness",
  Criminal = "Criminal",
  Imprisoned = "Imprisoned",
  ManaDepletion = "ManaDepletion",
  Missing = "Missing",
  OutOfTown = "OutOfTown",
}

export enum AdventurerRaces {
  Human = "Human",
  Dwarf = "Dwarf",
  Beastkin = "Beastkin",
  Elf = "Elf",
  Spirit = "Spirit",
  Halfling = "Halfling",
  Orc = "Orc",
  Unknown = "Unknown",
}

export enum ActivityStates {
  ActiveThisWeek = "ActiveThisWeek",
  InactiveThisWeek = "InactiveThisWeek",
}
