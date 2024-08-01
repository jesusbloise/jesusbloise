import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  margin-left: 250px;
  padding: 2rem;
  background-color: #121212;
  color: #fff;
  min-height: 100vh;
`;

const Contacto = () => (
  <Section id="contacto">
    <h2>Contacto</h2>
    <p>Información de contacto aquí.</p>
  </Section>
);

export default Contacto;
