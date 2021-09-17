import React, { useContext } from "react"
import styled from "styled-components"

import { CartContext } from "../context/cartContext"
import { clearCart } from "../context/cartReducer"
import CartItem from "./cartItem"

const CartContainer = styled.div`
  margin: 2.5rem 1.5rem 0 1.5rem;
  padding: 2rem 1.75rem;
  background-color: var(--white);
  border-radius: 0.5rem;
  overflow: scroll;
  max-height: 75vh;
`

const TotalItems = styled.h4``

export default function Cart() {
  const { cart, dispatch } = useContext(CartContext)
  const clearHandler = () => dispatch(clearCart())

  const { items, total } = cart.reduce(
    ({ items, total }, { price, quantity }) => ({
      items: items + quantity,
      total: total + quantity * price,
    }),
    { items: 0, total: 0 }
  )

  return (
    <CartContainer>
      <TotalItems>Cart ({items})</TotalItems>
      <button onClick={() => clearHandler()}>clear cart</button>
      {cart.length > 0 ? (
        cart.map(product => <CartItem key={product.id} {...product} />)
      ) : (
        <div>The cart is empty</div>
      )}
      <div>Total {total}</div>
    </CartContainer>
  )
}
