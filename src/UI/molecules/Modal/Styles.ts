import styled from 'styled-components'

export const Modal = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
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
  border: 4px solid #000;
  background-color: #fff;
  max-width: 800px;
  height: 600px;
  width: 100%;
  overflow: auto;
`

export const ModalHeader = styled.div`
  width: 100%;
`

export const ModalBody = styled.div`
  font-family: 'Roboto';
`
