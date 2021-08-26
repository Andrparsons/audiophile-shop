import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { getImage, GatsbyImage, withArtDirection } from "gatsby-plugin-image"
import Button from "./button"

import featureBg from "../images/home/desktop/pattern-circles.svg"

//can't use GatsbyImage with styled components
import "./indexFeatures.css"

const FeatureSection = styled.section`
  margin: 7.5rem 1.5rem 0 1.5rem;
  text-align: center;

  @media (min-width: 600px) {
    margin: 6rem 2.5rem 0 2.5rem;
  }

  @media (min-width: 1000px) {
    text-align: left;
    max-width: 1100px;
    margin: 10.5rem auto 0 auto;
  }
`

const PrimaryFeature = styled.div`
  background-color: var(--featureBG);
  color: var(--white);
  border-radius: 0.5rem;
  background-image: url(${featureBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: -7.5rem;
  background-position-x: center;
  padding: 3.4375rem 1.5rem;
  overflow: hidden;

  @media (min-width: 600px) {
    padding: 3.5rem 10.5rem 4rem 10.5rem;
    background-position-y: -12rem;
  }

  @media (min-width: 1000px) {
    display: flex;
    justify-content: space-between;
    padding: 6rem 7rem 0 6rem;
    background-position-y: -1rem;
    background-position-x: -11rem;
    background-size: auto;
  }
`

const FeatureTextGroup = styled.div`
  flex-basis: 50%;
  max-width: 350px;
`

const FeatureTitle = styled.h1`
  margin: 2rem auto 0 auto;
  max-width: 250px;

  @media (min-width: 600px) {
    margin: 4rem auto 0 auto;
    max-width: 275px;
  }

  @media (min-width: 1000px) {
    margin-left: 0;
  }
`

const FeatureText = styled.p`
  opacity: 0.75;
  mix-blend-mode: normal;
  margin: 1.5rem 0;

  @media (min-width: 600px) {
    margin-bottom: 2.5rem;
  }
`

const SecondaryFeature = styled.div`
  border-radius: 0.5rem;
  overflow: hidden;
  margin-top: 1.5rem;
  position: relative;

  @media (min-width: 600px) {
    margin-top: 2rem;
  }

  @media (min-width: 1000px) {
    margin-top: 3rem;
  }
`

const SecondaryTitle = styled.h4`
  margin-bottom: 2rem;
  margin-top: 0;
`

const SecondaryTextContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  text-align: left;
  margin-left: 1.5rem;
`

const TertiaryFeature = styled.div`
  margin-top: 1.5rem;

  @media (min-width: 550px) {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 0.625rem;
  }

  @media (min-width: 1000px) {
    margin-top: 3rem;
    column-gap: 1.875rem;
  }
`

const TertiaryTextContainter = styled.div`
  margin-top: 1.5rem;
  border-radius: 0.5rem;
  background-color: var(--shopNavBG);
  text-align: left;
  padding: 2.5rem 1.5rem;

  @media (min-width: 550px) {
    margin-top: 0;
    padding: 6.3125rem 2.5rem;
  }

  @media (min-width: 550px) {
    padding: 6.3125rem 5.9375rem;
  }
`

const TertiaryImageContainer = styled.div`
  border-radius: 0.5rem;
  overflow: hidden;
`

export default function IndexFeatures() {
  const data = useStaticQuery(graphql`
    query featureImage {
      file(relativePath: { eq: "home/desktop/image-speaker-zx9.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      zx7: allFile(
        filter: { name: { eq: "image-speaker-zx7" } }
        sort: { fields: relativePath }
      ) {
        edges {
          node {
            id
            name
            relativeDirectory
            childImageSharp {
              gatsbyImageData(quality: 100)
            }
          }
        }
      }
      yx1: allFile(
        filter: { name: { eq: "image-earphones-yx1" } }
        sort: { fields: relativePath }
      ) {
        edges {
          node {
            id
            name
            relativeDirectory
            childImageSharp {
              gatsbyImageData(quality: 100)
            }
          }
        }
      }
    }
  `)

  // graphql pulls this alphabetically
  const [deskzx7, mobilezx7, tabletzx7] = data.zx7.edges
  const [deskyx1, mobileyx1, tabletyx1] = data.yx1.edges

  const zx7images = withArtDirection(getImage(mobilezx7.node), [
    {
      media: "(min-width: 1000px)",
      image: getImage(deskzx7.node),
    },
    {
      media: "(min-width: 600px",
      image: getImage(tabletzx7.node),
    },
  ])

  const yx1images = withArtDirection(getImage(mobileyx1.node), [
    {
      media: "(min-width: 1000px)",
      image: getImage(deskyx1.node),
    },
    {
      media: "(min-width: 550px",
      image: getImage(tabletyx1.node),
    },
  ])

  return (
    <FeatureSection>
      <PrimaryFeature>
        <GatsbyImage
          image={getImage(data.file)}
          className="art-direction-zx9"
          alt="close up of the zx9 speaker"
        />
        <FeatureTextGroup>
          <FeatureTitle>ZX9 SPEAKER</FeatureTitle>
          <FeatureText>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </FeatureText>
          <Button tertiary>see product</Button>
        </FeatureTextGroup>
      </PrimaryFeature>

      <SecondaryFeature>
        <GatsbyImage
          image={zx7images}
          className="art-direction-zx7"
          alt="close up of the zx7 speaker"
        />
        <SecondaryTextContainer>
          <SecondaryTitle>zx7 speaker</SecondaryTitle>
          <Button secondary>see product</Button>
        </SecondaryTextContainer>
      </SecondaryFeature>

      <TertiaryFeature>
        <TertiaryImageContainer>
          <GatsbyImage
            image={yx1images}
            className="art-direction-yx1"
            alt="close up of the yx1 earphones"
          />
        </TertiaryImageContainer>
        <TertiaryTextContainter>
          <SecondaryTitle>yx1 earphones</SecondaryTitle>
          <Button secondary>see product</Button>
        </TertiaryTextContainter>
      </TertiaryFeature>
    </FeatureSection>
  )
}
