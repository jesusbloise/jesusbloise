import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import trabajo1 from '../assets/trabajo1.png';
import ContactCard from './ContactCard';

const PageContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: auto;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 1.5rem;
  text-align: justify;
`;

const Button = styled(Link)`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: white;
  background-color: #0a0a23;
  text-decoration: none;
  border-radius: 4px;
  display: inline-block;
  margin-bottom: 2rem;

  &:hover {
    background-color: #333;
  }
`;

const PizzeriaMammamia = () => (
  <PageContainer>
    <Title>Pizzeria Mammamia</Title>
    <Image src={trabajo1} alt="Pizzeria Mammamia" />
    <Description>
      <strong>Descripción del Proyecto:</strong> Pizzeria Mammamia es una aplicación web diseñada para facilitar el proceso de pedido y compra de pizzas. La plataforma permite a los usuarios explorar el menú, seleccionar productos, agregar opciones a un carrito de compra y realizar pedidos en línea.
      <br /><br />
      <strong>Tecnologías Utilizadas:</strong>
      <ul>
        <li><strong>Frontend:</strong> React para la interfaz de usuario, proporcionando una experiencia interactiva y dinámica.</li>
        <li><strong>Estilizado:</strong> Styled-components para un diseño modular y mantenimiento eficiente de los estilos.</li>
        <li><strong>Enrutamiento:</strong> React Router para manejar la navegación entre las diferentes páginas de la aplicación.</li>
      </ul>
      <br />
      <strong>Detalles Técnicos:</strong>
      <ul>
        <li><strong>Componentización:</strong> La aplicación está dividida en componentes reutilizables como el menú, carrito de compras y detalles del producto, mejorando la organización y mantenibilidad del código.</li>
        <li><strong>Estado de la Aplicación:</strong> Manejo del estado global utilizando React Context para compartir datos entre componentes sin necesidad de pasar props de manera manual.</li>
        <li><strong>Responsive Design:</strong> La interfaz está optimizada para dispositivos móviles y de escritorio, garantizando una experiencia de usuario coherente en diferentes tamaños de pantalla.</li>
      </ul>
    </Description>
    <Button to="/">Volver al portafolio</Button>
    <ContactCard />
  </PageContainer>
);

export default PizzeriaMammamia;
