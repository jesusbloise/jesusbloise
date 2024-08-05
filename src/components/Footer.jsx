import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 1rem;
  background: #EEEDED;
  color: black;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 2rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      Creado por un desarrollador web alimentado por el café y la pasión por el diseño ❤️
    </FooterContainer>
  );
};

export default Footer;
