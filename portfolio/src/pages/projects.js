import React from "react"
import Layout from "../components/layout"
import wunderlistImg from "../img/wunderlist.png"
import wunderlistUiImg from "../img/wunderlistUI.png"
import styled from "styled-components"
import {
  FlexFunc,
  color_dark,
  color_accent,
  Button,
  color_light,
} from "../styles/reusables"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faReact,
  faHtml5,
  faCss3,
  faJs,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons"

const ProjectImg = styled.img`
  width: 500px;
  border: 2px solid ${color_dark};
`

const ProjectDiv = styled.div`
${FlexFunc("column", "center", "center")}
border: 1px solid ${color_accent};
border-radius: 1rem;
padding: 2rem 3rem;
margin-bottom: 1rem;
`

const ProjectButton = styled.button`
  ${Button(color_light, color_dark)}
  margin: 0 1rem 1rem 1rem;
`

const SkillsContainer = styled.div`
  ${FlexFunc("row", "center", "center")}
`

const SkillDiv = styled.div`
  font-size: 2rem;
  padding: 1rem;
  color: ${color_dark};
`

const ProjectsPage = () => {
  return (
    <Layout>
      <h1>Projects</h1>
      <ProjectDiv>
        <h3>Wunderlist</h3>
        <p>Front End</p>
        <ProjectImg src={wunderlistImg} alt="Wunderlist" />
        <div>
          <a
            href="https://wunderlist2-emilyabrahart.netlify.com"
            target="_blank"
          >
            <ProjectButton>Site</ProjectButton>
          </a>
          <a
            href="https://github.com/EmilyAbrahart/Wunderlist2"
            target="_blank"
          >
            <ProjectButton>Repo</ProjectButton>
          </a>
        </div>

        <SkillsContainer>
          <SkillDiv>
            <FontAwesomeIcon icon={faJs} />
          </SkillDiv>
          <SkillDiv>
            <FontAwesomeIcon icon={faReact} />
          </SkillDiv>
          <SkillDiv>
            <FontAwesomeIcon icon={faHtml5} />
          </SkillDiv>
          <SkillDiv>
            <FontAwesomeIcon icon={faCss3} />
          </SkillDiv>
        </SkillsContainer>
      </ProjectDiv>

      <ProjectDiv>
        <h3>Wunderlist</h3>
        <p>UI</p>
        <ProjectImg src={wunderlistUiImg} alt="Wunderlist" />
        <div>
          <a
            href="https://emilyabrahart.github.io/Wunderlist/"
            target="_blank"
          >
            <ProjectButton>Site</ProjectButton>
          </a>
          <a
            href="https://github.com/EmilyAbrahart/Wunderlist"
            target="_blank"
          >
            <ProjectButton>Repo</ProjectButton>
          </a>
        </div>

        <SkillsContainer>
          <SkillDiv>
            <FontAwesomeIcon icon={faJs} />
          </SkillDiv>
          <SkillDiv>
            <FontAwesomeIcon icon={faHtml5} />
          </SkillDiv>
          <SkillDiv>
            <FontAwesomeIcon icon={faCss3} />
          </SkillDiv>
        </SkillsContainer>
      </ProjectDiv>
    </Layout>
  )
}

export default ProjectsPage
