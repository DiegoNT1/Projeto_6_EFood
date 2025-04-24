import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import Button from '../Button'
import {
  CartContainer,
  CartItem,
  CartList,
  Overlay,
  Price,
  SideBar
} from './styles'
import { close, remove } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return acumulador + valorAtual.preco
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <CartList>
                <img src={item.foto} alt={item.nome} />
                <div>
                  <h3>{item.titulo}</h3>
                  <p>{item.preco}</p>
                </div>
                <button onClick={() => removeItem(item.id)} type="button" />
              </CartList>
            </CartItem>
          ))}
        </ul>
        <Price>
          <p>Valor total:</p>
          <p>R$ {getTotalPrice().toFixed(2)}</p>
        </Price>
        <Button type="button" title="Continuar com a entrega">
          Continuar com a entrega
        </Button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
