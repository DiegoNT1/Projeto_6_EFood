class MoldelRestaurante {
  title: string
  infos: string[]
  description: string
  image: string
  id: number
  pontuacao: string
  buttomTo: string

  constructor(
    title: string,
    infos: string[],
    description: string,
    image: string,
    pontuacao: string,
    buttomTo: string,
    id: number
  ) {
    this.title = title
    this.infos = infos
    this.description = description
    this.image = image
    this.pontuacao = pontuacao
    this.buttomTo = buttomTo
    this.id = id
  }
}

export default MoldelRestaurante
