import React from 'react';
import styled from 'styled-components';
import trabajo1 from '../assets/trabajo1.png'; // Asegúrate de tener las imágenes en esta ruta
import trabajo2 from '../assets/trabajo2.png';
import Carousel from './Carousel';

const SectionContainer = styled.section`
  min-height: 100vh;
  padding: -10rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  position: relative;
background: rgba(0, 0, 0, 0.3);
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 800px;
`;

const Card = styled.div`
  background-color: rgba(0, 0, 0, 0.3); /* Fondo transparente oscuro */
  border: 1px solid #333;
  border-radius: 5%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin: 1rem 0;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  margin: 0.5rem 0 1.5rem;
  color: #aaa;
`;

const Button = styled.a`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: #00f260; /* Color del texto en verde */
  background-color: transparent; /* Fondo transparente */
  border: 2px solid #00f260; /* Borde verde */
  text-decoration: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #00f260; /* Fondo verde al pasar el ratón */
    color: #fff; /* Color del texto en blanco */
  }
`;
const SubTitle = styled.h3`
  font-size: 2rem;
  margin-top: 4rem;
  text-align: center;
  color: #fff;
`;
const Trabajos = () => (
  <SectionContainer id="trabajos">
    <Title>Trabajos destacados</Title>
    <CardContainer>
      <Card>
        <CardImage src={trabajo1} alt="Proyecto 1" />
        <CardTitle>Pizzeria Mammamia</CardTitle>
        <CardDescription>Descripción del Proyecto 1.</CardDescription>
        <Button href="#ver-mas">Ver más</Button>
      </Card>
      <Card>
        <CardImage src={trabajo2} alt="Proyecto 2" />
        <CardTitle>Inmobiliaria ADL</CardTitle>
        <CardDescription>Descripción del Proyecto 2.</CardDescription>
        <Button href="#ver-mas">Ver más</Button>
      </Card>
    </CardContainer>
    <SubTitle>Proyectos archivados</SubTitle>
    <Carousel />
  </SectionContainer>
);

export default Trabajos;
