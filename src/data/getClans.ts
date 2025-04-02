
import { EntityTypes } from "types/Research";
import { IClan, IDbClan } from "../types/Clan";
import { getQuestsByClanId } from "./getQuests";
import { adventurersByClanId } from "./queries/adventurers";
import { clansById } from "./queries/clans";
import { researchByTag } from "./queries/research";
import { rawClans } from "./raw/clans";

export function getClans ():IClan[]{
  const compositeClans = rawClans.map(createCompositeClan)
  return compositeClans
}

export function getClanById (id: string): IClan {
  const rawClan = clansById[id]
  return createCompositeClan(rawClan)
}

function createCompositeClan(clan: IDbClan){
  const adventurers = adventurersByClanId[clan.id] || []
  const quests = getQuestsByClanId(clan.id)
  const research = researchByTag[EntityTypes.Clan][clan.id] || []
  return {
    ...clan,
    adventurers,
    quests,
    research
  }
}