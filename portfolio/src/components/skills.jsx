import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faReact,
  faHtml5,
  faCss3,
  faJs,
  faNodeJs
} from "@fortawesome/free-brands-svg-icons"
import styled from "styled-components"
import { FlexFunc, color_dark } from "../styles/reusables"

const SkillsContainer = styled.div`
  ${FlexFunc("row", "center", "center")}
`

const SkillDiv = styled.div`
  font-size: 3rem;
  padding: 1rem;
  color: ${color_dark};
`

const Skills = () => {
  return (
    <SkillsContainer>
      <SkillDiv>
        <FontAwesomeIcon icon={faJs} />
      </SkillDiv>
      <SkillDiv>
        <FontAwesomeIcon icon={faReact} />
      </SkillDiv>
      <SkillDiv>
        <FontAwesomeIcon icon={faNodeJs} />
      </SkillDiv>
      <SkillDiv>
        <FontAwesomeIcon icon={faHtml5} />
      </SkillDiv>
      <SkillDiv>
        <FontAwesomeIcon icon={faCss3} />
      </SkillDiv>
    </SkillsContainer>
  )
}

export default Skills
