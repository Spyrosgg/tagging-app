import styled from "styled-components";
import { StyledButton } from "../styles/styled_Button";

function LayoutSub({ selectedChr, setSelectedChr, winDb,  setWinDb }) {
 
  const CurrentStyledButton = styled(StyledButton)`
  border-radius: 0;
  margin-left: 10px;
  background: ${(props) =>
    winDb[props.chr] === true
      ? "green"
      : props.chr === selectedChr
      ? "red"
      : "none"};

  font-size: 1rem;
`;

  return (
    <>
      <div className="sticky">
        <div className="selection-bar">
          <em>
            Choose a character <span>☞</span>
          </em>
          <div>
            <CurrentStyledButton
              chr={"waldo"}
              onClick={() => setSelectedChr("waldo")}
            >
              Waldo
            </CurrentStyledButton>
            <CurrentStyledButton
              chr={"woof"}
              onClick={() => setSelectedChr("woof")}
            >
              Woof
            </CurrentStyledButton>
            <CurrentStyledButton
              chr={"wenda"}
              onClick={() => setSelectedChr("wenda")}
            >
              Wenda
            </CurrentStyledButton>
            <CurrentStyledButton
              chr={"wizard"}
              onClick={() => setSelectedChr("wizard")}
            >
              Wizard
            </CurrentStyledButton>
            <CurrentStyledButton
              chr={"odlaw"}
              onClick={() => setSelectedChr("odlaw")}
            >
              Odlaw
            </CurrentStyledButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default LayoutSub;
