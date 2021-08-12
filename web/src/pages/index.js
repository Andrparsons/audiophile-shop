import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ProductHero from "../components/productHero"
import ShopNav from "../components/shopNav"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <ProductHero />
    <ShopNav />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </Layout>
)

export default IndexPage
