import React, { useEffect, useState } from "react";
import axios from "axios";
let Dataurl = `https://9pw8sg-3000.csb.app/`;
let urlDetail = axios.get(Dataurl);
function App() {
  const [ST_Header, setHeader] = useState([]);
  useEffect(() => {
    urlDetail.then((res) => setHeader(res.data.Header));
  }, [setHeader]);
  return (
    <div>
      <h1>app</h1>
      <span>{ST_Header.map((e) => e.CompanyName)}</span>
    </div>
  );
}
export default App;
