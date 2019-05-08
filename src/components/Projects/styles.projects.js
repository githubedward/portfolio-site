import styled from "styled-components"
import * as animations from "../shared/styles.animations"
import {
  flexCenter,
  pagePadding,
  contentWrapper,
  titleStyles,
} from "../shared/styles.global"
import { color, font_weight } from "../shared/styles.guide"

export default styled.div`
  ${flexCenter("column")}
  ${pagePadding};
  ${titleStyles};

  .wrapper {
    ${contentWrapper};

    .project_card {
      ${flexCenter("column")}
      position: relative;
      width: 14rem;
      height: 17.5rem;
      background-color: white;
      margin: 1rem 1rem;
      -webkit-box-shadow: 0px 2px 4px 1px ${color.gray};
      -moz-box-shadow: 0px 2px 4px 1px ${color.gray};
      box-shadow: 0px 2px 4px 1px ${color.gray};
      border-radius: 5px;
      cursor: pointer;
      text-decoration: none;

      img {
        /* padding: 1rem 0; */
        width: 100%;
        height: 100%;
        border-radius: 5px;
        -o-object-fit: cover;
        object-fit: cover;
        -o-object-position: center;
        object-position: center;
        opacity: 0.5;
      }

      .proj_name {
        ${flexCenter()};
        position: absolute;
        text-align: center;
        width: 100%;
        height: 100%;
        color: #0000009f;
        font-size: 2rem;
        font-weight: ${font_weight.light};
        padding: 0 1rem;
      }

      :hover {
        ${animations.scale(`.25s`, `1.05`)};
        -webkit-box-shadow: 0px 2px 4px 1px ${color.darkgray};
        -moz-box-shadow: 0px 2px 4px 1px ${color.darkgray};
        box-shadow: 0px 2px 4px 1px ${color.darkgray};
        opacity: 1;

        .proj_name {
          display: none;
        }

        img {
          opacity: 1;
        }
      }
    }
  }
`
