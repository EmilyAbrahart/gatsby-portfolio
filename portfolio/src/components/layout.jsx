import React from "react"
import Nav from "./nav"
import { Helmet } from "react-helmet"
import background from "../img/portfolio-background.jpg"
import styled from "styled-components"
import '../styles/index.css'
import {color_light} from '../styles/reusables'

const LayoutDiv = styled.div`
  background-image: url(${background});
  color: ${color_light};
  height: 100vh;
`

const Layout = props => {
  return (
    <LayoutDiv>
      <Helmet>
        <title>Emily Abrahart</title>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans|Open+Sans+Condensed:300&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <Nav />
      {props.children}
    </LayoutDiv>
  )
}

export default Layout
