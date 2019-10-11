import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./buttons.scss"

const Button = ({ text, url, style }) => {
  return (
    <Link className={`button button--${style}`} to={url}>
      {text}
    </Link>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  style: PropTypes.string,
}

Button.defaultProps = {
  text: ``,
  url: ``,
  style: `primary`,
}

export default Button
