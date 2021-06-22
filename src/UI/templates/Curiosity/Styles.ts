import styled from 'styled-components'
import background from '../../../assets/images/character-bg.png'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-image: url(${background});
  background-size: cover;
  background-position: top;
  width: 100%;
  min-height: 100vh;
  height: 100%;
`
