import { EntityTypes } from "types/Research";
import { IAdventurer, IAdventurerQuest } from "../types/Adventurer";
import { adventurersById, adventurersByPartyId } from "./queries/adventurers";
import { clansById } from "./queries/clans";
import { questsByPartyId } from "./queries/quests";
import { researchByTag } from "./queries/research";
import { IRawAdventurer, rawAdventurers } from "./raw/adventurers";

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

  return {
    ...a,
    lastActiveWeek,
    clan,
    quests,
    research,
  };
}
