import React from "react";
import "./Header.css";

import "./Header.css";
import { useEffect, useState } from "react";
import { GoLock } from "react-icons/go";
import axios from "axios";

let Dataurl = `https://9pw8sg-3000.csb.app/`;
let urlDetail = axios.get(Dataurl);

function Header({ ST_Header }) {
  const [Rimg, setRimg] = useState();
  useEffect(() => {
    urlDetail.then((res) => setRimg(res.data.Header[1].CompanyName));
  }, [setRimg]);

  return (
    <header className="Header">
      <div className="L">
        <img className="HeaderLogo" src={Rimg} />   
      </div>
      <div className="R">
        <ul>
          <li>{ST_Header.map((e) => e.Home)}</li>
          <li>{ST_Header.map((e) => e.Product)}</li>
          <li>{ST_Header.map((e) => e.About)}</li>
          <li>{ST_Header.map((e) => e.Contact)}</li>
          <li>
            <button className="Login">
              <GoLock />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
