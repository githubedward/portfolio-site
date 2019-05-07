import React, { Component } from "react"
import { Link } from "gatsby"
import Container from "./styles.header"
// import ProjectList from "./ProjectList"

export default class Header extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     isProjListShown: false,
  //   }
  // }

  // toggleProjectTab = () => {
  //   this.setState({
  //     isProjListShown: !this.state.isProjListShown,
  //   })
  // }

  render() {
    return (
      <Container>
        <div className="brand">
          <h1 className="elogo">Ed</h1>
          <div>
            <h2 className="top">Full Stack Developer</h2>
            <h3 className="bot">Front End Focus</h3>
          </div>
        </div>
        <nav>
          <Link className="nav_links" to="/">
            About
          </Link>
          <Link className="nav_links" to="/tech/">
            Technologies
          </Link>
          <Link
            to="/projects/"
            className="nav_links"
            onMouseOver={this.toggleProjectTab}
          >
            Projects
          </Link>
          {/* {this.state.isProjListShown && (
            <ProjectList
              // onMouseOver={() => this.toggleProjectTab(true)}
              onMouseLeave={this.toggleProjectTab}
            />
          )} */}
        </nav>
      </Container>
    )
  }
}
