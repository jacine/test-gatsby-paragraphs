import React from "react"
import PropTypes from "prop-types"

import Container from "../container/container"
import "./blockquote.scss"

export const Blockquote = ({ text, attribution }) => {
  if (!text) {
    return null
  }

  return (
    <blockquote className="blockquote">
      <Container className="blockquote__container" constrained={true}>
        <div
          className="blockquote__text"
          dangerouslySetInnerHTML={{ __html: text }}
        />
        {attribution && (
          <p className="blockquote__attribution">{attribution}</p>
        )}
      </Container>
    </blockquote>
  )
}

Blockquote.propTypes = {
  text: PropTypes.string.isRequired,
  attribution: PropTypes.string,
}

Blockquote.defaultProps = {
  text: ``,
  attribution: ``,
}

export default Blockquote
