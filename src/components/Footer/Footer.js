import React from "react"
// import { Link } from "gatsby"
import Container from "./styles.footer"
import LinkedInLogo from "./LinkedInLogo"
import InstaLogo from "./InstagramLogo"
import GithubLogo from "./GithubLogo"
import MailLogo from "./MailLogo"

const LogoArray = [
  <LinkedInLogo className="logo" />,
  <GithubLogo className="logo" />,
  <InstaLogo className="logo" />,
  <MailLogo className="logo" />,
]

const url = [
  "https://www.linkedin.com/in/j-edward-estandarte/",
  "https://www.github.com/githubedward",
  "https://www.instagram.com/zzoomed/",
  "mailto:estandarte.edward@gmail.com",
]

export default () => {
  return (
    <Container>
      {LogoArray.map((logo, key) => (
        <a key={key} href={url[key]} target="_blank">
          {logo}
        </a>
      ))}
    </Container>
  )
}
