import styled from 'styled-components'
import { colors } from './Variables'

export const StyleNewStepper = styled.span<{ $stopStation: boolean }>`
color: ${(props) => (
    props.$stopStation ? colors.blurColor : colors.greenColor
  )};

`
