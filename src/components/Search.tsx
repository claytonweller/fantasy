import { CardTypes } from "../types/Card"

export default function Search(props:{
  setSearchText: React.Dispatch<React.SetStateAction<string>>
  setCardTypeFilters: React.Dispatch<React.SetStateAction<any>>
  cardTypeFilters: {[key in CardTypes]: boolean}
}){
  const {setSearchText, setCardTypeFilters, cardTypeFilters} = props
  const onSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setSearchText(event.target.value)
  }
  const cardOptions = Object.entries(cardTypeFilters).map(([cardType, checked]) =>{
    const id = `cardType${cardType}`
    return(
      <div>
        <label htmlFor={id}>{cardType}</label>
        <input 
          id={id}
          name={id}
          type='checkbox' 
          checked={checked}
          onClick={()=>{
            console.warn(cardType)
            if(!(cardType in CardTypes)) return console.warn('CardType not recognized');
            const coerced = cardType as CardTypes
            const updated = {...cardTypeFilters, [coerced]: !cardTypeFilters[coerced]} 
            setCardTypeFilters(updated)
          }}
        />
      </div>
    )
  })
  return(
    <div>
      <div>
        <label htmlFor='searchText'>Search: </label>
        <input 
          id='searchText' 
          name='searchText' 
          type='text' 
          onChange={onSearchInputChange}
        />
      </div>
      <div>
        <label htmlFor='clan'>CardType </label>
        {cardOptions}
      </div>
        

    </div>
  )
}