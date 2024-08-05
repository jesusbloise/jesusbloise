import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaLinkedin, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const ContactCardContainer = styled.div`
  padding: 2rem;
  background: white;
  border-radius: 8px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 1);
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #0a0a23;
`;

const Subtitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: #aaa;
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  margin-bottom: 2rem;
  border: none;
  border-radius: 4px;
  background-color: #0a0a23;
  color: white;
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: #EB8744;
  }

  & svg {
    margin-left: 0.5rem;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const IconLink = styled.a`
  color: #0a0a23;
  font-size: 2.5rem;
  transition: color 0.3s;

  &:hover {
    color: #EB8744;
  }
`;

const ContactCard = () => {
  return (
    <ContactCardContainer id="contacto">
      <Title>¡Vamos a trabajar juntos!</Title>
      <Subtitle>Estoy abierto a oportunidades de trabajo a tiempo completo y como freelance.</Subtitle>
      <Button href="mailto:jesusbloise@gmail.com">
        Enviame un correo electrónico <FaEnvelope />
      </Button>
      <IconsContainer>
        <IconLink href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </IconLink>
        <IconLink href="https://www.instagram.com/s.o.s.c.o.d/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </IconLink>
        <IconLink href="https://x.com/jesusbloiseofi?s=21" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </IconLink>
        <IconLink href="https://wa.me/message/YPAUKOHCVXSWP1" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </IconLink>
      </IconsContainer>
    </ContactCardContainer>
  );
};

export default ContactCard;
