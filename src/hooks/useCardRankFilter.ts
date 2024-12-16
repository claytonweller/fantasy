import { useState } from "react"
import { Ranks } from "../types/Ranks"

export function useCardRankFilter(){
  const rankFilterValues = Object.values(Ranks).reduce((prev, ct) =>{
    return {...prev, [ct]: true}
  },{} as {[key in Ranks]: boolean})
  return useState(rankFilterValues)
}