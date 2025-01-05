import "./App.css";
import { ATTRIBUTE_LIST, SKILLS } from "./consts";

import { AttributeIncrement } from "./components/AttributeIncrement";
import { AttributeOverview } from "./components/AttributeOverview";
import { CharacterBaseTemplates } from "./components/CharacterBaseTemplates";
import { CharacterOverview } from "./components/CharacterOverview";
import { CharacterUploadDownload } from "./components/CharacterUploadDownload";
import { SkillIncrement } from "./components/SkillIncrement";
import { SkillOverview } from "./components/SkillOverview";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>DnD Character Builder Demo</h1>
      </header>
      <section className='App-section'></section>
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
      <section className='App-section'>
        <p>
          Thank you for the review. Learn more about me on my{" "}
          <a
            target='_blank'
            style={{ color: "white" }}
            href={"https://www.bayswaterpc.com/"}
          >
            personal site
          </a>
        </p>
      </section>
    </div>
  );
}

export default App;
