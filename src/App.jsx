import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

// Componets all
import Header from "./Conponents/Header";
import Home from "./Conponents/Home";
import Footer from "./Conponents/Footer";

let Dataurl = `https://9pw8sg-3000.csb.app/`;
let urlDetail = axios.get(Dataurl);
function App() {
  const [ST_Header, setHeader] = useState([]);
  const [ST_Footer, setFooter] = useState([]);
  const [ST_Home, setHome] = useState([]);
  useEffect(() => {
    urlDetail.then((res) => setHeader(res.data.Header));
    urlDetail.then((res) => setFooter(res.data.Footer));
    urlDetail.then((res) => setHome(res.data.Home));
  }, [setHeader, setFooter, setHome]);

  return (
    <div className="Main">
      <div className="MainName">{ST_Header.map((e) => e.MainName)}</div>
      {/* Body all Contents */}
      <div className="Contener">
        <Header ST_Header={ST_Header} />

        {/* Pages */}
        <Home ST_Home={ST_Home} />
      </div>
      {/* Footer */}
      <Footer ST_Footer={ST_Footer} />
    </div>
  );
}
export default App;
