import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import {
  Input,
  color_primary,
  FlexFunc,
  color_dark,
  Button,
  color_light,
} from "../styles/reusables"

const ContactForm = styled.form`
  width: 100%;
  ${FlexFunc("column", "center", "center")}
`

const ContactParagraph = styled.p`
 ${FlexFunc("column", "center", "center")}
  width: 80%;
`

const ContactInput = styled.input`
${Input("50%")}
border: 1px solid ${color_primary};
`

const ContactTextArea = styled.textarea`
${Input("50%")}
border: 1px solid ${color_primary};
height: 300px;
`

const ContactButton = styled.button`
  ${Button(color_light, color_dark)}
`

const ContactLabel = styled.label`
 ${FlexFunc("column", "center", "center")}
 width: 100%;
`
const ContactPage = () => {
  return (
    <Layout>
      <h1>Contact Me</h1>
      <ContactForm name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
        <ContactParagraph>
          <ContactLabel>
            Name: <br /> <ContactInput type="text" name="name" />
          </ContactLabel>
        </ContactParagraph>
        <ContactParagraph>
          <ContactLabel>
            Email: <br />
            <ContactInput type="email" name="email" />
          </ContactLabel>
        </ContactParagraph>
        <ContactParagraph>
          <ContactLabel>
            Message: <br />
            <ContactTextArea name="message"></ContactTextArea>
          </ContactLabel>
        </ContactParagraph>
        <ContactParagraph>
          <ContactButton type="submit">Send</ContactButton>
        </ContactParagraph>
      </ContactForm>
    </Layout>
  )
}

export default ContactPage
