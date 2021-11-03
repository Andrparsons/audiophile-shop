import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import headphonePng from "../images/shared/desktop/image-headphones.png"
import speakerPng from "../images/shared/desktop/image-speakers.png"
import earphonePng from "../images/shared/desktop/image-earphones.png"

import IconRight from "../images/shared/svgs/icon-arrow-right.svg"

const ShopNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8.5rem 1.5rem 0 1.5rem;
  flex-grow: 1;

  ${props =>
    props.mobileMenu &&
    `
    margin: 0;
    padding: 2.5rem 1.5rem;

    img{ 
      max-width: 100px;
    }

    button {
      margin-top: -0.5rem
    }

    @media (min-width: 600px) {
      margin: 0 !important;
      padding: 3.5rem 2.5rem;

      img {
        max-width: 150px
      }

      button {
        margin-top: 3.25rem;
      }
    }
  `}

  a {
    position: relative;
    margin-top: 1rem;
    width: 100%;
    max-width: 350px;
    margin-right: auto;
    margin-left: auto;

    &:first-child {
      margin-top: 0;
    }
  }

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
    margin: 6rem 2.5rem 0 2.5rem;

    a {
      margin-top: 0;
      margin-right: 0.625rem;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  @media (min-width: 1000px) {
    margin: 7.5rem auto 0 auto;
    max-width: 1100px;
  }
`

const ShopNavButton = styled.button`
  width: 100%;
  background-color: transparent;
  margin-top: 3.25rem;
  padding: 0;
  cursor: pointer;
  border: none;

  @media (min-width: 1000px) {
    margin-top: 4.5rem;
  }
`

const ButtonBackGround = styled.div`
  background-color: var(--shopNavBG);
  height: 10.3125rem;
  border-radius: 0.5rem;
  padding-top: 5.5rem;

  @media (min-width: 1000px) {
    height: 12.75rem;
    padding-top: 7.25rem;
  }
`

const ButtonImg = styled.img`
  max-width: 150px;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  margin: auto;

  @media (min-width: 1000px) {
    max-width: 225px;
  }
`

const ButtonTitle = styled.div`
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.0625rem;
`

const ButtonShopGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8125rem;
  margin-top: 1rem;
  margin-bottom: 1.5rem;

  @media (min-width: 1000px) {
    margin-bottom: 2rem;
  }
`

const ButtonShopText = styled.span`
  color: var(--black);
  opacity: 0.5;
  text-transform: uppercase;
  font-weight: 700;
  margin-right: 1em;
  letter-spacing: 0.0625rem;

  ${ShopNavButton}:hover & {
    color: var(--primaryBtn);
    opacity: 1;
  }
`

export default function ShopNav({ ...restProps }) {
  return (
    <ShopNavContainer {...restProps}>
      <Link to="/headphones">
        <ShopNavButton>
          <ButtonBackGround>
            <ButtonImg src={headphonePng} alt="" />
            <ButtonTitle>headphones</ButtonTitle>
            <ButtonShopGroup>
              <ButtonShopText>shop</ButtonShopText>
              <IconRight />
            </ButtonShopGroup>
          </ButtonBackGround>
        </ShopNavButton>
      </Link>
      <Link to="/speakers">
        <ShopNavButton>
          <ButtonBackGround>
            <ButtonImg src={speakerPng} alt="" />
            <ButtonTitle>speakers</ButtonTitle>
            <ButtonShopGroup>
              <ButtonShopText>shop</ButtonShopText>
              <IconRight />
            </ButtonShopGroup>
          </ButtonBackGround>
        </ShopNavButton>
      </Link>
      <Link to="/earphones">
        <ShopNavButton>
          <ButtonBackGround>
            <ButtonImg src={earphonePng} alt="" />
            <ButtonTitle>earphones</ButtonTitle>
            <ButtonShopGroup>
              <ButtonShopText>shop</ButtonShopText>
              <IconRight />
            </ButtonShopGroup>
          </ButtonBackGround>
        </ShopNavButton>
      </Link>
    </ShopNavContainer>
  )
}
