import React, { useEffect, useState } from "react";
import axios from "axios";
let urlDetail = axios.get(`https://9pw8sg-3000.csb.app/`);

function Home01() {
  const [Rimg, setRimg] = useState();
  const [ST_Home, setHome] = useState([]);
  useEffect(() => {
    urlDetail.then((res) => setRimg(res.data.Home[4]._02RImage));
    urlDetail.then((res) => setHome(res.data.Home));
  }, []);

  return (
    <div className="Home01">
      <div className="L">
        {ST_Home[0]._01Company}
        <h1>{ST_Home.map((e) => e._01Company)}</h1>
        <h4>
          {ST_Home.map((e) => e._01First)}
          <h4 className="helf-name"> {ST_Home.map((e) => e._01Lest)}</h4>
        </h4>
        <p className="Content">{ST_Home.map((e) => e._01Detail)}</p>
        <button>Click Me</button>
      </div>
      <img src={Rimg} />
    </div>
  );
}

export default Home01;
