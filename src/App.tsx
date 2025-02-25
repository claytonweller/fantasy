import { useState } from 'react';
import './App.css';
import AdventurerCard from './components/AdventurerCard';
import ClanCard from './components/ClanCard';
import { getAdventurers } from './data/getAdventurers';
import { getClans } from './data/getClans';
import CardGroup from './components/CardGroup';
import { CardTypes } from './types/Card';
import Search from './components/Search';
import { makeSearchableText } from './components/SearchableText';
import { getRules, rankMultipliers } from './data/getRules';
import Rules from './components/Rules';
import Villagers from './components/Villagers';
import Quests from 'components/Quests';
import { createFilterState } from 'utils/createFilterStateFromEnum';
import { Ranks } from 'types/Ranks';

function App() {
  const [searchText, setSearchText] = useState('')
  const [cardTypeFilters, setCardTypeFilters] = createFilterState(CardTypes)
  const [rankFilter, setCardRankFilters] = createFilterState(Ranks)
  const [currentWeek] = useState(2)
  const makeSearchable = makeSearchableText(setSearchText)

  const rules = getRules()

  const clans = getClans()
  const allClans = clans.map((c, i) =>{
    return <ClanCard 
      key={`Clan${i}`} 
      clan={c} 
      search={{searchText, rankFilter}} 
      currentWeek={currentWeek}
      rules={rules}
      makeSearchable={makeSearchable} 
    />
  })

  const adventurers = getAdventurers()
  const allAdventurers = adventurers.map((a, i) =>{
    return <AdventurerCard 
    key={`Adv${i}`}
    adventurer={a} 
    search={{searchText, rankFilter}}
    makeSearchable={makeSearchable} 
    rules={rules}
  />
  })


  return (
    <div className="App">
      <div style={{backgroundColor:'#111111', color: 'white'}}>
        {/* {allVillagers} */}
        <Search 
          searchText={searchText}
          setSearchText={setSearchText} 
          cardTypeFilters={cardTypeFilters}
          setCardTypeFilters={setCardTypeFilters}
          cardRankFilters={rankFilter}
          setCardRankFilters={setCardRankFilters}
        />
        <Villagers
          search={{searchText}}
          makeSearchable={makeSearchable}
          rules={rules}
          cardTypeFilters={cardTypeFilters}
        />
        <Rules rules={rules} rankMultipliers={rankMultipliers}/>
        <CardGroup 
          cardTypeFilters={cardTypeFilters} 
          cardType={CardTypes.Clan} 
          color='#223322'
        >
          {allClans}
        </CardGroup>
        <CardGroup 
          cardType={CardTypes.Adventurer} 
          color='#332620'
          cardTypeFilters={cardTypeFilters} 
        >
          {allAdventurers}
        </CardGroup>
        <Quests
          search={{searchText, rankFilter}}
          rules={rules}
          cardTypeFilters={cardTypeFilters}
          makeSearchable={makeSearchable}
        />

      </div>
    </div>
  );
}

export default App;
