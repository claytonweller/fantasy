import { useState } from "react";
import { IRules } from "../data/getRules";
import { QuestMetricType } from "../types/Quest";

export default function Rules(props: {
  rules: IRules;
  rankMultipliers: { [rank: string]: number };
}) {
  const [rulesVisible, setRulesVisible] = useState(false);
  const { rules, rankMultipliers } = props;

  return (
    <>
      <div
        style={{
          display: rulesVisible ? "none" : "block",
          position: "fixed",
          overflowY: "auto",
          top: "0px",
          right: "0px",
          padding: "10px",
          backgroundColor: "rgba(0,0,0,0.9)",
          zIndex: 2000,
        }}
      >
        <button onClick={() => setRulesVisible(true)}>Rules</button>
      </div>

      <RulesModal
        rules={rules}
        rankMultipliers={rankMultipliers}
        rulesVisible={rulesVisible}
        setRulesVisible={setRulesVisible}
      />
    </>
  );
}

function RulesModal(props: {
  rules: IRules;
  rankMultipliers: { [rank: string]: number };
  rulesVisible: boolean;
  setRulesVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { rules, rankMultipliers, rulesVisible, setRulesVisible } = props;

  return (
    <div
      style={{
        display: rulesVisible ? "block" : "none",
        position: "fixed",
        top: "20px",
        padding: "10px",
        backgroundColor: "rgba(0,0,0,0.9)",
        width: "100%",
        backdropFilter: "blur(2px)",
        zIndex: 2000,
      }}
    >
      <CloseX setRulesVisible={setRulesVisible} />
      <div
        style={{
          overflowY: "auto",
          height: "90vh",
          width: "90vw",
        }}
      >
        <h2>Rules -</h2>
        <WeeklyFlow />

        <PointDescriptions rules={rules} rankMultipliers={rankMultipliers} />
      </div>
    </div>
  );
}

function CloseX(props: {
  setRulesVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div
      style={{
        position: "fixed",
        top: "-20px",
        right: "20px",
        padding: "10px",
        backgroundColor: "rgba(0,0,0,0.9)",
      }}
      onClick={() => {
        props.setRulesVisible(false);
      }}
    >
      <h2>X</h2>
    </div>
  );
}

function WeeklyFlow() {
  return (
    <>
      <h3>Weekly Flow</h3>
      <TitleList
        title="Monday-Tuesday"
        bullets={[
          "Previous Week Recapped",
          "New Quests posted. All quests have a rank, and whether they are for individuals or clans.",
          "Villagers send Research prompts to League Master",
        ]}
      />

      <TitleList
        title="Wednesday-Thursday"
        bullets={[
          "Adventurers sign up for quests. They can pick more than one. Clans or Adventurers can only claim quests within 1 rank of their own.",
          "League Master will respond to all Research prompts",
          "Villagers send in roster picks to League Master",
        ]}
      />

      <TitleList
        title="Fri-Sun"
        bullets={[
          "Adventurers do the quests, things happen, some stuff is worth points. See below.",
          "League Master will put rosters online",
          "Villagers pray that they made the right picks!",
        ]}
      />
    </>
  );
}

function TitleList(props: { title: string; bullets: string[] }) {
  const { title, bullets } = props;
  const items = bullets.map((b, i) => (
    <li key={i} style={{ textAlign: "left" }}>
      {b}
    </li>
  ));
  return (
    <>
      <div>
        <b>{title}</b>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "5px",
          listStylePosition: "outside",
        }}
      >
        <ul>{items}</ul>
      </div>
    </>
  );
}

function PointDescriptions(props: {
  rules: IRules;
  rankMultipliers: { [rank: string]: number };
}) {
  const { rules, rankMultipliers } = props;
  const sectionStyle = { padding: "5px" };
  const formattedRules = rules.raw.map((rule, i) => {
    return (
      <div key={"rule" + i}>
        <b>{rule.metricRuleId}: </b>
        <span>
          {rule.questMetricType} X {rule.multiplier}
        </span>
      </div>
    );
  });

  return (
    <>
      <h3>How Points Work - </h3>
      <div style={sectionStyle}>
        <b>{QuestMetricType.Count}: </b>
        <span>Simply the count X a multiplier</span>
        <div>
          Ex: The Adventurer disarmed 3 traps. 3 traps X 2 points per trap = 6
          points
        </div>
      </div>
      <div style={sectionStyle}>
        <b>{QuestMetricType.PointByRank}: </b>
        <span>
          Similar to count except it also scales relative to the rank.{" "}
        </span>
        Values -- {JSON.stringify(rankMultipliers)}
        <div>
          Ex: The Adventurer killed 5 Rank C monsters. 5 monsters X 0.25 base
          points X 4 points for C Rank = 5 points
        </div>
      </div>
      <div style={sectionStyle}>
        <b>{QuestMetricType.GoldConvert}: </b>
        <span>A point for every decimal place.</span>
        <div>Ex1: 5g = 1pt</div>
        <div>Ex2: 1234g = 4pt</div>
      </div>

      <h3>All Points - </h3>
      {formattedRules}
    </>
  );
}
