import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee } from "@fortawesome/free-solid-svg-icons"

export const CalloutParagraph = ({ node }) => {
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
      <FontAwesomeIcon className="callout__img" icon={faCoffee} />
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
  }
`
