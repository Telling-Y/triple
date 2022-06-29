import styled from 'styled-components'

const MetricsContainer = styled.div`
  margin-left: 623px;
  padding-top: 150px;
`
const MetricItemWrap = styled.div`
  font-size: 36px;
  letter-spacing: -1px;
  margin-bottom: 20px;
  strong {
    font-weight: bold;
    color: rgb(58, 58, 58);
  }
`
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
