import React from "react"
import { Link } from "gatsby"
import { Icon } from "../icon/icon"

import "./callout.scss"

const Callout = ({ title, icon, text, url }) => {
  return (
    <article className="callout">
      <span className="callout__img">
        <Icon icon={icon.name} size={icon.size} />
      </span>
      <h3 className="callout__title">
        {url ? <Link to={url}>{title}</Link> : { title }}
      </h3>
      {text && (
        <div
          className="callout__text"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      )}
    </article>
  )
}

export default Callout
