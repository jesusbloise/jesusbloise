import React, { useState } from 'react';
import styled from 'styled-components';
import cv from '../assets/cv.pdf'; // Asegúrate de que la ruta sea correcta

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
`;

const NavList = styled.ul.withConfig({
  shouldForwardProp: (prop) => !['isOpen'].includes(prop)
})`
  display: flex;
  gap: 2rem;
  list-style: none;
  padding: 1rem;
  margin: 0rem;
  
  
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background: white;
    border: 1px solid #ddd;
  
  }
`;

const NavItem = styled.li`
  margin: 0;
`;

const NavLink = styled.a`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: black;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: black;
    color: white;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 1.25rem;
    text-align: center;
    border-bottom: 1px solid #ddd;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
    
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavbarContainer>
      <HamburgerButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✖' : '☰'}
      </HamburgerButton>
      <NavList isOpen={isOpen}>
        <NavItem><NavLink href={cv} target="_blank">Resumen</NavLink></NavItem>
        <NavItem><NavLink href="#trabajos">Mis Trabajos</NavLink></NavItem>
        <NavItem><NavLink href="https://my-game-jab.netlify.app/" target="_blank">Juego</NavLink></NavItem>
        <NavItem><NavLink href="#contacto">Contacto</NavLink></NavItem>
      </NavList>
    </NavbarContainer>
  );
};

export default Navbar;


// import React, { useState } from 'react';
// import styled from 'styled-components';
// import cv from '../assets/cv.pdf'; // Asegúrate de que la ruta sea correcta

// const NavbarContainer = styled.nav`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   padding: 1rem;
//   background: white;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 1000;
// `;

// const NavList = styled.ul`
//   display: flex;
//   gap: 2rem;
//   list-style: none;
//   padding: 0;
//   margin: 0;
  
//   @media (max-width: 768px) {
//     display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
//     flex-direction: column;
//     position: absolute;
//     top: 60px;
//     left: 0;
//     width: 100%;
//     background: white;
//     border: 1px solid #ddd;
//   }
// `;

// const NavItem = styled.li`
//   margin: 0;
// `;

// const NavLink = styled.a`
//   padding: 0.75rem 1.5rem;
//   font-size: 1rem;
//   color: #0a0a23;
//   text-decoration: none;
//   border-radius: 4px;
//   transition: background-color 0.3s ease;
  
//   &:hover {
//     background-color: black;
//     color: white;
//   }

//   @media (max-width: 768px) {
//     padding: 1rem;
//     font-size: 1.25rem;
//     text-align: center;
//     border-bottom: 1px solid #ddd;
//   }
// `;

// const HamburgerButton = styled.button`
//   display: none;
//   background: none;
//   border: none;
//   font-size: 2rem;
//   cursor: pointer;
  
//   @media (max-width: 768px) {
//     display: block;
//   }
// `;

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <NavbarContainer>
//       <HamburgerButton onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? '✖' : '☰'}
//       </HamburgerButton>
//       <NavList isOpen={isOpen}>
//         <NavItem><NavLink href={cv} target="_blank">Resumen</NavLink></NavItem>
//         <NavItem><NavLink href="#trabajos">Mis Trabajos</NavLink></NavItem>
//         <NavItem><NavLink href="https://my-game-jab.netlify.app/" target="_blank">Juego</NavLink></NavItem>
//         <NavItem><NavLink href="#contacto">Contacto</NavLink></NavItem>
//       </NavList>
//     </NavbarContainer>
//   );
// };

// export default Navbar;


// import React from 'react';
// import styled from 'styled-components';
// import cv from '../assets/cv.pdf'; // Asegúrate de que la ruta sea correcta

// const NavbarContainer = styled.nav`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   padding: 1rem;
//   background: white; /* Asegúrate de que no tenga opacidad */
//   display: flex;
//   justify-content: center;
//   z-index: 1000; /* Asegúrate de que tenga un z-index alto */
// `;

// const NavList = styled.ul`
//   display: flex;
//   gap: 2rem;
//   list-style: none;
//   padding: 0;
//   margin: 0;
// `;

// const NavItem = styled.li`
//   margin: 0;
// `;

// const NavLink = styled.a`
//   padding: 0.75rem 1.5rem;
//   font-size: 1rem;
//   color: #0a0a23;
//   text-decoration: none;
//   border-radius: 4px;
//   transition: background-color 0.3s ease; /* Transición para suavizar el cambio de color */
  
//   &:hover {
//     background-color: black;
//     color: white;
//   }
// `;

// const Navbar = () => (
//   <NavbarContainer>
//     <NavList>
//       <NavItem><NavLink href={cv} target="_blank">Resumen</NavLink></NavItem>
//       <NavItem><NavLink href="#trabajos">Mis Trabajos</NavLink></NavItem>
//       <NavItem><NavLink href="https://my-game-jab.netlify.app/" target="_blank">Juego</NavLink></NavItem>
//       <NavItem><NavLink href="#contacto">Contacto</NavLink></NavItem>
//     </NavList>
//   </NavbarContainer>
// );

// export default Navbar;
