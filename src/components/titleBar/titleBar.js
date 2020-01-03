import React from "react"

import Container from "../container/container"
import { Icon } from "../icon/icon"
import "./title-bar.scss"

const TitleBar = ({ title, text, icon }) => {
  return (
    <Container className="title-bar" constrained={true} backgroundStyle="lighter">
      <div className="title-bar__content">
        {title && <h1 className="title-bar__title">{title}</h1>}
        {text && <div className="title-bar__text" dangerouslySetInnerHTML={{ __html: text }} />}
        {icon && <span className="title-bar__icon bg-light">
          <Icon className="title-bar__img" prefix={icon.prefix} name={icon.name} size={icon.size} />
        </span>}
      </div>
    </Container>
  )
}

export default TitleBar
