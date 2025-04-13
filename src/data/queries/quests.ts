import { QuestClaimType } from "../../types/Quest";
import { rawAdventurers } from "../raw/adventurers";
import { rawQuests, IRawQuest } from "../raw/quests";
import { makeByIdQuery } from "./makeByIdQuery";

export const questsById = makeByIdQuery(rawQuests);
export const questsByPartyId = rawQuests.reduce(
  (prev, q) => {
    const newParties: { [clanId: string]: IRawQuest } = {};
    q.parties.forEach((p) => {
      newParties[p.id] = q;
    });
    return { ...prev, ...newParties };
  },
  {} as { [partyId: string]: IRawQuest },
);

export const questsByClanId = rawQuests.reduce(
  (prev, q) => {
    if (q.claimType !== QuestClaimType.Clan) return prev;
    const updated = { ...prev };
    q.parties.forEach((p) => {
      if (!p.clanId) return;
      const existing = updated[p.clanId];
      if (!existing) return (updated[p.clanId] = [q]);
      updated[p.clanId] = [...updated[p.clanId], q];
    });

    return updated;
  },
  {} as { [clanId: string]: IRawQuest[] },
);

export const questsByAdventurerId = rawAdventurers.reduce(
  (prev, a) => {
    const quests = a.questParties.map((qp) => {
      const { partyId } = qp;
      const quest = questsByPartyId[partyId];
      return quest;

      // // We might need party all of the metrics from a single adventurer in a quest..
      // // but we can do that later if it comes up.
      // const personalMetrics = qp.metrics.map(m => ({...m, questAdventurerId: 'PLACEHOLDER'}))
      // const partyMetrics = quest.parties
      //   .filter(p => p.id == partyId)
      //   [0].metrics
      //   .map(m => ({...m, questPartyId: partyId}))
      // return {
      //   id: 'PLACEHOLDER',
      //   adventurerId: a.id,
      //   partyId,
      //   metrics: {
      //     personal: personalMetrics,
      //     party: partyMetrics
      //   },
      //   details: quest
      // }
    });

    return { ...prev, [a.id]: quests };
  },
  {} as { [adventurerId: string]: IRawQuest[] },
);
