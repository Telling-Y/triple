import styled from 'styled-components'

import { APP_STORE, PLAY_STORE } from 'constants/imageConstants'
import { useAnimateBox } from 'hooks/useAnimateBox'
import { AnimateProp } from 'interface/AnimateBox.type'

const AwardContainer = styled.div<AnimateProp>`
  font-family: sans-serif;
  font-size: 14px;
  font-weight: bold;
  margin: 50px 0px 140px 623px;
  color: rgba(58, 58, 58, 0.8);
  opacity: ${(props) => (props.isVisible ? '1' : '0')};
  transform: translateY(${(props) => (props.isTranslateY ? '0px' : '5px')});
  transition: all 700ms ease-in-out 300ms;
`

const PlayStoreBox = styled.div`
  display: inline-block;
  height: 54px;
  margin-right: 39px;
  padding: 5px 0px 5px 62px;
  background-image: url(${PLAY_STORE});
  background-position: left top;
  background-repeat: no-repeat;
  background-size: 54px 54px;
  line-height: 22px;
`

const AppStoreBox = styled.div`
  display: inline-block;
  height: 54px;
  padding: 5px 0px 5px 62px;
  background-image: url(${APP_STORE});
  background-size: 54px 54px;
  background-repeat: no-repeat;
  line-height: 22px;
`

export const Awards: React.FC = () => {
  const { opacity, moveBool } = useAnimateBox()
  return (
    <AwardContainer isVisible={opacity} isTranslateY={moveBool}>
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
