import { useState } from "react";
import styled from "styled-components";
import StyledPopupDiv from "../styles/styled_DivPopup";
import { StyledButton } from "../styles/styled_Button";
import { Form, Link } from "react-router-dom";
import { addName } from "./updateDoc";

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

function YouWon({ time, currentID }) {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(true);
  // console.log("YouWon > runs");

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    console.log("submitted?", submitted);
    addName({ name, currentID });
    // console.log("name submitted", name);
    // console.log("with ID", currentID);
    e.preventDefault();
    setSubmitted(false);
  }

  return (
    <div>
      <StyledDiv3>
        <p className="boldy">You Won!</p>
        <p>
          <span style={{ fontSize: "1.2rem" }}>{name}</span> your time is:{" "}
          <em>{time}</em>
        </p>
        {submitted && (
          <form method="post" onSubmit={handleSubmit}>
            <input
              // type="text"
              minlength="2"
              maxlength="8"
              className="input"
              name="currentName"
              placeholder="Add your name"
              value={name}
              onChange={handleChange}
            />
            <button className="submitB" type="submit">
              Submit
            </button>
          </form>
        )}
        <StyledButtonV1>
          <Link to="/tagging-app/score">Goto Score</Link>
        </StyledButtonV1>
      </StyledDiv3>
    </div>
  );
}

const StyledButtonV1 = styled(StyledButton)`
  margin-top: 15px;
`;
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
  height: 250px;
  background-color: #3b4252;
  font-size: 1rem;
  .boldy {
    font-size: 1.5rem;
  }
  .input {
    color: black;
    width: 150px;
  }
  .submitB {
    color: #3b4252;
  }
`;

export { TryAgain, YouFound, YouWon };
