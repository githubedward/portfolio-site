import styled from "styled-components"
import {
  flexCenter,
  pagePadding,
  contentWrapper,
  titleStyles,
} from "../shared/styles.global"
import * as animations from "../shared/styles.animations"
// import { color } from "../shared/styles.guide"

export default styled.div`
  ${flexCenter("column")};
  ${pagePadding};
  ${titleStyles};

  .icons_container {
    ${contentWrapper};

    .icon_wrapper {
      outline: none;
      :hover {
        ${animations.scale(`.2s`, `1.15`)}
      }
      .tippy-tooltip {
        color: white !important;
      }
      .icon {
        height: 5rem;
        margin: 1rem 2rem;
      }
    }
  }

  @media (max-width: 500px) {
    .icons_container {
      .icon_wrapper {
        .icon {
          height: 4rem;
        }
      }
    }
  }
`
