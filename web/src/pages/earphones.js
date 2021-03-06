import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import CategoryHeader from "../components/categoryHeader"
import ShopNav from "../components/shopNav"
import FeaturedProducts from "../components/featuredProducts"

export default function Earphones() {
  const data = useStaticQuery(graphql`
    query earphones {
      allSanityProduct(
        filter: { category: { elemMatch: { title: { eq: "earphones" } } } }
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
                text
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
      <CategoryHeader title="earphones" />
      <FeaturedProducts products={data.allSanityProduct.edges} />
      <ShopNav />
    </Layout>
  )
}
