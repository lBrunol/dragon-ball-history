import { WhiteLine } from 'UI/shared/Styles'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
  transition: 0.2s all ease-in-out;
  padding: 0 0.5rem;
`

export const LineContainer = styled.div`
  width: 150px;
`

export const Image = styled.img.attrs((props) => ({
  src: props.src
}))`
  top: 0;
  left: 0;
  position: absolute;
`
export const Line = styled(WhiteLine)`
  transition: 0.2s all ease-in-out;

  ${Container}:hover & {
    background-color: var(--highlight-color);
  }
`
