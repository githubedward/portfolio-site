import styled from "styled-components"
import { font_size, color, font_weight } from "../shared/styles.guide"
import { flexCenter, playfairFont } from "../shared/styles.global"

const width = 50

export default styled.div`
  ${flexCenter("column")}
  padding: 3rem 2rem;

  .title {
    text-align: center;
    width: 100%;
    border-bottom: 1px solid ${color.gray};
    max-width: ${width + "rem"};
    padding-bottom: 1rem;

    h1 {
      ${playfairFont}
      font-weight: normal;

      span {
        color: ${color.theme};
      }
    }
  }

  .about-me {
    width: ${width};
    ${flexCenter()}
    flex-wrap: wrap;
    margin-top: 4rem;
    div {
      p {
        margin: 0 2rem 1rem 0;
        font-weight: ${font_weight.lighter};
        letter-spacing: 0.5px;
        line-height: 1.5;
        width: ${width / 1.9 + "rem"};
      }
      .socials {
        margin: 0 0.25rem;

        .icon {
          height: 1.25rem;
          fill: ${color.superdarkgray};

          :hover {
            fill: ${color.light_theme};
            /* fill: url(#a); */
          }
        }
      }
    }

    img {
      align-self: flex-start;
      width: ${width / 2.5 + "rem"};
    }
  }
`
