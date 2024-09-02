
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Usuarios from './components/pages/Usuarios';
import Home from './components/pages/Home';
import TabelaDeJogos from './components/pages/TabelaDeJogos';
import Classificacao from './components/pages/Classificacao';
import Container from './components/layouts/Container'
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';



function App() {
  return (
      <Router>
        <Navbar />
        <Container customClass="min_height">
        <Routes>
          <Route exact path="/" element={ <Home />}></Route>
          <Route path="/usuarios" element={ <Usuarios />}></Route>
          <Route path="/tabeladejogos" element={<TabelaDeJogos />}></Route>
          <Route path="/classificacao" element={<Classificacao />}></Route>
        </Routes>          
        </Container>
        <Footer />
      </Router>

  );
}

export default App;
