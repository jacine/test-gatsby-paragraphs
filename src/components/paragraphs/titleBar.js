import React from "react"
import { graphql } from "gatsby"
import { Icon } from "../icon/icon"

export const TitleBarParagraph = ({ node }) => {
  if (!node.title) {
    return null
  }
  return (
    <div className="title-bar" key={node.id}>
      <h1>{node.title}</h1>
      {node.text && (
        <div dangerouslySetInnerHTML={{ __html: node.text.processed }} />
      )}
      {node.icon && (
        <span className="title-bar__img">
          <Icon icon={node.icon.name} size={node.icon.size} />
        </span>
      )}
    </div>
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
      style
    }
  }
`
