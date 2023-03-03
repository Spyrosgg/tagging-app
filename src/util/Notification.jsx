import styled from "styled-components";
import StyledPopupDiv from "../styles/styled_DivPopup";
import { StyledButton } from "../styles/styled_Button";
import { Link } from "react-router-dom";

function TryAgain({ info }) {
  const name = info[0].toUpperCase() + info.substr(1);
  return (
    <StyledDiv1>
      <p>
        That's not <strong>{name}</strong>
        <br />
        Try again
      </p>
    </StyledDiv1>
  );
}

function YouFound({ info }) {
  const name = info[0].toUpperCase() + info.substr(1);
  return (
    <StyledDiv2>
      <p>
        Correct! You found
        <br />
        <strong>{name}</strong>
      </p>
    </StyledDiv2>
  );
}

function YouWon({time}) {
  return (
    <StyledDiv3>
      <p>You Won!</p>
      <p>your time is:{time}</p>
      <StyledButton>
        <Link to="/tagging-app/score"> Score</Link>
      </StyledButton>
    </StyledDiv3>
  );
}

const StyledDiv1 = styled(StyledPopupDiv)`
  width: 200px;
  height: 100px;
  background-color: red;
`;
const StyledDiv2 = styled(StyledPopupDiv)`
  width: 220px;
  height: 100px;
  background-color: green;
`;
const StyledDiv3 = styled(StyledPopupDiv)`
  width: 250px;
  height: 200px;
  background-color: #3b4252;
`;

export { TryAgain, YouFound, YouWon };
