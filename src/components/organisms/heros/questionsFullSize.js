import React from "react"

import styled from "styled-components"

import MainContainer from "../../atoms/mainContainer"
import Jumbotron from "react-bootstrap/Jumbotron"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import CardQuestion from "../../molecules/cardQuestion"

const Hero = styled(Jumbotron)`
  margin-bottom: 0px;
  border-radius: 0px;
  text-align: center;
`

const allQuestions = [
  {
    question: `When Will I Receive My Returns?`,
    answer: `You will receive returns from farmland price appreciation at the end of the hold period. Lease payouts are typically made on a quarterly, semi-annual or annual basis and are automatically deposited into investors' bank accounts. The size of distributions depends on the negotiated lease payments every year. Investors can track upcoming lease payments and distributions to date through our platform.`,
  },
  {
    question: `What Are Your Fees?`,
    answer: `Our fee structure is aimed to be lower than the industry average. We achieve this by designing an online self-service platform and embracing technology in finding and acquiring farmland. Our fees vary for every deal and are listed on each investment opportunity's page.`,
  },
  {
    question: `How Do I Make My First Investment?`,
    answer: `First, you'll need to set up your FarmTogether account. To begin, click the "Sign Up" button on the homepage. After completing your investor profile, you'll be able to participate in an investment offering. To make your first investment, log in to your FarmTogether account, visit the offering page, and then click the "Invest" button. Following that, choose your desired investment amount and then click "Invest". Then you will be asked to sign an electronic agreement. After that, you will receive payment instructions.`,
  },
];

const HeroSection = () => {

  return (
    <>
      <Hero>
        <MainContainer>
          <Container>
            <Row>
              <Col xs="12">
                <h4 className="text-left mb-3">Questions?</h4>
              </Col>
              {allQuestions.map((member, index) => (
                <Col key={index} xs="12">
                  <CardQuestion question={member.question} answer={member.answer} />
                </Col>
              ))}
            </Row>
          </Container>
        </MainContainer>
      </Hero>
    </>
  )
}

export default HeroSection
