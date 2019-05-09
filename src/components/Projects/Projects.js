import React from "react"
import Container from "./styles.projects"
import { Link } from "gatsby"

const projectList = [
  {
    name: "Pinit",
    url:
      "https://res.cloudinary.com/webedward/image/upload/v1557260361/portfolio-website/pinit/pinit-iso.jpg",
  },
  {
    name: "MapSocial",
    url:
      "https://res.cloudinary.com/webedward/image/upload/v1557283348/portfolio-website/mapsocial/iso-2.png",
  },
  {
    name: "BrainFlix",
    url:
      "https://res.cloudinary.com/webedward/image/upload/v1557283571/portfolio-website/brainFlix/iso2.png",
  },
  {
    name: "Band Site",
    url:
      "https://res.cloudinary.com/webedward/image/upload/v1557284437/portfolio-website/bandsite/iso.png",
  },
  {
    name: "BrainFlix Mobile",
    url:
      "https://res.cloudinary.com/webedward/image/upload/v1557284305/portfolio-website/brainFlix/iso4.png",
  },
  {
    name: "Band Site Mobile",
    url:
      "https://res.cloudinary.com/webedward/image/upload/v1557285149/portfolio-website/bandsite/iso2.png",
  },
]

const ProjectCard = ({ name, url }) => (
  <Link
    className="project_card"
    to={`/projects/${name.replace(/\s+/g, "-").toLowerCase()}`}
  >
    <img src={url} alt={`${name}`} />
    <div className="proj_name">{name}</div>
  </Link>
)

export default () => (
  <Container>
    <div className="title">
      <h1>Projects</h1>
    </div>
    <div className="wrapper">
      {projectList.map((project, id) => (
        <ProjectCard key={id} name={project.name} url={project.url} />
      ))}
    </div>
  </Container>
)
