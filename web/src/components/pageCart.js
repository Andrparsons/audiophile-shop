import React, { useState } from "react"
import styled from "styled-components"

import Button from "./button"

const CartComponent = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
`

const IterationComponent = styled.div`
  font-size: 0.8125rem;
  letter-spacing: 0.075em;
  font-weight: 700;
  text-transform: uppercase;
  margin-right: 1rem;
  min-width: 122px;
`

const IterationButton = styled.button`
  -webkit-appearance: none;
  background-color: var(--iterationBG);
  font-size: 0.8125rem;
  padding: 1.15em;
  border: 0.075em solid var(--iterationBG);
  cursor: pointer;
  color: #00000080;
  display: inline-block;

  &:hover {
    color: var(--iterationHover);
  }
`

const IterationQuantity = styled.span`
  padding: 1.15em 0;
  background-color: var(--iterationBG);
  border: 0.075em solid var(--iterationBG);
  width: 45px;
  display: inline-block;
  text-align: center;
`

export default function PageCart() {
  const [itemQuantity, setItemQuantity] = useState(1)

  const increaseCount = e => {
    e.preventDefault()
    setItemQuantity(itemQuantity + 1)
  }

  const decreaseCount = e => {
    e.preventDefault()
    itemQuantity > 1 ? setItemQuantity(itemQuantity - 1) : setItemQuantity(1)
  }

  return (
    <CartComponent>
      <IterationComponent>
        <IterationButton onClick={decreaseCount}>-</IterationButton>
        <IterationQuantity>{itemQuantity}</IterationQuantity>
        <IterationButton onClick={increaseCount}>+</IterationButton>
      </IterationComponent>
      <Button primary>add to cart</Button>
    </CartComponent>
  )
}
