import React from "react"

import Container from "../container/container"
import "./card-group.scss"

const CardGroup = ({title, cards, buttons}) => {
  return (
    <Container className="card-group" constrained={true}>
      {title && <h2 className="card-group__title">{title}</h2>}
      {cards && <div className="card-group__cards">{cards}</div>}
      {buttons && <div className="card-group__buttons">{buttons}</div>}
    </Container>
  )
}

export default CardGroup
