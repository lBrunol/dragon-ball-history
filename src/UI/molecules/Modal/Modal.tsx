import * as S from './Styles'

type Props = {
  children: JSX.Element
  title: string
}

export default function Modal({ children, title }: Props) {
  return (
    <S.Modal centralized={true}>
      <S.ModalDialog>
        <S.ModalContent>
          <S.ModalHeader>{title}</S.ModalHeader>
          <S.ModalBody>{children}</S.ModalBody>
        </S.ModalContent>
      </S.ModalDialog>
    </S.Modal>
  )
}
