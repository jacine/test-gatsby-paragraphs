import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

import Container from "../container/container"
import Text from "../text/text"
import "./text-image.scss"

const TextImage = ({ title, text, image, buttons, backgroundStyle }) => {
  return (
    <Container className="text-image" backgroundStyle={backgroundStyle}>
      <div className="text-image__content">
        {title && <h2 className="text-image__title">{title}</h2>}
        {text && <Text className="text-image__text" text={text} />}
        {buttons && <div className="text-image__buttons">{buttons}</div>}
      </div>
      {image && (
        <div className="text-image__media">
          <Img
            className="text-image__image"
            fluid={image.childImageSharp.fluid}
          />
        </div>
      )}
    </Container>
  )
}

TextImage.propTypes = {
  backgroundStyle: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  buttons: PropTypes.array,
  image: PropTypes.object,
}

TextImage.defaultProps = {
  backgroundStyle: ``,
  title: ``,
  text: ``,
  buttons: null,
  image: null,
}

export default TextImage
