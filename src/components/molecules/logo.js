import Link from "../atoms/link"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const CustomLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  img {
    width: 60px;
    margin-right: 20px;
  }
`;

const BrandTitle = styled.div`
  width: 100%;
  height: 100%;
`

const Logo = ({ siteTitle }) => {

  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <CustomLogo>
      <Link to="/" title={siteTitle}>
        <BrandTitle>
          <Img
            fluid={data.logo.childImageSharp.fluid}
            style={{minHeight: "20px", minWidth: "120px"}}
          />
        </BrandTitle>
      </Link>
    </CustomLogo>
  )
}

Logo.propTypes = {
  siteTitle: PropTypes.string,
}

Logo.defaultProps = {
  siteTitle: ``,
}

export default Logo
