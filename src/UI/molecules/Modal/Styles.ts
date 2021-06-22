import styled, { keyframes } from 'styled-components'

type ModalProps = {
  centralized: boolean
}

export const Modal = styled.div<ModalProps>`
  display: flex;
  justify-content: center;
  width: 100%;
  animation: scale 0.5s ease-in-out;
  /* position: ${(props) => (props.centralized ? 'absolute' : 'initial')}; */
`

export const ModalDialog = styled.div`
  position: relative;
  box-shadow: 2px 4px 15px #000000;
  z-index: 2;
  height: 600px;

  &:after {
    content: '';
    width: 100%;
    height: 100%;
    background-color: #fff;
    top: -15px;
    left: -15px;
    border: 2px solid #000;
    /* border-left-color: transparent; */
    position: absolute;
    z-index: -1;
  }
`
export const ModalContent = styled.div`
  padding: 2rem;
  border: 2px solid #000;
  background-color: #fff;
  max-width: 800px;
  width: 100%;
`

export const ModalHeader = styled.div`
  width: 100%;
  font-size: 2rem;
  text-align: center;
`

export const ModalBody = styled.div`
  font-family: 'Roboto';
  overflow: auto;
  height: 500px;

  /* Works on Firefox */
  & {
    scrollbar-width: thin;
    scrollbar-color: blue orange;
  }

  /* Works on Chrome, Edge, and Safari */
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #c4c4c4;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--accent-color);
  }
`
