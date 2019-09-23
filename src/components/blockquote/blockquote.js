import React from "react"
import PropTypes from "prop-types"
import "./blockquote.scss"

export const Blockquote = ({ html, attribution }) => {
  if (!html) {
    return null
  }

  return (
    <blockquote className="blockquote">
      <div
        className="blockquote__text"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      {attribution && <p className="blockquote__attribution">{attribution}</p>}
    </blockquote>
  )
}

Blockquote.propTypes = {
  html: PropTypes.string.isRequired,
  attribution: PropTypes.object.isRequired,
}

Blockquote.defaultProps = {
  html: ``,
  attribution: ``,
}

export default Blockquote
