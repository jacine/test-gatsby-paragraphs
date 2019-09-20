import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Nav from "./nav"

const Header = ({ siteTitle }) => (
  <header role="banner">
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
    <Nav />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
