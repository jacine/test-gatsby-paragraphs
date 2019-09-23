import React from "react"
import { graphql } from "gatsby"

export const TextParagraph = ({ node }) => (
  <div
    key={node.id}
    className="text"
    dangerouslySetInnerHTML={{ __html: node.text.processed }}
  />
)

export default TextParagraph

export const fragment = graphql`
  fragment ParagraphText on paragraph__text {
    id
    text: field_text {
      processed
    }
  }
`
