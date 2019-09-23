import React from "react"
import "./footer.scss"

const Footer = ({ children, className }) => (
  <footer className={className}>
    {children}
  </footer>
)

export default Footer
