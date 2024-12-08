import { useState } from "react"

function Card({children, color, data = {}}: {children: any, color: string, data?: any}){
  const [showData, setShowData] = useState(false)
  
  const style = {
    backgroundColor: color,
    padding: '10px',
    margin: '10px',
    borderColor: 'black',
    borderRadius: '3px',
    borderWidth: '2px',
  }

  return (
    <div style={style}>
      {children}
      <div>
        <button onClick={()=>setShowData(!showData)}>{showData ? 'Hide':'Show'} Data</button>
        <div style={{ fontSize: 20, display: showData ? 'block': 'none' }}>{JSON.stringify(data)}</div>
      </div>
    </div>
  )
}

export default Card