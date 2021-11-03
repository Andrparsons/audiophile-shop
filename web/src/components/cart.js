import React, { useContext } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { CartContext } from "../context/cartContext"
import { clearCart } from "../context/cartReducer"
import CartItem from "./cartItem"
import Button from "./button"

const CartContainer = styled.div`
  margin: 2.5rem 1.5rem 0 1.5rem;
  padding: 2rem 1.75rem;
  background-color: var(--white);
  border-radius: 0.5rem;
  overflow: auto;
  max-height: 75vh;
  max-width: 377px;
  flex-grow: 1;

  @media (min-width: 600px) {
    margin: 7.5rem 2.5rem 0 2.5rem;
  }

  @media (min-width: 1000px) {
    margin: 8rem 0 0 0;
  }
`

const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`

const CartBody = styled.div`
  margin-top: 2rem;
`

const CartFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`

const TotalTitle = styled.p``

const Total = styled.h6``

const RemoveLink = styled.p`
  text-decoration: underline;
  font-weight: 700;
  cursor: pointer;
`

const TotalItems = styled.h6``

const ButtonContainer = styled.div`
  margin-top: 1.5rem;
`

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
      <CartBody>
        {cart.length > 0 ? (
          cart.map(product => <CartItem key={product.id} {...product} />)
        ) : (
          <div>The cart is empty</div>
        )}
      </CartBody>
      <CartFooter>
        <TotalTitle>TOTAL</TotalTitle>
        <Total>
          {new Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(total)}
        </Total>
      </CartFooter>
      <ButtonContainer>
        <Link to="/checkout">
          <Button primary strech>
            checkout
          </Button>
        </Link>
      </ButtonContainer>
    </CartContainer>
  )
}
