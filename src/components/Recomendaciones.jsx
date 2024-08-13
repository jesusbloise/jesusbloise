import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import luis from '../assets/luis.png';
import diego from '../assets/diego.png';
import dayana from '../assets/dayana.png';
import corina from '../assets/corina.png';
import linkedInLogo from '../assets/linkedin.png';

const SectionContainer = styled.section`
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #EEEDED;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
`;

const Subtitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: #333;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Card = styled.div`
  background-color: white;
  padding: 0.5rem;
  margin: 1rem;
  border-radius: 8px;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  color: #0a0a23;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
`;

const CarouselContainer = styled.div`
  display: none;
  width: 100%;
  @media (max-width: 768px) {
    display: block;
  }
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const LinkedInLogo = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 1rem;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  margin: 0;
  color: #0a0a23;
`;

const CardSubtitle = styled.h4`
  font-size: 1rem;
  font-weight: 400;
  margin: 0.5rem 0;
  color: #EB8744;
`;

const Description = styled.p`
  font-size: 0.875rem;
  color: #333;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -2rem;
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 5rem;
  color: #333;
  margin: 0 1rem;
  
  &:focus {
    outline: none;
  }
`;

const CustomButtonGroup = ({ next, previous }) => {
  return (
    <ButtonWrapper>
      <ArrowButton onClick={previous}>←</ArrowButton>
      <ArrowButton onClick={next}>→</ArrowButton>
    </ButtonWrapper>
  );
};

const Recomendaciones = () => {
  const recommendations = [
    {
      id: 1,
      name: "Luis Enrique Rodrigues Pena",
      title: "Software Engineer",
      description: "Jesus Bloise demuestra una agilidad excepcional a la hora de responder a las cambiantes necesidades empresariales y siempre entrega los diseños a tiempo. A lo largo del ciclo de vida del diseño, explora múltiples enfoques, evalúa sus méritos y ofrece constantemente soluciones innovadoras sin comprometer la calidad. Sus contribuciones desempeñaron un papel fundamental en nuestro éxito, mejorando significativamente nuestros esfuerzos de desarrollo.",
      image: luis
    },
    {
      id: 2,
      name: "Diego Ramirez",
      title: "Product Manager en Pernostock",
      description: "Recomiendo encarecidamente a Jesus loise para cualquier proyecto colaborativo o función en el ámbito del desarrollo Web. Su amplia experiencia en diseño en diversas industrias facilita una relación de trabajo fluida. Se adapta rápidamente a nuevos proyectos y ofrece constantemente resultados excepcionales.",
      image: diego
    },
    {
      id: 3,
      name: "Dayana Alvarez",
      title: "UX Designer",
      description: "Jesus Bloise siempre aportaba una energía increíble a cada proyecto. No tenía miedo de desafiar el status y se aseguraba de que exploráramos las mejores soluciones posibles. Bloise tenía una capacidad única para proponer ideas prácticas a corto plazo y conceptos ambiciosos, lo que enriqueció significativamente nuestras sesiones de intercambio de ideas. Además, incorporaba los comentarios de manera excepcional y refinaba y mejoraba continuamente sus diseños.",
      image: dayana
    },
    {
      id: 4,
      name: "Corina Varas",
      title: "Ssr. Advanced Web UI Developer for FIFA @ Globant",
      description: "Jesus Bloise demostró una gran capacidad para trabajar en estrecha colaboración con los ingenieros, comunicar eficazmente las intenciones de diseño e iterar en función de los comentarios técnicos. Sus diseños siempre tuvieron en cuenta tanto la experiencia del usuario como las limitaciones técnicas, lo que garantizó una implementación fluida por parte del equipo de desarrollo. El enfoque proactivo de Jesus Bloise para las pruebas de usabilidad y la iteración dio como.",
      image: corina
    }
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <SectionContainer>
      <Title>Recomendaciones</Title>
      <Subtitle>Aquí hay algunas recomendaciones de colegas y clientes</Subtitle>
      <CardContainer>
        {recommendations.map((rec) => (
          <Card key={rec.id}>
            <Image src={rec.image} alt={`Foto de ${rec.name}`} />
            <InfoContainer>
              <div>
                <CardTitle>{rec.name}</CardTitle>
                <CardSubtitle>{rec.title}</CardSubtitle>
              </div>
              <LinkedInLogo src={linkedInLogo} alt="LinkedIn" />
            </InfoContainer>
            <Description>{rec.description}</Description>
          </Card>
        ))}
      </CardContainer>
      <CarouselContainer>
        <Carousel 
          responsive={responsive} 
          infinite 
          customButtonGroup={<CustomButtonGroup />}
          renderButtonGroupOutside={true}
          arrows={false}
        >
          {recommendations.map((rec) => (
            <Card key={rec.id}>
              <Image src={rec.image} alt={`Foto de ${rec.name}`} />
              <InfoContainer>
                <div>
                  <CardTitle>{rec.name}</CardTitle>
                  <CardSubtitle>{rec.title}</CardSubtitle>
                </div>
                <LinkedInLogo src={linkedInLogo} alt="LinkedIn" />
              </InfoContainer>
              <Description>{rec.description}</Description>
            </Card>
          ))}
        </Carousel>
      </CarouselContainer>
    </SectionContainer>
  );
};

export default Recomendaciones;




// import React from 'react';
// import styled from 'styled-components';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import luis from '../assets/luis.png';
// import diego from '../assets/diego.png';
// import dayana from '../assets/dayana.png';
// import corina from '../assets/corina.png';
// import linkedInLogo from '../assets/linkedin.png';

// const SectionContainer = styled.section`
//   padding: 4rem 2rem;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background: #EEEDED;
// `;

