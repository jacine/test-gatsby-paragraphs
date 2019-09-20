/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)

// Create a slug for each supported content type; add as field on the node.
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  const supportedNodes = ['node__faq', 'node__landing'];
  if (supportedNodes.includes(node.internal.type)) {
    const slug = node.path.alias;
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const faqTemplate = path.resolve(`src/components/nodes/faq.js`)
  const landingTemplate = path.resolve(`src/components/nodes/landing.js`)

  // Query for nodes to use in creating pages.
  return graphql(
    `
      {
        faqs: allNodeFaq {
          edges {
            node {
              internalId: drupal_internal__nid
              path {
                alias
              }
              fields {
                slug
              }
            }
          }
        }
        landings: allNodeLanding {
          edges {
            node {
              internalId: drupal_internal__nid
              path {
                alias
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create a page for each 'Landing' node.
    result.data.landings.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: landingTemplate,
        context: {
          slug: node.fields.slug,
        },
      })
    })

    // Create a page for each 'FAQ' node.
    result.data.faqs.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: faqTemplate,
        context: {
          slug: node.fields.slug,
        },
      })
    })
  })
}
