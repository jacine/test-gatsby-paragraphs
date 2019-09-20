import React from "react"
import { BlockquoteParagraph } from "../components/paragraphs/blockquote"
import { CtaParagraph } from "../components/paragraphs/cta"
import { TextParagraph } from "../components/paragraphs/text"

const components = {
  paragraph__blockquote: BlockquoteParagraph,
  paragraph__cta: CtaParagraph,
  paragraph__text: TextParagraph,
}

export const getParagraph = node => {
  if (components.hasOwnProperty(node.type)) {
    const ParagraphComponent = components[node.type]
    return <ParagraphComponent key={node.id} node={node} />
  }
  return <p key={node.id}>Unknown type {node.__typename}</p>
}
