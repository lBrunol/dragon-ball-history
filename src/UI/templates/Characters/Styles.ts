import styled from 'styled-components'
import { WhiteLine } from 'UI/shared/Styles'
import background from '../../../assets/images/character-bg.png'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-image: url(${background});
  background-size: cover;
  background-position: top;
  width: 100%;
  min-height: 100vh;
  height: 100%;
`
export const LinesContainer = styled.div`
  width: 100%;
  height: 350px;
`

export const Line = styled(WhiteLine)``

export const CharactersItems = styled.div`
  position: absolute;
  top: 12px;
  width: 100%;
  padding: 0 2rem;
  display: flex;
  justify-content: center;
`

export const CharactersList = styled.div`
  width: 100%;
  position: relative;
`
