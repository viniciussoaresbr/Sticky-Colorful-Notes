import { FieldError } from 'react-hook-form';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc(100vh - 7rem);
  font-family: ${({ theme }) => theme.fonts.default};
  border-right: 1px solid ${({ theme }) => theme.colors.secondary};
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.1rem;
  margin: 2rem 0 0.5rem 0;
`;

interface FormProps {
  width?: string;
  height?: string;
  error?: FieldError;
}

const Input = styled.input<FormProps>`
  width: ${({ width }) => (width ? width : '90%')};
  height: ${({ height }) => (height ? height : '2.5rem')};
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 0.3rem;
  padding: 0.3rem;
  outline: none;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  transition: ease 0.1s;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  :focus {
    border: 2px solid
      ${({ theme, error }) => (error ? theme.colors.red : theme.colors.primary)};
  }
  @media (max-width: 1024px) {
    width: ${({ width }) => (width ? '8%' : '60%')};
    margin-left: 0;
  }

  @media (max-width: 767px) {
    width: ${({ width }) => (width ? '15%' : '90%')};
  }
`;

const TextArea = styled.textarea<FormProps>`
  width: 90%;
  height: 6rem;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  resize: none;
  outline: none;
  padding: 0.3rem;
  border-radius: 0.3rem;
  transition: ease 0.1s;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  :focus {
    border: 2px solid
      ${({ theme, error }) => (error ? theme.colors.red : theme.colors.primary)};
  }
  @media (max-width: 1024px) {
    width: 60%;
  }
  @media (max-width: 767px) {
    width: 90%;
  }
`;

const Button = styled.button`
  width: 40%;
  height: 2.5rem;
  font-size: 1.1rem;
  margin-top: 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 0.3rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.light};
  transition: ease 0.2s;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  transform: scale(1);
  :hover {
    transform: scale(0.96);
  }
  @media (max-width: 1024px) {
    width: 20%;
  }
  @media (max-width: 767px) {
    width: 35%;
  }
`;

export const Styled = { Form, Input, Label, TextArea, Button };
