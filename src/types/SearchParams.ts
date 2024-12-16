import { Ranks } from "./Ranks"

export interface ISearchParams{
  searchText: string
  rankFilter: {[key in Ranks]: boolean}
}