import "../App.css";
import { Link } from "react-router-dom";
import winter from "../lib/wheres-waldo-winter.jpg";
import summer from "../lib/wheres-waldo-summer.jpg";

function Home({setInGame}) {
  setInGame(false);
  return (
    <>
      <div className="body">
        <Link to="/tagging-app/game/winter" className="body-item" >
          WINTER
          <img src={winter} alt="winter" />
        </Link>
        {/* <Link to="/game/summer" className="body-item">
          SUMMER
          <img src={summer} alt="summer" />
        </Link> */}
      </div>
    </>
  );
}

export default Home;
