import styled from 'styled-components'
import { colors } from './Variables'

export const StyleNewStepper = styled.span<{
  idx: number
  $direction: boolean
  $hiddenStation: boolean
  $sameStation: boolean
  listLength: number
}>`
  position: relative;

    &:after {
      content: "";
      position: absolute;
      background: ${props => props.$sameStation ? colors.textColor : colors.grayColor};
      width: 10px;
      height: 10px;
      border-radius: 50%;
      bottom: -8px;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      ${(props) => (props.$hiddenStation && 'visibility: hidden;')};
    }
  }

  &.select-station ~ span:after {
    background: ${props => props.$direction ? colors.blurColor : colors.greenColor}
  }

  .new-station-route-left, .new-station-route-right {
    display: block;
    background: ${colors.grayColor};
    height: 0.25rem;
    opacity: 1;
    flex: 1;
  }

  .new-station-route-left {
    ${props => props.idx === 0 && 'opacity: 0'};
  }

  .new-station-route-right {
    ${props => props.idx === props.listLength - 1 && 'opacity: 0'};
  }

  &.select-station {
    > .new-station-route-right {
      background: ${props => props.$direction ? colors.blurColor : colors.greenColor};
    }

    ~ span{
      > .new-station-route-left, >.new-station-route-right {
        background: ${props => props.$direction ? colors.blurColor : colors.greenColor};
      }
    }
  }

  &.last-station  {
    > .new-station-route-right {
      opacity: 0;
    }

    ~ span {
      > .new-station-route-left, >.new-station-route-right {
        opacity: 0;
      }
    } 
  }
`
