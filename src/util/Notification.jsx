import styled from "styled-components";
import StyledPopupDiv from "../styles/styled_DivPopup";

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

function YouWon() {
  return (
    <StyledDiv3>
      <p>You Won!</p>
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
  width: 220px;
  height: 100px;
  background-color: #3b4252;
`;

export { TryAgain, YouFound, YouWon };
