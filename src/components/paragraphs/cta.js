import React from "react"
import { graphql } from "gatsby"

import { getParagraph } from "../../handlers/getParagraphTemplate"

export const CtaParagraph = ({ node }) => (
  <div key={node.id} className="cta">
    {node.title && <h2 className="cta__title">{node.title}</h2>}
    <div
      className="cta__text"
      dangerouslySetInnerHTML={{ __html: node.text.processed }}
    />
    {node.relationships.buttons && node.relationships.buttons.map(getParagraph)}
  </div>
)

export default CtaParagraph

export const fragment = graphql`
  fragment ParagraphCta on paragraph__cta {
    id
    title: field_title
    text: field_text {
      processed
    }
    relationships {
      buttons: field_buttons {
        type: __typename
        ...ParagraphButtonGroup
      }
    }
  }
`
