import styled from "styled-components"
import * as animations from "../shared/styles.animations"
import {
  flexCenter,
  pagePadding,
  contentWrapper,
  titleStyles,
} from "../shared/styles.global"
import { color } from "../shared/styles.guide"

export default styled.div`
  ${flexCenter("column")}
  ${pagePadding};
  ${titleStyles};

  .wrapper {
    ${contentWrapper};

    .project_card {
      ${flexCenter("column")}
      position: relative;
      width: 12.5rem;
      height: 17.5rem;
      background-color: white;
      margin: 1rem 2rem;
      -webkit-box-shadow: 0px 2px 4px 1px ${color.lightgray};
      -moz-box-shadow: 0px 2px 4px 1px ${color.lightgray};
      box-shadow: 0px 2px 4px 1px ${color.lightgray};
      border-radius: 5px;
      cursor: pointer;
      opacity: .5;

      img {
        padding: 1rem 0;
        width: inherit;
        height: inherit;
        -o-object-fit: cover;
        object-fit: cover;
        -o-object-position: center;
        object-position: center;
      }

      :hover {
        ${animations.scale(`.2s`, `1.05`)}
        -webkit-box-shadow: 0px 2px 4px 1px ${color.gray};
      -moz-box-shadow: 0px 2px 4px 1px ${color.gray};
      box-shadow: 0px 2px 4px 1px ${color.gray};
      opacity: 1;

      }
    }
  }
`
