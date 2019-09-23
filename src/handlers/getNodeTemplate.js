import React from "react"
import { ArticleNode } from "../components/node/article"
import { FaqNode } from "../components/node/faq"
import { LandingNode } from "../components/node/landing"

const components = {
  node__article: ArticleNode,
  node__faq: FaqNode,
  node__landing: LandingNode,
}

export const getNode = node => {
  if (components.hasOwnProperty(node.type)) {
    const NodeComponent = components[node.type]
    return <NodeComponent key={node.id} node={node} />
  }
  return <p key={node.id}>Unknown type {node.__typename}</p>
}
