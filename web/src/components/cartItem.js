import React, { useContext } from "react"
import styled from "styled-components"

import { CartContext } from "../context/cartContext"
import { increase, decrease } from "../context/cartReducer"

const CartItemContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`

const ProductName = styled.p`
  opacity: 1;
  font-weight: 700;
`

const ProductPrice = styled.p``

const ProductInfo = styled.div``

const IterationComponent = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8125rem;
  letter-spacing: 0.075em;
  font-weight: 700;
  text-transform: uppercase;
  min-width: 122px;
`
const IterationButton = styled.button`
  -webkit-appearance: none;
  background-color: var(--iterationBG);
  font-size: 0.8125rem;
  padding: 0.85em;
  border: 0.075em solid var(--iterationBG);
  cursor: pointer;
  color: #00000080;
  display: inline-block;

  &:hover {
    color: var(--iterationHover);
  }
`

const IterationQuantity = styled.span`
  padding: 0.85em 0;
  background-color: var(--iterationBG);
  border: 0.075em solid var(--iterationBG);
  width: 45px;
  display: inline-block;
  text-align: center;
`

export default function CartItem(product) {
  const { dispatch } = useContext(CartContext)
  const increaseHandler = product => dispatch(increase(product))
  const decreaseHandler = product => dispatch(decrease(product))

  const price = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(product.price)

  const productName = product.productName.split(" ")[0]

  return (
    <CartItemContainer>
      <ProductInfo>
        <ProductName>{productName}</ProductName>
        <ProductPrice>{price}</ProductPrice>
      </ProductInfo>
      <IterationComponent>
        <IterationButton onClick={() => decreaseHandler(product)}>
          -
        </IterationButton>
        <IterationQuantity>{product.quantity}</IterationQuantity>
        <IterationButton onClick={() => increaseHandler(product)}>
          +
        </IterationButton>
      </IterationComponent>
    </CartItemContainer>
  )
}
