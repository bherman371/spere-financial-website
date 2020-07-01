import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Link from "../../atoms/link"

import styled from "styled-components"

import MainContainer from "../../atoms/mainContainer"
import Jumbotron from "react-bootstrap/Jumbotron"

import BackgroundImage from 'gatsby-background-image'

import Title from "../../atoms/titleSection"
import Button from "../../atoms/button"

const Hero = styled(Jumbotron)`
  background-color: rgba(80, 80, 80, 0.1);
  margin-bottom: 0px;
  border-radius: 0px;
  text-align: center;
`

const TitleStyled = styled(Title)`
  color: #F8F8F8;
`

const Background = styled(BackgroundImage)`
  background-size: cover;
`

const HeroSection = () => {

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "hero_cta_banner.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Background
      fluid={data.file.childImageSharp.fluid}
    >
      <Hero>
        <MainContainer>
          <TitleStyled>
            Questions? We’re here to help!
          </TitleStyled>

          <Link to="/contact">
            <Button variant="primary" className="px-5 py-3">Contact Us</Button>
          </Link>
        </MainContainer>
      </Hero>
    </Background>
  )
}

export default HeroSection
