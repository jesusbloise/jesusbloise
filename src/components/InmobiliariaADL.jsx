import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import trabajo2 from '../assets/trabajo2.png';
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

const InmobiliariaADL = () => (
  <PageContainer>
    <Title>Inmobiliaria ADL</Title>
    <Image src={trabajo2} alt="Inmobiliaria ADL" />
    <Description>
      <strong>Descripción del Proyecto:</strong> Inmobiliaria ADL es una plataforma web desarrollada para la gestión de ventas y alquileres de propiedades. Los usuarios pueden explorar diferentes inmuebles, obtener detalles específicos y ponerse en contacto para más información.
      <br /><br />
      <strong>Tecnologías Utilizadas:</strong>
      <ul>
        <li><strong>Frontend:</strong> React para la construcción de una interfaz de usuario interactiva y moderna.</li>
        <li><strong>Estilizado:</strong> Styled-components para el diseño y la implementación de estilos modulares y mantenibles.</li>
        <li><strong>Enrutamiento:</strong> React Router para una navegación fluida y eficiente entre las distintas secciones de la aplicación.</li>
      </ul>
      <br />
      <strong>Detalles Técnicos:</strong>
      <ul>
        <li><strong>Componentización:</strong> Estructuración de la aplicación en componentes reutilizables como listas de propiedades, detalles del inmueble y formularios de contacto, facilitando la mantenibilidad y escalabilidad del código.</li>
        <li><strong>Estado de la Aplicación:</strong> Uso de React Context para la gestión del estado global, permitiendo la compartición de datos entre componentes sin necesidad de prop drilling.</li>
        <li><strong>Responsive Design:</strong> Diseño adaptable para asegurar una experiencia de usuario óptima tanto en dispositivos móviles como de escritorio.</li>
      </ul>
    </Description>
    <Button to="/">Volver al portafolio</Button>
    <ContactCard />
  </PageContainer>
);

export default InmobiliariaADL;
