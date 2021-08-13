import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  font-size: 0.8125rem;
  letter-spacing: 0.075em;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  padding: 1.15em 2.3em;
  border: 0.075em solid var(--black);
  font-family: "Manrope", sans-serif;

  ${props =>
    props.primary &&
    `
    background-color: var(--primaryBtn);
    border: 0.075em solid var(--primaryBtn);
    color: var(--white);

    &:hover {
      background-color: var(--primaryBtnHover);
      border: 0.075em solid var(--primaryBtnHover);
    }
  `}

  ${props =>
    props.secondary &&
    `
    background-color: var(--secondaryBtn);
    border: 0.075em solid var(--black);
    color: var(--black);

    &:hover {
      background-color: var(--secondaryBtnHover);
      border: 0.075em solid var(--black);
      color: var(--white);
    }
  `}

${props =>
    props.tertiary &&
    `
    background-color: var(--tertiaryBtn);
    border: 0.075em solid var(--black);
    color: var(--white);

    &:hover {
      background-color: var(--tertiaryBtnHover);
      border: 0.075em solid var(--tertiaryBtnHover);
    }
  `}
`

export default function Button({ children, ...restProps }) {
  return <StyledButton {...restProps}>{children}</StyledButton>
}
