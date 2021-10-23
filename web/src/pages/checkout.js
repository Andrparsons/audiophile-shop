import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import CheckoutForm from "../components/checkoutForm"
import Summary from "../components/checkoutSummary"

export default function Checkout() {
  return (
    <Layout noAbout>
      <Seo title="Checkout" />
      <CheckoutForm />
    </Layout>
  )
}
