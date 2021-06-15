import * as S from './Styles'

type Props = {
  children: JSX.Element
}

export default function History({ children }: Props) {
  return <S.Container>{children}</S.Container>
}
