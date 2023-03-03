import Timer from "./Timer";
import { useState, useEffect } from "react";
import { StyledCenterDiv } from "../styles/styled_Center";
import styled from "styled-components";

function StopWatch({ isPaused }) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;

    if (!isPaused) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <StyledCenterDiv1>
      <Timer time={time} />
    </StyledCenterDiv1>
  );
}

const StyledCenterDiv1 = styled(StyledCenterDiv)`
  font-style: italic;
`;

export default StopWatch;
