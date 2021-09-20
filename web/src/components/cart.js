import React, { useContext } from "react"
import styled from "styled-components"

import { CartContext } from "../context/cartContext"
import { clearCart } from "../context/cartReducer"
import CartItem from "./cartItem"
import Button from "./button"

const CartContainer = styled.div`
  margin: 2.5rem 1.5rem 0 1.5rem;
  padding: 2rem 1.75rem;
  background-color: var(--white);
  border-radius: 0.5rem;
  overflow: scroll;
  max-height: 75vh;
`
const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`

const CartFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const TotalTitle = styled.p``

const Total = styled.h6``

const RemoveLink = styled.p`
  text-decoration: underline;
  font-weight: 700;
`

const TotalItems = styled.h6``

const ButtonFlex = styled.div``

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
      <CartHeader>
        <TotalItems>Cart ({items})</TotalItems>
        <RemoveLink onClick={() => clearHandler()}>Remove all</RemoveLink>
      </CartHeader>
      {cart.length > 0 ? (
        cart.map(product => <CartItem key={product.id} {...product} />)
      ) : (
        <div>The cart is empty</div>
      )}
      <CartFooter>
        <TotalTitle>Total</TotalTitle>
        <Total>
          {new Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(total)}
        </Total>
      </CartFooter>
      <ButtonFlex>
        <Button primary strech>
          checkout
        </Button>
      </ButtonFlex>
    </CartContainer>
  )
}
