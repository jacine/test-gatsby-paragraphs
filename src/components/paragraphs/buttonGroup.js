import React from "react"
import { graphql } from "gatsby"

import { getParagraph } from "../../handlers/getParagraphTemplate"
import ButtonGroup from "../buttonGroup/buttonGroup"

export const ButtonGroupParagraph = ({ node }) => {
  return (
    <ButtonGroup
      key={node.id}
      buttons={node.relationships.buttons && node.relationships.buttons.map(getParagraph)}
      align="center"
      >
    </ButtonGroup>
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
