import React, { useEffect, useState } from "react";
import axios from "axios";
let Dataurl = `https://9pw8sg-3000.csb.app/`;
let urlDetail = axios.get(Dataurl);

function Home01({ ST_Home }) {
  const [Rimg, setRimg] = useState();
  useEffect(() => {
    urlDetail.then((res) => setRimg(res.data.Home[4]._02RImage));
  }, [setRimg]);

  return (
    <div className="Home01">
      <div className="L">
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
