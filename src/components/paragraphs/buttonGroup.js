import React from "react"
import { graphql } from "gatsby"

import { getParagraph } from "../../handlers/getParagraphTemplate"

export const ButtonGroupParagraph = ({ node }) => {
  return (
    <div className="btn-group" key={node.id}>
      {node.relationships.buttons &&
        node.relationships.buttons.map(getParagraph)}
    </div>
  )
}

export default ButtonGroupParagraph

export const fragment = graphql`
  fragment ParagraphButtonGroup on paragraph__button_group {
    id
    relationships {
      buttons: field_buttons {
        type: __typename
        ...ParagraphButton
      }
    }
  }
`
