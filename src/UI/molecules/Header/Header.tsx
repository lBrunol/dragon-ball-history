import * as S from './Styles'

export default function Header() {
  return (
    <S.Header>
      <nav>
        <S.NavMenuList>
          <S.NavMenuItem>
            <S.NavMenuLink href="#">História</S.NavMenuLink>
          </S.NavMenuItem>
          <S.NavMenuItem>
            <S.NavMenuLink href="#">Personagens</S.NavMenuLink>
          </S.NavMenuItem>
          <S.NavMenuItem>
            <S.NavMenuLink href="#">Curiosidades</S.NavMenuLink>
          </S.NavMenuItem>
        </S.NavMenuList>
      </nav>
    </S.Header>
  )
}
