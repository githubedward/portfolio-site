import styled from "styled-components"
import {
  flexCenter,
  pagePadding,
  contentWrapper,
  playfairFont,
  contentWidth,
  titleStyles,
} from "../shared/styles.global"
import * as animations from "../shared/styles.animations"
import { color } from "../shared/styles.guide"

export default styled.div`
  ${flexCenter("column")};
  ${pagePadding};
  ${titleStyles};

  .icons_container {
    ${contentWrapper};

    .icon_wrapper {
      :hover {
        ${animations.scale(`.2s`, `1.15`)}
      }
      .tippy-tooltip {
        color: white !important;
      }
      .icon {
        outline: none;
        height: 5rem;
        margin: 1rem 2rem;
      }
    }
  }
`
