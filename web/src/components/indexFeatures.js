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
`

const FeatureTitle = styled.h1`
  margin: 2rem auto 0 auto;
  max-width: 250px;
`

const FeatureText = styled.p`
  opacity: 0.75;
  mix-blend-mode: normal;
  margin: 1.5rem 0;
`

const SecondaryFeature = styled.div``

const TertiaryFeature = styled.div``

export default function IndexFeatures() {
  const data = useStaticQuery(graphql`
    query featureImages {
      allFile(
        filter: { name: { eq: "image-speaker-zx9" } }
        sort: { fields: relativePath }
      ) {
        edges {
          node {
            id
            name
            relativeDirectory
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)

  // graphql pulls this alphabetically
  const [desk, mobile, tablet] = data.allFile.edges

  const images = withArtDirection(getImage(mobile.node), [
    {
      media: "(min-width: 1000px)",
      image: getImage(desk.node),
    },
    {
      media: "(min-width: 500px",
      image: getImage(tablet.node),
    },
  ])

  return (
    <FeatureSection>
      <PrimaryFeature>
        <GatsbyImage
          image={images}
          className="art-direction"
          alt="close up of the zx9 speaker"
        />
        <FeatureTitle>ZX9 SPEAKER</FeatureTitle>
        <FeatureText>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </FeatureText>
        <Button tertiary>see product</Button>
      </PrimaryFeature>
    </FeatureSection>
  )
}
