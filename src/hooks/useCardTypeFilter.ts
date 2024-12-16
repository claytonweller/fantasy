import { useState } from "react"
import { CardTypes } from "../types/Card"

export function useCardTypeFilter(){
  const cardFilterValues = Object.values(CardTypes).reduce((prev, ct) =>{
    return {...prev, [ct]: true}
  },{} as {[key in CardTypes]: boolean})
  return useState(cardFilterValues)
}