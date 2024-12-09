import React, { useState } from "react"

function Card(
  props : {
    children: any, 
    color: string, 
    name?: string,
    type?: string,
    data?: any, 
    search:{ searchText: string}
  }
){
  const{children, color, name = '', type = '', data = {}, search} = props
  const [showData, setShowData] = useState(false)
  const [showFull, setShowFull] = useState(false)
  const onCardClick = ()=> {
    setShowFull(!showFull)
  }
  const onDataClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  )=>{
    e.stopPropagation()
    setShowData(!showData)
  }
  const dataString = JSON.stringify(data)
  const isEmptyString = search?.searchText === ''
  const isVisible = isEmptyString || dataString.toLowerCase().includes(search.searchText.toLowerCase())
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
      <h2>{type + ' ' + name}</h2>
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