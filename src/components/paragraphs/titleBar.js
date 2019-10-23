import React from "react"
import { graphql } from "gatsby"

export const TitleBarParagraph = ({ node }) => (
  <div className="title-bar" key={node.id}>
    <h1>{node.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: node.text.processed }} />
  </div>
)

export default TitleBarParagraph

export const fragment = graphql`
  fragment ParagraphTitleBar on paragraph__title_bar {
    id
    title: field_title
    text: field_text {
      processed
    }
    icon: field_icon {
      name: icon_name
      style
    }
  }
`
