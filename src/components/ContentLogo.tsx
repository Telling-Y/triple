import styled from 'styled-components'

import { useAnimateBox } from 'hooks/useAnimateBox'
import { TRIPLE_LOGO } from 'utils/constants/imageConstants'
import { AnimateProp } from 'utils/interface/AnimateBox.type'

const ContentLogoBox = styled.div<AnimateProp>`
  position: absolute;
  top: 150px;
  width: 400px;
  height: 100px;
  padding-top: 280px;
  text-align: center;
  font-size: 15px;
  font-family: sans-serif;
  color: rgba(58, 58, 58, 0.7);
  background-image: url(${TRIPLE_LOGO});
  background-size: 400px 338px;
  background-repeat: no-repeat;
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
