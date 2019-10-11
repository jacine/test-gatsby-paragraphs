import React from "react"
import { graphql } from "gatsby"
import Card from "../card/card"

export const CardParagraph = ({ node }) => {
  // TODO: This needs to be a separate component, use path aliases, handle
  // whatever other route types can be passed into a link field.
  const href = node.link.uri
    ? node.link.uri.replace(/^internal:/, "").replace(/^entity:/, "")
    : null

  return (
    <Card
      key={node.id}
      title={node.title}
      text={node.text.processed}
      url={href}
      image={node.relationships.media.relationships.image.localFile}
    />
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
                fixed(width: 256, height: 256) {
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
