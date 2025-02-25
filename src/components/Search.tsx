import { IEnumFilter } from "hooks/useEnumFilterState"
import { Ranks } from "../types/Ranks"
import {createCheckboxesFromEnumFilter} from '../utils/createCheckboxesFromEnumFilter'
import { EnumFilterSelector } from "./EnumFilterSelector"

export default function Search(props:{
  searchText: string
  setSearchText: React.Dispatch<React.SetStateAction<string>>
  enumFilters: IEnumFilter<string>[]
}){
  const {
    searchText, 
    enumFilters, 
    setSearchText,
  } = props
  
  let filters
  if(enumFilters){
    filters =  enumFilters.map((f, i) =>{
      return (<EnumFilterSelector key={`${f.name || 'filter'}${i}`} enumFilter={f} />)
    })
  }

  return(
    <div style={{display: 'flex', justifyItems: 'center'}}>
      <div>
        <label htmlFor='searchText'>Search: </label>
        <input 
          id='searchText' 
          name='searchText' 
          type='text'
          value={searchText}
          onChange={(e)=> setSearchText(e.target.value)}
        />
      </div>
      {filters}
    </div>
  )
}