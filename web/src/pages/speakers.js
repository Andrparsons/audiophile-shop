import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import CategoryHeader from "../components/categoryHeader"
import ShopNav from "../components/shopNav"
import FeaturedProducts from "../components/featuredProducts"

const Speakers = () => (
  <Layout>
    <Seo title="Home" />
    <CategoryHeader title="speakers" />
    <FeaturedProducts />
    <ShopNav />
  </Layout>
)

export default Speakers
