import { Container, Logo, Social, SocialItens, Texto } from './styles'

import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

const Footer = () => (
  <Container>
    <Logo src={logo} alt="EFOOD" />
    <Social>
      <SocialItens src={instagram} alt="Instagram" />
      <SocialItens src={facebook} alt="Facebook" />
      <SocialItens src={twitter} alt="Twitter" />
    </Social>
    <Texto>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Texto>
  </Container>
)

export default Footer
