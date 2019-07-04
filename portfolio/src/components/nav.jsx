import React from "react"
import { Link } from "gatsby"

const Nav = () => {
  return (
    <div>
      <Link to="/"><div>Emily Abrahart</div></Link>
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
    </div>
  )
}

export default Nav
