import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import "./container.scss"


const Container = (props) => {
  const bgStyle = props.backgroundStyle ? `bg-${props.backgroundStyle}` : null

  const classes = classNames(
    props.className,
    bgStyle,
    { "container--constrained": props.constrained },
  )

  let container;

  if (props.html) {
    container = <div className={classes} dangerouslySetInnerHTML={{ __html: props.html }} />
  } else {
    container = <div className={classes}>{props.children}</div>;
  }

  return (
    <>
      {container}
    </>
  );
}

Container.propTypes = {
  backgroundStyle: PropTypes.string,
  constrained: PropTypes.bool.isRequired,
  className: PropTypes.string,
  html: PropTypes.string,
}

Container.defaultProps = {
  backgroundStyle: null,
  constrained: false,
  className: ``,
  html: ``,
}

export default Container
