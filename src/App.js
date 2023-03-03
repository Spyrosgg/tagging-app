import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./routes/layout";
import Home from "./routes/home";
import Score from "./routes/score";
import NoMatch from "./routes/noMatch";
import GameCard from "./routes/gameCard";
import Rules from "./routes/rules";
import firebaseConfig from "./util/firebaseConfig";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

function App() {
  const [inGame, setInGame] = useState(false);
  const [users, setUsers] = useState([]);
  const [isPaused, setIsPaused] = useState(false);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/tagging-app/"
          element={<Layout inGame={inGame} isPaused={isPaused} />}
        >
          <Route index element={<Home setInGame={setInGame} />} />
          <Route
            path="game/:id"
            element={
              <GameCard
                setInGame={setInGame}
                setIsPaused={setIsPaused}
                users={users}
                setUsers={setUsers}
              />
            }
          />
          <Route
            path="score"
            element={<Score db={db} users={users} setUsers={setUsers} />}
          />
          <Route path="rules" element={<Rules />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
