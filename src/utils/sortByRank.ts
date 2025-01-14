import { Ranks } from "../types/Ranks";

const sortPriority = {
  [Ranks.S]: 0,
  [Ranks.A]: 1,
  [Ranks.B]: 2,
  [Ranks.C]: 3,
  [Ranks.D]: 4,
  [Ranks.E]: 5,
}

export function sortByRank<T>(input:(T & {rank:Ranks})[]):T[]{
  const sorted = input.sort((a, b)=> sortPriority[a.rank] - sortPriority[b.rank])

  return sorted

}

