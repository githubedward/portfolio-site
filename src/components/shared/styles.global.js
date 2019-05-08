import { createGlobalStyle, css } from "styled-components"
import { color } from "./styles.guide"

export default createGlobalStyle`
  * {
    @import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700');
    font-family: 'Roboto', sans-serif;
    margin: 0px;
    padding: 0px;
    -moz-box-sizing: border-box; 
    -webkit-box-sizing: border-box; 
    box-sizing: border-box; 
    /* color: ${color.superdarkgray}; */
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }

  ul {
    padding: 0px;
  }

  li {
    list-style: none;
    color: ${color.superdarkgray};
  }
`

export const playfairFont = css`
  @import url("https://fonts.googleapis.com/css?family=Poppins:300,400,500");
  font-family: "Poppins", sans-serif;
`

export const flexCenter = (direction = "row") => css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${direction};
`

export const pagePadding = css`
  padding: 8rem 2rem 4rem 2rem;

  @media (max-width: 420px) {
    padding: 7rem 1.5rem 3rem 1.5rem;
  }
`

// shared content layout
export const contentWidth = 50
export const contentWrapper = css`
  ${flexCenter()};
  flex-wrap: wrap;
  margin-top: 3rem;
  max-width: ${contentWidth + "rem"};

  @media (max-width: 420px) {
    width: auto;
    margin-top: 2rem;
  }
`

export const titleStyles = css`
  .title {
    text-align: center;
    width: 100%;
    border-bottom: 1px solid ${color.gray};
    max-width: ${contentWidth + "rem"};
    padding-bottom: 1rem;

    h1 {
      ${playfairFont}
      font-weight: normal;
      padding-bottom: 1rem;

      span {
        ${playfairFont};
        color: ${color.theme};
      }
    }
  }

  @media (max-width: 420px) {
    .title {
      max-width: auto;
      padding-bottom: 0;
    }
  }
`
