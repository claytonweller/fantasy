import './App.css';
import AdventurerCard from './components/AdventurerCard';
import ClanCard from './components/ClanCard';
import QuestCard from './components/QuestCard';
import { getAdventurers } from './data/getAdventurers';
import { getClans } from './data/getClans';
import { getQuests } from './data/getQuests';

function App() {

  const clans = getClans()
  const allClans = clans.map(c =>{
    return <ClanCard clan={c}></ClanCard>
  })
  const quests = getQuests()
  const allQuests = quests.map(q =>{
    return <QuestCard quest={q}></QuestCard>
  })

  const adventurers = getAdventurers()
  const allAdventurers = adventurers.map(a =>{
    return <AdventurerCard adventurer={a}></AdventurerCard>
  })




  return (
    <div className="App">
      <header className="App-header">
        {allClans}
        {allQuests}
        {allAdventurers}
      </header>
    </div>
  );
}

export default App;
