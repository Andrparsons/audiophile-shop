import React from "react"
import styled from "styled-components"

import mobileBg from "../images/home/mobile/image-header.jpg"
import tabletBg from "../images/home/tablet/image-header.jpg"
import desktopBg from "../images/home/desktop/image-hero.jpg"

const ProductHeroSection = styled.section`
  background-image: url(${mobileBg});
  background-size: cover;
  background-repeat: no-repeat;
  color: var(--white);

  @media (min-width: 600px) {
    background-image: url(${tabletBg});
  }

  @media (min-width: 1000px) {
    background-image: url(${desktopBg});
  }
`

const NewProductLabel = styled.span``

const ProductTitle = styled.h2``

const ProductText = styled.p``

const ShopButton = styled.button``

export default function ProductHero() {
  return (
    <ProductHeroSection>
      <NewProductLabel>New Product</NewProductLabel>
      <ProductTitle>XX99 Mark II HeadphoneS</ProductTitle>
      <ProductText>
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </ProductText>
      <ShopButton>See Product</ShopButton>
    </ProductHeroSection>
  )
}
