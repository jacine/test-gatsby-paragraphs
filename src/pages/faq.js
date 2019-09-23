import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Details from "../components/details/details"

const Faqs = ({ data }) => (
  <Layout className="section-faq page-faq">
    <SEO title="Frequently Asked Questions" />
    <h1 className="page-title">FAQs</h1>
    {data.faq.edges.map(({ node }) => (
      <Details
        key={node.drupal_id}
        summary={node.title}
        content={node.field_answer.processed}
      />
    ))}
  </Layout>
)

export default Faqs

export const query = graphql`
  query {
    faq: allNodeFaq(limit: 1000) {
      edges {
        node {
          title
          drupal_id
          fields {
            slug
          }
          field_answer {
            processed
          }
        }
      }
    }
  }
`
