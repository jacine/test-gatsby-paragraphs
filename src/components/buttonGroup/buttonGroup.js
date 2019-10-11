import React from "react"
import classNames from "classnames"
import Container from "../container/container"
import "./button-group.scss"

const ButtonGroup = ({ align, buttons }) => {
  const variant = align ? `button-group--${align}` : null
  return (
    <Container className={classNames('button-group', variant)}>
      {buttons}
    </Container>
  )
}

export default ButtonGroup
