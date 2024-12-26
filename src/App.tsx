import {Routes, Route } from 'react-router-dom';
import HeaderComponent from './components/Header.tsx';
import HomeComponent from './components/Home.tsx';
import styled from 'styled-components';
import {COLORS} from './shared/colors'

const MainWrapper = styled.main`
  background-color: ${COLORS.primary_bg};
  color: ${COLORS.primary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`




function App() {
  return (
    <>
      <HeaderComponent />
      <MainWrapper>
        <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </MainWrapper>
      

    </>
  )
}


function About () {
  return <div>
    about
  </div>
}
function Contact () {
  return <div>
    contact
  </div>
}




export default App
