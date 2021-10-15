import * as S from './Styles'
import Character from '../../molecules/Character/Character'
import kidGoku from '../../../assets/images/kid-goku.png'

export default function Characters() {
  return (
    <S.Container>
      <S.CharactersList>
        <S.CharactersItems>
          <Character image={kidGoku}></Character>
          <Character image={kidGoku}></Character>
          <Character image={kidGoku}></Character>
          <Character image={kidGoku}></Character>
        </S.CharactersItems>
        <S.LinesContainer>
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
          <S.Line></S.Line>
          <S.Line></S.Line>
        </S.LinesContainer>
      </S.CharactersList>
    </S.Container>
  )
}
