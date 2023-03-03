import styled from "styled-components";

export const StyledCenterDiv = styled.div`
 display: flex;
 justify-content: center;
 text-align: center;
 >*{margin-left:30px;}
`
export const StyledCenterDivCol = styled(StyledCenterDiv)`
   flex-direction: column;
 align-items: center;
`
