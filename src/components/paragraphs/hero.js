import React from "react"
import { graphql } from "gatsby"

import { getParagraph } from "../../handlers/getParagraphTemplate"
import Hero from "../hero/hero"

export const HeroParagraph = ({ node }) => {
  return (
    <Hero
      key={node.id}
      backgroundStyle={node.backgroundStyle}
      title={node.title}
      text={node.text.processed}
      buttons={
        node.relationships.buttons &&
        node.relationships.buttons.map(getParagraph)
      }
      image={
        node.relationships.media &&
        node.relationships.media.relationships.image.localFile
      }
    />
  )
}

export default HeroParagraph

export const fragment = graphql`
  fragment ParagraphHero on paragraph__hero {
    id
    backgroundStyle: field_background_style
    title: field_title
    text: field_text {
      processed
    }
    relationships {
      buttons: field_buttons {
        type: __typename
        ...ParagraphButtonGroup
      }
      media: field_media {
        relationships {
          image: field_media_image {
            id
            localFile {
              childImageSharp {
                fluid(maxWidth: 1600, maxHeight: 400, cropFocus: CENTER) {
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
