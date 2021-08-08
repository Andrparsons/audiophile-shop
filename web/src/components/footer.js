import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import IconFacebook from "../images/shared/svgs/icon-facebook.svg"
import IconInstagram from "../images/shared/svgs/icon-instagram.svg"
import IconTwitter from "../images/shared/svgs/icon-twitter.svg"

const FooterContainer = styled.footer`
  background-color: var(--darkBG);
`
const FooterContent = styled.div`
  color: var(--white);
  margin: 7.5rem 1.5rem 0 1.5rem;

  @media (min-width: 600px) {
    margin: 6rem 2.5rem 0 2.5rem;
  }

  @media (min-width: 1000px) {
    margin: 12.5rem auto 0 auto;
    max-width: 77%;
  }
`

const FooterDecoration = styled.div`
  height: 0.25rem;
  width: 6.25rem;
  background-color: var(--highlight);
  margin: 0 auto;

  @media (min-width: 600px) {
    margin: 0;
  }
`

const FooterGrid = styled.div`
  display: grid;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: "header header" "text text" "copyright social";
  }

  @media (min-width: 1000px) {
    grid-template-areas: "header header" "text social" "copyright copyright";
  }
`

const FooterFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;

  @media (min-width: 600px) {
    margin-top: 3.75rem;
    align-items: unset;
    grid-area: header;
  }

  @media (min-width: 1000px) {
    margin-top: 4.6875rem;
    flex-direction: row;
    justify-content: space-between;
  }
`
const ImgContainer = styled.div``

const FooterNav = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 0;
  padding: 0;

  @media (min-width: 600px) {
    text-align: left;
    margin-top: 2rem;
    flex-direction: row;
  }

  @media (min-width: 1000px) {
    margin-top: 0;
  }
`

const NavItem = styled.li`
  list-style-type: none;
  margin-top: 1rem;

  &:first-of-type {
    margin-top: 0;
  }

  a {
    cursor: pointer;
    color: var(--white);
    text-transform: uppercase;
    text-decoration: none;
    font-size: 0.8125rem;
    line-height: 1.92;
    letter-spacing: 0.125rem;
    font-weight: 700;

    &:hover {
      color: var(--hover);
    }
  }

  @media (min-width: 600px) {
    margin-top: 0;
    margin-right: 2.125rem;
  }
`

const FooterText = styled.p`
  margin-top: 3rem;
  margin-bottom: 0;
  text-align: center;

  @media (min-width: 600px) {
    margin-top: 2rem;
    text-align: left;
    grid-area: text;
    max-width: 96%;
  }
  @media (min-width: 1000px) {
    margin-top: 2.25rem;
    max-width: 95%;
  }
`

const FooterCopyright = styled(FooterText)`
  font-weight: 700;

  @media (min-width: 600px) {
    grid-area: copyright;
    margin-top: 5rem;
  }

  @media (min-width: 600px) {
    margin-top: 3.5rem;
    padding-bottom: 3rem;
  }
`

const FooterSocial = styled.div`
  margin-top: 3rem;
  padding-bottom: 2.875rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 600px) {
    grid-area: social;
    margin-top: 5rem;
    justify-content: end;
  }

  @media (min-width: 1000px) {
    margin-top: 0;
    padding-bottom: 0;
    align-items: end;
  }
`

const FooterIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  cursor: pointer;

  svg {
    fill: currentColor;
  }

  &:hover {
    color: var(--hover);
  }

  &::last-of-type {
    margin-right: 0;
  }
`

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterDecoration />
        <FooterGrid>
          <FooterFlex>
            <ImgContainer>
              <StaticImage
                src="../images/shared/desktop/logo.svg"
                formats={["AUTO", "WEBP", "AVIF"]}
                width={143}
                alt="Audiophile Logo"
              />
            </ImgContainer>
            <FooterNav>
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
            </FooterNav>
          </FooterFlex>
          <FooterText>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </FooterText>
          <FooterCopyright>Copyright 2021. All Rights Reserved</FooterCopyright>
          <FooterSocial>
            <FooterIcon>
              <IconFacebook />
            </FooterIcon>
            <FooterIcon>
              <IconTwitter />
            </FooterIcon>
            <FooterIcon>
              <IconInstagram />
            </FooterIcon>
          </FooterSocial>
        </FooterGrid>
      </FooterContent>
    </FooterContainer>
  )
}
