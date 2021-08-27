import React from "react"
import styled from "styled-components"

import FeaturedProduct from "./featuredProduct"

const FeaturedProductsSection = styled.section`
  margin: 4rem 1.5rem 7.5rem 1.5rem;
  text-align: center;
`

export default function FeaturedProducts(data) {
  const products = data.products

  return (
    <FeaturedProductsSection>
      {products.map(product => (
        <FeaturedProduct key={product.node.id} product={product.node} />
      ))}
    </FeaturedProductsSection>
  )
}
