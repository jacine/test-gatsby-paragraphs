import React from "react"
import { graphql } from "gatsby"

import { getParagraph } from "../../handlers/getParagraphTemplate"
import CalloutGroup from "../calloutGroup/calloutGroup"

export const CalloutGroupParagraph = ({ node }) => {
  return (
    <CalloutGroup
      title={node.title}
      callouts={node.relationships.callouts && node.relationships.callouts.map(getParagraph)}
      buttons={node.relationships.buttons && node.relationships.buttons.map(getParagraph)}
    />
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
