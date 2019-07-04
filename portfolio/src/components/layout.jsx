import React from "react"
import Nav from "./nav"
import '../styles/index.css'

const Layout = props => {
  return (
    <div>
      <Nav />
      {props.children}
    </div>
  )
}

export default Layout
