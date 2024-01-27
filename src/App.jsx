import React, { useEffect, useState } from "react";
import axios from "axios"; //สำหรับดึงข้อมูลหลังบ้าน

function App() {
  const [PateDetai, setPateDetai] = useState([]);
  const [state2, setState2] = useState([]);
  useEffect(() => {
    let url = `https://9pw8sg-3000.csb.app/`;
    axios.get(url).then((res) => {
      setPateDetai(res.data.Header); //ดึงข้อมูลสำหรับ Header
      setState2(res.data.Footer); //ดึงข้อมูลสำหรับ Footer
    });
  }, [setPateDetai, setState2]);

  return (
    <div>
      {/* Header Contents */}
      <header>
        <div className="L">{PateDetai.map((e) => e.CompanyName)}</div>
        <div className="R">
          <ul>
            <li>{PateDetai.map((e) => e.Home)}</li>
            <li>{PateDetai.map((e) => e.Product)}</li>
            <li>{PateDetai.map((e) => e.About)}</li>
            <li>{PateDetai.map((e) => e.Contact)}</li>
          </ul>
        </div>
      </header>

      <h1>app</h1>
      <br />
      <br />
      <br />
      <br />
      <span>{state2.map((e) => e.head)}</span>
      <span>{state2.map((e) => e.name)}</span>
      <span>{state2.map((e) => e.head1)}</span>
    </div>
  );
}
export default App;
