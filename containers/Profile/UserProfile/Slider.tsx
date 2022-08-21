import React from 'react';
import { Slide } from 'react-slideshow-image';
import styled from 'styled-components';

const Slider = () => {
  const properties = {
    autoplay: false,
    transitionDuration: 500,
    arrows: true,
    infinite: false,
    easing: 'ease',
  };

  const images = [
    'https://cdn.stocksnap.io/img-thumbs/960w/PS7M4VMB9P.jpg',
    'https://cdn.stocksnap.io/img-thumbs/960w/SVSBXHN1OU.jpg',
    'https://cdn.stocksnap.io/img-thumbs/960w/KLSTPV1LBV.jpg',
    'https://cdn.stocksnap.io/img-thumbs/960w/N06ELOLAT9.jpg',
    'https://cdn.stocksnap.io/img-thumbs/960w/YN0MX9OUSY.jpg',
    'https://cdn.stocksnap.io/img-thumbs/960w/JVBWZNCQLW.jpg',
    'https://cdn.stocksnap.io/img-thumbs/960w/LN6MZNMBUR.jpg',
  ];

  return (
    <Slide {...properties}>
      {images.map((each, index) => (
        <StyledResizeWrapper key={index} className="each-slide">
          <img className="lazy" src={each} alt="sample" />
        </StyledResizeWrapper>
      ))}
    </Slide>
  );
};

const StyledResizeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;

  & img {
    object-fit: contain;
    max-width: 100%;
    max-height: 400px;
    min-height: 250px;
  }
`;

export default Slider;
