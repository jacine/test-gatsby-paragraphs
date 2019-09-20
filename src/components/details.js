import React from "react"
import PropTypes from "prop-types"

const Details = ({ summary, content }) => {
  if (summary && content) {
    return (
      <details>
        <summary>{summary}</summary>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </details>
    )
  }
}

Details.propTypes = {
  summary: PropTypes.string,
  content: PropTypes.string,
}

Details.defaultProps = {
  summary: ``,
  content: ``,
}

export default Details
