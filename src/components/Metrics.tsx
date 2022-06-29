import styled from 'styled-components'

const MetricsContainer = styled.div``
const MetricItemWrap = styled.div``
export const Metrics: React.FC = () => {
  return (
    <MetricsContainer>
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
        의 여행리뷰
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
