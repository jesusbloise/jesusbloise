import React from 'react';
import styled from 'styled-components';
import profilePic from '../assets/selfi.jpg'; // Asegúrate de tener la imagen en esta ruta


const SectionContainer = styled.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  position: relative;
  background: url('/background.jpg') no-repeat center center fixed; /* Verifica que la imagen esté correctamente cargada */
  background-size: cover; /* Asegúrate de que la imagen cubra todo el fondo */
  background-blur: 2px; /* Opcional: desenfoque de fondo */
  margin-bottom: -4rem; /* Ajusta este valor según lo necesites */
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10%;
  border: 3px solid #00f260;
  margin-bottom: 2rem;
`;

const ContentContainer = styled.div`
  text-align: center;
  background: rgba(0, 0, 0, 0.8); /* Fondo oscuro con opacidad para el contenido */
  padding: 2rem;
  border-radius: 10px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin: 0;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0.5rem 0 2rem;
  color: #aaa;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
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

const Resumen = () => (
  <SectionContainer id="resumen">
    <ProfileImage src={profilePic} alt="Perfil de Jesus Bloise" />
    <ContentContainer>
      <Title>Hola, soy Jesus Bloise</Title>
      <Subtitle>Soy diseñador de productos con más de 3 años de experiencia en la industria Edtech.</Subtitle>
      <ButtonContainer>
        <Button href="#contacto">Contacto</Button>
        <Button href="/resume.pdf" target="_blank">Resume</Button>
      </ButtonContainer>
    </ContentContainer>
  </SectionContainer>
);

export default Resumen;
