import Header from 'UI/molecules/Header/Header'
import History from 'UI/templates/History/History'

type Props = {
  title: string
}

export default function Home({ title = 'Teste' }: Props) {
  return (
    <div>
      <h1>{title}</h1>
      <Header></Header>
      <History></History>
    </div>
  )
}
