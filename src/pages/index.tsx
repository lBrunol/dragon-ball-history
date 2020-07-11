import Header from 'components/Header'

type Props = {
  title: string
}

export default function Home({ title = 'Teste' }: Props) {
  return (
    <div>
      <h1>{title}</h1>
      <Header></Header>
    </div>
  )
}
