import styled from 'styled-components'

import { useAnimateBox } from 'hooks/useAnimateBox'
import { AnimateProp } from 'interface/AnimateBox.type'

const MetricsContainer = styled.div<AnimateProp>`
  margin-left: 623px;
  padding-top: 150px;
  opacity: ${(props) => (props.isVisible ? '1' : '0')};
  transform: translateY(${(props) => (props.isTranslateY ? '0px' : '5px')});
  transition: all 700ms ease-in-out 200ms;
`
const MetricItemWrap = styled.div`
  margin-bottom: 20px;
  font-size: 36px;
  letter-spacing: -1px;
  color: rgb(58, 58, 58);
  strong {
    font-weight: bold;
  }
`
export const Metrics: React.FC = () => {
  const { opacity, moveBool } = useAnimateBox()
  return (
    <MetricsContainer isVisible={opacity} isTranslateY={moveBool}>
      <MetricItemWrap>
        <strong>
          <span>700</span>만 명
        </strong>
        의 여행자
      </MetricItemWrap>
      <MetricItemWrap>
        <strong>
          <span>100</span>만 개
        </strong>
        의 여행 리뷰
      </MetricItemWrap>
      <MetricItemWrap>
        <strong>
          <span>470</span>만 개
        </strong>
        의 여행 일정
      </MetricItemWrap>
    </MetricsContainer>
  )
}
