import React, { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios.get(`https://9pw8sg-3000.csb.app/`).then((res) => setState(res.data));
  }, [setState]);
  return (
    <div>
      <h1>app</h1>
      <span>{state.map((e) => e.name)}</span>
      {state.map((person) => (
        <li>{person.name}</li>
      ))}
    </div>
  );
}
export default App;
