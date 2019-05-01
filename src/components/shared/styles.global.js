import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700');
    font-family: 'Roboto', sans-serif;
    margin: 0px;
    padding: 0px;
  }

  a {
    cursor: pointer;
  }
`
