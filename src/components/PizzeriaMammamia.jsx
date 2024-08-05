import React from 'react';
import styled from 'styled-components';
import trabajo1 from '../assets/trabajo1.png'; 

const SectionContainer = styled.section`
  padding: 2rem;
  color: #0a0a23;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 2rem;
`;

const Description = styled.p`
  font-size: 1.25rem;
  color: #747474;
`;

const PizzeriaMammamia = () => (
  <SectionContainer>
    <Title>Pizzeria Mammamia</Title>
    <Image src={trabajo1} alt="Pizzeria Mammamia" />
    <Description>
      Página web para pizzería con carrito de compra. Incluye características como...
    </Description>
  </SectionContainer>
);

export default PizzeriaMammamia;
