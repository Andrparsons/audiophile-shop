import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { navigate } from "gatsby"
import Summary from "./checkoutSummary"
import Confirm from "./payConfirm"

const BackButton = styled.button`
  font-family: "Manrope", sans-serif;
  font-size: 0.9375;
  opacity: 0.65;
  font-weight: 400;
  line-height: 1.67;
  color: var(--black);
  cursor: pointer;
  background-color: transparent;
  border: none;
  margin-top: 1rem;
  margin-bottom: 1.5rem;

  @media (min-width: 600px) {
    margin-top: 2rem;
  }

  @media (min-width: 1000px) {
    margin-top: 5rem;
    margin-bottom: 2.5rem;
  }
`

const CheckoutContainer = styled.div`
  margin-right: 1.5rem;
  margin-left: 1.5rem;

  @media (min-width: 600px) {
    margin-right: 2.5rem;
    margin-left: 2.5rem;
  }

  @media (min-width: 1000px) {
    margin: 0 auto;
    max-width: 1100px;
  }
`

const CheckoutFormContainer = styled.form`
  padding: 1.5rem;
  background-color: var(--white);
  border-radius: 0.5rem;

  @media (min-width: 600px) {
    padding: 1.75rem;
  }

  @media (min-width: 1000px) {
    max-width: 730px;
    flex-shrink: 0;
    flex-grow: 1;
  }
`

const CheckoutFlexContainer = styled.div`
  @media (min-width: 1000px) {
    display: flex;
    justify-content: space-between;
  }
`

const CheckoutFormTitle = styled.h2``

const CheckoutFormSubTitle = styled.h6`
  margin-top: 2rem;
  font-size: 0.8125rem;
  line-height: 1.92;
  font-weight: 700;
  letter-spacing: 1px;
  color: var(--highlight);
  text-transform: uppercase;
  margin-bottom: 1rem;

  @media (min-width: 600px) {
    margin-bottom: 0;
  }
`

const InputGroup = styled.div`
  display: grid;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
  }
`

const CheckoutFormLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;

  &:first-of-type {
    margin-top: 0;
  }

  @media (min-width: 600px) {
    &:first-of-type {
      margin-top: 1.5rem;
    }
  }

  ${props =>
    props.full &&
    `
    @media(min-width: 600px) {
      grid-column: 1 / span 2;
    }

  `}
`

const LabelText = styled.p`
  font-size: 0.75rem;
  letter-spacing: -0.2px;
  line-height: 1rem;
  font-weight: 700;
  opacity: 1;
  margin-bottom: 0.5rem;
`

const CheckoutFormInput = styled.input`
  border: 1px solid #cfcfcf;
  border-radius: 0.5rem;
  padding: 1.125rem 1.5rem;
  font-size: 0.875rem;
  line-height: 1.35;
  letter-spacing: -0.25px;
  font-weight: 700;
`

const PaymentMethodGroup = styled.div`
  display: grid;

  @media (min-width: 600px) {
    margin-top: 1rem;
    grid-template-columns: repeat(2, 1fr);
  }
`

const RadioIcon = styled.span`
  position: relative;
  top: 0;
  left: 0;
  border-radius: 50%;
  height: 1.25rem;
  width: 1.25rem;
  border: 1px solid #cfcfcf;
  margin-right: 1.25rem;

  &:after {
    content: "";
    position: absolute;
    display: none;
    top: 0.25rem;
    left: 0.25rem;
    width: 0.625rem;
    height: 0.625rem;
    border-radius: 50%;
    background: var(--highlight);
  }
`

const RadioInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:checked ~ ${RadioIcon}:after {
    display: block;
  }
`

const RadioContainer = styled.label`
  border: 1px solid #cfcfcf;
  border-radius: 0.5rem;
  padding: 1.125rem 1.5rem;
  font-size: 0.875rem;
  line-height: 1.35;
  letter-spacing: -0.25px;
  font-weight: 700;
  cursor: pointer;
  user-select: none;
  position: relative;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: flex-end;

  &:hover {
    border: 1px solid var(--highlight);
  }

  @media (min-width: 600px) {
    grid-column: 2;
  }
`

const RadioLabel = styled(LabelText)`
  margin-bottom: 0;
`

const MenuOverlay = styled.div`
  position: absolute;
  width: 100%;
  z-index: 2;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  display: ${({ open }) => (open ? "block" : "none")};

  background-color: #00000066;
  height: 100vh;
  inset: 0;
`

