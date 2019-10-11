import React from "react"

import Container from "../container/container"
import "./callout-group.scss"

const CalloutGroup = ({title, callouts, buttons}) => {
  return (
    <Container className="callout-group" constrained={true}>
      {title && <h2 className="callout-group__title">{title}</h2>}
      {callouts && <div className="callout-group__callouts">{callouts}</div>}
      {buttons && <div className="callout-group__buttons">{buttons}</div>}
    </Container>
  )
}

export default CalloutGroup
