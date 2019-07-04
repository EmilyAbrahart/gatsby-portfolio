import React from "react"
import { Link } from "gatsby"

const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <h1>Emily Abrahart</h1>
      </Link>
      <ul>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/projects">
          <li>Projects</li>
        </Link>
        <Link to="/blog">
          <li>Blog</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
        <a href="https://github.com/EmilyAbrahart" target="_blank">
          <li>Github</li>
        </a>
      </ul>
    </nav>
  )
}

export default Nav
