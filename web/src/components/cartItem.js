import React, { useContext } from "react"
import styled from "styled-components"

import { CartContext } from "../context/cartContext"
import { increase, decrease } from "../context/cartReducer"

const CartItemContainer = styled.div``

export default function CartItem(product) {
  const { dispatch } = useContext(CartContext)
  const increaseHandler = product => dispatch(increase(product))
  const decreaseHandler = product => dispatch(decrease(product))

  return (
    <CartItemContainer>
      Item
      <h5>{product.productName}</h5>
      <h6>{product.price}</h6>
      <div>
        <button onClick={() => decreaseHandler(product)}>-</button>
        <div>{product.quantity}</div>
        <button onClick={() => increaseHandler(product)}>+</button>
      </div>
    </CartItemContainer>
  )
}
