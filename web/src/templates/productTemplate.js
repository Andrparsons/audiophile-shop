import React from "react"
import styled from "styled-components"
import { getImage, GatsbyImage, withArtDirection } from "gatsby-plugin-image"
import { navigate } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ShopNav from "../components/shopNav"
import NewProduct from "../components/newProductline"

import PageCart from "../components/pageCart"

import "./productTemplate.css"

const Product = styled.section`
  margin: 0 1.5rem;

  @media (min-width: 600px) {
    margin: 0 2.5rem;
  }
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

const ProductIntro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`

const ProductIntroContent = styled.div`
  margin-top: 2rem;

  @media (min-width: 600px) {
    margin-top: 0;
    margin-left: 1rem;
  }

  @media (min-width: 700px) {
    margin-left: 3rem;
  }
`

const ProductFeatures = styled.div``

const ProductImages = styled.div`
  margin-top: 5.5rem;
`

const ProductName = styled.h2`
  @media (min-width: 600px) {
    font-size: 1.75rem;
  }
`

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
          <div>
            <GatsbyImage
              image={mainImages}
              alt={mainMobile.alt}
              className="art-direction-template-main"
            />
          </div>
          <ProductIntroContent>
            <NewProduct new={product.new}>new product</NewProduct>
            <ProductName>{product.productName}</ProductName>
            <ProductText>{product.description[0].children[0].text}</ProductText>
            <ProductPrice>{price}</ProductPrice>
            <PageCart {...product} />
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
