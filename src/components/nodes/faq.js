import { graphql } from "gatsby"
import React from "react"

import Layout from "../layout"
import Container from "../container/container"

const FaqTemplate = ({ data }) => (
  <Layout>
    <Container constrained={true}>
      <h1>{data.faq.question}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.faq.answer.processed }} />
    </Container>
  </Layout>
)

export default FaqTemplate

export const query = graphql`
  query($slug: String!) {
    faq: nodeFaq(fields: { slug: { eq: $slug } }) {
      question: title
      answer: field_answer {
        processed
      }
    }
  }
`
