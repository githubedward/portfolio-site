import styled from "styled-components"
import { font_size, color, font_weight } from "../shared/styles.guide"

export default styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${color.extralightgray};

  .brand {
    color: ${color.superdarkgray};
    display: flex;
    justify-content: baseline;

    .elogo {
      padding: 1rem;
      background-color: ${color.light_theme};
      color: white;
      margin: 0px;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      margin-left: 1rem;

      h2 {
        font-weight: ${font_weight.light};
        margin: 0px;
      }

      h3 {
        font-weight: ${font_weight.lighter};
        margin: 0px;
      }
    }
  }

  nav {
    color: blue;
    display: flex;
    flex-direction: column;
    margin-right: 1rem;
    text-align: right;

    a {
      text-decoration: none;
      color: ${color.darkgray};
      margin: 0 1rem;
      font-size: ${font_size.t3};
      font-weight: ${font_weight.light};

      :hover {
        color: ${color.superdarkgray};
        text-decoration: underline;
        font-weight: ${font_weight.medium};
      }
    }
  }
`
