import { useEffect, useState } from 'react'
import PerfilProducts from '../../componests/PerfilProducts'
import { useParams } from 'react-router-dom'

export type Cardapio = {
  titulo: string
  capa: string
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

const Perfil = () => {
  const { id } = useParams()
  const [perfil, setPerfil] = useState<Cardapio[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setPerfil(res.cardapio))
  }, [id])

  return <PerfilProducts perfilProp={perfil} />
}

export default Perfil
