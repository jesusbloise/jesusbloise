import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import trabajo1 from '../assets/trabajo1.png';
import trabajo2 from '../assets/trabajo2.png';
import trabajo3 from '../assets/trabajo3.png';
import trabajo4 from '../assets/trabajo4.png';

const CarouselContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: -15rem ;
`;

const Slide = styled.div`
  display: flex !important;
  justify-content: center;
  align-items: center;
  
  border-radius: 5%;
  padding: 0rem;
`;

const SlideImage = styled.img`
  width: 100%;
  height: auto;
  
  
`;

const SlideTitle = styled.h3`
  font-size: 1rem;
  color: #fff;
  text-align: center;
  margin-top: 1rem;
`;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Carousel = () => (
  <CarouselContainer>
    <Slider {...settings}>
      <Slide>
        <SlideImage src={trabajo1} alt="Proyecto 3" />
        <SlideTitle>Proyecto 3</SlideTitle>
      </Slide>
      <Slide>
        <SlideImage src={trabajo2} alt="Proyecto 4" />
        <SlideTitle>Proyecto 4</SlideTitle>
      </Slide>
      <Slide>
        <SlideImage src={trabajo3} alt="Proyecto 5" />
        <SlideTitle>Proyecto 5</SlideTitle>
      </Slide>
      <Slide>
        <SlideImage src={trabajo4} alt="Proyecto 5" />
        <SlideTitle>Proyecto 5</SlideTitle>
      </Slide>
      {/* Agrega más slides según sea necesario */}
    </Slider>
  </CarouselContainer>
);

export default Carousel;
