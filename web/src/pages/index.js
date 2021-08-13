import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ProductHero from "../components/productHero"
import ShopNav from "../components/shopNav"
import IndexFeatures from "../components/indexFeatures"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <ProductHero />
    <ShopNav />
    <IndexFeatures />
  </Layout>
)

export default IndexPage
