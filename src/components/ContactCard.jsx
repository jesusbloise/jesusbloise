import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const ContactContainer = styled.div`
  padding: 2rem;
  text-align: center;
  background-color: #f9f9f9;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const Button = styled.a`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: white;
  background-color: black;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const IconContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;

const IconLink = styled.a`
  color: ${({ $color }) => $color};
  font-size: 3rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ $hovercolor }) => $hovercolor};
  }
`;

const ContactCard = () => (
  <ContactContainer id="contacto">
    <Title>Contacto</Title>
    <ButtonContainer>
      <Button href="mailto:jesusbloise@gmail.com">Enviar un correo electrónico</Button>
      <Button href="https://wa.me/message/YPAUKOHCVXSWP1" target="_blank" rel="noopener noreferrer">
        ¿Quieres hablar por WhatsApp?
      </Button>
    </ButtonContainer>
    <IconContainer>
      <IconLink href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" $color="#0e76a8" $hovercolor="#08457e" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </IconLink>
      <IconLink href="https://www.instagram.com/s.o.s.c.o.d/" $color="#E1306C" $hovercolor="#ad2b5b" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </IconLink>
      <IconLink href="https://x.com/jesusbloiseofi?s=21" $color="#1DA1F2" $hovercolor="#178dbf" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </IconLink>
      <IconLink href="https://wa.me/message/YPAUKOHCVXSWP1" $color="#25D366" $hovercolor="#1b9f50" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp />
      </IconLink>
    </IconContainer>
  </ContactContainer>
);

export default ContactCard;


// import React from 'react';
// import styled from 'styled-components';
// import { FaLinkedin, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

// const ContactContainer = styled.div`
//   padding: 2rem;
//   text-align: center;
//   background-color: #f9f9f9;
// `;

// const Title = styled.h2`
//   font-size: 2.5rem;
//   color: #333;
//   margin-bottom: 1rem;
// `;

// const ButtonContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 1rem;
//   margin-top: 2rem;
// `;

// const Button = styled.a`
//   padding: 0.75rem 1.5rem;
//   font-size: 1rem;
//   color: white;
//   background-color: black;
//   text-decoration: none;
//   border-radius: 4px;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const IconContainer = styled.div`
//   margin-top: 2rem;
//   display: flex;
//   justify-content: center;
//   gap: 1.5rem;
// `;

// const IconLink = styled.a`
//   color: ${({ color }) => color};
//   font-size: 3rem;
//   transition: color 0.3s ease;

//   &:hover {
//     color: ${({ hovercolor }) => hovercolor};
//   }
// `;

// const ContactCard = () => (
//   <ContactContainer id="contacto">
//     <Title>Contacto</Title>
//     <ButtonContainer>
//       <Button href="mailto:tu-email@example.com">Enviar un correo electrónico</Button>
//       <Button href="https://wa.me/tu-numero-whatsapp" target="_blank" rel="noopener noreferrer">
//         ¿Quieres hablar por WhatsApp?
//       </Button>
//     </ButtonContainer>
//     <IconContainer>
//       <IconLink href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" color="#0e76a8" hovercolor="#08457e" target="_blank" rel="noopener noreferrer">
//         <FaLinkedin />
//       </IconLink>
//       <IconLink href="https://www.instagram.com/s.o.s.c.o.d/" color="#E1306C" hovercolor="#ad2b5b" target="_blank" rel="noopener noreferrer">
//         <FaInstagram />
//       </IconLink>
//       <IconLink href="https://x.com/jesusbloiseofi?s=21" color="#1DA1F2" hovercolor="#178dbf" target="_blank" rel="noopener noreferrer">
//         <FaTwitter />
//       </IconLink>
//       <IconLink href="https://wa.me/message/YPAUKOHCVXSWP1" color="#25D366" hovercolor="#1b9f50" target="_blank" rel="noopener noreferrer">
//         <FaWhatsapp />
//       </IconLink>
//     </IconContainer>
//   </ContactContainer>
// );

// export default ContactCard;

// import React from 'react';
// import styled from 'styled-components';
// import { FaLinkedin, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'; // Asegúrate de importar los iconos correctos

// const ContactContainer = styled.div`
//   padding: 2rem;
//   text-align: center;
//   background-color: #f9f9f9;
// `;

// const Title = styled.h2`
//   font-size: 2.5rem;
//   color: #333;
//   margin-bottom: 1rem;
// `;

// const ButtonContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 1rem;
//   margin-top: 2rem;
// `;

