import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Perfil from './pages/Perfil'
import Header from './componests/Header'
import Apresentacao from './componests/Apresentacao'

const Rotas = () => {
  const location = useLocation()
  const headerType = location.pathname === '/Perfil' ? 'Perfil' : 'Home'
  const ApresentacaoType = location.pathname === '/Perfil' ? 'Perfil' : 'Home'

  return (
    <>
      <Header type={headerType} />
      <Apresentacao type={ApresentacaoType} />
      <div className="Container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Perfil" element={<Perfil />} />
        </Routes>
      </div>
    </>
  )
}

export default Rotas
