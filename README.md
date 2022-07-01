## Triple 사전 과제


### 데모 및 배포


![데모](https://user-images.githubusercontent.com/82327230/176841933-f4a71049-18e5-4531-8202-b1b549bbb4e6.gif)

- 배포 링크: <a href="https://62be75997cb06a07f2013b83--remarkable-moonbeam-d3aa6f.netlify.app/" target="_blank">사전과제 배포 링크</a>


## 사용 기술 및 구현 기능

### 사용 기술
><img src="https://img.shields.io/badge/React.js-61DAFB?style=for-the-badge&logo=React&logoColor=white"/>&nbsp;<img src="https://img.shields.io/badge/styledcomponent-CC6699?style=for-the-badge&logo=sass&logoColor=white"/>
>린팅,포멧팅 관련해 triple에서 제공한 eslint-config-triple이 사용되었습니다.
- 해당 라이브러리는 C-R-A와의 react-script 버젼 이슈로 인해 react-script의 버젼을 '4.0.3'으로 낮춘 상태로 적용되었습니다.
## 구현 기능

### 컴포넌트 등장 애니메이션
- 컴포넌트가 생성될 때 애니메이션을 위한 상태값 반환 함수가 시작됩니다.
- 각 컴포넌트의 등장 애니메이션 시작 시간을 100ms 차이나도록 지정해 '좌측 이미지 -> 지표 문구 -> 수상 내역' 순서에 맞춰 css가 적용됩니다.
### 지표 문구 애니메이션
- useCounter hook에 다른 인자값이 들어가도 같은 시간에 종료될 수 있도록 상태값의 변경 정도를 퍼센티지로 적용했습니다.
- 점차 느려지도록 하는 util 함수(easeOutExpo)는 <a herf="https://easings.net/ko" target="_blank">해당 레퍼런스</a>를 참고했습니다.
#### 지표 문구 상태값을 변경하는 로직
 애니메이션을 진행시킬 고정된 총 시간(duration)에 화면에 보여줄 속도(viewSpeed)를 나눠 보여줄 상태값(returnCount)의 단계값(frame)을 구합니다.
 이후 전달받은 지표의 최대값(maximum)에 frame을 곱해 상태값(returnCount)을 반환합니다. 
## Reference

참조: <a href="https://easings.net/ko" target="_blank">easeOutExpo</a>

