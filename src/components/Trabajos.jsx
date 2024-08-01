import React from 'react';
import styled from 'styled-components';
import trabajo1 from '../assets/trabajo1.png'; // Asegúrate de la ruta correcta
import trabajo2 from '../assets/trabajo2.png';
import trabajo3 from '../assets/trabajo3.png';
import trabajo4 from '../assets/trabajo4.png';

const SectionContainer = styled.section`
  min-height: 100vh;
  padding: 0rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  position: relative;
 background: rgba(0, 0, 0, 0.5);
  margin-top: -4rem; /* Ajusta este valor según lo necesites */
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: rgba(119, 163, 69, 0.3); /* Fondo oscuro y transparente */
  border-radius: 10%;
  overflow: hidden;
  color: #fff;
  text-align: center;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin: 1rem 0;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const Button = styled.a`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: #fff;
  background-color: #00f260;
  text-decoration: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #00c853;
  }
`;

const Trabajos = () => (
  <SectionContainer id="trabajos">
    <Title>Algunos Trabajos</Title>
    <CardContainer>
      <Card>
        <CardImage src={trabajo1} alt="Trabajo 1" />
        <CardTitle>Trabajo 1</CardTitle>
        <CardDescription>Descripción breve del trabajo 1.</CardDescription>
        <Button href="#">Ver Más</Button>
      </Card>
      <Card>
        <CardImage src={trabajo2} alt="Trabajo 2" />
        <CardTitle>Trabajo 2</CardTitle>
        <CardDescription>Descripción breve del trabajo 2.</CardDescription>
        <Button href="#">Ver Más</Button>
      </Card>
      <Card>
        <CardImage src={trabajo3} alt="Trabajo 3" />
        <CardTitle>Trabajo 3</CardTitle>
        <CardDescription>Descripción breve del trabajo 3.</CardDescription>
        <Button href="#">Ver Más</Button>
      </Card>
      <Card>
        <CardImage src={trabajo4} alt="Trabajo 4" />
        <CardTitle>Trabajo 4</CardTitle>
        <CardDescription>Descripción breve del trabajo 4.</CardDescription>
        <Button href="#">Ver Más</Button>
      </Card>
    </CardContainer>
  </SectionContainer>
);

export default Trabajos;
