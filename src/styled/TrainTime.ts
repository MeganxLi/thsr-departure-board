import styled from "styled-components";
import { colors } from "./Variables";

export const StyleUl = styled.ul<{ ListLength: number }>`
   display: grid;
   grid-template-columns: repeat(${(props) => props.ListLength}, 1fr);
`;

export const StyleStationItem = styled.li`
   position: relative;
   text-align: center;

   &::after {
      content: "";
      position: absolute;
      background: #fff;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      bottom: -8px;
      left: 50%;
      transform: translate(-50%, -50%);
   }
`;

export const StyledStationRote = styled.div`
   display: flex;
   width: 100%;
`;

export const StyleStationRoteSpan = styled.span<{ opacity: number }>`
   flex: 1 1;
   background-color: ${colors.textColor};
   height: 0.25rem;
   margin-top: 0.5rem;
   opacity: ${({ opacity }) => opacity};
`;
