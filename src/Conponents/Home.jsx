import Home01 from "./Home/Home01";
import "./Home/Home.css";
import Form from "./Form";

function Home({ ST_Home }) {
  return (
    <div className="HomePages">
      <Home01 ST_Home={ST_Home} />
 
    </div>
  );
}

export default Home;
