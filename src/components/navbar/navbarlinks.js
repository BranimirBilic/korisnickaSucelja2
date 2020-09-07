import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavItem = styled(Link)`
  text-decoration: none;
  color: #808080;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: #f58233;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`

const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/">POČETNA</NavItem>
      <NavItem to="/o-nama">O NAMA</NavItem>
      <NavItem to="/usluge">USLUGE</NavItem>
      <NavItem to="/blog">BLOG</NavItem>
      <NavItem to="/kontakt">KONTAKT</NavItem>
      <NavItem to="/prijava">NARUČI SE</NavItem>
    </>
  )
}

export default NavbarLinks