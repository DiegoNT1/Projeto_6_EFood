import { useEffect, useState } from 'react'
import { Imagem, Titulo, TituloCategoria, Infos } from './styles'
import { useParams } from 'react-router-dom'

type Restaurante = {
  titulo: string
  tipo: string
  capa: string
}

const Hero = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<Restaurante>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data) => setRestaurante(data))
  }, [id])

  if (!restaurante) {
    return <p>Carregando...</p>
  }

  return (
    <Imagem style={{ backgroundImage: `url(${restaurante.capa})` }}>
      <Infos>
        <TituloCategoria>{restaurante.tipo}</TituloCategoria>
        <Titulo>{restaurante.titulo}</Titulo>
      </Infos>
    </Imagem>
  )
}

export default Hero