export default function CheckoutForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [zip, setZip] = useState("")
  const [city, setCity] = useState("")
  const [country, setCountry] = useState("")
  const [moneyNum, setMoneyNum] = useState("")
  const [moneyPin, setMoneyPin] = useState("")

  const [radioOption, setRadioOption] = useState("COD")
  const handleRadioChange = e => {
    setRadioOption(e.target.value)
  }

  const [overlay, setOverlay] = useState(false)

  useEffect(() => {
    overlay
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset")
  }, [overlay])

  const handlePay = () => setOverlay(true)

  return (
    <CheckoutContainer>
      <MenuOverlay open={overlay}>
        <Confirm />
      </MenuOverlay>
      <BackButton
        onClick={() => {
          navigate(-1)
        }}
      >
        Go Back
      </BackButton>
      <CheckoutFlexContainer>
        <CheckoutFormContainer>
          <CheckoutFormTitle>Checkout</CheckoutFormTitle>
          <CheckoutFormSubTitle>Billing Details</CheckoutFormSubTitle>

          <InputGroup>
            <CheckoutFormLabel>
              <LabelText>Name</LabelText>
              <CheckoutFormInput
                type="text"
                placeholder="Name"
                value={name}
                onChange={({ target }) => setName(target.value)}
              />
            </CheckoutFormLabel>

            <CheckoutFormLabel>
              <LabelText>Email Address</LabelText>
              <CheckoutFormInput
                type="email"
                placeholder="example@example.com"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
              />
            </CheckoutFormLabel>

            <CheckoutFormLabel>
              <LabelText>Phone Number</LabelText>
              <CheckoutFormInput
                type="tel"
                placeholder="+1 123-456-7890"
                value={phone}
                onChange={({ target }) => setPhone(target.value)}
              />
            </CheckoutFormLabel>
          </InputGroup>

          <CheckoutFormSubTitle>Shipping Info</CheckoutFormSubTitle>

          <InputGroup>
            <CheckoutFormLabel full>
              <LabelText>Address</LabelText>
              <CheckoutFormInput
                type="text"
                placeholder="Address"
                value={address}
                onChange={({ target }) => setAddress(target.value)}
              />
            </CheckoutFormLabel>

            <CheckoutFormLabel>
              <LabelText>ZIP Code</LabelText>
              <CheckoutFormInput
                type="text"
                placeholder="ZIP Code"
                value={zip}
                onChange={({ target }) => setZip(target.value)}
              />
            </CheckoutFormLabel>

            <CheckoutFormLabel>
              <LabelText>City</LabelText>
              <CheckoutFormInput
                type="text"
                placeholder="City"
                value={city}
                onChange={({ target }) => setCity(target.value)}
              />
            </CheckoutFormLabel>

            <CheckoutFormLabel>
              <LabelText>Country</LabelText>
              <CheckoutFormInput
                type="text"
                placeholder="Country"
                value={country}
                onChange={({ target }) => setCountry(target.value)}
              />
            </CheckoutFormLabel>
          </InputGroup>

          <CheckoutFormSubTitle>Payment Details</CheckoutFormSubTitle>

          <PaymentMethodGroup>
            <LabelText>Payment Method</LabelText>

            <RadioContainer>
              <RadioLabel>e-Money</RadioLabel>
              <RadioInput
                type="radio"
                name="payment"
                value="eMoney"
                onChange={e => handleRadioChange(e)}
                checked={radioOption === "eMoney"}
              />
              <RadioIcon />
            </RadioContainer>

            <RadioContainer>
              <RadioLabel>Cash on Delivery</RadioLabel>
              <RadioInput
                type="radio"
                name="payment"
                value="COD"
                onChange={e => handleRadioChange(e)}
                checked={radioOption === "COD"}
              />
              <RadioIcon />
            </RadioContainer>
          </PaymentMethodGroup>

          <InputGroup>
            <CheckoutFormLabel>
              <LabelText>e-Money Number</LabelText>
              <CheckoutFormInput
                type="text"
                placeholder="e-Money Number"
                value={moneyNum}
                onChange={({ target }) => setMoneyNum(target.value)}
              />
            </CheckoutFormLabel>

            <CheckoutFormLabel>
              <LabelText>e-Money PIN</LabelText>
              <CheckoutFormInput
                type="text"
                placeholder="PIN"
                value={moneyPin}
                onChange={({ target }) => setMoneyPin(target.value)}
              />
            </CheckoutFormLabel>
          </InputGroup>
        </CheckoutFormContainer>
        <Summary handlePay={handlePay} />
      </CheckoutFlexContainer>
    </CheckoutContainer>
  )
}
