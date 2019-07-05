import React from 'react'
import styled from 'styled-components'

const PageFooter = styled.footer`
font-size: 0.6rem;
position: absolute;
bottom: 0;
`

const Footer = () => {
  return (
    <PageFooter>
      Emily Abrahart &copy; 2019
    </PageFooter>
  )
}

export default Footer