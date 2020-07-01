import Link from "../atoms/link"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Logo from "../molecules/logo"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const CustomFooter = styled.footer`
  padding: 2rem 1rem 45px;
  text-align: left;
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
`

const LinkStyled = styled(Link)`
  display: block;
  margin-bottom: 0.4em;
`

const year = new Date().getFullYear();

const Footer = ({ company }) => (
  <CustomFooter>
    <Container fluid>
      <Row>
        <Col xs="6" md="auto" className="pr-md-5 mr-md-5 mb-5" style={{fontSize: "0.8em"}}>
          <div>
            <p>Company</p>
            <LinkStyled to="/">Home</LinkStyled>
            <LinkStyled to="/offering">Current Offering</LinkStyled>
            <LinkStyled to="/about">About Spere Financial</LinkStyled>
            <LinkStyled to="/contact">Contact Us</LinkStyled>
          </div>
        </Col>
        <Col xs="6" md="auto" style={{fontSize: "0.8em"}}>
          <p>Connect</p>
          <p>[EMAIL SHOULD BE INSERTED]</p>
          <p>[PHONE SHOULD BE INSERTED]</p>
          <p>[ADDRESS SHOULD BE INSERTED]</p>
        </Col>
      </Row>
    </Container>

    <Container fluid>
      <Row style={{fontSize: "0.7em"}}>
        <Col xs="auto">
          <a href="#" className="mr-3">Disclosures</a>
          <a href="#" className="mr-3">Privacy policy</a>
          <a href="#">Terms of use</a>
        </Col>
        <Col className="text-right">
          <p>© {year} Spere Financial</p>
        </Col>
      </Row>
    </Container>
  </CustomFooter>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
