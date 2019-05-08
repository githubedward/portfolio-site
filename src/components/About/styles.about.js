import styled from "styled-components"
import { color, font_weight } from "../shared/styles.guide"
import * as animations from "../shared/styles.animations"
import {
  flexCenter,
  pagePadding,
  contentWrapper,
  contentWidth,
  titleStyles,
} from "../shared/styles.global"

export default styled.div`
  ${flexCenter("column")}
  ${pagePadding}
  ${titleStyles};

  .about-me {
    ${contentWrapper}
    div {
      p {
        margin: 0 2rem 1rem 0;
        font-weight: ${font_weight.lighter};
        letter-spacing: 0.5px;
        line-height: 1.5;
        width: ${contentWidth / 1.9 + "rem"};
      }
      .socials {
        margin: 0 0.25rem;

        .icon {
          height: 1.25rem;
          fill: ${color.superdarkgray};

          :hover {
            fill: ${color.light_theme};
            ${animations.scale(`.2s`, `1.15`)}
          }
        }
      }
    }

    img {
      align-self: flex-start;
      width: ${contentWidth / 2.5 + "rem"};
    }
  }

  @media (max-width: 420px) {
    .about-me {
      div {
        p {
          width: auto;
          /* text-align: center; */
          margin: 0 0 1rem 0;
        }
      }

      img {
        margin-top: 1.5rem;
        width: 90%;
      }
    }
  }
`
