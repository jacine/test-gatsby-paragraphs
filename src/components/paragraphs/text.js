import React from "react"
import { graphql } from "gatsby"

import Text from "../text/text"

export const TextParagraph = ({ node }) => (
  <Text key={node.id} text={node.text.processed} constrained={true} />
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
