import { Link, Outlet } from "react-router-dom";
import characters from "../lib/all.png";
import styled from "styled-components";
import { StyledButton } from "../styles/styled_Button";

function Layout({ inGame }) {
  
  return (
    <>
      <header className="App-header">
        <Link to="/">{!inGame ? "Where's Waldo" : "Home"}</Link>
        <div className="Choose-chrs">
          <div className="chrs-names">
            <span>Waldo</span>
            <span>Woof</span>
            <span>Wenda</span>
            <span>Wizard</span>
            <span>Odlaw</span>
          </div>
          <img src={characters} alt="characters" />
        </div>
        <div className="score-board">
          <StyledButton>
            <Link to="/score"> Score</Link>
          </StyledButton>
        </div>
      </header>
      <div className="selection-bar">
        <StyledButtonV1>
            <Link to="/rules"> How to play</Link>
          </StyledButtonV1>
      </div>
      <Outlet />
    </>
  );
}

const StyledButtonV1 = styled(StyledButton)`
  font-size: 0.9rem;
  background: none;
  font-style: italic;
  border-radius: 0%;
`
export default Layout;
