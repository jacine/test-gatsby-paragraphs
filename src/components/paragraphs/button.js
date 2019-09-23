import React from "react"
import { graphql } from "gatsby"
import Button from "../button/button"

export const ButtonParagraph = ({ node }) => {
  // @todo Need proper handling of uri, this is garbage.
  const href = node.button.uri ? node.button.uri.replace(/^internal:/, "") : ""
  return <Button key={node.id} url={href} text={node.button.title} />
}

export default ButtonParagraph

export const fragment = graphql`
  fragment ParagraphButton on paragraph__button {
    id
    style: field_button_style
    button: field_link {
      title
      uri
    }
  }
`
