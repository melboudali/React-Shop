import styled from 'styled-components';

export const Dash = styled.span`
  padding: 2px 15px;
  margin-right: 15px;
  cursor: pointer;
  background: ${({ active }) => (active ? '#454545' : '#E0E0E0')};
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.5);
`;

export const DashContainer = styled.div`
  position: absolute;
  bottom: 15px;
  right: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
