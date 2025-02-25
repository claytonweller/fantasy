import { useState } from "react"

export function createFilterState  <K extends string>(enumObject:{[key in K]: string}){
  const cardFilterValues = Object.keys(enumObject).reduce((prev, key) =>{
    return {...prev, [key]: true}
  },{} as {[key in K]: boolean})
  return useState(cardFilterValues)
}