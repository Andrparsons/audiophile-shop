import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import headphonePng from "../images/shared/desktop/image-headphones.png"
import speakerPng from "../images/shared/desktop/image-speakers.png"
import earphonePng from "../images/shared/desktop/image-earphones.png"

const ShopNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2.5rem 1.5rem 0 1.5rem;
`

const ShopNavButton = styled.button`
  width: 100%;
`

const ButtonImg = styled.img`
  max-width: 150px;
`

const ButtonTitle = styled.div`
  font-weight: 700;
  text-transform: uppercase;
  font-family: "Manrope", sans-serif;
  letter-spacing: 1px;
`

export default function ShopNav() {
  return (
    <ShopNavContainer>
      <Link to="/headphones">
        <ShopNavButton>
          <ButtonImg src={headphonePng} alt="" />
          <ButtonTitle>headphones</ButtonTitle>
        </ShopNavButton>
      </Link>
      <Link to="/speakers">
        <ShopNavButton>
          <ButtonImg src={speakerPng} alt="" />
          <ButtonTitle>speakers</ButtonTitle>
        </ShopNavButton>
      </Link>
      <Link to="/earphones">
        <ShopNavButton>
          <ButtonImg src={earphonePng} alt="" />
          <ButtonTitle>earphones</ButtonTitle>
        </ShopNavButton>
      </Link>
    </ShopNavContainer>
  )
}
