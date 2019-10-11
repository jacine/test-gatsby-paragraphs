import React from "react"
import { graphql } from "gatsby"
import Blockquote from "../blockquote/blockquote"

export const BlockquoteParagraph = ({ node }) => {
  return (
    <Blockquote
      key={node.id}
      text={node.text.processed}
      attribution={node.attribution}
    />
  )
}

export default BlockquoteParagraph

export const fragment = graphql`
  fragment ParagraphBlockquote on paragraph__blockquote {
    id
    attribution: field_blockquote_source
    text: field_text {
      processed
    }
  }
`
