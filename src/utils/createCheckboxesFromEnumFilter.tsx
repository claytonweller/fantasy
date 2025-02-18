import React from "react"

export function createCheckboxesFromEnumFilter<T extends {[key:string]: boolean}> (
  filter:T , 
  set:React.Dispatch<React.SetStateAction<T>>
){
  const options = Object.entries(filter).map(([cardType, checked], i) =>{
    const id = `cardType${cardType}`
    return(
      <div>
        <label htmlFor={id}>{cardType}</label>
        <input 
          key={`${cardType}${i}`}
          id={id}
          name={id}
          type='checkbox' 
          readOnly = {true}
          checked={checked}
          onClick={()=>{
            const updated = {...filter, [cardType]: !filter[cardType]} 
            set(updated)
          }}
        />
      </div>
    )
  })
  return options

}