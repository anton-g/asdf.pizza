import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

require("./layout.css");

const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0`,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <h1>asdf</h1>
        </Link>
        {children}
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
