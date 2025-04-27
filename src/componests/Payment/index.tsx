import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import Button from '../Button'
import * as S from './styles'
import { close } from '../../store/reducers/payment'
import { usePurchaseMutation } from '../../services/api'

const Payment = () => {
  const dispatch = useDispatch()
  const { isOpen } = useSelector((state: RootReducer) => state.payment)
  const { receiver, address } = useSelector((state: RootReducer) => state.order)

  const [purchase, { data, isSuccess }] = usePurchaseMutation()

  const closePayment = () => {
    dispatch(close())
  }

  const form = useFormik({
    initialValues: {
      cardName: '',
      cardNumber: '',
      CVV: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      cardName: Yup.string()
        .min(5, 'O nome no cartão precisa ter pelo menos 5 caracteres')
        .required('O nome no cartão é obrigatório'),
      cardNumber: Yup.string()
        .min(13, 'O número do cartão deve ter pelo menos 13 dígitos')
        .max(13, 'O número do cartão deve ter no maximo 13 dígitos')
        .required('O número do cartão é obrigatório'),
      CVV: Yup.string()
        .min(3, 'O CVV deve ter 3 dígitos')
        .max(3, 'O CVV deve ter 3 dígitos')
        .required('O CVV é obrigatório'),
      expiresMonth: Yup.string()
        .min(2, 'O mês deve ter 2 dígitos')
        .max(2, 'O mês deve ter 2 dígitos')
        .required('O mês de vencimento é obrigatório'),
      expiresYear: Yup.string()
        .min(4, 'O ano deve ter 4 dígitos')
        .max(4, 'O ano deve ter 4 dígitos')
        .required('O ano de vencimento é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver,
          address
        },
        products: [
          {
            id: 1,
            price: 0
          }
        ],
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.CVV),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
      })
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }

  return (
    <S.PaymentContainer
      onSubmit={form.handleSubmit}
      className={isOpen ? 'is-open' : ''}
    >
      <S.Overlay onClick={closePayment} />
      <S.SideBar>
        {isSuccess ? (
          <div className="confirmarcao">
            <h3>Pedido realizado - {data.orderId}</h3>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
              <span className="spacer" />
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
              <span className="spacer" />
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
              <span className="spacer" />
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <Button onClick={closePayment} type={'button'} title={'Concluir'}>
              Concluir
            </Button>
          </div>
        ) : (
          <ul>
            <li>
              <h3>Entrega</h3>
              <div>
                <label htmlFor="cardName">Nome no cartão</label>
                <input
                  type="text"
                  id="cardName"
                  name="cardName"
                  value={form.values.cardName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {getErrorMessage('cardName', form.errors.cardName)}
                </small>
              </div>
              <S.Div>
                <div>
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={form.values.cardNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage('cardNumber', form.errors.cardNumber)}
                  </small>
                </div>
                <div>
                  <label htmlFor="CVV">CVV</label>
                  <input
                    type="text"
                    id="CVV"
                    name="CVV"
                    value={form.values.CVV}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>{getErrorMessage('CVV', form.errors.CVV)}</small>
                </div>
              </S.Div>
              <S.Div>
                <div>
                  <label htmlFor="expiresMonth">Mês de vencimento</label>
                  <input
                    type="text"
                    id="expiresMonth"
                    name="expiresMonth"
                    value={form.values.expiresMonth}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage('expiresMonth', form.errors.expiresMonth)}
                  </small>
                </div>
                <div>
                  <label htmlFor="expiresYear">Ano de vencimento</label>
                  <input
                    type="text"
                    id="expiresYear"
                    name="expiresYear"
                    value={form.values.expiresYear}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage('expiresYear', form.errors.expiresYear)}
                  </small>
                </div>
              </S.Div>
              <S.Buttons>
                <Button
                  onClick={() => {
                    form.submitForm()
                  }}
                  type={'button'}
                  title={'Finalizar pagamento'}
                >
                  Finalizar pagamento
                </Button>
                <Button
                  onClick={closePayment}
                  type={'button'}
                  title={'Voltar para a edição de endereço'}
                >
                  Voltar para a edição de endereço
                </Button>
              </S.Buttons>
            </li>
          </ul>
        )}
      </S.SideBar>
    </S.PaymentContainer>
  )
}

export default Payment
