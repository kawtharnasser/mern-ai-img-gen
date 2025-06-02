import styled, { ThemeProvider } from 'styled-components'
import { darkTheme } from './utils/Themes'

// React related
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Components
import Home from './pages/Home'
import CreatePost from './pages/CreatePost'
import Navbar from './components/Navbar'

const Container = styled.div`
  width: 100%;
  overflow-x: hidden;
  position: relative;
`

const Wrapper = styled.div`
  padding-bottom: 100px;
    height: 100%;

    background-color: ${({ theme }) => theme.bg};
    
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <BrowserRouter>
          <Navbar />
          <Wrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/post" element={<CreatePost />} />
            </Routes>
          </Wrapper>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  )
}

export default App
