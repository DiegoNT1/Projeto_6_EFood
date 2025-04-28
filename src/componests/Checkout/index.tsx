import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import InputMask from 'react-input-mask'

import { RootReducer } from '../../store'
import { close } from '../../store/reducers/checkout'
import { open } from '../../store/reducers/payment'
import { saveCheckoutData } from '../../store/reducers/order'

import Button from '../Button'
import * as S from './styles'

const Checkout = () => {
  const dispatch = useDispatch()
  const { isOpen } = useSelector((state: RootReducer) => state.checkout)
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openPayment = () => {
    dispatch(open())
  }

  const closeCheckout = () => {
    dispatch(close())
  }

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      CEP: '',
      number: 0,
      complement: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string()
        .min(4, 'O endereço precisa ter pelo menos 4 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(2, 'A cidade precisa ter pelo menos 2 caracteres')
        .required('O campo é obrigatório'),
      CEP: Yup.string()
        .min(8, 'O CEP precisa ter exatamente 8 caracteres')
        .required('O campo é obrigatório'),
      number: Yup.number().required('O campo é obrigatório'),
      complement: Yup.string().min(
        5,
        'O complemento precisa ter pelo menos 5 caracteres'
      )
    }),
    onSubmit: (values) => {
      dispatch(
        saveCheckoutData({
          receiver: values.fullName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.CEP,
            number: values.number,
            complement: values.complement
          }
        })
      )
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }

  if (items.length === 0) {
    dispatch(close())
    return null
  }

  return (
    <>
      <S.CheckoutContainer
        onSubmit={form.handleSubmit}
        className={isOpen ? 'is-open' : ''}
      >
        <S.Overlay onClick={closeCheckout} />
        <S.SideBar>
          <ul>
            <li>
              <h3>Entrega</h3>
              <div>
                <label htmlFor="fullName">Nome Completo</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={form.values.fullName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {getErrorMessage('fullName', form.errors.fullName)}
                </small>
              </div>
              <label htmlFor="address">Endereco</label>
              <input
                type="text"
                id="address"
                name="address"
                value={form.values.address}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('address', form.errors.address)}</small>
              <label htmlFor="city">Cidade</label>
              <input
                type="text"
                id="city"
                name="city"
                value={form.values.city}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('city', form.errors.city)}</small>
              <S.DivCepN>
                <div>
                  <label htmlFor="CEP">CEP</label>
                  <InputMask
                    type="text"
                    id="CEP"
                    name="CEP"
                    value={form.values.CEP}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    mask="99999-999"
                  />
                  <small>{getErrorMessage('CEP', form.errors.CEP)}</small>
                </div>
                <div>
                  <label htmlFor="number">Numero</label>
                  <input
                    type="number"
                    id="number"
                    name="number"
                    value={form.values.number}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>{getErrorMessage('number', form.errors.number)}</small>
                </div>
              </S.DivCepN>
              <label htmlFor="complement">Complemento (opcional)</label>
              <input
                type="text"
                id="complement"
                name="complement"
                value={form.values.complement}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage('complement', form.errors.complement)}
              </small>
              <S.Buttons>
                <Button
                  onClick={async () => {
                    const isValid = await form.validateForm()
                    form.setTouched({
                      fullName: true,
                      address: true,
                      city: true,
                      CEP: true,
                      number: true,
                      complement: true
                    })

                    if (Object.keys(isValid).length === 0) {
                      form.submitForm()
                      openPayment()
                      closeCheckout()
                    }
                  }}
                  type="button"
                  title="Continuar com o pagamento"
                >
                  Continuar com o pagamento
                </Button>
                <Button
                  onClick={closeCheckout}
                  type={'button'}
                  title={'Voltar para o carrinho'}
                >
                  Voltar para o carrinho
                </Button>
              </S.Buttons>
            </li>
          </ul>
        </S.SideBar>
      </S.CheckoutContainer>
    </>
  )
}

export default Checkout
