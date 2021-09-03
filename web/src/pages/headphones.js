import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import CategoryHeader from "../components/categoryHeader"
import ShopNav from "../components/shopNav"
import FeaturedProducts from "../components/featuredProducts"

export default function Headphones() {
  const data = useStaticQuery(graphql`
    query headphones {
      allSanityProduct(
        filter: { category: { elemMatch: { title: { eq: "headphones" } } } }
        sort: { order: DESC, fields: new }
      ) {
        edges {
          node {
            id
            productName
            slug {
              current
            }
            new
            description {
              children {
                _key
                _type
                text
                marks
              }
            }
            categoryImage {
              size
              alt
              asset {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Seo title="Home" />
      <CategoryHeader title="headphones" />
      <FeaturedProducts products={data.allSanityProduct.edges} />
      <ShopNav />
    </Layout>
  )
}
