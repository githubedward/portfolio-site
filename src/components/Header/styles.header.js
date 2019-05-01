import styled from "styled-components"
import {
  /* font_size, */ font_color,
  font_weight,
} from "../shared/styles.guide"

export default styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    color: ${font_color.superdarkgray};
    display: flex;
    flex-direction: column;
    justify-content: baseline;

    h1 {
      font-weight: ${font_weight.medium};
      margin: 0px;
    }

    h2 {
      font-weight: ${font_weight.light};
      margin: 0px;
    }
  }

  .right {
    color: blue;
    display: flex;

    a {
      text-decoration: none;
      color: ${font_color.superdarkgray};
      margin: 0 1rem;
    }
  }
`
