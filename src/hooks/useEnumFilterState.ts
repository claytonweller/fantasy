import { useState, Dispatch, SetStateAction } from "react"

export function useEnumFilterState<K extends string>(
  enumObject:{[key in K]: string},
  name?: string,
  nullable = false
):IEnumFilter<K>{
  const fullObject: EnumWithNull<K> = {...enumObject}
  if(nullable) fullObject['None'] = 'None'
  const cardFilterValues = Object.keys(fullObject).reduce((prev, key) =>{
    return {...prev, [key]: true}
  },{} as {[key in K]: boolean})
  const [state, setState] = useState(cardFilterValues)
  return {name, state, setState}
}

export type IFilterState <K extends string> = {[key in K]: boolean}
export type ISetFilterState <K extends string> = Dispatch<SetStateAction<IFilterState<K>>>;
export type IUseFilterState <K extends string> = [IFilterState<K>, ISetFilterState<K>]

export interface IEnumFilter <K extends string>{
  name?: string,
  state: IFilterState<K>
  setState: ISetFilterState<K>
}


type EnumWithNull <K extends string> = {[key in K]: string} & {None?: 'None'}