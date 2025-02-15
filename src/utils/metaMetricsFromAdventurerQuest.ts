import { IAdventurerQuest } from "../types/Adventurer"
import { IMetricsWithMeta } from "../types/Quest"
import { Ranks } from "../types/Ranks"
import { RosterPositions } from "../types/Roster"

export function metaMetricsFromAdventurerQuest(params:{
  quest: IAdventurerQuest,
  name?: string,
  rank?: Ranks | RosterPositions
}):IMetricsWithMeta{
  const {quest, name, rank} = params
  const personalMetrics = quest.metrics
  const partyMetrics = quest.parties
    .filter(p => p.questId === quest.details.id)
    .map(p => p.metrics)
    .flat()
  return {
    name: name || quest.details.name,
    rank: rank || quest.details.questRank,
    metrics: [...personalMetrics, ...partyMetrics]
  }
}