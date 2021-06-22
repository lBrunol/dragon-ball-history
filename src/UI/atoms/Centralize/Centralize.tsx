import * as S from './Styles'

type Props = {
  children: JSX.Element
}

export default function Centralize({ children }: Props) {
  return <S.Centralize>{children}</S.Centralize>
}
