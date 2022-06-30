import styled from 'styled-components'

import { TRIPLE_LOGO } from '../constants/imageConstants'

import { AnimateProp } from 'interface/AnimateBox.type'
import { useAnimateBox } from 'hooks/useAnimateBox'

const ContentLogoBox = styled.div<AnimateProp>`
  position: absolute;
  top: 150px;
  width: 400px;
  height: 100px;
  padding-top: 280px;
  background-image: url(${TRIPLE_LOGO});
  background-size: 400px 338px;
  background-repeat: no-repeat;
  text-align: center;
  font-family: sans-serif;
  font-size: 15px;
  color: rgba(58, 58, 58, 0.7);
  opacity: ${(props) => (props.isVisible ? '1' : '0')};
  transform: translateY(${(props) => (props.isTranslateY ? '0px' : '5px')});
  transition: all 700ms ease-in-out 100ms;
`

export const ContentLogo: React.FC = () => {
  const { opacity, moveBool } = useAnimateBox()
  return (
    <ContentLogoBox isVisible={opacity} isTranslateY={moveBool}>
      2021년 12월 기준
    </ContentLogoBox>
  )
}
