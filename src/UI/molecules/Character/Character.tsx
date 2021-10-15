import * as S from './Styles'

type Props = {
  image: string
}

export default function Character({ image }: Props) {
  return (
    <S.Container>
      <S.LineContainer>
        <S.Line></S.Line>
        <S.Line></S.Line>
        <S.Line></S.Line>
        <S.Line></S.Line>
        <S.Line></S.Line>
        <S.Line></S.Line>
        <S.Line></S.Line>
        <S.Line></S.Line>
        <S.Line></S.Line>
        <S.Line></S.Line>
        <S.Line></S.Line>
        <S.Line></S.Line>
        <S.Line></S.Line>
        <S.Line></S.Line>
        <S.Line></S.Line>
        <S.Line></S.Line>
        <S.Line></S.Line>
        <S.Line></S.Line>
        <S.Line></S.Line>
        <S.Line></S.Line>
        <S.Line></S.Line>
        <S.Line></S.Line>
        <S.Line></S.Line>
      </S.LineContainer>
      <S.Image src={image} />
    </S.Container>
  )
}
