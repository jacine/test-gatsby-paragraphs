import React from "react"
import PropTypes from "prop-types"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// Make sure all icons from the solid and brands packages are available.
library.add(fas, fab)

export const Icon = ({ prefix, name, size }) => (
  <FontAwesomeIcon icon={[prefix, name]} size={size} />
)

Icon.propTypes = {
  prefix: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.string,
}

Icon.defaultProps = {
  prefix: ``,
  name: ``,
  size: ``,
}
