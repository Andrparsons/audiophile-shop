exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query products {
      allSanityProduct {
        edges {
          node {
            id
            new
            productImage {
              size
              alt
              asset {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
            productName
            description {
              children {
                text
              }
            }
            price
            features {
              children {
                text
              }
            }
            includes {
              _key
              item
              quantity
            }
            gallery {
              order
              galleryImage {
                size
                alt
                asset {
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
            }
            slug {
              current
            }
            cartImage {
              asset {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const products = result.data.allSanityProduct.edges || []

  products.forEach((product, index) => {
    const path = `/product/${product.node.slug.current}`

    createPage({
      path,
      component: require.resolve("./src/templates/productTemplate.js"),
      context: { product: product.node },
    })
  })
}
