import styled from 'styled-components'

import { TRIPLE_LOGO } from '../constants/imageConstants'

const ContentLogoBox = styled.div`
  width: 400px;
  height: 338px;
  padding-top: 280px;
  background-image: url(${TRIPLE_LOGO});
  background-size: 400px 338px;
  background-repeat: no-repeat;
  text-align: center;
  font-family: sans-serif;
  font-size: 15px;
  color: rgba(58, 58, 58, 0.7);
`

export const ContentLogo: React.FC = () => {
  return <ContentLogoBox>2021년 12월 기준</ContentLogoBox>
}
