import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import characters from "../lib/all.png";
import styled from "styled-components";
import { StyledButton } from "../styles/styled_Button";
import LayoutSub from "../util/layoutSub";

function Layout({ inGame, isPaused }) {
  const [selectedChr, setSelectedChr] = useState("");
  const [winDb, setWinDb] = useState({
    waldo: false,
    woof: false,
    wenda: false,
    wizard: false,
    odlaw: false,
  });

  return (
    <>
      <header className="App-header">
        <div className="title">
          <Link to="/tagging-app/">{!inGame ? "Where's Waldo" : "Home"}</Link>
        </div>
        <div className="Choose-chrs">
          {/* <div className="chrs-names">
            <span>Waldo</span>
            <span>Woof</span>
            <span>Wenda</span>
            <span>Wizard</span>
            <span>Odlaw</span>
          </div> */}
          <img src={characters} alt="characters" />
        </div>
        <div className="score-board">
          <StyledButton>
            <Link to="/tagging-app/score"> Score</Link>
          </StyledButton>
          <StyledButtonV1>
            <Link to="/tagging-app/rules"> How to play</Link>
          </StyledButtonV1>
        </div>
      </header>
      { inGame && <LayoutSub
        selectedChr={selectedChr}
        setSelectedChr={setSelectedChr}
        winDb={winDb}
        setWinDb={setWinDb}
        isPaused={isPaused}
      /> }
      <Outlet context={[selectedChr, winDb, setWinDb]} />
    </>
  );
}

const StyledButtonV1 = styled(StyledButton)`
  /* font-size: 0.9rem; */
  /* background: none; */
  font-style: italic;
  border-right: 1px solid white;
`;
export default Layout;
