/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import styled from "styled-components"
import { primaryColor } from "../../colors"

import Header from "../organisms/header"
import Footer from "../organisms/footer"
import Jumbotron from "react-bootstrap/Jumbotron"

import MainContainer from "../atoms/mainContainer"

import BackgroundImage from "gatsby-background-image"

const Hero = styled(Jumbotron)`
  background-color: rgba(60, 60, 60, 0.1);
  margin-bottom: 0px;
  border-radius: 0px;

  color: #ffffff !important;
  
  h2 {
    color: #ffffff !important;
  }
`

const Layout = ({ children, fluid, title }) => (
  <StaticQuery query={graphql`
      query {
        site {
          siteMetadata {
            title,
            company
          }
        }
        background: file(relativePath: { eq: "hero_cta_banner.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `} render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <BackgroundImage
          fluid={data.background.childImageSharp.fluid}
        >
          <Hero>
            <MainContainer>
              <h2 className="mt-5 mb-0 px-3">
                {title}
              </h2>
            </MainContainer>
          </Hero>
        </BackgroundImage>
        {
          fluid ?
          <div>{children}</div> :
          <MainContainer className="p-3">
            {children}
          </MainContainer>
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
