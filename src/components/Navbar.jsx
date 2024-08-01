import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
background: rgba(0, 0, 0, 0.8); /* Asegúrate de que no tenga opacidad */
  display: flex;
  justify-content: center;
  z-index: 1000; /* Asegúrate de que tenga un z-index alto */
`;

const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  margin: 0;
`;

const NavLink = styled.a`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease; /* Transición para suavizar el cambio de color */
  
  &:hover {
    background-color: #00f260;
    color: #fff;
  }
`;

const Navbar = () => (
  <NavbarContainer>
    <NavList>
      <NavItem><NavLink href="#resumen">Resumen</NavLink></NavItem>
      <NavItem><NavLink href="#mis-trabajos">Mis Trabajos</NavLink></NavItem>
      <NavItem><NavLink href="#contacto">Contacto</NavLink></NavItem>
    </NavList>
  </NavbarContainer>
);

export default Navbar;
