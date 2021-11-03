import React, { useContext } from "react"
import styled from "styled-components"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import { CartContext } from "../context/cartContext"
import { increase, decrease } from "../context/cartReducer"

const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;

  &:first-of-type {
    margin-top: 0;
  }
`

const CartImage = styled.div`
  height: 4rem;
  width: 4rem;
  overflow: hidden;
  border-radius: 0.5rem;
  margin-right: 1rem;
`

const ProductName = styled.p`
  opacity: 1;
  font-weight: 700;
`

const ProductPrice = styled.p`
  font-weight: 700;
  text-transform: lowercase;
`

const ProductInfo = styled.div`
  display: flex;
  align-items: center;
`

const IterationComponent = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8125rem;
  letter-spacing: 0.075em;
  font-weight: 700;
  text-transform: uppercase;
  /* min-width: 122px; */
  justify-content: end;
`
const IterationButton = styled.button`
  -webkit-appearance: none;
  background-color: var(--iterationBG);
  font-size: 0.8125rem;
  padding: 0.75em;
  border: 0.075em solid var(--iterationBG);
  cursor: pointer;
  color: #00000080;
  display: inline-block;

  &:hover {
    color: var(--iterationHover);
  }
`

const IterationQuantity = styled.span`
  padding: 0.75em 0;
  background-color: var(--iterationBG);
  border: 0.075em solid var(--iterationBG);
  width: 32px;
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

  return (
    <CartItemContainer>
      <ProductInfo>
        <CartImage>
          <GatsbyImage image={getImage(product.cartImage.asset)} alt="" />
        </CartImage>
        <div>
          <ProductName>{product.productName.split(" ")[0]}</ProductName>
          <ProductPrice>{price}</ProductPrice>
        </div>
      </ProductInfo>
      <IterationComponent>
        {product.totalOnly ? (
          <ProductPrice>x{product.quantity}</ProductPrice>
        ) : (
          <>
            <IterationButton onClick={() => decreaseHandler(product)}>
              -
            </IterationButton>
            <IterationQuantity>{product.quantity}</IterationQuantity>
            <IterationButton onClick={() => increaseHandler(product)}>
              +
            </IterationButton>
          </>
        )}
      </IterationComponent>
    </CartItemContainer>
  )
}
