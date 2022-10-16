import styled from "styled-components";
import { colors } from "./Variables";

export const StyleDirectionPlatform = styled.p<{ $direction: boolean }>`
  color: ${(props) => (
    props.$direction ? colors["blurColor"] : colors["greenColor"]
  )};
  text-align: ${(props) =>
    props.$direction ? 'end' : 'left'
  };
  font-size: 1.5rem;
  font-weight: bold;
`;
