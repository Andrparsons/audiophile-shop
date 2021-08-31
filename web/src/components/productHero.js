import React from "react"
import styled from "styled-components"

import Button from "./button"

import mobileBg from "../images/home/mobile/image-header.jpg"
import tabletBg from "../images/home/tablet/image-header.jpg"
import desktopBg from "../images/home/desktop/image-hero.jpg"

const ProductHeroSection = styled.section`
  color: var(--white);
  position: relative;
  background-color: var(--darkBG);

  &::before {
    background-image: url(${mobileBg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.8;
    z-index: 1;
    mix-blend-mode: difference;

    @media (min-width: 600px) {
      background-image: url(${tabletBg});
    }

    @media (min-width: 1000px) {
      background-image: url(${desktopBg});
      max-width: 1100px;
      margin: auto;
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;

    //firefox and chrome render the png differently - this fixes it so it blends better
    @-moz-document url-prefix() {
      background-color: var(--blendBg);
    }

    @media (min-width: 1000px) {
      max-width: 1100px;
      margin: auto;
    }
  }
`

const ProductHeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 6.75rem 3rem;
  position: relative;
  z-index: 1;

  @media (min-width: 600px) {
    padding: 9.25rem 12rem;
  }

  @media (min-width: 1000px) {
    text-align: left;
    align-items: flex-start;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0;
    padding-top: 14rem;
    padding-bottom: 9.875rem;
  }
`

const NewProductLabel = styled.span`
  font-size: 0.875rem;
  line-height: 1.35;
  letter-spacing: 0.7em;
  text-transform: uppercase;
  opacity: 0.5;
`

const ProductTitle = styled.h1`
  margin-top: 1rem;

  @media (min-width: 600px) {
    margin-top: 1.5rem;
  }

  @media (min-width: 1000px) {
    max-width: 400px;
  }
`

const ProductText = styled.p`
  margin-top: 1.5rem;
  opacity: 0.75;
  max-width: 350px;
`

const ButtonContainer = styled.div`
  margin-top: 1.75rem;

  @media (min-width: 600px) {
    margin-top: 2.5rem;
  }
`

export default function ProductHero() {
  return (
    <ProductHeroSection>
      <ProductHeroContainer>
        <NewProductLabel>New Product</NewProductLabel>
        <ProductTitle>XX99 Mark II HeadphoneS</ProductTitle>
        <ProductText>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </ProductText>
        <ButtonContainer>
          <Button primary>See Product</Button>
        </ButtonContainer>
      </ProductHeroContainer>
    </ProductHeroSection>
  )
}
