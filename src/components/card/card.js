import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"

import "./card.scss"

const Card = ({ title, text, url, image }) => {
  return (
    <article className="card">
      <Img className="card__img" fixed={image.childImageSharp.fixed}/>
      {url ? <Link className="card__link" to={url}>{title}</Link> : { title }}
      <div className="card__text" dangerouslySetInnerHTML={{ __html: text }} />
    </article>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.object,
}

Card.defaultProps = {
  title: ``,
  text: ``,
  url: null,
  image: null,
}

export default Card
