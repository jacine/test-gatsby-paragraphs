import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"

import "../card/card.scss"

export const CardParagraph = ({ node }) => {
  const href = node.link.uri ? node.link.uri.replace(/^internal:/, "") : null
  const title = node.title ? (<h3 className="card__title">{node.title}</h3>) : null
  const text = node.text ? (
    <div
      className="card__text"
      dangerouslySetInnerHTML={{ __html: node.text.processed }}
    />
  ) : null

  return (
    <article className="card">
      <Img className="card__img" fixed={node.relationships.media.relationships.image.localFile.childImageSharp.fixed} />
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

export default CardParagraph

export const fragment = graphql`
  fragment ParagraphCard on paragraph__card {
    id
    title: field_title
    link: field_link {
      uri
    }
    text: field_text {
      processed
    }
    relationships {
      media: field_image {
        relationships {
          image: field_media_image {
            id
            localFile {
              childImageSharp {
                fixed(width: 200, height: 200) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`
