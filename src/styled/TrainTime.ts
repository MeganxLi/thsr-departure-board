import styled from 'styled-components'
import { colors } from './Variables'

export const StyleTrainInfoText = styled.span<{ $idx: number, $direction: boolean }>`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => props.$idx === 1 && (props.$direction ? colors.blurColor : colors.greenColor)};
`

export const StyleUl = styled.ul<{ ListLength: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.ListLength}, 1fr);
`

export const StyleStationItem = styled.li<{ $direction: boolean, $hiddenStation: boolean, $sameStation: boolean }>`
  position: relative;
  text-align: center;
  ${(props) => props.$hiddenStation && 'visibility:hidden'}

  &::after {
    content: "";
    position: absolute;
    background: ${(props) => (props.$sameStation ? colors.textColor : colors.grayColor)};
    width: 10px;
    height: 10px;
    border-radius: 50%;
    bottom: -8px;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &.select-station {
    ~ li .station-name {
      color: ${colors.textColor};
    }

    ~ li .station-route span,
    ~ li::after,
    .station-route .station-route-right {
      background-color: ${(props) => (props.$direction ? colors.blurColor : colors.greenColor)};
    }
  }

  .station-name {
    color: ${colors.grayColor};
    color: ${(props) => props.$sameStation && (props.$direction ? colors.blurColor : colors.greenColor)};
    ${(props) => props.$hiddenStation && 'visibility: hidden;'};
  }
`

export const StyledStationName = styled.div<{ $hiddenStation: boolean }>``

export const StyledStationRote = styled.div`
  display: flex;
  width: 100%;
`

export const StyleStationRoteSpan = styled.span<{ opacity: number }>`
  flex: 1 1;
  background-color: ${colors.grayColor};
  height: 0.25rem;
  margin-top: 0.5rem;
  opacity: ${({ opacity }) => opacity};
`
