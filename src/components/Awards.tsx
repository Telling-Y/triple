import styled from 'styled-components'

const AwardContainer = styled.div``

const PlayStoreBox = styled.div``

const AppStoreBox = styled.div``

export const Awards: React.FC = () => {
  return (
    <AwardContainer>
      <PlayStoreBox>
        2018 구글 플레이스토어
        <br />
        올해의 앱 최우수상 수상
      </PlayStoreBox>
      <AppStoreBox>
        2018 애플 앱스토어
        <br />
        오늘의 여행앱 선정
      </AppStoreBox>
    </AwardContainer>
  )
}
