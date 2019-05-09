import styled from "styled-components"
import { font_size, color, font_weight } from "../shared/styles.guide"

export default styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  width: 100%;
  position: fixed;
  top: 0px;
  z-index: 2;
  -webkit-box-shadow: 0px 5px 10px 5px white;
  -moz-box-shadow: 0px 5px 10px 5px white;
  box-shadow: 0px 5px 10px 5px white;

  .brand {
    color: ${color.superdarkgray};
    display: flex;
    justify-content: baseline;

    .elogo {
      padding: 1rem;
      background-color: ${color.light_theme};
      color: white;
      margin: 0px;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      margin-left: 1rem;

      .top {
        font-weight: ${font_weight.light};
        margin: 0px;
      }

      .bot {
        font-weight: ${font_weight.lighter};
        margin: 0px;
      }
    }
  }

  nav {
    color: blue;
    display: flex;
    margin-right: 1rem;
    text-align: right;

    .nav_links {
      text-decoration: none;
      color: ${color.darkgray};
      padding: 0 1rem;
      font-size: ${font_size.t4};
      font-weight: ${font_weight.light};

      :hover {
        color: ${color.superdarkgray};
        text-decoration: underline;
        font-weight: ${font_weight.medium};
      }
    }
  }

  @media (max-width: 500px) {
    div {
      .top {
        font-size: ${font_size.t2};
      }
      .bot {
        font-size: ${font_size.t3};
      }
    }

    nav {
      flex-direction: column;
      margin-right: 0;
      a {
        font-size: ${font_size.t_help};
      }
    }
  }

  @media (max-width: 320px) {
    div {
      .top {
        font-size: ${font_size.t2};
      }
      .bot {
        display: none;
      }
    }
  }
`
