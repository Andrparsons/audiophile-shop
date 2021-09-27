import React from "react"
import styled from "styled-components"
import { getImage, GatsbyImage, withArtDirection } from "gatsby-plugin-image"
import { navigate, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ShopNav from "../components/shopNav"
import NewProduct from "../components/newProductline"
import Button from "../components/button"

import PageCart from "../components/pageCart"

import "./productTemplate.css"

const Product = styled.section`
  margin: 0 1.5rem;

  @media (min-width: 600px) {
    margin: 0 2.5rem;
  }

  @media (min-width: 1000px) {
    margin: 0 auto;
    max-width: 1100px;
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

  @media (min-width: 600px) {
    margin-top: 2rem;
  }

  @media (min-width: 1000px) {
    margin-top: 5rem;
    margin-bottom: 3.5rem;
  }
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

  @media (min-width: 1000px) {
    max-width: 445px;
  }
`

const ProductFeatures = styled.div`
  @media (min-width: 1000px) {
    display: flex;
  }
`

const ProductImages = styled.div`
  margin-top: 5.5rem;
  display: grid;

  @media (min-width: 600px) {
    margin-top: 7.5rem;
    grid-template-columns: 0.7fr 1fr;
    grid-template-rows: repeat(2, 174px);
    grid-template-areas:
      "small-1 large"
      "small-2 large";
    gap: 1.25rem;
  }

  @media (min-width: 1000px) {
    margin-top: 10rem;
    grid-template-rows: repeat(2, 280px);
  }
`

const ProductName = styled.h2`
  @media (min-width: 600px) {
    font-size: 1.75rem;
  }

  @media (min-width: 600px) {
    font-size: 2.5rem;
  }
`

const ProductText = styled.p`
  margin-top: 1.5rem;

  @media (min-width: 600px) {
    margin-top: 2rem;
  }
`

const ProductPrice = styled.p`
  font-size: 1.125rem;
  text-transform: uppercase;
  opacity: 1;
  font-weight: 700;
  margin-top: 1.5rem;

  @media (min-width: 600px) {
    margin-top: 2rem;
  }
`

const FeatureTitle = styled.h3`
  margin-bottom: 0;
`

const FeatureCol = styled.div`
  margin-top: 5.5rem;

  @media (min-width: 600px) {
    margin-top: 7.5rem;
  }

  @media (min-width: 600px) {
    margin-top: 10rem;
  }
`

const ProductFeatureContainer = styled.div`
  @media (min-width: 1000px) {
    max-width: 635px;
  }
`

const IncludedItemContainer = styled.div`
  display: grid;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1000px) {
    display: block;
    max-width: 350px;
    margin-left: 7.5rem;
  }
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
  font-weight: 700;
`

const IncludedItemName = styled.p`
  display: inline-block;
`

const RelatedItems = styled.div`
  margin-top: 7.5rem;
  margin-bottom: 7.5rem;

  @media (min-width: 1000px) {
    margin-top: 10rem;
    margin-bottom: 10rem;
  }
`
const RelatedItem = styled.div`
  text-align: center;
  margin-top: 3.5rem;

  &:first-of-type {
    margin-top: 0;
  }

  @media (min-width: 600px) {
    margin-top: 0;
    margin-right: 0.625rem;
    max-width: 350px;

    &:last-of-type {
      margin-right: 0;
    }
  }
`

const RelatedItemGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;

  @media (min-width: 600px) {
    flex-direction: row;
    margin-top: 3.5rem;
    justify-content: space-between;
  }
`

const RelatedTitle = styled.h3`
  font-size: 1.5rem;
  text-align: center;
  margin: 0;
`

const RelatedItemTitle = styled(RelatedTitle)`
  margin-top: 2rem;
  margin-bottom: 2rem;
  max-height: 27px;
  overflow: hidden;

  @media (min-width: 600px) {
    margin-top: 2.5rem;
  }
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

  console.log(product)

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
            <ProductFeatureContainer>
              <FeatureTitle>Features</FeatureTitle>
              <ProductText>{product.features[0].children[0].text}</ProductText>
              <ProductText>{product.features[1].children[0].text}</ProductText>
            </ProductFeatureContainer>
          </FeatureCol>
          <FeatureCol>
            <IncludedItemContainer>
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
            </IncludedItemContainer>
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
        <RelatedItems>
          <RelatedTitle>you may also like</RelatedTitle>
          <RelatedItemGroup>
            {product.others.map(other => (
              <RelatedItem key={other._id}>
                <GatsbyImage
                  image={withArtDirection(getImage(other.otherImage[0].asset), [
                    {
                      media: "(min-width: 1000px)",
                      image: getImage(other.otherImage[2].asset),
                    },
                    {
                      media: "(min-width: 600px",
                      image: getImage(other.otherImage[1].asset),
                    },
                  ])}
                  alt="Other Related Products"
                  className="art-direction-template-others"
                />
                <RelatedItemTitle>{other.productName}</RelatedItemTitle>
                <Link to={`/product/${other.slug.current}/`}>
                  <Button primary>see product</Button>
                </Link>
              </RelatedItem>
            ))}
          </RelatedItemGroup>
        </RelatedItems>
      </Product>
      <ShopNav />
    </Layout>
  )
}
