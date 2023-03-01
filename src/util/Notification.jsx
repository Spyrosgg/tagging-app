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
  return (
    <StyledDiv2>
      <p>
        Correct! You found
        <br />
        <strong>{info}</strong>
      </p>
    </StyledDiv2>
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


export { TryAgain, YouFound };
