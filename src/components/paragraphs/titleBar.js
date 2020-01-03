import React from "react"
import { graphql } from "gatsby"

import TitleBar from "../titleBar/titleBar"

export const TitleBarParagraph = ({ node }) => {
  return (
    <TitleBar
      key={node.id}
      backgroundStyle={node.backgroundStyle}
      title={node.title}
      text={node.text.processed}
      icon={node.icon && {
        prefix: node.icon.prefix,
        name: node.icon.name,
        size: '5x'
      }}
    />
  )
}

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
      prefix: style
    }
  }
`
