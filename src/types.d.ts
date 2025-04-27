declare type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
}

declare type Cardapio = {
  cardapio: Cardapio[]
  tipo: string
  titulo: string
  capa: string
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}
