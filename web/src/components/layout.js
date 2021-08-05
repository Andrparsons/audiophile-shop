import * as React from "react"
import PropTypes from "prop-types"
import styled, { createGlobalStyle } from "styled-components"

import "@fontsource/manrope/400.css"
import "@fontsource/manrope/500.css"
import "@fontsource/manrope/700.css"

// import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import About from "./about"

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }

  html {
    //colours
    --darkPeach: #d87d4a;
    --peach: #fbaf85;
    --almostBlack: #101010;
    --black: #000000;
    --almostWhite: #f1f1f1;
    --closeWhite: #fafafa;
    --white: #ffffff;


    //colour intentions
    --darkBG: var(--almostBlack);
    --highlight: var(--darkPeach);

    font-family: 'Manrope', sans-serif;
  }

  h1 {
    font-size: 3.5rem;
    line-height: 1.04;
    letter-spacing: .125rem;
    text-transform: uppercase;
    font-weight: 700;
  }

  h2 {
    font-size: 1.75rem;
    line-height: 1.35;
    text-transform: uppercase;
    font-weight: 700;
    margin-top: 2.5rem;
    margin-bottom: 0;

    @media(min-width: 600px) {
      font-size: 2.5rem;
      line-height: 1.1;
      letter-spacing: 0.09375rem;
    }
  }

  h3 {
    font-size: 2rem;
    line-height: 1.125;
    letter-spacing: 0.071875rem;
    text-transform: uppercase;
    font-weight: 700;
  }

  h4 {
    font-size: 1.75rem;
    line-height: 1.35;
    letter-spacing: .125rem;
    text-transform: uppercase;
    font-weight: 700;
  }

  h5 {
    font-size: 1.5rem;
    line-height: 1.375;
    letter-spacing: .1rem;
    text-transform: uppercase;
    font-weight: 700;
  }

  h6 {
    font-size: 1.125rem;
    line-height: 1.38;
    letter-spacing: 0.075rem;
    text-transform: uppercase;
    font-weight: 700;
  }

  body {
    margin: 0;
  }

  p {
    opacity: 0.5;
    font-size: 0.9375rem;
    line-height: 1.67;
  }
`

export default function Layout({ children }) {
  //   const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <About />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
