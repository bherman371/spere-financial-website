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
          <p className="mb-5">[A NEW GRAPHIC/DASHBOARD SHOULD BE INSERTED HERE]</p>
          <Container>
            <Row className="text-left">
              <Col xs="12">
                <Card>
                  <Card.Body>
                    <h4>Overview</h4>
                    <p>
                      This investment is a unique opportunity to own top quality row crop
                      farmland sourced and managed by a highly experienced institutional-level
                      investment firm, Farmland Opportunity. Until today, access to this firm
                      has only been open to ultra-high net worth individuals and family offices.
                    </p>
                    <p>
                      This row crop farm is located in prime farm country in Illinois, has
                      an excellent soil index, and a highly professional farmer that already
                      signed a 3-year lease with us.
                    </p>
                    <p>
                      The deal is completely off-market and came through proprietary
                      relationships, which allowed us to get the deal at a 10%+ discount
                      to market.
                    </p>
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
