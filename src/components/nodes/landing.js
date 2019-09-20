import { graphql } from "gatsby"
import React from "react"

import Layout from "../layout"
import { getParagraph } from "../../helpers/getParagraphTemplate"

const LandingTemplate = ({ data }) => {
  const paragraphs = data.landing.relationships.paragraphs.map(getParagraph)

  return (
    <Layout>
      <h1>{data.landing.title}</h1>
      {paragraphs}
    </Layout>
  )
}

export default LandingTemplate;

export const query = graphql`
  query($slug: String!) {
    landing: nodeLanding(fields: { slug: { eq: $slug } }) {
      id
      title
      relationships {
        paragraphs: field_content {
          type: __typename
          ...ParagraphCta
          ...ParagraphText
          ...ParagraphBlockquote
        }
      }
    }
  }
`
