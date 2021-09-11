import React, { useState } from "react"
import styled from "styled-components"
import { getImage, GatsbyImage, withArtDirection } from "gatsby-plugin-image"
import { navigate } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ShopNav from "../components/shopNav"
import NewProduct from "../components/newProductline"
import Button from "../components/button"

import "./productTemplate.css"

const Product = styled.section`
  margin: 0 1.5rem;
`

const BackButton = styled.button`
  font-family: "Manrope", sans-serif;
  font-size: 0.9375;
  opacity: 0.65;
  font-weight: 400;
  line-height: 1.67;
  color: var(--black);
  cursor: pointer;
  background-color: transparent;
  border: none;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
`

const ProductIntro = styled.div``

const ProductIntroContent = styled.div`
  margin-top: 2rem;
`

const ProductFeatures = styled.div``

const ProductImages = styled.div`
  margin-top: 5.5rem;
`

const ProductName = styled.h2``

const ProductText = styled.p`
  margin-top: 1.5rem;
`

const ProductPrice = styled.p`
  font-size: 1.125rem;
  text-transform: uppercase;
  opacity: 1;
  font-weight: 700;
  margin-top: 1.5rem;
`

const CartComponent = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
`

const IterationComponent = styled.div`
  font-size: 0.8125rem;
  letter-spacing: 0.075em;
  font-weight: 700;
  text-transform: uppercase;
  margin-right: 1rem;
  min-width: 121px;
`

const IterationButton = styled.button`
  font-size: 0.8125rem;
  padding: 1.15em;
  border: 0.075em solid var(--iterationBG);
  cursor: pointer;
  color: #00000080;

  &:hover {
    color: var(--iterationHover);
  }
`

const IterationQuantity = styled.span`
  padding: 1.15em 0;
  background-color: var(--iterationBG);
  border: 0.075em solid var(--iterationBG);
  width: 45px;
  display: inline-block;
  text-align: center;
`

const FeatureTitle = styled.h3`
  margin-bottom: 0;
`

const FeatureCol = styled.div`
  margin-top: 5.5rem;
`

const IncludedItems = styled.ul`
  margin-top: 1.5rem;
  margin-bottom: 0;
  padding: 0;
`

const IncludedItem = styled.li`
  list-style-type: none;
  margin-bottom: 0.5rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`

const IncludedItemQuantity = styled.p`
  display: inline-block;
  width: 2.5rem;
  color: var(--highlight);
  opacity: 1;
`

const IncludedItemName = styled.p`
  display: inline-block;
`

export default function ProductTemplate({ pageContext: { product } }) {
  const [itemQuantity, setItemQuantity] = useState(1)

  const increaseCount = () => {
    setItemQuantity(itemQuantity + 1)
  }

  const decreaseCount = () => {
    itemQuantity > 1 ? setItemQuantity(itemQuantity - 1) : setItemQuantity(1)
  }

  const price = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(product.price)

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

  return (
    <Layout>
      <Seo title={product.productName} />
      <Product>
        <BackButton
          onClick={() => {
            navigate(-1)
          }}
        >
          Go Back
        </BackButton>
        <ProductIntro>
          <GatsbyImage
            image={mainImages}
            alt={mainMobile.alt}
            className="art-direction-template-main"
          />
          <ProductIntroContent>
            <NewProduct new={product.new}>new product</NewProduct>
            <ProductName>{product.productName}</ProductName>
            <ProductText>{product.description[0].children[0].text}</ProductText>
            <ProductPrice>{price}</ProductPrice>
            <CartComponent>
              <IterationComponent>
                <IterationButton onClick={decreaseCount}>-</IterationButton>
                <IterationQuantity>{itemQuantity}</IterationQuantity>
                <IterationButton onClick={increaseCount}>+</IterationButton>
              </IterationComponent>
              <Button primary>add to cart</Button>
            </CartComponent>
          </ProductIntroContent>
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
                  <IncludedItemQuantity>
                    {include.quantity}x
                  </IncludedItemQuantity>
                  <IncludedItemName>{include.item}</IncludedItemName>
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
