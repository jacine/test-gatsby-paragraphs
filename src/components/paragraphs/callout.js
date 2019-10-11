import React from "react"
import { graphql } from "gatsby"

import Callout from "../callout/callout"

export const CalloutParagraph = ({ node }) => {
  // TODO: This needs to be a separate component, use path aliases, handle
  // whatever other route types can be passed into a link field.
  const href = node.link.uri
    ? node.link.uri.replace(/^internal:/, "").replace(/^entity:/, "")
    : null

  return (
    <Callout
      icon={{name: node.icon.name, size: "5x"}}
      url={href}
      title={node.title}
      text={node.text.processed}
    />
  )
}

export default CalloutParagraph

export const fragment = graphql`
  fragment ParagraphCallout on paragraph__callout {
    id
    title: field_title
    link: field_link {
      uri
    }
    text: field_text {
      processed
    }
    icon: field_icon {
      name: icon_name
      style
    }
  }
`
