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
import { Ranks } from 'types/Ranks';
import { useEnumFilterState } from 'hooks/useEnumFilterState';
import Adventurers from 'components/Adventurers';

function App() {
  const [searchText, setSearchText] = useState('')
  const cardTypeFilter = useEnumFilterState(CardTypes, 'CardType')
  const rankFilter = useEnumFilterState(Ranks, 'Ranks')
  const [currentWeek] = useState(2)
  const makeSearchable = makeSearchableText(setSearchText)

  const rules = getRules()

  const clans = getClans()
  const allClans = clans.map((c, i) =>{
    return <ClanCard 
      key={`Clan${i}`} 
      clan={c} 
      search={{searchText, rankFilter:rankFilter.state}} 
      currentWeek={currentWeek}
      rules={rules}
      makeSearchable={makeSearchable} 
    />
  })
  
  return (
    <div className="App">
      <div style={{backgroundColor:'#111111', color: 'white'}}>
        {/* {allVillagers} */}
        <Search 
          searchText={searchText}
          setSearchText={setSearchText} 
          enumFilters={[cardTypeFilter, rankFilter]}
        />
        <Villagers
          search={{searchText}}
          makeSearchable={makeSearchable}
          rules={rules}
          cardTypeFilters={cardTypeFilter.state}
        />
        <Rules rules={rules} rankMultipliers={rankMultipliers}/>
        <CardGroup 
          cardTypeFilters={cardTypeFilter.state} 
          cardType={CardTypes.Clan} 
          color='#223322'
        >
          {allClans}
        </CardGroup>
        <Adventurers
          search={{searchText, rankFilter: rankFilter.state}}
          rules={rules}
          cardTypeFilters={cardTypeFilter.state}
          makeSearchable={makeSearchable}
        />
        <Quests
          search={{searchText, rankFilter: rankFilter.state}}
          rules={rules}
          cardTypeFilters={cardTypeFilter.state}
          makeSearchable={makeSearchable}
        />

      </div>
    </div>
  );
}

export default App;
