import React from "react"

import styled from "styled-components"

import MainContainer from "../../atoms/mainContainer"
import Jumbotron from "react-bootstrap/Jumbotron"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const Hero = styled(Jumbotron)`
  margin-bottom: 0px;
  border-radius: 0px;
  text-align: center;
`

const HeroSection = () => {

  return (
    <>
      <Hero>
        <MainContainer>
          <Container>
            <Row className="text-left flex-column-reverse flex-md-row align-items-center">
              <Col xs="12" md="6" lg="4">
                <h5 className="text-left mb-3">Farmland in Your Portfolio</h5>
                <p>
                  Farmland offers compelling potential to enhance risk-adjusted returns of a
                  traditional stocks and bonds portfolio through diversification, and serves
                  as an inflation hedge.
                </p>
              </Col>
              <Col xs="12" md="6" lg="8" className="d-lg-block align-self-middle">
                <p className="text-center">[A NEW GRAPHIC/IMAGE SHOULD BE INSERTED HERE]</p>
              </Col>
            </Row>
          </Container>
        </MainContainer>
      </Hero>
    </>
  )
}

export default HeroSection
