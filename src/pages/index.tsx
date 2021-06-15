import Header from 'UI/molecules/Header/Header'
import Modal from 'UI/molecules/Modal/Modal'
import History from 'UI/templates/History/History'

type Props = {
  title: string
}

export default function Home({ title = 'Teste' }: Props) {
  return (
    <History>
      <Header></Header>
      <Modal></Modal>
    </History>
  )
}
