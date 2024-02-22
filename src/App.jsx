import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

// Componets all page
import Header from "./Conponents/Header";
import Home from "./Conponents/Home";
import Footer from "./Conponents/Footer";
let urlDetail = axios.get(`https://9pw8sg-3000.csb.app/`);

function App() {
  const [ST_Header, setHeader] = useState([]);
  const [ST_Footer, setFooter] = useState([]);

  useEffect(() => {
    urlDetail.then((res) => setHeader(res.data.Header));
    urlDetail.then((res) => setFooter(res.data.Footer));
  }, [setHeader, setFooter]);

  return (
    <div className="Main">
      <div className="MainName">{ST_Header.map((e) => e.MainName)}</div>
      {/* Body all Contents */}
      <div className="Contener">
        <Header ST_Header={ST_Header} />

        {/* Pages */}
        <Home  />
      </div>
      {/* Footer */}
      <Footer ST_Footer={ST_Footer} />
    </div>
  );
}
export default App;
