import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FlexFunc, header_font, color_dark } from "../styles/reusables"

const PageNav = styled.nav`
  ${FlexFunc("column", "space-between", "center")}
  width: 100%;
  padding: 0.5rem 0rem;
  a {
    text-decoration: none;
    color: ${color_dark};
  }
`

const LinkList = styled.ul`
  ${FlexFunc("row", "center", "center")}
`

const NavLink = styled.li`
  list-style-type: none;
  padding: 0 1rem;
  font-family: ${header_font};
  font-size: 1rem;
  margin-right: 1rem;
`

const PageTitle = styled.h1`
  font-family: ${header_font};
  font-size: 3rem;

`

const Nav = () => {
  return (
    <PageNav>
      <Link to="/">
        <PageTitle>Emily Abrahart</PageTitle>
      </Link>
      <LinkList>
        <Link to="/about">
          <NavLink>About</NavLink>
        </Link>
        <Link to="/projects">
          <NavLink>Projects</NavLink>
        </Link>
        <Link to="/contact">
          <NavLink>Contact</NavLink>
        </Link>
      </LinkList>
    </PageNav>
  )
}

export default Nav
