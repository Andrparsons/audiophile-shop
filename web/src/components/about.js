import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { getImage, GatsbyImage, withArtDirection } from "gatsby-plugin-image"

//can't use GatsbyImage with styled components
import "./about.css"

const AboutSection = styled.section`
  margin: 7.5rem 1.5rem 0 1.5rem;
  text-align: center;

  @media (min-width: 600px) {
    margin: 6rem 2.5rem 0 2.5rem;
  }

  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    text-align: left;
    max-width: 77%;
    margin: 0 auto;
  }
`

const AboutTextGroup = styled.div`
  @media (min-width: 600px) {
    max-width: 85%;
    margin: 0 auto;
  }

  @media (min-width: 1000px) {
    max-width: 72%;
    grid-row: 1;
    align-self: center;
    margin: 0;
  }
`

const AboutTitle = styled.h2`
  margin-top: 2.5rem;
`

const AboutText = styled.p`
  margin-top: 2rem;
  margin-bottom: 0;
`

const Highlight = styled.span`
  color: var(--highlight);
`

export default function About() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(
        filter: { name: { eq: "image-best-gear" } }
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
    <AboutSection>
      <GatsbyImage
        image={images}
        className="art-direction"
        alt="a man enjoying high quality sound"
      />
      <AboutTextGroup>
        <AboutTitle>
          Bringing you the <Highlight>best</Highlight> audio gear
        </AboutTitle>
        <AboutText>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </AboutText>
      </AboutTextGroup>
    </AboutSection>
  )
}
