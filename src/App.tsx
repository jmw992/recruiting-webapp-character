import { useState, useMemo } from "react";
import "./App.css";
import { ATTRIBUTE_LIST, SKILLS, MAX_ATTRIBUTE_TOTAL } from "./consts";

import { AttributeIncrement } from "./components/AttributeIncrement";
import { SkillIncrement } from "./components/SkillIncrement";
import { SkillOverview } from "./components/SkillOverview";
import { CharacterBaseTemplates } from "./components/CharacterBaseTemplates";
import { CharacterOverview } from "./components/CharacterOverview";
import { CharacterUploadDownload } from "./components/CharacterUploadDownload";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { useCharacterStore } from "./state";

const AttributeOverview = () => {
  const { totalAttributePoints } = useCharacterStore();
  return (
    <h2>
      Attribute points : {totalAttributePoints} / {MAX_ATTRIBUTE_TOTAL}
    </h2>
  );
};

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <header className='App-header'>
          <h1>React Coding Exercise</h1>
        </header>
        <section className='App-section'>
          <CharacterOverview />
          <CharacterBaseTemplates />
          <br />
          <CharacterUploadDownload />
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
    </QueryClientProvider>
  );
}

export default App;
