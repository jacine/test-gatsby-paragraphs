import React from "react"
import PropTypes from "prop-types"
import Container from "../container/container";

import "./pageTitle.scss";

const PageTitle = ({ title }) => {
  if (!title) {
    return null;
  }
  return (
    <Container className="page-title">
      <h1>{title}</h1>
    </Container>
  )
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

PageTitle.defaultProps = {
  title: ``,
}

export default PageTitle
