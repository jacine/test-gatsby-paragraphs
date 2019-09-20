import React from "react"
import { graphql } from "gatsby"

export const BlockquoteParagraph = ({ node }) => {
  if (!node.text) {
    return null
  }

  let attribution = ""
  if (node.attribution) {
    attribution = <p className="blockquote_attribution">{node.attribution}</p>
  }

  return (
    <blockquote key={`paragraph/${node.id}`} className="blockquote">
      <div
        className="blockquote__quote"
        dangerouslySetInnerHTML={{ __html: node.text.processed }}
      />
      {attribution}
    </blockquote>
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
