import React from "react"
import { graphql } from "gatsby"

import Container from "../container/container"
import { getParagraph } from "../../handlers/getParagraphTemplate"

export const CalloutGroupParagraph = ({ node }) => {
  return (
    <Container className="callout-group" constrained={true} key={node.id}>
      {node.title && <h2 className="callout-group__title">{node.title}</h2>}
      {node.relationships.callouts && node.relationships.callouts.map(getParagraph)}
      {node.relationships.buttons && node.relationships.buttons.map(getParagraph)}
    </Container>
  )
}

export default CalloutGroupParagraph

export const fragment = graphql`
  fragment ParagraphCalloutGroup on paragraph__callout_group {
    id
    title: field_title
    relationships {
      buttons: field_buttons {
        type: __typename
        ...ParagraphButtonGroup
      }
      callouts: field_callouts {
        type: __typename
        ...ParagraphCallout
      }
    }
  }
`
