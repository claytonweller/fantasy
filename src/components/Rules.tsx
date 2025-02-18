import { useState } from "react";
import { IRules } from "../data/getRules";
import { QuestMetricType } from "../types/Quest";

export default function Rules (props: {rules: IRules, rankMultipliers: {[rank: string]: number}}){
  const [rulesVisible, setRulesVisible] = useState(false)
  const {rules, rankMultipliers} = props

  return (
    <>
      <div
        style={{
          display: rulesVisible ? 'none' : 'block',
          position: 'fixed',
          top: '0px',
          right: '0px',
          padding: '10px',
          backgroundColor: 'rgba(0,0,0,0.9)',
        }}
      >
        <button onClick={()=>setRulesVisible(true)}>Rules</button>

      </div>
      <RulesModal 
        rules={rules} 
        rankMultipliers={rankMultipliers}
        rulesVisible={rulesVisible}
        setRulesVisible={setRulesVisible}
      />
    </>
  )

}

function RulesModal (props:{
  rules: IRules, 
  rankMultipliers: {[rank: string]: number},
  rulesVisible: boolean
  setRulesVisible: React.Dispatch<React.SetStateAction<boolean>>
}){
  const {rules, rankMultipliers, rulesVisible, setRulesVisible} = props

  const sectionStyle = {padding: '5px'}
  const formattedRules = rules.raw.map((rule, i) =>{
    return <div key={'rule'+i}>
      <b>{rule.metricRuleId}: </b>
      <span>{rule.questMetricType} X {rule.multiplier}</span>
    </div>
  })
  return(
    <div 
      style={{
        display: rulesVisible ? 'block': 'none',
        position: 'fixed',
        top: '20px',
        padding: '10px',
        backgroundColor: 'rgba(0,0,0,0.9)',
        width: '100%'
      }}
    >
      <div
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          padding: '10px',
          backgroundColor: 'rgba(0,0,0,0.9)',
        }}
        onClick={()=>{
          setRulesVisible(false)
        }}
      >
      <h2>X</h2>
      </div>
      
      <h2>Rules -</h2> 
      <h3>Rule Descriptions - </h3>
      <div style={sectionStyle}>
        <b>{QuestMetricType.Count}: </b>
        <span>Simply the count X a multiplier</span>
        <div>Ex: The Adventurer disarmed 3 traps. 3 traps X 2 points per trap = 6 points</div>
      </div>
      <div style={sectionStyle}>
        <b>{QuestMetricType.PointByRank}: </b>
        <span>Similar to count except it also scales relative to the rank. </span>
        Values -- {JSON.stringify(rankMultipliers)}
        <div>Ex: The Adventurer killed 5 Rank C monsters. 5 monsters X 0.25 base points X 4 points for C Rank = 5 points</div>
      </div>
      <div style={sectionStyle}>
        <b>{QuestMetricType.GoldConvert}: </b>
        <span>A point for every decimal place.</span>
        <div>Ex1: 5g = 1pt</div>
        <div>Ex2: 1234g = 4pt</div>
      </div>
  
      <h3>All Rules - </h3>
      {formattedRules}
    </div>  
    )  
}
