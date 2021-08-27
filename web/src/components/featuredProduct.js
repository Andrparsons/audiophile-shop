import React from "react"
import styled from "styled-components"

const FeaturedProductItem = styled.div``

export default function FeaturedProduct(data) {
  const product = data.product
  console.log(product.description[0].children)
  return (
    <FeaturedProductItem>
      <div>{product.productName}</div>
      <div>{product.description[0].children[0].text}</div>
    </FeaturedProductItem>
  )
}
