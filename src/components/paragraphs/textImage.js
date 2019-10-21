import React from "react"
import { graphql } from "gatsby"

import { getParagraph } from "../../handlers/getParagraphTemplate"
import TextImage from "../textImage/textImage"

export const TextImageParagraph = ({ node }) => (
  <TextImage
    key={node.id}
    title={node.title}
    text={node.text.processed}
    buttons={
      node.relationships.buttons && node.relationships.buttons.map(getParagraph)
    }
    image={
      node.relationships.media &&
      node.relationships.media.relationships.image.localFile
    }
  />
)

export default TextImageParagraph

export const fragment = graphql`
  fragment ParagraphTextImage on paragraph__text_image {
    id
    backgroundStyle: field_background_style
    text: field_text {
      processed
    }
    title: field_title
    relationships {
      buttons: field_buttons {
        id
        type: __typename
        ...ParagraphButtonGroup
      }
      media: field_image {
        id
        relationships {
          image: field_media_image {
            id

            localFile {
              childImageSharp {
                fluid(maxWidth: 800, maxHeight: 480, cropFocus: CENTER) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
