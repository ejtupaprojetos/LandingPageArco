import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/home/Home'
import Contato from './pages/contato/Contato'

// Conforme você for terminando as outras páginas, importe cada uma
// (ex: import Servicos from './pages/servicos/Servicos') e adicione
// uma nova <Route> dentro do MainLayout, seguindo o mesmo padrão do Home.
function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/servicos" element={<Servicos />} /> */}
        {/* <Route path="/portfolio" element={<Portfolio />} /> */}
        {/* <Route path="/sobre" element={<Sobre />} /> */}
        <Route path="/contato" element={<Contato />} />
      </Route>
    </Routes>
  )
}

export default App
