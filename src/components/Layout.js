import React from "react"
import PropTypes from "prop-types"

require("./layout.css")

const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0`,
          height: "100%",
        }}
      >
        {children}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
