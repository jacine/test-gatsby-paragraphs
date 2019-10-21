import { graphql } from "gatsby"
import React from "react"

import { getParagraph } from "../../handlers/getParagraphTemplate"

import Layout from "../layout/layout"
import Title from "../title/title"

const LandingTemplate = ({ data }) => {
  const paragraphs = data.landing.relationships.paragraphs.map(getParagraph)

  return (
    <Layout className="page--landing">
      <Title title={data.landing.title} />
      {paragraphs}
    </Layout>
  )
}

export default LandingTemplate

export const query = graphql`
  query($slug: String!) {
    landing: nodeLanding(fields: { slug: { eq: $slug } }) {
      id
      title
      relationships {
        paragraphs: field_content {
          type: __typename
          ...ParagraphBlockquote
          ...ParagraphCalloutGroup
          ...ParagraphCardGroup
          ...ParagraphCta
          ...ParagraphText
          ...ParagraphTextImage
        }
      }
    }
  }
`
