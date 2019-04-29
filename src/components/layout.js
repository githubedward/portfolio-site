/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
// import PropTypes from "prop-types"

import Header from "./Header/Header"

const Layout = ({ children }) => (
  <main>
    <Header />
  </main>
)

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
