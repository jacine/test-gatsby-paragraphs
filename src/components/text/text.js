import React from "react"
import PropTypes from "prop-types"

import Container from "../container/container"
import "./text.scss"

export const Text = ({ text, constrained }) => {
  if (!text) {
    return null
  }

  return <Container className="text" constrained={constrained} html={text} />
}

Text.propTypes = {
  constrained: PropTypes.bool,
  html: PropTypes.string,
}

Text.defaultProps = {
  constrained: false,
  html: ``,
}

export default Text
