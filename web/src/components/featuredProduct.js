import React from "react"
import styled from "styled-components"
import { getImage, GatsbyImage, withArtDirection } from "gatsby-plugin-image"
import { Link } from "gatsby"

import Button from "./button"
import NewProduct from "./newProductline"

import "./featuredProduct.css"

const FeaturedProductItem = styled.div`
  margin-top: 7.5rem;

  &:first-of-type {
    margin-top: 0;
  }

  @media (min-width: 1000px) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:nth-child(even) {
      flex-direction: row-reverse;
    }
  }
`

const ProductContent = styled.div`
  margin: 2rem auto 0 auto;
  max-width: 572px;

  @media (min-width: 600px) {
    margin: 3.25rem auto 0 auto;
  }

  @media (min-width: 1000px) {
    margin: 0;
    max-width: 445px;
  }
`

const ProductName = styled.h2`
  margin-bottom: 1.5rem;

  @media (min-width: 600px) {
    margin: 0 auto 1.5rem auto;
    max-width: 300px;
  }

  @media (min-width: 1000px) {
    margin: 0;
    margin-bottom: 2rem;
    max-width: 300px;
  }
`

const ProductText = styled.p`
  margin-bottom: 1.5rem;

  @media (min-width: 1000px) {
    margin-bottom: 2.5rem;
  }
`

export default function FeaturedProduct(data) {
  const product = data.product

  //schema has the images in this order
  const [mobile, tablet, desktop] = product.categoryImage

  const images = withArtDirection(getImage(mobile.asset), [
    {
      media: "(min-width: 1000px)",
      image: getImage(desktop.asset),
    },
    {
      media: "(min-width: 600px",
      image: getImage(tablet.asset),
    },
  ])

  return (
    <FeaturedProductItem>
      <GatsbyImage
        image={images}
        alt={mobile.alt}
        className="art-direction-product"
      />
      <ProductContent>
        <NewProduct new={product.new}>new product</NewProduct>
        <ProductName>{product.productName}</ProductName>
        <ProductText>{product.description[0].children[0].text}</ProductText>
        <Link to={`/product/${product.slug.current}/`}>
          <Button primary>see product</Button>
        </Link>
      </ProductContent>
    </FeaturedProductItem>
  )
}
