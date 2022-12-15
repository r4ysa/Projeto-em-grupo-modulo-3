import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Alunos from './pages/Alunos'
import Professores from './pages/Professores'
import Turmas from './pages/Turmas'
import Matricula from './pages/Matricula'

import Container from './layout/Container'
import NavBar from './layout/NavBar'
import Footer from './layout/Footer'

function App() {
  return (
    <Router>
      
      <NavBar />

      <Container customClass="min-height">

      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/alunos' element={<Alunos/>} />
      <Route path='/professores' element={<Professores/>} />
      <Route path='/turmas' element={<Turmas/>} />
      <Route path='/matricula' element={<Matricula/>} />
      </Routes>

      </Container>
      
      <Footer />
    
    </Router>
  );
}

export default App;
