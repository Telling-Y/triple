import GlobalStyle from './style/GlobalStyle'

import { CountSection } from 'components/Sections/CountSection'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <CountSection />
    </>
  )
}

export default App
