import React from 'react';
import styled from 'styled-components';

const Announcement = () => (
  <AnnouncementContainer>
    <h1>
      We are experiencing international delivery delays in all destinations due to limited airline
      capacity and government restrictions as a result of COVID-19. Some customers may experience a
      delay of 4-6 weeks.
    </h1>
  </AnnouncementContainer>
);

const AnnouncementContainer = styled.div`
  width: 100%;
  height: 56px;
  position: fixed;
  margin: 0;
  padding: 0;
  z-index: 3;
  text-align: center;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(3px);
  h1 {
    width: 100%;
    position: absolute;
    margin: 0;
    padding: 0;
    top: 50%;
    left: 50%;
    font-size: 0.9rem;
    color: rgb(243, 243, 243);
    transform: translate(-50%, -50%);
  }
`;

export default Announcement;
