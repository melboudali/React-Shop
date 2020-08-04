import styled from 'styled-components';

export const Dot = styled.span`
  padding: 4px;
  margin-right: 5px;
  cursor: pointer;
  border-radius: 50%;
  opacity: 0.7;
  background: ${({ active }) => (active ? '#000' : '#E0E0E0')};
  border: 2px solid #e0e0e0;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.5);
`;

export const DotsContainer = styled.div`
  position: absolute;
  bottom: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
