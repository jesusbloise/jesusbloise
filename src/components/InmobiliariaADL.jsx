import React from 'react';
import styled from 'styled-components';
import trabajo2 from '../assets/trabajo2.png';

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

const InmobiliariaADL = () => (
  <SectionContainer>
    <Title>Inmobiliaria ADL</Title>
    <Image src={trabajo2} alt="Inmobiliaria ADL" />
    <Description>
      Página web donde mostramos ventas y alquileres de inmuebles. Incluye características como...
    </Description>
  </SectionContainer>
);

export default InmobiliariaADL;
