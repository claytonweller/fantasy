import { IResearch } from "./Research"
import { IRoster } from "./Roster"

export interface IDbVillager {
  id: string
  name: string
  alias?: string
}

export interface IVillager extends IDbVillager {
  rosters: IRoster[]
  research: IResearch[]
}