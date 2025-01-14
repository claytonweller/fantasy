import { useState } from 'react';
import './App.css';
import AdventurerCard from './components/AdventurerCard';
import ClanCard from './components/ClanCard';
import QuestCard from './components/QuestCard';
import { getAdventurers } from './data/getAdventurers';
import { getClans } from './data/getClans';
import { getQuests } from './data/getQuests';
import CardGroup from './components/CardGroup';
import { CardTypes } from './types/Card';
import Search from './components/Search';
import { useCardTypeFilter } from './hooks/useCardTypeFilter';
import { useCardRankFilter } from './hooks/useCardRankFilter';
import { makeSearchableText } from './components/SearchableText';
// import { getVillagers } from './data/getVillagers';

function App() {
  const [searchText, setSearchText] = useState('')
  const [cardTypeFilters, setCardTypeFilters] = useCardTypeFilter()
  const [rankFilter, setCardRankFilters] = useCardRankFilter()
  const makeSearchable = makeSearchableText(setSearchText)

  const clans = getClans()
  const allClans = clans.map((c, i) =>{
    return <ClanCard 
      key={`Clan${i}`} 
      clan={c} 
      search={{searchText, rankFilter}} 
      makeSearchable={makeSearchable} 
    />
  })
  const quests = getQuests()
  const allQuests = quests.map((q, i) =>{
    return <QuestCard 
      key={`Quest${i}`} 
      quest={q} 
      search={{searchText, rankFilter}}
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
  />
  })

  // const villagers = getVillagers()
  // const allVillagers = villagers.map((a, i) =>{
  //   return <div key={`villagers${i}`}>{JSON.stringify(a)}</div>
  // })


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
        <CardGroup 
          cardType={CardTypes.Quest} 
          color='#402222'
          cardTypeFilters={cardTypeFilters} 
        >
          {allQuests}
        </CardGroup>

      </div>
    </div>
  );
}

export default App;
