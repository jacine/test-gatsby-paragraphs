import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { Icon } from "../icon/icon"

export const CalloutParagraph = ({ node }) => {
  // @todo this is a messy WIP :P  Will fix for realz.
  const href = node.link.uri ? node.link.uri.replace(/^internal:/, "") : null
  const title = node.title ? (
    <h3 className="callout__title">{node.title}</h3>
  ) : null
  const text = node.text ? (
    <div
      className="callout__text"
      dangerouslySetInnerHTML={{ __html: node.text.processed }}
    />
  ) : null

  return (
    <article className="callout">
      <Icon className="callout__img" icon={node.icon.name} size="6x" />
      {href ? (
        <Link key={node.id} to={href}>
          {title}
        </Link>
      ) : (
        { title }
      )}
      {text}
    </article>
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
