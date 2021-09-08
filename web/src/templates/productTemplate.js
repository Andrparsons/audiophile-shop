import React, { useState } from "react"
import styled from "styled-components"
import { getImage, GatsbyImage, withArtDirection } from "gatsby-plugin-image"
import { navigate } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ShopNav from "../components/shopNav"
import NewProduct from "../components/newProductline"

const Product = styled.section``

const ProductIntro = styled.div``

const ProductFeatures = styled.div``

const ProductImages = styled.div``

const ProductName = styled.h2``

const ProductText = styled.p``

const ProductPrice = styled.p``

const FeatureTitle = styled.h3``

const FeatureCol = styled.div``

const IncludedItems = styled.ul``

const IncludedItem = styled.li``

export default function ProductTemplate({ pageContext: { product } }) {
  const [itemQuantity, setItemQuantity] = useState(0)

  //schema has the images in this order
  const [mainMobile, mainTablet, mainDesktop] = product.productImage
  const [firstMobile, firstTablet, firstDesktop] =
    product.gallery[0].galleryImage
  const [secondMobile, secondTablet, secondDesktop] =
    product.gallery[1].galleryImage
  const [thirdMobile, thirdTablet, thirdDesktop] =
    product.gallery[2].galleryImage

  const mainImages = withArtDirection(getImage(mainMobile.asset), [
    {
      media: "(min-width: 1000px)",
      image: getImage(mainDesktop.asset),
    },
    {
      media: "(min-width: 600px",
      image: getImage(mainTablet.asset),
    },
  ])

  const firstImages = withArtDirection(getImage(firstMobile.asset), [
    {
      media: "(min-width: 1000px)",
      image: getImage(firstDesktop.asset),
    },
    {
      media: "(min-width: 600px",
      image: getImage(firstTablet.asset),
    },
  ])

  const secondImages = withArtDirection(getImage(secondMobile.asset), [
    {
      media: "(min-width: 1000px)",
      image: getImage(secondDesktop.asset),
    },
    {
      media: "(min-width: 600px",
      image: getImage(secondTablet.asset),
    },
  ])

  const thirdImages = withArtDirection(getImage(thirdMobile.asset), [
    {
      media: "(min-width: 1000px)",
      image: getImage(thirdDesktop.asset),
    },
    {
      media: "(min-width: 600px",
      image: getImage(thirdTablet.asset),
    },
  ])

  console.log(product)

  return (
    <Layout>
      <Seo title={product.productName} />
      <button
        onClick={() => {
          navigate(-1)
        }}
      >
        Go Back
      </button>
      <Product>
        <ProductIntro>
          <GatsbyImage
            image={mainImages}
            alt={mainMobile.alt}
            className="art-direction-template-main"
          />
          <NewProduct new={product.new}>new product</NewProduct>
          <ProductName>{product.productName}</ProductName>
          <ProductText>{product.description[0].children[0].text}</ProductText>
          <ProductPrice>{product.price}</ProductPrice>
        </ProductIntro>
        <ProductFeatures>
          <FeatureCol>
            <FeatureTitle>Features</FeatureTitle>
            <ProductText>{product.features[0].children[0].text}</ProductText>
            <ProductText>{product.features[1].children[0].text}</ProductText>
          </FeatureCol>
          <FeatureCol>
            <FeatureTitle>In the box</FeatureTitle>
            <IncludedItems>
              {product.includes.map(include => (
                <IncludedItem key={include._key}>
                  <p>{include.quantity}</p>
                  <p>{include.item}</p>
                </IncludedItem>
              ))}
            </IncludedItems>
          </FeatureCol>
        </ProductFeatures>
        <ProductImages>
          <GatsbyImage
            image={firstImages}
            alt={firstMobile.alt}
            className="art-direction-template-first"
          />
          <GatsbyImage
            image={secondImages}
            alt={secondMobile.alt}
            className="art-direction-template-second"
          />
          <GatsbyImage
            image={thirdImages}
            alt={thirdMobile.alt}
            className="art-direction-template-third"
          />
        </ProductImages>
      </Product>
      <ShopNav />
    </Layout>
  )
}
