// src/components/Navbar.js
import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #fafafa;
  border-bottom: 1px solid #dbdbdb;
`;

const Logo = styled.h1`
  font-family: 'Dancing Script', cursive;
  font-size: 1.5rem;
  color: #333;
`;

const Navbar = () => (
  <NavbarContainer>
    <Logo>Poojalakshmi's Portfolio</Logo>
  </NavbarContainer>
);

export default Navbar;
