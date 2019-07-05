import React from "react"
import Nav from "./nav"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import "../styles/index.css"
import { FlexFunc, color_dark, text_font } from "../styles/reusables"
import PersonalPhoto from "../img/self-photo.jpg"

const LayoutDiv = styled.div`
  color: ${color_dark};
  height: 100vh;
  ${FlexFunc("column", "center", "center")};

  img {
    height: 150px;
    width: 150px;
    border-radius: 50%;
  }
`


const HomeLayout = props => {
  return (
    <LayoutDiv>
      <Helmet>
        <title>Emily Abrahart</title>
        <link
          href="https://fonts.googleapis.com/css?family=Handlee|Open+Sans|Open+Sans+Condensed:300&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <img src={PersonalPhoto} alt="Emily Abrahart" />
      <Nav />
      <div>{props.children}</div>
    </LayoutDiv>
  )
}

export default HomeLayout
