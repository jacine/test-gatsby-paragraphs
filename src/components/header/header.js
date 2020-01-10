import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Nav from "../nav/nav"

import "./header.scss"

const Header = ({ siteTitle, className }) => (
  <header role="banner" className={className}>
    <h1 className="site-name">
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
