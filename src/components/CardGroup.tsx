import { useState } from "react"
import { CardTypes } from "../types/Card"
import { IEnumFilter } from "hooks/useEnumFilterState"
import { EnumFilterSelector } from "./EnumFilterSelector"

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
    filters =  typeSpecificFilters.map((f, i) =>{
      return (<EnumFilterSelector key={`${f.name || 'filter'}${i}`} enumFilter={f} />)
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

