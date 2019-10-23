import React from "react"

import { BlockquoteParagraph } from "../components/paragraphs/blockquote"
import { ButtonGroupParagraph } from "../components/paragraphs/buttonGroup"
import { ButtonParagraph } from "../components/paragraphs/button"
import { CalloutGroupParagraph } from "../components/paragraphs/calloutGroup"
import { CalloutParagraph } from "../components/paragraphs/callout"
import { CardGroupParagraph } from "../components/paragraphs/cardGroup"
import { CardParagraph } from "../components/paragraphs/card"
import { CtaParagraph } from "../components/paragraphs/cta"
import { HeroParagraph } from "../components/paragraphs/hero"
import { TextImageParagraph } from "../components/paragraphs/textImage"
import { TextParagraph } from "../components/paragraphs/text"
import { TitleBarParagraph } from "../components/paragraphs/titleBar"

const components = {
  paragraph__blockquote: BlockquoteParagraph,
  paragraph__button: ButtonParagraph,
  paragraph__button_group: ButtonGroupParagraph,
  paragraph__callout: CalloutParagraph,
  paragraph__callout_group: CalloutGroupParagraph,
  paragraph__card: CardParagraph,
  paragraph__card_group: CardGroupParagraph,
  paragraph__cta: CtaParagraph,
  paragraph__hero: HeroParagraph,
  paragraph__text: TextParagraph,
  paragraph__text_image: TextImageParagraph,
  paragraph__title_bar: TitleBarParagraph,
}

export const getParagraph = node => {
  const key = `p-${node.id}`
  if (components.hasOwnProperty(node.type)) {
    const ParagraphComponent = components[node.type]
    return <ParagraphComponent key={key} node={node} />
  }
  // Todo: Remove this when all Paragraph types are done.
  return <p key={key}>Unknown type {node.__typename}</p>
}
