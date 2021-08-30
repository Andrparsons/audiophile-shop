import React, { useState } from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ShopNav from "../components/shopNav"

const Product = styled.section``

export default function ProductTemplate({ pageContext: { product } }) {
  const [itemQuantity, setItemQuantity] = useState(0)

  console.log(product)

  return (
    <Layout>
      <Seo title={product.productName} />
      <Product>{product.productName}</Product>
      <ShopNav />
    </Layout>
  )
}
