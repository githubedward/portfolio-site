import React from "react"
import Container from "./styles.projectlist"

const list = [`Pinit`, `MapSocial`, `BrainFlix`, `Band Site`]

export default () => (
  <Container>
    {list.map((name, id) => (
      <li key={id}>{name}</li>
    ))}
  </Container>
)
