import React from "react"
import { Link } from "gatsby"
import Container from "./styles.header"

export default () => (
  <Container>
    <div className="left">
      <h1>Full Stack Developer</h1>
      <h2>Front End Focus</h2>
    </div>
    <nav className="right">
      <Link to="/projects/">Projects</Link>
      <Link to="/skills">Technologies</Link>
      <Link to="/about/">About</Link>
    </nav>
  </Container>
)
