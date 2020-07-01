import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Link from "../atoms/link"

import Logo from "../molecules/logo"

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const MarginPlaceholder = styled.div`
  background-color: #e9ecef;
  height: 70px;
`

const NavLink = ({ to, children }) => (
  <li className="nav-item">
    <a className="nav-link" activeClassName="active" href={to}>{children}</a>
  </li>
)

const Header = ({ siteTitle }) => (
  <>
    <Navbar expand="md" variant="light" className="py-1 px-3 bg-white fixed-top sticky-navigation nav-shadow">
      <Navbar.Brand className="navbar-brand mx-auto" to="/">
        <Logo siteTitle={siteTitle}/>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto font-weight-bold" style={{fontSize: "1em"}}>
            <NavLink to="/offering">Current Offering</NavLink>
            <NavLink to="/about">About Spere Financial</NavLink>
            <NavLink to="/contact" className="text-primary">Contact Us</NavLink>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    <MarginPlaceholder></MarginPlaceholder>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
