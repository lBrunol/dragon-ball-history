import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  position: fixed;
`

export const NavMenuList = styled.ul`
  margin-top: 3rem;
  margin-left: 2rem;
  max-width: 250px;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`

export const NavMenuItem = styled.li`
  width: 100%;
`

export const NavMenuLink = styled.a`
  color: var(--menu-text-color);
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 1.5rem;
  text-decoration: none;
  padding-bottom: 0.75rem;
  display: block;

  &:hover,
  &:active,
  &:focus {
    color: var(--accent-color);
  }
`
