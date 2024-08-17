// src/EventList.js
import React from 'react';
import styled from 'styled-components';
import EventCard from './EventsCard';

const events = [
  {
    image: 'https://example.com/image1.jpg',
    date: 'JUN 16',
    title: 'Owls & Friends',
    subtitle: 'In Concert',
    location: 'Rosengarten',
    time: '20:00',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    image: 'https://example.com/image2.jpg',
    date: 'JUN 18',
    title: 'Wine Tasting 2.0',
    subtitle: 'Food & Wine',
    location: 'Schuberts',
    time: '12:00',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  // Add more events here
];

const EventListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const EventList = () => (
  <EventListContainer>
    {events.map((event, index) => (
      <EventCard key={index} event={event} />
    ))}
  </EventListContainer>
);

export default EventList;
