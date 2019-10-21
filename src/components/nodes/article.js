import { graphql } from "gatsby"
import React from "react"

import Layout from "../layout/layout"
import Container from "../container/container"
import Title from "../title/title"

const ArticleTemplate = ({ data }) => (
  <Layout>
    <Title title={data.article.title} />
    <Container constrained={true}>
      <div dangerouslySetInnerHTML={{ __html: data.article.body.processed }} />
    </Container>
  </Layout>
)

export default ArticleTemplate

export const query = graphql`
  query($slug: String!) {
    article: nodeArticle(fields: { slug: { eq: $slug } }) {
      title
      body {
        processed
      }
    }
  }
`
