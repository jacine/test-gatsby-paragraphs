/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"

import "../css/style.scss"
import "../css/buttons.scss"
import "../css/code.scss"

const Layout = ({ children, className }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={['site', className].join(' ')}>
      <Header className="site-header" siteTitle={data.site.siteMetadata.title} />
      <main className="site-main">{children}</main>
      <footer className="site-footer">
        <small className="copyright">© {data.site.siteMetadata.title} {new Date().getFullYear()}</small>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Layout.defaultProps = {
  className: ``
}

export default Layout
