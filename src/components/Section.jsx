import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  min-height: 100vh; /* Asegúrate de que cada sección ocupe al menos el 100% de la altura de la ventana */
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: #fff;
  scroll-snap-align: start;
`;

const Section = ({ id, title, children }) => (
  <SectionContainer id={id}>
    <h2>{title}</h2>
    {children}
  </SectionContainer>
);

export default Section;
