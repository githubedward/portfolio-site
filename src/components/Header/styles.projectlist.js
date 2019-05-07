import styled from "styled-components"
// import { font_size, color, font_weight } from "../shared/styles.guide"
import { flexCenter } from "../shared/styles.global"

export default styled.ul`
  ${flexCenter("column")}
  position: absolute;
  top: 50px;
  right: 0px;
  z-index: 10;
  background: transparent;
  padding: 1rem;

  li {
    text-align: right;
    padding: 0.5rem 1rem;
    :hover {
    }
  }

  :hover {
  }
`
