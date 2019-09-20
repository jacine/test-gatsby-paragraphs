import React from 'react'
import { Link } from "gatsby"

const Nav = () => {

  return (
    <nav role="navigation">
      <ul className="nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/get-started">Get Started</Link></li>
        <li><Link to="/faq">FAQs</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
