import React, { useState } from "react"
import { ISearchParams } from "../types/SearchParams"
import { Ranks } from "../types/Ranks"

function Card(
  props : {
    children: any, 
    color: string,
    rank: Ranks,
    name?: string,
    type?: string,
    data?: any, 
    search: ISearchParams
  }
){
  const{children, color, rank, name = '', data = {}, search} = props
  const [showData, setShowData] = useState(false)
  const [showFull, setShowFull] = useState(false)
  const onCardClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>)=> {
    e.stopPropagation()
    setShowFull(!showFull)
  }
  const onDataClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  )=>{
    e.stopPropagation()
    setShowData(!showData)
  }
  const dataString = JSON.stringify(data)
  const isEmptyString = search?.searchText === ''
  const isTextMatch = isEmptyString || dataString.toLowerCase().includes(search.searchText.toLowerCase())
  const isCorrectRank = search.rankFilter
    ? search?.rankFilter[rank]
    : true
  const isVisible = isCorrectRank && isTextMatch
  const style:React.CSSProperties = {
    backgroundColor: color,
    padding: '10px',
    margin: '10px',
    borderColor: 'black',
    borderRadius: '3px',
    borderWidth: '2px',
    display: isVisible ? 'block' : 'none'
  }

  return (
    <div onClick={onCardClick} style={style}>
      <h2>{name}</h2>
      <div style={{display: showFull ? 'block' : 'none'}}>
        {children}
        <div>
          <button onClick={onDataClick}>{showData ? 'Hide':'Show'} Data</button>
          <div style={{ fontSize: 11, display: showData ? 'block': 'none' }}>{JSON.stringify(data)}</div>
        </div>
      </div>
    </div>
  )
}

export default Card