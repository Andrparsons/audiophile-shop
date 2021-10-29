import React, { useContext } from "react"
import styled from "styled-components"

import { CartContext } from "../context/cartContext"
import CartItem from "./cartItem"
import Button from "./button"

const CartContainer = styled.div`
  margin-top: 2.5rem;
  padding: 2rem 1.75rem;
  background-color: var(--white);
  border-radius: 0.5rem;
  flex-grow: 1;

  @media (min-width: 600px) {
    margin-top: 1.5rem;
  }

  @media (min-width: 1000px) {
    margin: 0;
    max-width: 350px;
    align-self: flex-start;
  }
`

const SummaryTitle = styled.h6``

const SummaryBody = styled.div`
  margin-top: 2rem;
`

const SummaryTotal = styled.div`
  margin-top: 2rem;
`

const Price = styled.h6``

const GrandPrice = styled.h6`
  color: var(--highlight);
`

const PriceText = styled.p`
  text-transform: uppercase;
`

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  &:last-of-type {
    margin-top: 1rem;
  }
`

const ButtonContainer = styled.div`
  margin-top: 2rem;
`

export default function Summary(props) {
  const { cart } = useContext(CartContext)
  const { total, vat, grandTotal } = cart.reduce(
    ({ total, vat, grandTotal }, { price, quantity }) => ({
      total: total + quantity * price,
      vat: vat + quantity * price * 0.2,
      grandTotal: grandTotal + quantity * price + 50,
    }),
    { total: 0, vat: 0, grandTotal: 0 }
  )

  console.log(cart.length)

  return (
    <CartContainer>
      <SummaryTitle>summary</SummaryTitle>
      <SummaryBody>
        {cart.length > 0 ? (
          cart.map(product => (
            <CartItem key={product.id} {...product} totalOnly />
          ))
        ) : (
          <div>The cart is empty</div>
        )}
        <SummaryTotal>
          <PriceContainer>
            <PriceText>Total</PriceText>
            <Price>
              {new Intl.NumberFormat("en-us", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              }).format(total)}
            </Price>
          </PriceContainer>
          <PriceContainer>
            <PriceText>Shipping</PriceText>
            <Price>
              {new Intl.NumberFormat("en-us", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              }).format(50)}
            </Price>
          </PriceContainer>
          <PriceContainer>
            <PriceText>VAT (INCLUDED)</PriceText>
            <Price>
              {new Intl.NumberFormat("en-us", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              }).format(vat)}
            </Price>
          </PriceContainer>
          <PriceContainer>
            <PriceText>Grand Total</PriceText>
            <GrandPrice>
              {new Intl.NumberFormat("en-us", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              }).format(grandTotal)}
            </GrandPrice>
          </PriceContainer>
        </SummaryTotal>
      </SummaryBody>
      <ButtonContainer>
        <Button primary strech onClick={props.handlePay}>
          continue & pay
        </Button>
      </ButtonContainer>
    </CartContainer>
  )
}
