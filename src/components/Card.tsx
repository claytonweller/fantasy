import React, { useState } from "react"
import { ISearchParams } from "../types/SearchParams"
import { Ranks } from "../types/Ranks"
import { IResearch } from "types/Research"

function Card(
  props : {
    children: any, 
    color: string,
    rank?: Ranks,
    name?: string,
    type?: string,
    data?: any, 
    research: IResearch[]
    search: ISearchParams
  }
){
  const{children, color, rank = Ranks.E, name = '', data = {}, search, research} = props
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

  const researchComponent = !research.length
    ? (<></>)
    : (
      <div>
        <h3>Research / Notes</h3>
        <ul>
          {research.map((r, i) =>{
            return (
              <li 
                key={'r'+i}
                style={{textAlign: 'left'}}
              >{r.note}</li>)
          })}
        </ul>
      </div>
    )


  return (
    <div onClick={onCardClick} style={style}>
      <h2>{name}</h2>
      <div style={{display: showFull ? 'block' : 'none'}}>
        <div><b>Rank:</b> {rank}</div>
        {children}
        {researchComponent}
        <div>
          <button onClick={onDataClick}>{showData ? 'Hide':'Show'} Data</button>
          <div style={{ fontSize: 11, display: showData ? 'block': 'none' }}>{JSON.stringify(data)}</div>
        </div>
      </div>
    </div>
  )
}

export default Card