import React from "react";
import "./Header.css";

import "./Header.css";
import { GoLock } from "react-icons/go";
import styled from "styled-components";
function Header({ ST_Header }) {
  const IMG = styled.div`
  background-image: url(${ST_Header.map((e) => e.CompanyName)});
  width: 60px;
  height: 60px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
`;

  return (
    <header className="Header">
      <div className="L">
        <IMG />
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