// const Title = styled.h2`
//   font-size: 2rem;
//   margin-bottom: 1rem;
//   color: #333;
// `;

// const Subtitle = styled.h3`
//   font-size: 1.25rem;
//   margin-bottom: 2rem;
//   color: #333;
// `;

// const CardContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-around;
//   width: 100%;
//   @media (max-width: 768px) {
//     display: none;
//   }
// `;

// const Card = styled.div`
//   background-color: white;
//   padding: 0.5rem;
//   margin: 1rem;
//   border-radius: 8px;
//   width: 250px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-align: left;
//   color: #0a0a23;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
// `;

// const CarouselContainer = styled.div`
//   display: none;
//   width: 100%;
//   @media (max-width: 768px) {
//     display: block;
//   }
// `;

// const Image = styled.img`
//   width: 50px;
//   height: 50px;
//   border-radius: 50%;
//   margin-bottom: 1rem;
// `;

// const LinkedInLogo = styled.img`
//   width: 20px;
//   height: 20px;
//   margin-left: 1rem;
// `;

// const InfoContainer = styled.div`
//   display: flex;
//   align-items: center;
//   width: 100%;
//   justify-content: space-between;
// `;

// const CardTitle = styled.h3`
//   font-size: 1.25rem;
//   margin: 0;
//   color: #0a0a23;
// `;

// const CardSubtitle = styled.h4`
//   font-size: 1rem;
//   font-weight: 400;
//   margin: 0.5rem 0;
//   color: #EB8744;
// `;

// const Description = styled.p`
//   font-size: 0.875rem;
//   color: #333;
// `;

