import React from "react"

import Container from "../container/container"
import "./cta.scss"

const Cta = ({ title, text, buttons, backgroundStyle }) => {
  return (
    <Container className="cta" constrained={true} backgroundStyle={backgroundStyle}>
      {title && <h2 className="cta__title">{title}</h2>}
      {text && <div className="cta__text" dangerouslySetInnerHTML={{ __html: text }} />}
      {buttons && buttons}
    </Container>
  )
}

export default Cta
