import React from "react"

import styled from "styled-components"

import MainContainer from "../../atoms/mainContainer"
import Jumbotron from "react-bootstrap/Jumbotron"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Card from "react-bootstrap/Card"

import CardQuestion from "../../molecules/cardQuestion"

const Hero = styled(Jumbotron)`
  margin-bottom: 0px;
  border-radius: 0px;
  text-align: center;
`

const HeroSection = 
() => {

  return (
    <>
      <Hero>
        <MainContainer>
          <Container>
            <Row className="text-left">
              <Col xs="12">
                <Card className="card-overflow">
                  <Card.Body>
                    <h4>Contact Us</h4>
                    <p className="mb-5">[FORM FIELDS MUST BE CHOSEN]</p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </MainContainer>
      </Hero>
    </>
  )
}

export default HeroSection
