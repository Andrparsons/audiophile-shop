import React, { useContext } from "react"
import styled from "styled-components"

import { CartContext } from "../context/cartContext"
import { clearCart } from "../context/cartReducer"

import Button from "./button"
import CartItem from "./cartItem"

import Check from "../images/shared/svgs/check.svg"

export default function Confirm() {
  const { cart, dispatch } = useContext(CartContext)
  const clearHandler = () => dispatch(clearCart())

  const { items, grandTotal } = cart.reduce(
    ({ items, grandTotal }, { price, quantity }) => ({
      items: items + quantity,
      grandTotal: grandTotal + quantity * price + 50,
    }),
    { items: 0, grandTotal: 0 }
  )

  const PayConfirmation = styled.section`
    background-color: var(--white);
    margin: 0 1.5rem;
    border-radius: 0.5rem;
    padding: 2rem;
    align-self: center;
  `
  const Checkmark = styled.div`
    background-color: var(--primaryBtn);
    height: 4rem;
    width: 4rem;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `

  const Thanks = styled.h3`
    font-size: 1.5rem;
    line-height: 1.16;
    max-width: 280px;
  `

  const ItemContainer = styled.div`
    padding: 1.5rem;
    background-color: var(--iterationBG);
  `

  const PriceContainer = styled.div``

  return (
    <PayConfirmation>
      <Checkmark>
        <Check />
      </Checkmark>
      <Thanks>Thank you for your order</Thanks>
      <p>You will receive an email confirmation shortly.</p>
      <ItemContainer>
        {cart.length > 0 ? <CartItem {...cart[0]} totalOnly confirm /> : null}
        <p>and {items - 1} other item(s)</p>
      </ItemContainer>
      <h2>Grand Total {grandTotal}</h2>
      <Button>back to home</Button>
    </PayConfirmation>
  )
}
