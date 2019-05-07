import React from "react"
import { Link } from "gatsby"
import Container from "./styles.header"

export default () => (
  <Container>
    <div className="brand">
      <h1 className="elogo">Ed</h1>
      <div>
        <h2>Full Stack Developer</h2>
        <h3>Front End Focus</h3>
      </div>
    </div>
    <nav>
      <Link to="/">About</Link>
      <Link to="/tech/">Technologies</Link>
      <Link to="/projects/">+Projects</Link>
    </nav>
  </Container>
)
