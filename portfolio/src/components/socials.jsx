import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { color_dark, FlexFunc, color_accent } from "../styles/reusables"

const SocialsContainer = styled.div`
  ${FlexFunc("column", "center", "center")}
  position: fixed;
  top: 0;
  right: 0;
`
const SocialLink = styled.a`
  font-size: 3rem;
  color: ${color_dark};
  padding: 0.5rem;
  margin-right: 1rem;

  &:hover {
    color: ${color_accent};
  }
`

const Socials = () => {
  return (
    <SocialsContainer>
      <SocialLink href="https://github.com/EmilyAbrahart" target="_blank">
        <FontAwesomeIcon icon={faGithub} />
      </SocialLink>
      <SocialLink
        href="https://www.linkedin.com/in/emilyabrahart"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </SocialLink>
    </SocialsContainer>
  )
}

export default Socials
