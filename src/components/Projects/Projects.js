import React from "react"
import Container from "./styles.projects"

const projectList = [
  {
    name: "Pinit",
    url:
      "https://res.cloudinary.com/webedward/image/upload/v1557260361/portfolio-website/pinit/pinit-iso.jpg",
  },
  {
    name: "MapSocial",
    url:
      "https://res.cloudinary.com/webedward/image/upload/v1557260361/portfolio-website/pinit/pinit-iso.jpg",
  },
  {
    name: "BrainFlix",
    url:
      "https://res.cloudinary.com/webedward/image/upload/v1557260361/portfolio-website/pinit/pinit-iso.jpg",
  },
  {
    name: "BrainFlix Mobile",
    url:
      "https://res.cloudinary.com/webedward/image/upload/v1557260361/portfolio-website/pinit/pinit-iso.jpg",
  },
  {
    name: "Band Site",
    url:
      "https://res.cloudinary.com/webedward/image/upload/v1557260361/portfolio-website/pinit/pinit-iso.jpg",
  },
  {
    name: "Band Site Mobile",
    url:
      "https://res.cloudinary.com/webedward/image/upload/v1557260361/portfolio-website/pinit/pinit-iso.jpg",
  },
]

const ProjectCard = ({ name, url }) => (
  <li className="project_card">
    <img src={url} alt={`${name}`} />
    {name}
  </li>
)

export default () => (
  <Container>
    <div className="title">
      <h1>Projects</h1>
    </div>
    <ul className="wrapper">
      {projectList.map((project, id) => (
        <ProjectCard key={id} name={project.name} url={project.url} />
      ))}
    </ul>
  </Container>
)
