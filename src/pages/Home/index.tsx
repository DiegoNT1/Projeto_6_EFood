import RestaurantesList from '../../componests/RestaurantesList'
import MoldelRestaurante from '../../models/Restaurante'

import HiokiSushi from '../../assets/images/HiokiSushi.png'
import LaDolceVitaTrattoria from '../../assets/images/LaDolceVitaTrattoria.png'

const Restaurantes: MoldelRestaurante[] = [
  {
    id: 1,
    buttomTo: '/',
    title: 'Hioki Sushi',
    pontuacao: '4.9',
    infos: ['Destaque da semana', 'Japonesa'],
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: HiokiSushi
  },
  {
    id: 2,
    buttomTo: '/Perfil',
    title: 'La Dolce Vita Trattoria',
    pontuacao: '4.6',
    infos: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: LaDolceVitaTrattoria
  },
  {
    id: 3,
    buttomTo: '/Perfil',
    title: 'La Dolce Vita Trattoria',
    pontuacao: '4.6',
    infos: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: LaDolceVitaTrattoria
  },
  {
    id: 4,
    buttomTo: '/Perfil',
    title: 'La Dolce Vita Trattoria',
    pontuacao: '4.6',
    infos: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: LaDolceVitaTrattoria
  },
  {
    id: 5,
    buttomTo: '/Perfil',
    title: 'La Dolce Vita Trattoria',
    pontuacao: '4.6',
    infos: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: LaDolceVitaTrattoria
  },
  {
    id: 6,
    buttomTo: '/Perfil',
    title: 'La Dolce Vita Trattoria',
    pontuacao: '4.6',
    infos: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: LaDolceVitaTrattoria
  }
]

const Home = () => <RestaurantesList restaurantesProp={Restaurantes} />

export default Home
