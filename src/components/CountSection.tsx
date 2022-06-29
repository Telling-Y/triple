import styled from 'styled-components'

import { Awards } from './Awards'
import { ContentLogo } from './ContentLogo'
import { Metrics } from './Metrics'

const CountSectionContainer = styled.section``

const CountSection: React.FC = () => {
  return (
    <CountSectionContainer>
      <ContentLogo />
      <Metrics />
      <Awards />
    </CountSectionContainer>
  )
}
export default CountSection
