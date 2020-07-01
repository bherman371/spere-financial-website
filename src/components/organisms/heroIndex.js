import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Link from "../atoms/link"
import Img from "gatsby-image"

import styled from "styled-components"
import { primaryColor } from "../../colors"

import MainContainer from "../atoms/mainContainer"
import Jumbotron from "react-bootstrap/Jumbotron"
import Button from "../atoms/button"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import BackgroundImage from "gatsby-background-image"

const Hero = styled(Jumbotron)`
  margin-bottom: 0px;
  border-radius: 0px;
  padding-top: 1em;
  padding-bottom: 1em;
`

const TextLine = styled.span`
  display: block;
  font-size: 1.8em;
  color: color.scale(${primaryColor}, $lightness: 20%);
  line-height: 1.4em;
`

const HeroText = styled.div`
  @media screen and (max-width: 500px) {
    font-size: 0.7em;
  }
`

const ParallaxBackgroundImage = styled(BackgroundImage)`
  background-attachment: fixed;
  background-size: cover;
  background-position: 50% 50%;
`

const HeroIndex = () => {

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "hero_banner.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      isometricImg: file(relativePath: { eq: "hero_banner_isometric.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <Hero>
        <MainContainer>
          <Container>
            <Row className="flex-column-reverse flex-md-row align-items-center">
              <Col xs={12} md={6} className="py-5">
                <h4 className="text-dark font-weight-bold">Income from Farmland Investing Made Easy</h4>
                <p>Become a farmland investor in minutes and see your money grow today.</p>
                <div className="mt-4">
                  <Link to="/contact"><Button className="mr-2 mb-2">Contact Us</Button></Link>
                  <Link to="offering"><Button variant="outline-primary" className="mb-2">Current Offering</Button></Link>
                </div>
              </Col>
              <Col xs={12} md={6} className="d-lg-block align-self-middle">
                <p>[A NEW GRAPHIC/IMAGE SHOULD BE INSERTED HERE]</p>
              </Col>
            </Row>
          </Container>
        </MainContainer>
      </Hero>
    </>
  )
}

export default HeroIndex
