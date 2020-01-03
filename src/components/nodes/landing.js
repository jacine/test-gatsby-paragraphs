import { graphql } from "gatsby"
import React from "react"

import { getParagraph } from "../../handlers/getParagraphTemplate"
import Layout from "../layout/layout"
import Title from "../title/title"

const LandingTemplate = ({ data }) => {
  const header =
    data.landing.relationships.header &&
    getParagraph(data.landing.relationships.header)
  const content =
    data.landing.relationships.content &&
    data.landing.relationships.content.map(getParagraph)

  return (
    <Layout className="page--landing">
      {header ? header : <Title title={data.landing.title} />}
      {content && content}
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
        header: field_header {
          type: __typename
          ...ParagraphHero
          ...ParagraphTitleBar
        }
        content: field_content {
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
