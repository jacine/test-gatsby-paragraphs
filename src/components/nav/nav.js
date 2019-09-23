import React from "react"
import { Link } from "gatsby"
import "./nav.scss"

const Nav = () => {
  // Todo: Make this use the real main menu
  return (
    <nav role="navigation">
      <ul className="nav">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/hello">Hello</Link>
        </li>
        <li>
          <Link to="/get-started">Get Started</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/faq">FAQs</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