// const Recomendaciones = () => {
//   const recommendations = [
//     {
//       id: 1,
//       name: "Luis Enrique Rodrigues Pena",
//       title: "Software Engineer",
//       description: "Jesus Bloise demuestra una agilidad excepcional a la hora de responder a las cambiantes necesidades empresariales y siempre entrega los diseños a tiempo. A lo largo del ciclo de vida del diseño, explora múltiples enfoques, evalúa sus méritos y ofrece constantemente soluciones innovadoras sin comprometer la calidad. Sus contribuciones desempeñaron un papel fundamental en nuestro éxito, mejorando significativamente nuestros esfuerzos de desarrollo.",
//       image: luis
//     },
//     {
//       id: 2,
//       name: "Diego Ramirez",
//       title: "Product Manager en Pernostock",
//       description: "Recomiendo encarecidamente a Jesus loise para cualquier proyecto colaborativo o función en el ámbito del desarrollo Web. Su amplia experiencia en diseño en diversas industrias facilita una relación de trabajo fluida. Se adapta rápidamente a nuevos proyectos y ofrece constantemente resultados excepcionales.",
//       image: diego
//     },
//     {
//       id: 3,
//       name: "Dayana Alvarez",
//       title: "UX Designer",
//       description: "Jesus Bloise siempre aportaba una energía increíble a cada proyecto. No tenía miedo de desafiar el status y se aseguraba de que exploráramos las mejores soluciones posibles. Bloise tenía una capacidad única para proponer ideas prácticas a corto plazo y conceptos ambiciosos, lo que enriqueció significativamente nuestras sesiones de intercambio de ideas. Además, incorporaba los comentarios de manera excepcional y refinaba y mejoraba continuamente sus diseños.",
//       image: dayana
//     },
//     {
//       id: 4,
//       name: "Corina Varas",
//       title: "Ssr. Advanced Web UI Developer for FIFA @ Globant",
//       description: "Jesus Bloise demostró una gran capacidad para trabajar en estrecha colaboración con los ingenieros, comunicar eficazmente las intenciones de diseño e iterar en función de los comentarios técnicos. Sus diseños siempre tuvieron en cuenta tanto la experiencia del usuario como las limitaciones técnicas, lo que garantizó una implementación fluida por parte del equipo de desarrollo. El enfoque proactivo de Jesus Bloise para las pruebas de usabilidad y la iteración dio como.",
//       image: corina
//     }
//   ];

//   const responsive = {
//     superLargeDesktop: {
//       breakpoint: { max: 4000, min: 1024 },
//       items: 4
//     },
//     desktop: {
//       breakpoint: { max: 1024, min: 768 },
//       items: 3
//     },
//     tablet: {
//       breakpoint: { max: 768, min: 464 },
//       items: 2
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1
//     }
//   };

//   return (
//     <SectionContainer>
//       <Title>Recomendaciones</Title>
//       <Subtitle>Aquí hay algunas recomendaciones de colegas y clientes</Subtitle>
//       <CardContainer>
//         {recommendations.map((rec) => (
//           <Card key={rec.id}>
//             <Image src={rec.image} alt={`Foto de ${rec.name}`} />
//             <InfoContainer>
//               <div>
//                 <CardTitle>{rec.name}</CardTitle>
//                 <CardSubtitle>{rec.title}</CardSubtitle>
//               </div>
//               <LinkedInLogo src={linkedInLogo} alt="LinkedIn" />
//             </InfoContainer>
//             <Description>{rec.description}</Description>
//           </Card>
//         ))}
//       </CardContainer>
//       <CarouselContainer>
//         <Carousel responsive={responsive} infinite >
//           {recommendations.map((rec) => (
//             <Card key={rec.id}>
//               <Image src={rec.image} alt={`Foto de ${rec.name}`} />
//               <InfoContainer>
//                 <div>
//                   <CardTitle>{rec.name}</CardTitle>
//                   <CardSubtitle>{rec.title}</CardSubtitle>
//                 </div>
//                 <LinkedInLogo src={linkedInLogo} alt="LinkedIn" />
//               </InfoContainer>
//               <Description>{rec.description}</Description>
//             </Card>
//           ))}
//         </Carousel>
//       </CarouselContainer>
//     </SectionContainer>
//   );
// };

// export default Recomendaciones;
