import React, { useContext } from "react"
import styled from "styled-components"

import { CartContext } from "../context/cartContext"
import CartItem from "./cartItem"
import Button from "./button"

const CartContainer = styled.div`
  margin: 2.5rem 1.5rem 0 1.5rem;
  padding: 2rem 1.75rem;
  background-color: var(--white);
  border-radius: 0.5rem;
  max-width: 377px;
  flex-grow: 1;

  @media (min-width: 600px) {
    margin: 1.5rem 2.5rem 0 2.5rem;
  }

  @media (min-width: 1000px) {
    margin: 2rem 0 0 0;
  }
`

const SummaryTitle = styled.h6``

const SummaryBody = styled.div`
  margin-top: 2rem;
`

const Price = styled.h6``

const PriceText = styled.p``

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const ButtonContainer = styled.div`
  margin-top: 1.5rem;
`

export default function Summary() {
  const { cart } = useContext(CartContext)
  const { items, total, vat, grandTotal } = cart.reduce(
    ({ items, total, vat, grandTotal }, { price, quantity }) => ({
      items: items + quantity,
      total: total + quantity * price,
      vat: vat + quantity * price * 0.2,
      grandTotal: grandTotal + quantity * price + 50,
    }),
    { items: 0, total: 0, vat: 0, grandTotal: 0 }
  )

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
          <Price>
            {new Intl.NumberFormat("en-us", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }).format(grandTotal)}
          </Price>
        </PriceContainer>
      </SummaryBody>
      <ButtonContainer>
        <Button primary strech>
          continue & pay
        </Button>
      </ButtonContainer>
    </CartContainer>
  )
}
