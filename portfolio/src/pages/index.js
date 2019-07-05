import React from "react"
import HomeLayout from "../components/layout-home"
import Skills from '../components/skills'
import styled from 'styled-components'

const Tagline = styled.p`
text-align: center;
`
const IndexPage = () => {
  return (
    <HomeLayout>
      <Tagline>Full Stack Web Developer</Tagline>
      <Skills />
    </HomeLayout>
  )
}

export default IndexPage
