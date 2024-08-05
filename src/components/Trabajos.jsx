import React from 'react';
import styled from 'styled-components';
import trabajo1 from '../assets/trabajo1.png';
import trabajo2 from '../assets/trabajo2.png';
import Carousel from './Carousel';

const SectionContainer = styled.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #0a0a23;
  position: relative;
  background: white;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #747474;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 800px;
`;

const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin: 1rem 0;
  color: #333;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  margin: 0.5rem 0 1.5rem;
  color: #666;
`;

const Button = styled.a`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: #0a0a23;
  background-color: transparent;
  text-decoration: none;
  border: 1px solid #0a0a23;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #0a0a23;
    color: white;
  }
`;

const SubTitle = styled.h3`
  font-size: 2rem;
  margin-top: 4rem;
  text-align: center;
  color: #747474;
`;

const Trabajos = () => (
  <SectionContainer id="trabajos">
    <Title>Trabajos destacados</Title>
    <CardContainer>
      <Card>
        <CardImage src={trabajo1} alt="Proyecto 1" />
        <CardTitle>Pizzeria Mammamia</CardTitle>
        <CardDescription>Pagina web para pizzeria con carrito de compra.</CardDescription>
        <Button href="./PizzeriaMammamia.jsx">Ver más</Button>
      </Card>
      <Card>
        <CardImage src={trabajo2} alt="Proyecto 2" />
        <CardTitle>Inmobiliaria ADL</CardTitle>
        <CardDescription>Pagina web donde mostramos ventas y alquileres de inmuebles.</CardDescription>
        <Button href="#ver-mas">Ver más</Button>
      </Card>
    </CardContainer>
    <SubTitle>Proyectos archivados</SubTitle>
    <Carousel />
  </SectionContainer>
);

export default Trabajos;
