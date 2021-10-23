import * as React from "react"
import { createGlobalStyle } from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
import CheckoutForm from "../components/checkoutForm"

const GlobalStyleCheckout = createGlobalStyle`
  body {
    background-color: var(--almostWhite);
  }
`

export default function Checkout() {
  return (
    <Layout noAbout>
      <GlobalStyleCheckout />
      <Seo title="Checkout" />
      <CheckoutForm />
    </Layout>
  )
}
