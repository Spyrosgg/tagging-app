import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import characters from "../lib/all.png";
import styled from "styled-components";
import { StyledButton } from "../styles/styled_Button";
import LayoutSub from "../util/layoutSub";

function Layout({ inGame }) {
  // console.log("Layout > runs");
  const [selectedChr, setSelectedChr] = useState("");
  const [winDb, setWinDb] = useState({
    waldo: false,
    woof: false,
    wenda: false,
    wizard: false,
    odlaw: false,
  });

  function handleReset() {
    // console.log("laytot lincked");
    setWinDb({
      waldo: false,
      woof: false,
      wenda: false,
      wizard: false,
      odlaw: false,
    });
    setSelectedChr("")
  }

  function renderComponent() {
    // console.log('renderCom > runs');
    switch (inGame) {
      case "inGame":
        return <Link to="/tagging-app/" onClick={handleReset}>
          {"Reset Game"}
        </Link>;
      case "inRules":
        return <Link to="/tagging-app/" onClick={handleReset}>
          {"I'm ready to Play"}
        </Link>;
      case "inScore":
        return <Link to="/tagging-app/" onClick={handleReset}>
          {"Reset Game"}
        </Link>;
      case false:
        return <Link to="/tagging-app/">
          {"Where's Waldo"}
        </Link>;
      default:
      //   return <Link to="/tagging-app/">
      //     {"Where's Waldo"}
      //   </Link>;
        break;
    }
  }

  return (
    <>
      <header className="App-header">
        <div className="title">
          {renderComponent()}
          {/* <Link to="/tagging-app/" onClick={handleReset}>
            {!inGame ? "Where's Waldo" : "Play Again"}
          </Link> */}
        </div>
        <div className="Choose-chrs">
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
      {inGame==="inGame" && (
        <LayoutSub
          selectedChr={selectedChr}
          setSelectedChr={setSelectedChr}
          winDb={winDb}
          setWinDb={setWinDb}
        />
      )}
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
