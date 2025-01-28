import { IDbAdventurer } from "./Adventurer";
import { Ranks } from "./Ranks";

export interface IQuest extends IDbQuest {
  // Clan Name or the highest ranked adventurer in the active party
  claimedByName?: string, 
  claimedById?: string,
  status: QuestStatus,
  parties: IQuestParty[]
}

export interface IQuestParty extends IDbQuestParty {
  adventurers: IDbAdventurer[]
  metrics: IDbQuestPartyMetric[]
}

export interface IDbQuest {
  id: string,
  name:string, 
  reward: number, 
  postedBy: string,
  claimType: QuestClaimType
  questType: QuestTypes, 
  description: string, 
  questRank: Ranks
}

export interface IDbQuestParty {
  id: string,
  questId: string, 
  clanId?: string
  startWeek: number
  endWeek?: number
  status: QuestStatus
  // Links to a list of metrics
}

export interface IMetricsWithMeta {
  name: string
  rank?: Ranks
  metrics: IMetric[]
}

export type IMetric = IDbQuestPartyMetric | IDbQuestAdventurerMetric | IDbMetric

export interface IDbQuestPartyAdventurer {
  id: string,
  adventurerId: string,
  partyId: string
  // Links to a list of metrics
}

export interface IDbQuestPartyMetric extends IDbMetric {
  questPartyId: string,
}

export interface IDbQuestAdventurerMetric extends IDbMetric {
  questAdventurerId: string,
}

export interface IDbMetric {
  metricRuleId: MetricRuleId,
  value: number,
  rank?: Ranks
}

export enum QuestStatus {
  Claimed = 'Claimed',
  InProgress = 'In Progress',
  Failed = 'Failed',
  Success = 'Success',
  // Parties will never have the Unclaimed status
  // It's only for use as a composite value in Quest displays
  Unclaimed = 'Unclaimed',
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

export enum QuestMetricType {
  PointByRank = 'PointByRank',
  Count = 'Count',
  GoldConvert = 'GoldConvert'
}

// This eventually will probably be it's own table with 
// rules that won't be stored in code. They'll be set up 
// to be flexible so point totals can vary by league, week, season, etc.
export enum MetricRuleId {
  // Adventurer/individual metrics
  MonsterKill = 'MonsterKill',
  Death = 'Death',
  ChestOpened = 'ChestOpened',
  TrapDisarmed = 'TrapDisarmed',
  AllyResurrect = 'AllyResurrect',
  AllyHealed = 'AllyHealed',

  // Quest global/party metrics
  CivilianSaved = 'CivilianSaved',
  RewardGold = 'RewardGold',
  CiviliansDead = 'CiviliansDead',
  PropertyDamaged = 'PropertyDamaged',

  // Clan Metrics
  QuestsAccepted = 'QuestsAccepted',
  QuestsComplete = 'QuestsCompleted',
  ActiveMembers = 'ActiveMembers',
  InactiveMembers = 'InactiveMembers'
}
