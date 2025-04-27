import * as S from './styles'

import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

const Footer = () => (
  <S.Container>
    <S.Logo src={logo} alt="EFOOD" />
    <S.Social>
      <S.SocialItens src={instagram} alt="Instagram" />
      <S.SocialItens src={facebook} alt="Facebook" />
      <S.SocialItens src={twitter} alt="Twitter" />
    </S.Social>
    <S.Text>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </S.Text>
  </S.Container>
)

export default Footer
