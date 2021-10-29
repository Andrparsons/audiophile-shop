import React, { useContext } from "react"
import styled from "styled-components"

import { CartContext } from "../context/cartContext"
import { clearCart } from "../context/cartReducer"

import Button from "./button"
import CartItem from "./cartItem"

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

  return (
    <section>
      <h1>Thank you for your order</h1>
      <p>You will receive an email confirmation shortly.</p>
      {cart.length > 0 ? <CartItem {...cart[0]} totalOnly /> : null}
      <p>and {items - 1} other item(s)</p>
      <h2>Grand Total {grandTotal}</h2>
      <Button>back to home</Button>
    </section>
  )
}
