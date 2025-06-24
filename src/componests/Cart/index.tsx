import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import Button from '../Button'
import * as S from './styles'
import { close, remove } from '../../store/reducers/cart'
import { open } from '../../store/reducers/checkout'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const openCheckout = () => {
    dispatch(open())
  }

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((accumulator, totalPrice) => {
      if (totalPrice.preco) {
        return (accumulator += totalPrice.preco)
      }
      return 0
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.SideBar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <S.CartList>
                    <img src={item.foto} alt={item.nome} />
                    <div>
                      <h3>{item.titulo}</h3>
                      <p>{`R$ ${item.preco.toFixed(2)}`}</p>
                    </div>
                    <button onClick={() => removeItem(item.id)} type="button" />
                  </S.CartList>
                </S.CartItem>
              ))}
            </ul>
            <S.Price>
              <p>Valor total:</p>
              <p>R$ {getTotalPrice().toFixed(2)}</p>
            </S.Price>
            <Button
              onClick={() => {
                openCheckout()
              }}
              type="button"
              title="Continuar com a entrega"
            >
              Continuar com a entrega
            </Button>
          </>
        ) : (
          <p className="empty-text">
            O carrinho está vazio. Adicione um produto
          </p>
        )}
      </S.SideBar>
    </S.CartContainer>
  )
}

export default Cart
