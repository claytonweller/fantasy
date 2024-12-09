import { useState } from 'react';
import './App.css';
import AdventurerCard from './components/AdventurerCard';
import ClanCard from './components/ClanCard';
import QuestCard from './components/QuestCard';
import { getAdventurers } from './data/getAdventurers';
import { getClans } from './data/getClans';
import { getQuests } from './data/getQuests';

function App() {
  const [searchText, updateSearchText] = useState('')
  const onSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    updateSearchText(event.target.value)
  }
  const clans = getClans()
  const allClans = clans.map((c, i) =>{
    return <ClanCard key={`Clan${i}`} clan={c} search={{searchText}} />
  })
  const quests = getQuests()
  const allQuests = quests.map((q, i) =>{
    return <QuestCard key={`Quest${i}`} quest={q} search={{searchText}}/>
  })

  const adventurers = getAdventurers()
  const allAdventurers = adventurers.map((a, i) =>{
    return <AdventurerCard key={`Adv${i}`} adventurer={a} search={{searchText}}/>
  })


  return (
    <div className="App">
      <div style={{backgroundColor:'#111111', color: 'white'}}>
        <label htmlFor='searchText'>Search: </label>
        <input 
          id='searchText' 
          name='searchText' 
          type='text' 
          onChange={onSearchInputChange}
        />
        {allClans}
        {allQuests}
        {allAdventurers}
      </div>
    </div>
  );
}

export default App;
