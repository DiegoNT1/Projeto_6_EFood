import { StyledTag } from './styles'

export type Props = {
  children: string
}

const Tag = ({ children }: Props) => <StyledTag>{children}</StyledTag>

export default Tag
