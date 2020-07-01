/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "../organisms/header"
import Footer from "../organisms/footer"

import MainContainer from "../atoms/mainContainer"

const Layout = ({ children, fluid }) => (
  <StaticQuery query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title,
            company
          }
        }
      }
    `} render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        {
          fluid ?
          <div>{children}</div> :
          <MainContainer>{children}</MainContainer>
        }
        <Footer company={data.site.siteMetadata.company} />
      </>
    )} />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  fluid: PropTypes.bool,
}

export default Layout
