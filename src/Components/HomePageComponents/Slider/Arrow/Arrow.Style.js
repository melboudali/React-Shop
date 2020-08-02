import styled from 'styled-components';

export const SvgIcon = styled.svg`
  stroke: none;
  width: 30px;
  height: 30px;
  opacity: 0.8;
  fill: rgb(255, 255, 255);
  transition: opacity 0.3s;
`;

export const ArrowContainer = styled.div`
  position: absolute;
  display: inline-flex;
  visibility: none;
  opacity: 0;
  align-content: center;
  top: 50%;
  ${({ direction }) => (direction === 'left' ? 'left: 20px' : 'right: 20px')};
  background-color: rgba(0, 0, 0, 0.521);
  border-radius: 50%;
  padding: 8px;
  transition: opacity 0.8s, visibility 0.8s, transform 0.8s;
  &:hover {
    cursor: pointer;
    ${SvgIcon} {
      opacity: 1;
    }
  }
`;
