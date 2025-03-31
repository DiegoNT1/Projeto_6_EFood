import PerfilProducts from '../../componests/PerfilProducts'
import MoldelPerfil from '../../models/Perfil'

import PizzaMarguerita from '../../assets/images/PizzaMarguerita.png'

const Products: MoldelPerfil[] = [
  {
    id: 1,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: PizzaMarguerita
  },
  {
    id: 2,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: PizzaMarguerita
  },
  {
    id: 3,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: PizzaMarguerita
  },
  {
    id: 4,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: PizzaMarguerita
  },
  {
    id: 5,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: PizzaMarguerita
  },
  {
    id: 6,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: PizzaMarguerita
  }
]

const Perfil = () => <PerfilProducts perfilProp={Products} />

export default Perfil
