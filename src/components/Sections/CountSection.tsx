import styled from 'styled-components'

import { Awards } from 'components/Awards'
import { ContentLogo } from 'components/ContentLogo'
import { Metrics } from 'components/Metrics'

const CountSectionContainer = styled.section`
  position: relative;
  width: 1200px;
  margin: 0 auto;
`
export const CountSection: React.FC = () => {
  return (
    <CountSectionContainer>
      <ContentLogo />
      <Metrics />
      <Awards />
    </CountSectionContainer>
  )
}
