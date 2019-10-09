import React from "react"
import { graphql } from "gatsby"

import Container from "../container/container"
import { getParagraph } from "../../handlers/getParagraphTemplate"

import "../card/card-group.scss"

export const CardGroupParagraph = ({ node }) => {
  return (
    <Container className="card-group" constrained={true} key={node.id}>
      {node.title && <h2 className="card-group__title">{node.title}</h2>}
      <div className="card-group__cards">
        {node.relationships.cards && node.relationships.cards.map(getParagraph)}
      </div>
      {node.relationships.buttons && node.relationships.buttons.map(getParagraph)}
    </Container>
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
