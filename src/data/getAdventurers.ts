import { EntityTypes } from "types/Research";
import {
  AdventurerStatuses,
  IAdventurer,
  IAdventurerQuest,
  IDbAdventurerStatusHistory,
} from "../types/Adventurer";
import { adventurersById, adventurersByPartyId } from "./queries/adventurers";
import { clansById } from "./queries/clans";
import { questsByPartyId } from "./queries/quests";
import { researchByTag } from "./queries/research";
import { IRawAdventurer, rawAdventurers } from "./raw/adventurers";
import { CURRENT_WEEK } from "config";

export function getAdventurers(): IAdventurer[] {
  const adventurers = rawAdventurers.map(formatAdventurer);
  return adventurers;
}

export function getAdventurerById(id: string): IAdventurer {
  const adventurer = adventurersById[id];
  return formatAdventurer(adventurer);
}

function formatAdventurer(a: IRawAdventurer): IAdventurer {
  const clan = a.clanId ? clansById[a.clanId] : undefined;
  const research = researchByTag[EntityTypes.Adventurer][a.id] || [];

  return {
    ...a,
    ...formatStatuses(a),
    ...formatQuests(a),
    clan,
    research,
  };
}

function formatStatuses(a: IRawAdventurer) {
  const currentStatuses: AdventurerStatuses[] = [];
  const statusHistory: IDbAdventurerStatusHistory[] = [];

  a.statusHistory.forEach((history) => {
    const afterStart = history.startWeek <= CURRENT_WEEK;
    const beforeEnd =
      !history.endWeek || (history.endWeek && CURRENT_WEEK <= history.endWeek);
    if (afterStart && beforeEnd) {
      currentStatuses.push(history.status);
    }
    statusHistory.push({ ...history, id: "PLACEHOLDER", adventurerId: a.id });
  });

  return { currentStatuses, statusHistory };
}

function formatQuests(a: IRawAdventurer) {
  let lastActiveWeek = 0;

  const quests: IAdventurerQuest[] = a.questParties.map((qp) => {
    const { partyId } = qp;
    const quest = questsByPartyId[partyId];
    const personalMetrics = qp.metrics.map((m) => ({
      ...m,
      questAdventurerId: "PLACEHOLDER",
    }));
    const parties = quest.parties
      .filter((p) => p.id == partyId)
      .map((p) => {
        if (p.startWeek > lastActiveWeek) lastActiveWeek = p.startWeek;
        const adventurers = adventurersByPartyId[p.id];
        const metrics = p.metrics.map((m) => ({
          ...m,
          questPartyId: "PLACEHOLDER",
        }));
        return {
          ...p,
          adventurers,
          metrics,
          questId: quest.id,
        };
      });

    return {
      id: "PLACEHOLDER",
      adventurerId: a.id,
      partyId,
      metrics: personalMetrics,
      parties,
      details: quest,
    };
  });

  return { quests, lastActiveWeek };
}
