import React from "react"
import PropTypes from "prop-types"
import Container from "../container/container";

import "./title.scss";

const Title = ({ title }) => {
  if (!title) {
    return null;
  }
  return (
    <Container className="title" constrained={true}>
      <h1>{title}</h1>
    </Container>
  )
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
}

Title.defaultProps = {
  title: ``,
}

export default Title
