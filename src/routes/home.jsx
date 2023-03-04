import "../App.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import winter from "../lib/wheres-waldo-winter.jpg";
import summer from "../lib/wheres-waldo-summer.jpg";

function Home({ setInGame }) {
  // console.log('Home > runs');
  useEffect(() => {
    setInGame(false);
  }, []);
  return (
    <>
      <div className="body">
        <Link
          to="/tagging-app/game/winter"
          state={{ season: "winter" }}
          className="body-item"
        >
          WINTER
          <img src={winter} alt="winter" />
        </Link>
        <Link
          to="/tagging-app/game/summer"
          state={{ season: "summer" }}
          className="body-item"
        >
          SUMMER
          <img src={summer} alt="summer" />
        </Link>
      </div>
    </>
  );
}

export default Home;
