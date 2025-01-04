import { useState, useMemo } from "react";
import "./App.css";
import { ATTRIBUTE_LIST, SKILLS, MAX_ATTRIBUTE_TOTAL } from "./consts";

import { AttributeIncrement } from "./components/AttributeIncrement";
import { SkillIncrement } from "./components/SkillIncrement";
import { SkillOverview } from "./components/SkillOverview";

import { useCharacterStore } from "./state";
import { AttributeString, SkillString } from "./types";

const AttributeOverview = () => {
  const { totalAttributePoints } = useCharacterStore();
  return (
    <h2>
      Attribute points : {totalAttributePoints} / {MAX_ATTRIBUTE_TOTAL}
    </h2>
  );
};

const CharacterOverview = () => {
  const { characterClass } = useCharacterStore();
  const characterType =
    characterClass != ""
      ? characterClass
      : "Does not meet any minimum class requirements.";
  return <h2>Character Type : {characterType}</h2>;
};

function App() {
  const [num, setNum] = useState<number>(0);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>React Coding Exercise</h1>
      </header>
      <section className='App-section'>
        <CharacterOverview />
      </section>
      <section className='App-section'>
        <AttributeOverview />
        {ATTRIBUTE_LIST.map((attribute) => (
          <AttributeIncrement key={attribute} attribute={attribute} />
        ))}
      </section>
      <section className='App-section'>
        <SkillOverview />
        {SKILLS.map((skill) => (
          <SkillIncrement key={skill} skill={skill} />
        ))}
      </section>
    </div>
  );
}

export default App;
