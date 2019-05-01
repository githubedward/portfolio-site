import styled from "styled-components"
import { font_size, font_color, font_weight } from "../shared/styles.guide"

export default styled.footer`
  position: fixed;
  bottom: 0px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    .logo {
      height: 2rem;
      fill: ${font_color.darkgray};
    }
    margin: 0 0.5rem;
  }
`
