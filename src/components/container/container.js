import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import "./container.scss"

function Container(props) {
  let classes = classNames(props.className, {
    "container--constrained": props.constrained,
  })
  if (props.html) {
    return (
      <div
        className={classes}
        dangerouslySetInnerHTML={{ __html: props.html }}
      />
    )
  } else {
    return <div className={classes}>{props.children}</div>
  }
}

Container.propTypes = {
  constrained: PropTypes.bool.isRequired,
  className: PropTypes.string,
  html: PropTypes.string,
}

Container.defaultProps = {
  constrained: false,
  className: ``,
  html: ``,
}

export default Container
