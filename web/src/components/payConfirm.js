import React, { useContext } from "react"
import styled from "styled-components"
import { navigate } from "gatsby"

import { CartContext } from "../context/cartContext"
import { clearCart } from "../context/cartReducer"

import Button from "./button"
import CartItem from "./cartItem"

import Check from "../images/shared/svgs/check.svg"

const PayConfirmation = styled.section`
  background-color: var(--white);
  margin: 0 1.5rem;
  border-radius: 0.5rem;
  padding: 2rem;
  align-self: center;
  width: 100%;
  max-width: 540px;

  @media (min-width: 600px) {
    margin: 0 auto;
    padding: 3rem;
  }
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

  @media (min-width: 600px) {
    font-size: 2rem;
  }
`

const ItemContainer = styled.div`
  padding: 1.5rem;
  background-color: var(--iterationBG);
  border-radius: 0.5rem 0.5rem 0 0;

  @media (min-width: 600px) {
    width: 250px;
    flex-shrink: 0;
    border-radius: 0.5rem 0 0 0.5rem;
  }
`

const ItemContainerSubText = styled.p`
  text-align: center;
  font-weight: 700;
  border-top: 1px solid #00000080;
  margin-top: 0.75rem;
  padding-top: 0.75rem;
`

const PriceContainer = styled.div`
  background-color: var(--black);
  color: var(--white);
  padding: 1rem 1.5rem;
  border-radius: 0 0 0.5rem 0.5rem;
  width: 100%;

  @media (min-width: 600px) {
    border-radius: 0 0.5rem 0.5rem 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`

const GrandTotalText = styled.p`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 0.9375rem;
`

const GrandTotalPrice = styled.p`
  opacity: 1;
  font-weight: 700;
  font-size: 1.125rem;
`

const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;

  @media (min-width: 600px) {
    flex-direction: row;
    margin-bottom: 2rem;
    margin-top: 2rem;
  }
`

export default function Confirm() {
  const { cart, dispatch } = useContext(CartContext)
  const clearHandler = () => dispatch(clearCart())

  const handleReturnHome = () => {
    navigate("/")
    clearHandler()
  }

  const { items, grandTotal } = cart.reduce(
    ({ items, grandTotal }, { price, quantity }) => ({
      items: items + quantity,
      grandTotal: grandTotal + quantity * price + 50,
    }),
    { items: 0, grandTotal: 0 }
  )

  return (
    <PayConfirmation>
      <Checkmark>
        <Check />
      </Checkmark>
      <Thanks>Thank you for your order</Thanks>
      <p>You will receive an email confirmation shortly.</p>
      <SummaryContainer>
        <ItemContainer>
          {cart.length > 0 ? <CartItem {...cart[0]} totalOnly confirm /> : null}
          <ItemContainerSubText>
            and {items - 1} other item(s)
          </ItemContainerSubText>
        </ItemContainer>
        <PriceContainer>
          <GrandTotalText>Grand Total </GrandTotalText>
          <GrandTotalPrice>
            {new Intl.NumberFormat("en-us", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }).format(grandTotal)}
          </GrandTotalPrice>
        </PriceContainer>
      </SummaryContainer>
      <Button primary strech onClick={handleReturnHome}>
        back to home
      </Button>
    </PayConfirmation>
  )
}
