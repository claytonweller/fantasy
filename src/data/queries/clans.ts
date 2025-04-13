import { rawClans } from "../raw/clans";
import { makeByIdQuery } from "./makeByIdQuery";

export const clansById = makeByIdQuery(rawClans);
