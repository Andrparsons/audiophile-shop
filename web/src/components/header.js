import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import ShopNav from "./shopNav"
import Cart from "./cart"
import Logo from "../images/shared/svgs/logo.svg"
import IconMenu from "../images/shared/svgs/icon-hamburger.svg"
import IconCart from "../images/shared/svgs/icon-cart.svg"

const HeaderContainer = styled.header`
  background-color: var(--darkBG);
  position: sticky;
  top: 0;
  z-index: 2;
`

const HeaderFlex = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 1.5rem;
  padding: 2rem 0;

  @media (min-width: 600px) {
    margin: 0 2.5rem;
  }

  @media (min-width: 1000px) {
    margin: 0 auto;
    max-width: 1100px;
  }
`

const HeaderBtn = styled.button`
  border: none;
  background: transparent;
  align-self: end;
  cursor: pointer;
`

const MenuBtn = styled(HeaderBtn)`
  @media (min-width: 1000px) {
    display: none;
  }
`

const HeaderLogoGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(50% + 71px);

  @media (min-width: 600px) {
    width: auto;
  }
`

const ImgContainer = styled(Link)`
  display: flex;
  align-items: center;

  @media (min-width: 600px) {
    margin-left: 2.5rem;
  }

  @media (min-width: 1000px) {
    margin-left: 0;
  }
`

const DesktopNav = styled.ul`
  display: none;
  margin: 0;
  padding: 0;

  @media (min-width: 1000px) {
    display: flex;
  }
`
const NavItem = styled.li`
  list-style-type: none;

  a {
    color: var(--white);
    text-transform: uppercase;
    text-decoration: none;
    font-size: 0.825rem;
    line-height: 1.92;
    letter-spacing: 0.125rem;
    font-weight: 700;
    margin-right: 2.125rem;
    cursor: pointer;

    &:hover {
      color: var(--hover);
    }

    &::last-of-type {
      margin-right: 0;
    }
  }
`

const HeaderBreak = styled.hr`
  border: 0;
  height: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin: 0;

  @media (min-width: 600px) {
    margin: 0 2.5rem;
  }

  @media (min-width: 1000px) {
    margin: 0 auto;
    max-width: 1100px;
  }
`

const MenuOverlay = styled.div`
  position: absolute;
  width: 100%;
  z-index: 2;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  display: ${({ open }) => (open ? "block" : "none")};

  background-color: #00000066;
  height: 100vh;
`

const CartContainer = styled.div`
  align-items: flex-start;
  justify-content: end;
  display: flex;

  @media (min-width: 1000px) {
    margin: 0 auto;
    max-width: 1100px;
  }
`
const OverlayContainer = styled(CartContainer)`
  background-color: var(--white);
`

export default function Header() {
  const [navOpen, setNavOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)

  // useEffect(() => {
  //   navOpen || cartOpen
  //     ? (document.body.style.overflow = "hidden")
  //     : (document.body.style.overflow = "unset")
  // }, [navOpen, cartOpen])

  return (
    <HeaderContainer>
      <HeaderFlex>
        <HeaderLogoGroup>
          <MenuBtn open={navOpen} onClick={() => setNavOpen(!navOpen)}>
            <IconMenu />
          </MenuBtn>
          <ImgContainer to="/">
            <Logo />
          </ImgContainer>
        </HeaderLogoGroup>
        <DesktopNav>
          <NavItem>
            <Link to="/">home</Link>
          </NavItem>
          <NavItem>
            <Link to="/headphones">headphones</Link>
          </NavItem>
          <NavItem>
            <Link to="/speakers">speakers</Link>
          </NavItem>
          <NavItem>
            <Link to="/earphones">earphones</Link>
          </NavItem>
        </DesktopNav>
        <HeaderBtn open={cartOpen} onClick={() => setCartOpen(!cartOpen)}>
          <IconCart />
        </HeaderBtn>
      </HeaderFlex>
      <MenuOverlay open={navOpen}>
        <OverlayContainer>
          <ShopNav mobileMenu />
        </OverlayContainer>
      </MenuOverlay>
      <MenuOverlay open={cartOpen}>
        <CartContainer>
          <Cart />
        </CartContainer>
      </MenuOverlay>
      <HeaderBreak />
    </HeaderContainer>
  )
}
