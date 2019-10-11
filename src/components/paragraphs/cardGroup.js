import React from "react"
import { graphql } from "gatsby"

import { getParagraph } from "../../handlers/getParagraphTemplate"
import CardGroup from "../cardGroup/cardGroup"

export const CardGroupParagraph = ({ node }) => {
  return (
    <CardGroup
      title={node.title}
      cards={node.relationships.cards && node.relationships.cards.map(getParagraph)}
      buttons={node.relationships.buttons && node.relationships.buttons.map(getParagraph)}
    />
  )
}

export default CardGroupParagraph

export const fragment = graphql`
  fragment ParagraphCardGroup on paragraph__card_group {
    id
    title: field_title
    relationships {
      buttons: field_buttons {
        type: __typename
        ...ParagraphButtonGroup
      }
      cards: field_cards {
        type: __typename
        ...ParagraphCard
      }
    }
  }
`
