import React from "react"
import PropTypes from "prop-types"

import Container from "../container/container"
import "./text.scss"

export const Text = ({ text }) => {
  if (!text) {
    return null
  }

  return <Container className="text" constrained="true" html={text} />
}

Text.propTypes = {
  text: PropTypes.string,
  html: PropTypes.string,
}

Text.defaultProps = {
  text: ``,
  html: ``,
}

export default Text
