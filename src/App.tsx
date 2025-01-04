import { useState } from "react";
import "./App.css";
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from "./consts";

function App() {
  const [num, setNum] = useState<number>(0);
  const skillStrList = SKILL_LIST.reduce(
    (acc, skill) => `${acc}"${skill.name}" | `,
    ""
  );
  console.log("jmw skillStrList", skillStrList);
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>React Coding Exercise</h1>
      </header>
      <section className='App-section'>
        <div>
          Value:
          {num}
          <button>+</button>
          <button>-</button>
        </div>
      </section>
    </div>
  );
}

export default App;
