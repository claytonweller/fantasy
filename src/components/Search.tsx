import { CardTypes } from "../types/Card"
import { Ranks } from "../types/Ranks"
import {createCheckboxesFromEnumFilter} from '../utils/createCheckboxesFromEnumFilter'

export default function Search(props:{
  searchText: string
  setSearchText: React.Dispatch<React.SetStateAction<string>>
  setCardTypeFilters: React.Dispatch<React.SetStateAction<{[key in CardTypes]: boolean}>>
  cardTypeFilters: {[key in CardTypes]: boolean}
  setCardRankFilters: React.Dispatch<React.SetStateAction<{[key in Ranks]: boolean}>>
  cardRankFilters: {[key in Ranks]: boolean}
}){
  const {
    searchText, 
    setSearchText, 
    setCardTypeFilters, 
    cardTypeFilters, 
    setCardRankFilters, 
    cardRankFilters
  } = props
  const onSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setSearchText(event.target.value)
  }
  const typeOptions = createCheckboxesFromEnumFilter(cardTypeFilters, setCardTypeFilters)

  const rankOptions = createCheckboxesFromEnumFilter(cardRankFilters, setCardRankFilters)


  return(
    <div>
      <div>
        <label htmlFor='searchText'>Search: </label>
        <input 
          id='searchText' 
          name='searchText' 
          type='text'
          value={searchText}
          onChange={onSearchInputChange}
        />
      </div>
      <div>
        <label htmlFor='clan'>CardType </label>
        {typeOptions}
        
      </div>
      <div>
        <label htmlFor='clan'>Rank </label>
        {rankOptions}
      </div>
        

    </div>
  )
}