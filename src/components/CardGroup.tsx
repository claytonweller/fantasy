import { useState } from "react"
import { CardTypes } from "../types/Card"
import { IEnumFilter, IUseFilterState } from "hooks/useEnumFilterState"
import { createCheckboxesFromEnumFilter } from "utils/createCheckboxesFromEnumFilter"

export default function CardGroup(props:{
  children:any, 
  cardType: CardTypes, 
  color:string,
  cardTypeFilters: {[key in CardTypes]: boolean}
  typeSpecificFilters?: IEnumFilter<string>[]
}){
  const {
    children, cardType, color, cardTypeFilters, typeSpecificFilters 
  } = props
  const [showFull, setShowFull] = useState(true)
  let filters
  if(typeSpecificFilters){
    filters = typeSpecificFilters.map(({state, setState, name}) =>{
      const nameLabel = name 
        ? (<div><b>{name}</b></div>) 
        : '';
      return(
        <div>
        {nameLabel}
        {createCheckboxesFromEnumFilter(state, setState)}
        </div>
      ) 
    })
  }
  
  const style:React.CSSProperties = {
    backgroundColor: color,
    padding: '10px',
    margin: '10px',
    borderColor: 'black',
    borderRadius: '3px',
    borderWidth: '2px',
    display: cardTypeFilters[cardType] ? 'block' : 'none'
  }
  
  return (
    <div onClick={(e)=> {
      e.stopPropagation()
      setShowFull(!showFull)
    }} style={style}>
      <h1>{cardType}s</h1>
      <div style={{display: 'flex', justifyContent:'center'}}>{filters}</div>
      <div style={{display: showFull ? 'block' : 'none'}}>
        {children}
      </div>

    </div>
  )
}

