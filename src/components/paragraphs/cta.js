// TextParagraph.js
import React from "react"
import { graphql } from "gatsby"

export const CtaParagraph = ({ node }) => (
  <div key={`paragraph/${node.id}`} className="cta">
    <h2 className="cta__title">{node.title}</h2>
    <div
      className="cta__text"
      dangerouslySetInnerHTML={{ __html: node.text.processed }}
    />
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
  }
`
