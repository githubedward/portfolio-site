import React from "react"
import tippy from "tippy.js"
import Container from "./styles.tech"
import JS from "./Icons/Javascript-1"
import HTML from "./Icons/HTML"
import CSS from "./Icons/CSS"
import ReactIcon from "./Icons/React"
import Redux from "./Icons/Redux"
import Sass from "./Icons/Sass"
import Jest from "./Icons/Jest"
import Node from "./Icons/Node"
import Mongo from "./Icons/Mongo"
import Postgres from "./Icons/Postgres"
import Express from "./Icons/Express"

export default () => {
  tippy(".icon_wrapper", {
    arrow: true,
    arrowType: "round",
  })
  return (
    <Container>
      <div className="title">
        <h1>Technology</h1>
      </div>
      <div className="icons_container">
        <div className="icon_wrapper" data-tippy-content="Javascript">
          <JS className="icon" />
        </div>
        <div
          className="icon_wrapper"
          data-tippy-content="Hyper Text Markup Language"
        >
          <HTML className="icon" />
        </div>
        <div
          className="icon_wrapper"
          data-tippy-content="Cascading Style Sheets"
        >
          <CSS className="icon" />
        </div>
        <div className="icon_wrapper" data-tippy-content="ReactJS">
          <ReactIcon className="icon" />
        </div>
        <div className="icon_wrapper" data-tippy-content="Redux">
          <Redux className="icon" />
        </div>
        <div
          className="icon_wrapper"
          data-tippy-content="Syntactically Awesome Style Sheets"
        >
          <Sass className="icon" />
        </div>
        <div
          className="icon_wrapper"
          data-tippy-content="Jest / Enzyme - Unit Testing"
        >
          <Jest className="icon" />
        </div>
        <div
          className="icon_wrapper"
          data-tippy-content="PostgreSQL / Sequelize"
        >
          <Postgres className="icon" />
        </div>
        <div className="icon_wrapper" data-tippy-content="MongoDB / MongoLab">
          <Mongo className="icon" />
        </div>
        <div className="icon_wrapper" data-tippy-content="NodeJS">
          <Node className="icon" />
        </div>
        <div className="icon_wrapper" data-tippy-content="ExpressJS">
          <Express className="icon" />
        </div>
      </div>
    </Container>
  )
}
