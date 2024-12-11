import { useState } from "react"
import { CardTypes } from "../types/Card"

export default function CardGroup(props:{
  children:any, 
  cardType: CardTypes, 
  color:string,
  cardTypeFilters: {[key in CardTypes]: boolean}
}){
  const {children, cardType, color, cardTypeFilters} = props
  const [showFull, setShowFull] = useState(true)
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
      <div style={{display: showFull ? 'block' : 'none'}}>
        {children}
      </div>

    </div>
  )
}