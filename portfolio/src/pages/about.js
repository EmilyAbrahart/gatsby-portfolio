import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import Skills from '../components/skills'

const AboutContainer = styled.div`
width: 60%;
 p{
   font-size: 1rem;
   line-height: 1.3rem;
 }
`

const AboutPage = () => {
  return (
    <Layout>
      <AboutContainer>
        <h2>About Me</h2>
        <p>
          I'm a full stack web developer currently studying with Lambda School
          and based in London, UK. Having a passion for technology from young
          age, prior to Lambda I had a career in technology support and
          infrastructure, predominantly within the finance sector with KKR.
        </p>
        <h2>Skills</h2>
        <Skills />
      </AboutContainer>
    </Layout>
  )
}

export default AboutPage
