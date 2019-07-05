import React from "react"
import Nav from "./nav"
import Footer from "./footer"
import Socials from "./socials"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import "../styles/index.css"
import {
  FlexFunc,
  color_dark,
  text_font,
  header_font,
} from "../styles/reusables"

const LayoutDiv = styled.div`
  color: ${color_dark};
  height: 100vh;
  ${FlexFunc("column", "flex-start", "center")};

`
const ContentDiv = styled.div`
  ${FlexFunc("column", "flex-start", "center")};
  font-family: ${text_font};
  width: 100%;
  height: 75%;
  border-radius: 2rem;

  h1 {
    font-family: ${header_font};
  }
`

const Layout = props => {
  return (
    <LayoutDiv>
      <Helmet>
        <title>Emily Abrahart</title>
        <link
          href="https://fonts.googleapis.com/css?family=Handlee|Open+Sans|Open+Sans+Condensed:300&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <Socials />
      <Nav />
      <ContentDiv>{props.children}</ContentDiv>
      <Footer />
    </LayoutDiv>
  )
}

export default Layout
