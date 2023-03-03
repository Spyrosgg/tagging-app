import { StyledCenterDiv} from "../styles/styled_Center";
import { StyledCenterDivCol } from "../styles/styled_Center";
import waldo from "../lib/waldo.png";
import wenda from "../lib/wenda.png";
import woof from "../lib/woof.png";
import wizard from "../lib/wizard.png";
import odlaw from "../lib/odlaw.png";

function Rules() {
  return (
    <StyledCenterDivCol>
      <h3>Find one of these characters through the seasons:</h3>
      <StyledCenterDivCol>
          <StyledCenterDiv>
            <div>
              <img src={waldo} alt="waldo" />
              <br />
              Waldo
            </div>
                    <div>
            <img src={wenda} alt="wenda" />
            <br />
            Wenda
                    </div>
                    <div>
            <img src={odlaw} alt="odlaw" />
            <br />
            Odlaw
                    </div>
          </StyledCenterDiv>
        <StyledCenterDiv>
          <div>
            <img src={woof} alt="woof" />
            <br />
            Woof (usually by tail)
          </div>
        <div>
          <img src={wizard} alt="wizard" />
          <br />
          Whitebeard Wizard
        </div>
        </StyledCenterDiv>
      </StyledCenterDivCol>
    </StyledCenterDivCol>
  );
}

export default Rules;
