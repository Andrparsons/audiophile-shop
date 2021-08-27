import React from "react"
import styled from "styled-components"

const NewProductLine = styled.p`
  font-size: 0.875rem;
  text-transform: uppercase;
  line-height: 1.35;
  letter-spacing: 0.625rem;
  font-weight: 400;
  color: var(--highlight);
  display: none;
  opacity: 1;
  margin-bottom: 1.5rem;

  ${props =>
    props.new &&
    `
    display: block;
  `}
`

export default function NewProduct({ children, ...restProps }) {
  return <NewProductLine {...restProps}>{children}</NewProductLine>
}
