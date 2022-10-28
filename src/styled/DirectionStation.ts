import styled from 'styled-components'
import { colors } from './Variables'

export const StyleDirectionPlatform = styled.p<{ $direction: boolean }>`
  color: ${(props) => (
    props.$direction ? colors.blurColor : colors.greenColor
  )};
  text-align: ${(props) =>
    props.$direction ? 'end' : 'left'
  };
  font-size: 1.5rem;
  font-weight: bold;
`

export const StyledNewTrainTime = styled.div<{ $direction: boolean, $comingSoon: boolean }>`
  border-radius: 100px ;
  border: ${props => props.$comingSoon
    ? `3px solid ${colors.textColor}`
    : `1px solid ${colors.grayColor}`
  };
  align-items: center;
  position: relative;
  
  &::before{
    content: "";
    position: absolute;
    background: ${props => props.$comingSoon ? colors.textColor : colors.backgroundColor};
    border: 1px solid ${props => props.$comingSoon ? colors.textColor : colors.grayColor};
    width: 10px;
    height: 10px;
    border-radius: 50%;
    left: -6px;
  }

  span:nth-child(even){
    color: ${props => props.$direction ? colors.blurColor : colors.greenColor}
  }
`
