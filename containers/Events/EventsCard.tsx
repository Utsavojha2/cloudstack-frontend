// src/EventCard.js
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 20px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #fff;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 20px;
`;

const DateBadge = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #333;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.5em;
`;

const SubTitle = styled.p`
  margin: 5px 0 10px;
  color: #666;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #999;
`;

const Description = styled.p`
  margin-top: 15px;
  color: #999;
`;

const EventCard = ({ event }) => (
  <CardContainer>
    <Image src={event.image} alt={event.title} />
    <DateBadge>{event.date}</DateBadge>
    <Content>
      <Title>{event.title}</Title>
      <SubTitle>{event.subtitle}</SubTitle>
      <Details>
        <div>{event.location}</div>
        <div>{event.time}</div>
      </Details>
      <Description>{event.description}</Description>
    </Content>
  </CardContainer>
);

export default EventCard;
