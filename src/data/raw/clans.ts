import { IDbClan } from "types/Clan";
import { Ranks } from "types/Ranks";
import { shuffleArray } from "utils/shuffleArray";

export const rawClans: IDbClan[] = shuffleArray([
  {
    id: "c1",
    rank: Ranks.C,
    name: "The Mill",
    mission: `Any adventurer who wants in is welcome. Just don't blame us if you die...`,
  },
  {
    id: "c2",
    rank: Ranks.B,
    name: "Night Cowl",
    mission: `Just because the work is dirty doesn't mean it shouldn't get done.`,
  },
  {
    id: "c3",
    rank: Ranks.A,
    name: "Mythril Trap",
    mission: `We live for the hunt. Bigger the better. Alive or dead.`,
  },
  {
    id: "c4",
    rank: Ranks.A,
    name: "Blessed Sword",
    mission: `There's knowing what is right, and then there's doing it.`,
  },
  {
    id: "c5",
    rank: Ranks.B,
    name: "Clockwork Chisel",
    mission: `Skilled hands. Sharp minds. Adventurers are craftsmen too. Alchemists and Artisans.`,
  },
  {
    id: "c6",
    rank: Ranks.B,
    name: "Radiantia",
    mission: `History. Legacy. Integrity. Nobles do the job right.`,
  },
  {
    id: "c7",
    rank: Ranks.C,
    name: "Crockpot",
    mission: `If we can't eat it, why would be bother killing it!?`,
  },
  {
    id: "c8",
    rank: Ranks.C,
    name: "Breath Of Life",
    mission: `Every good party needs a healer. Borrow one of ours.`,
  },
  {
    id: "c9",
    rank: Ranks.C,
    name: "Exploding Fist",
    mission: `If your body is a weapon. Then you can never be disarmed.`,
  },
  {
    id: "c10",
    rank: Ranks.C,
    name: "Verdant Glade",
    mission: `Nature does not serve us, we serve nature.`,
  },
]);
