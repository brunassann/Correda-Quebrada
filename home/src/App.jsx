import './App.css'
import Footer from './componente/footer'
import Header from './componente/header'
import PaginaEntrada from './componente/paginaEntrada'
import PaginaPersonalizacao from './componente/paginaPersonalizacao'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<PaginaEntrada />} />
        <Route path="/personalizar" element={<PaginaPersonalizacao />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
