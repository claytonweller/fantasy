import { IDbClan } from "../../types/Clan";
import { Ranks } from "../../types/Ranks";
import { makeByIdQuery } from "./makeByIdQuery";

export const dummyClans: IDbClan[] = [
  {
    id: 'clan1',
    rank: Ranks.B,
    name: 'Falcon hunt',
    mission: 'To hunt falcons we guess'
  }
]

export const clansById = makeByIdQuery(dummyClans)