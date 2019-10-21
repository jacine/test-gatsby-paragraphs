import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout/layout"
import Title from "../components/title/title"
import Container from "../components/container/container"
import Details from "../components/details/details"

const Faqs = ({ data }) => (
  <Layout className="section-faq page-faq">
    <SEO title="Frequently Asked Questions" />
    <Title title="FAQs" />
    <Container constrained={true}>
      <ul className="listing">
        <li className="listing__item">
          {data.faq.edges.map(({ node }) => (
            <Details
              key={node.id}
              summary={node.title}
              content={node.field_answer.processed}
            />
          ))}
        </li>
      </ul>
    </Container>
  </Layout>
)

export default Faqs

export const query = graphql`
  query {
    faq: allNodeFaq(limit: 1000) {
      edges {
        node {
          id
          title
          field_answer {
            processed
          }
        }
      }
    }
  }
`