// const Button = styled.a`
//   padding: 0.75rem 1.5rem;
//   font-size: 1rem;
//   color: white;
//   background-color: black;
//   text-decoration: none;
//   border-radius: 4px;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const IconContainer = styled.div`
//   margin-top: 2rem;
//   display: flex;
//   justify-content: center;
//   gap: 1.5rem;
// `;

// const IconLink = styled.a`
//   color: #747474;
//   font-size: 3rem;
//   transition: color 0.3s ease;

//   &:hover {
//     color: ${({ hoverColor }) => hoverColor || '#007bff'};
//   }
// `;

// const ContactCard = () => (
//   <ContactContainer id="contacto">
//     <Title>Contacto</Title>
//     <ButtonContainer>
//       <Button href="mailto:tu-email@example.com">Enviar un correo electrónico</Button>
//       <Button href="https://wa.me/tu-numero-whatsapp" target="_blank" rel="noopener noreferrer">¿Quieres hablar por WhatsApp?</Button>
//     </ButtonContainer>
//     <IconContainer>
//       <IconLink href="https://www.linkedin.com/in/tu-perfil-linkedin" hoverColor="#0e76a8" target="_blank" rel="noopener noreferrer">
//         <FaLinkedin />
//       </IconLink>
//       <IconLink href="https://www.instagram.com/tu-perfil-instagram" hoverColor="#E1306C" target="_blank" rel="noopener noreferrer">
//         <FaInstagram />
//       </IconLink>
//       <IconLink href="https://twitter.com/tu-perfil-twitter" hoverColor="#1DA1F2" target="_blank" rel="noopener noreferrer">
//         <FaTwitter />
//       </IconLink>
//       <IconLink href="https://wa.me/tu-numero-whatsapp" hoverColor="#25D366" target="_blank" rel="noopener noreferrer">
//         <FaWhatsapp />
//       </IconLink>
//     </IconContainer>
//   </ContactContainer>
// );

// export default ContactCard;


// import React from 'react';
// import styled from 'styled-components';
// import { FaEnvelope, FaLinkedin, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

// const ContactCardContainer = styled.div`
//   padding: 2rem;
//   background: white;
//   border-radius: 8px;
//   width: 100%;
//   max-width: 600px;
//   margin: 0 auto;
//   text-align: center;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 1);
// `;

// const Title = styled.h2`
//   font-size: 2rem;
//   margin-bottom: 1rem;
//   color: #0a0a23;
// `;

// const Subtitle = styled.h3`
//   font-size: 1.25rem;
//   margin-bottom: 2rem;
//   color: #333;
// `;

// const Button = styled.a`
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   padding: 0.75rem 1.5rem;
//   margin-bottom: 2rem;
//   border: none;
//   border-radius: 4px;
//   background-color: #0a0a23;
//   color: white;
//   font-size: 1rem;
//   text-decoration: none;
//   cursor: pointer;

//   &:hover {
//     background-color: #EB8744;
//   }

//   & svg {
//     margin-left: 0.5rem;
//   }
// `;

// const IconsContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 1rem;
// `;

// const IconLink = styled.a`
//   color: #0a0a23;
//   font-size: 2.5rem;
//   transition: color 0.3s;

//   &:hover {
//     color: #EB8744;
//   }
// `;

// const ContactCard = () => {
//   return (
//     <ContactCardContainer id="contacto">
//       <Title>¡Vamos a trabajar juntos!</Title>
//       <Subtitle>Estoy abierto a oportunidades de trabajo a tiempo completo y como freelance.</Subtitle>
//       <Button href="mailto:jesusbloise@gmail.com">
//         Enviame un correo electrónico <FaEnvelope />
//       </Button>
//       <Button href="https://wa.me/message/YPAUKOHCVXSWP1" target="_blank" rel="noopener noreferrer">¿Quieres hablar por WhatsApp?</Button>
//       <IconsContainer>
//         <IconLink href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noopener noreferrer">
//           <FaLinkedin />
//         </IconLink>
//         <IconLink href="https://www.instagram.com/s.o.s.c.o.d/" target="_blank" rel="noopener noreferrer">
//           <FaInstagram />
//         </IconLink>
//         <IconLink href="https://x.com/jesusbloiseofi?s=21" target="_blank" rel="noopener noreferrer">
//           <FaTwitter />
//         </IconLink>
//         <IconLink href="https://wa.me/message/YPAUKOHCVXSWP1" target="_blank" rel="noopener noreferrer">
//           <FaWhatsapp />
//         </IconLink>
//       </IconsContainer>
//     </ContactCardContainer>
//   );
// };

// export default ContactCard;
