import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./routes/layout";
import Home from "./routes/home";
import Score from "./routes/score";
import NoMatch from "./routes/noMatch";
import GameCard from "./routes/gameCard";
import Rules from "./routes/rules";

function App() {
  const [inGame, setInGame] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route path="/tagging-app/" element={<Layout inGame={inGame} />}>
          <Route index element={<Home setInGame={setInGame} />} />
          <Route path="game/:id" element={<GameCard setInGame={setInGame} />} />
          <Route path="score" element={<Score />} />
          <Route path="rules" element={<Rules />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
