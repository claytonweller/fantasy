import { IDbAdventurer } from "../../types/Adventurer";
import { rawAdventurers } from "../raw/adventurers";
import { makeByIdQuery } from "./makeByIdQuery";

export const adventurersById = makeByIdQuery(rawAdventurers);

export const adventurersByClanId = rawAdventurers.reduce(
  (prev, a) => {
    if (!a.clanId) return prev;
    const existing = prev[a.clanId];
    if (!existing) return { ...prev, [a.clanId]: [a] };
    return { ...prev, [a.clanId]: [...existing, a] };
  },
  {} as { [clanId: string]: IDbAdventurer[] },
);

export const adventurersByPartyId = rawAdventurers.reduce(
  (prev, a) => {
    let updated = { ...prev };
    a.questParties.forEach((qp) => {
      const existing = updated[qp.partyId];
      if (!existing) updated = { ...updated, [qp.partyId]: [] };
      updated[qp.partyId].push(a);
    });
    return updated;
  },
  {} as { [clanId: string]: IDbAdventurer[] },
);
