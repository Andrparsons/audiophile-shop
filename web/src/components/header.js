import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import IconMenu from "../images/shared/tablet/icon-hamburger.svg"
import IconCart from "../images/shared/desktop/icon-cart.svg"

const HeaderContainer = styled.header`
  background-color: var(--darkBG);
`

const HeaderFlex = styled.div`
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
    max-width: 77%;
  }
`

const HeaderBtn = styled.button`
  border: none;
  background: transparent;
  align-self: end;
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

const ImgContainer = styled.div`
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
    max-width: 77%;
  }
`

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    open
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset")
  }, [open])

  return (
    <HeaderContainer>
      <HeaderFlex>
        <HeaderLogoGroup>
          <MenuBtn open={open} onClick={() => setOpen(!open)}>
            <IconMenu />
          </MenuBtn>
          <ImgContainer>
            <StaticImage
              src="../images/shared/desktop/logo.svg"
              formats={["AUTO", "WEBP", "AVIF"]}
              width={143}
              alt="Audiophile Logo"
            />
          </ImgContainer>
        </HeaderLogoGroup>
        <DesktopNav>
          <NavItem>
            <Link to="/">home</Link>
          </NavItem>
          <NavItem>
            <Link to="headphones">headphones</Link>
          </NavItem>
          <NavItem>
            <Link to="speakers">speakers</Link>
          </NavItem>
          <NavItem>
            <Link to="earphones">earphones</Link>
          </NavItem>
        </DesktopNav>
        <HeaderBtn>
          <IconCart />
        </HeaderBtn>
      </HeaderFlex>
      <HeaderBreak />
    </HeaderContainer>
  )
}
