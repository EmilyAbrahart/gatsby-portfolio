import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import Skills from '../components/skills'



const AboutPage = () => {
  return (
    <Layout>
      <div>
        <h1>About Me</h1>
        <p>
          I'm a full stack web developer currently studying with Lambda School
          and based in London, UK. Having a passion for technology from young
          age, prior to Lambda I had a career in technology support and
          infrastructure, predominantly within the finance sector with KKR.
        </p>
        <h2>Skills</h2>
        <Skills />
      </div>
    </Layout>
  )
}

export default AboutPage
