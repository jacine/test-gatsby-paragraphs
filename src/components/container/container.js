import React from "react"
import classNames from "classnames"

import "./container.scss"

function Container(props) {
  let classes = classNames(props.className, {
    'container--constrained': props.constrained,
  })
  if (props.html) {
    return <div className={classes} dangerouslySetInnerHTML={{ __html: props.html }} />
  }
  else {
    return <div className={classes}>{props.children}</div>
  }
}

export default Container
