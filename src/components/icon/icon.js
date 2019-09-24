import React from "react"
import PropTypes from "prop-types"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

library.add(fas)

export const Icon = ({ icon, size }) => (
  <FontAwesomeIcon icon={icon} size={size} />
)

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.string,
}

Icon.defaultProps = {
  icon: ``,
  size: ``,
}

export default Icon
