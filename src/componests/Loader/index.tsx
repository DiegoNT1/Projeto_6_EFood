import { PropagateLoader } from 'react-spinners'
import { colors } from '../../styles'
import { Container } from './style'

const Loader = () => (
  <Container>
    <PropagateLoader color={colors.red} />
  </Container>
)

export default Loader
