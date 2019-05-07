import { createGlobalStyle, css } from "styled-components"

export default createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700');
    font-family: 'Roboto', sans-serif;
    margin: 0px;
    padding: 0px;
    -moz-box-sizing: border-box; 
    -webkit-box-sizing: border-box; 
    box-sizing: border-box; 
  }

  a {
    cursor: pointer;
  }
`

export const playfairFont = css`
  @import url("https://fonts.googleapis.com/css?family=Playfair+Display:400,700");
  font-family: "Playfair Display", serif;
`

export const flexCenter = (direction = "row") => css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${direction};
`
