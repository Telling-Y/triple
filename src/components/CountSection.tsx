import styled from 'styled-components'

import { Awards } from './Awards'
import { ContentLogo } from './ContentLogo'
import { Metrics } from './Metrics'

const CountSectionContainer = styled.section`
  width: 1200px;
  margin: 0 auto;
`
const CountSectionWrap = styled.section``
const CountSection: React.FC = () => {
  return (
    <CountSectionContainer>
      <CountSectionWrap>
        <ContentLogo />
        <Metrics />
        <Awards />
      </CountSectionWrap>
    </CountSectionContainer>
  )
}
export default CountSection
