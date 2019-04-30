import styled from "styled-components"
import styleGuides from "../shared/styles.guide"

export default styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    color: red;

    h1 {
      font-size: ${styleGuides.t1};
    }
  }

  .right {
    color: blue;
  }
`
