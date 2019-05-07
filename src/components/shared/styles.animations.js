import { css } from "styled-components"

export const scale = (delay, scale) => css`
  transition: all ${delay} ease-in-out;
  transform: scale(${scale});
`
