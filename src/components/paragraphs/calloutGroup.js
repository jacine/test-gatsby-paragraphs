import React from "react"
import { graphql } from "gatsby"

import { getParagraph } from "../../handlers/getParagraphTemplate"

export const CalloutGroupParagraph = ({ node }) => {
  return (
    <div className="callout-group" key={node.id}>
      {node.title && <h2 className="callout-group__title">{node.title}</h2>}
      {node.relationships.callouts && node.relationships.callouts.map(getParagraph)}
      {node.relationships.buttons && node.relationships.buttons.map(getParagraph)}
    </div>
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
