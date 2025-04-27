import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Perfil from './pages/Profile'
import Header from './componests/Header'

const Rotas = () => {
  const location = useLocation()
  const headerType = location.pathname.startsWith('/Perfil') ? 'Perfil' : 'Home'

  return (
    <>
      <Header type={headerType} />
      <div className="Container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Perfil/:id" element={<Perfil />} />
        </Routes>
      </div>
    </>
  )
}

export default Rotas
