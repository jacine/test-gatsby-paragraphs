import React from "react"
import Img from "gatsby-image"

import Container from "../container/container"
import "./hero.scss"

const Hero = ({ title, text, buttons, image, backgroundStyle }) => {
  return (
    <Container className="hero" backgroundStyle={backgroundStyle}>
      {image && (
        <Img className="hero__media" fluid={image.childImageSharp.fluid} />
      )}
      <Container className="hero__content" constrained={true}>
        {title && <h1 className="hero__title">{title}</h1>}
        <div
          className="hero__text"
          dangerouslySetInnerHTML={{ __html: text }}
        />
        {buttons && buttons}
      </Container>
    </Container>
  )
}

export default Hero
