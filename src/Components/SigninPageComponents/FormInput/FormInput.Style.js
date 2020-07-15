import styled, { css } from 'styled-components';

const ShrinkLabel = css`
  top: -14px;
  font-size: 12px;
  color: rgb(167, 167, 167);
`;

export const Group = styled.div`
  position: relative;
  margin: 40px 0;
`;

export const InputLabel = styled.label`
  color: rgb(73, 73, 73);
  font-size: 0.9rem;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.3s ease all;
  ${({ value }) => value && ShrinkLabel}
`;

export const Input = styled.input`
  ${({ type }) =>
    type === 'password' &&
    css`
      letter-spacing: 0.3em;
    `}
  background: none;
  font-size: 1.2rem;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid rgb(65, 65, 65);
  margin: 25px 0;
  color: rgb(65, 65, 65);
  &:focus {
    outline: none;
  }
  &:focus ~ ${InputLabel} {
    ${ShrinkLabel}
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    box-shadow: 0 0 0 30px rgb(249, 249, 249) inset !important;
  }
`;
