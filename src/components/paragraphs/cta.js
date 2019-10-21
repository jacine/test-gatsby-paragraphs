import React from "react"
import { graphql } from "gatsby"

import Cta from "../cta/cta"
import { getParagraph } from "../../handlers/getParagraphTemplate"

export const CtaParagraph = ({ node }) => {
  return (
    <Cta
      key={node.id}
      backgroundStyle={node.backgroundStyle}
      title={node.title}
      text={node.text.processed}
      buttons={
        node.relationships.buttons &&
        node.relationships.buttons.map(getParagraph)
      }
    />
  )
}

export default CtaParagraph

export const fragment = graphql`
  fragment ParagraphCta on paragraph__cta {
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
    }
  }
`
