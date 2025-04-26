import { useState } from "react";
import "./App.css";
import { CardTypes } from "./types/Card";
import Search from "./components/Search";
import { makeSearchableText } from "./components/SearchableText";
import { getRules, rankMultipliers } from "./data/getRules";
import Rules from "./components/Rules";
import Villagers from "./components/Villagers";
import Quests from "components/Quests";
import { Ranks } from "types/Ranks";
import { useEnumFilterState } from "hooks/useEnumFilterState";
import Adventurers from "components/Adventurers";
import Clans from "components/Clans";
import { CURRENT_WEEK } from "config";
import { useEscapeKeyPress } from "hooks/useEscapeKeyPress";

function App() {
  const [searchText, setSearchText] = useState("");
  const cardTypeFilter = useEnumFilterState(CardTypes, "CardType");
  const rankFilter = useEnumFilterState(Ranks, "Ranks");
  const [currentWeek] = useState(CURRENT_WEEK);
  const makeSearchable = makeSearchableText(setSearchText);
  useEscapeKeyPress(() => setSearchText(""));
  const rules = getRules();

  return (
    <div className="App">
      <div
        style={{
          backgroundColor: "#111111",
          color: "white",
        }}
      >

        <div style={{
          display: 'flex',
          flex: 'wrap',
          justifyContent:'center',
          paddingTop: 30
        }}>
                          <Search
          searchText={searchText}
          setSearchText={setSearchText}
          enumFilters={[cardTypeFilter, rankFilter]}
        />
          <div style={{padding: 10}}>
            <a
              href="https://forms.gle/fMMDrWwtHMFxj8X68"
              target="_blank"
              rel="noopener noreferrer"
            >
              Research Form (Mon/Tues)
            </a>
          </div>
          <div style={{padding: 10}}>
            <a
              href="https://forms.gle/JogH7PWcuetJSL7r5"
              target="_blank"
              rel="noopener noreferrer"
            >
              Roster Pick Form (Thu/Fri)
            </a>
          </div>
        </div>



        <Rules rules={rules} rankMultipliers={rankMultipliers} />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <Villagers
            search={{ searchText }}
            makeSearchable={makeSearchable}
            rules={rules}
            cardTypeFilters={cardTypeFilter.state}
          />
          <Clans
            search={{ searchText, rankFilter: rankFilter.state }}
            rules={rules}
            cardTypeFilters={cardTypeFilter.state}
            makeSearchable={makeSearchable}
            currentWeek={currentWeek}
          />
          <Quests
            search={{ searchText, rankFilter: rankFilter.state }}
            rules={rules}
            cardTypeFilters={cardTypeFilter.state}
            makeSearchable={makeSearchable}
          />
          <Adventurers
            search={{ searchText, rankFilter: rankFilter.state }}
            rules={rules}
            cardTypeFilters={cardTypeFilter.state}
            makeSearchable={makeSearchable}
            currentWeek={currentWeek}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
