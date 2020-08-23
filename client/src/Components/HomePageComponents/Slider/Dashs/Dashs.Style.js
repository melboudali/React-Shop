import styled from 'styled-components';

export const Dash = styled.span`
  padding: 1px 15px;
  margin-right: 15px;
  cursor: pointer;
  /* opacity: 0.8; */
  background: ${({ active }) => (active ? '#000' : '#E0E0E0')};
  /* border: 1px solid #e0e0e0; */
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.5);
`;

export const DashContainer = styled.div`
  position: absolute;
  bottom: 15px;
  /* width: 100%; */
  right: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
