import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

const InmobiliariaADL = () => (
  <PageContainer>
    <Title>Inmobiliaria ADL</Title>
    <Description>
      Aquí va la descripción completa del proyecto Inmobiliaria ADL.
      Puedes incluir detalles sobre la tecnología utilizada, el proceso de desarrollo, etc.
    </Description>
  </PageContainer>
);

export default InmobiliariaADL;
