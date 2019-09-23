import React from "react"
import { BlockquoteParagraph } from "../components/paragraphs/blockquote"
import { ButtonParagraph } from "../components/paragraphs/button"
import { ButtonGroupParagraph } from "../components/paragraphs/buttonGroup"
import { CalloutParagraph } from "../components/paragraphs/callout"
import { CalloutGroupParagraph } from "../components/paragraphs/calloutGroup"
import { CardParagraph } from "../components/paragraphs/card"
import { CardGroupParagraph } from "../components/paragraphs/cardGroup"
import { CtaParagraph } from "../components/paragraphs/cta"
import { TextParagraph } from "../components/paragraphs/text"

const components = {
  paragraph__blockquote: BlockquoteParagraph,
  paragraph__button: ButtonParagraph,
  paragraph__button_group: ButtonGroupParagraph,
  paragraph__callout: CalloutParagraph,
  paragraph__callout_group: CalloutGroupParagraph,
  paragraph__card: CardParagraph,
  paragraph__card_group: CardGroupParagraph,
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
