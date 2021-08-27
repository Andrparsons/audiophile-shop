import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import CategoryHeader from "../components/categoryHeader"
import ShopNav from "../components/shopNav"
import FeaturedProducts from "../components/featuredProducts"

const Earphones = () => (
  <Layout>
    <Seo title="Home" />
    <CategoryHeader title="earphones" />
    <FeaturedProducts />
    <ShopNav />
  </Layout>
)

export default Earphones
