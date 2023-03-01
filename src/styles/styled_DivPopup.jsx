import styled from "styled-components";

const StyledPopupDiv = styled.div`
  text-align: center;
  font-size: 1.5rem;
  border-radius: 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 11;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  opacity: 0.7;
`;

export default StyledPopupDiv;