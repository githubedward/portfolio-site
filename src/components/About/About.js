import React from "react"
import Container from "./styles.about"
import LinkedInLogo from "./Socials/LinkedInLogo"
import InstaLogo from "./Socials/InstagramLogo"
import GithubLogo from "./Socials/GithubLogo"
import MailLogo from "./Socials/MailLogo"

const LogoArray = [
  <LinkedInLogo className="icon" />,
  <GithubLogo className="icon" />,
  <InstaLogo className="icon" />,
  <MailLogo className="icon" />,
]

const url = [
  "https://www.linkedin.com/in/j-edward-estandarte/",
  "https://www.github.com/githubedward",
  "https://www.instagram.com/zzoomed/",
  "mailto:estandarte.edward@gmail.com",
]

export default () => (
  <Container>
    <div className="title">
      <h1>
        Grit. <span>Passion.</span> Creativity.
      </h1>
    </div>
    <div className="about-me">
      <div>
        <p>
          Hi there!
          <br />
          <br />
          Thank you for visiting my website. I'm a building architect/project
          coordinator turned web developer. I am passionate about the
          intersection of technology and design and I strive to turn great ideas
          into reality. I love solving programmatic challenges and I have strong
          attention to user experience and layout.
          <br />
          <br />
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
          <br />
          <br />
          Best,
          <br />
          <br />
          Jose Edward Estandarte (Edward for short)
          <br />
          estandarte.edward@gmail.com
        </p>
        {LogoArray.map((logo, key) => (
          <a
            className="socials"
            key={key}
            href={url[key]}
            target="_blank"
            rel="noopener noreferrer"
          >
            {logo}
          </a>
        ))}
      </div>
      <img
        src="https://res.cloudinary.com/webedward/image/upload/v1557194532/portfolio-website/silphoto2.png"
        alt="Edward's Photo"
      />
    </div>
  </Container>
)
