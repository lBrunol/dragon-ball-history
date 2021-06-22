import * as S from './Styles'
import Link from 'next/link'

export default function Header() {
  return (
    <S.Header>
      <nav>
        <S.NavMenuList>
          <S.NavMenuItem>
            <Link href="/history">
              <S.NavMenuLink>História</S.NavMenuLink>
            </Link>
          </S.NavMenuItem>
          <S.NavMenuItem>
            <Link href="">
              <S.NavMenuLink href="#">Personagens</S.NavMenuLink>
            </Link>
          </S.NavMenuItem>
          <S.NavMenuItem>
            <Link href="/curiosity">
              <S.NavMenuLink href="#">Curiosidades</S.NavMenuLink>
            </Link>
          </S.NavMenuItem>
        </S.NavMenuList>
      </nav>
    </S.Header>
  )
}
