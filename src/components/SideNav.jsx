import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.div`
  height: 100vh;
  width: 250px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
`;

const NavItem = styled.a`
  color: #fff;
  padding: 1rem;
  text-decoration: none;
  text-align: center;
  width: 100%;
  &:hover {
    background-color: #575757;
  }
`;

const SideNav = () => (
  <NavContainer>
    <NavItem href="#resumen">Resumen</NavItem>
    <NavItem href="#trabajos">Mis Trabajos</NavItem>
    <NavItem href="#contacto">Contacto</NavItem>
  </NavContainer>
);

export default SideNav;
