import styled from 'styled-components';

const Footer = styled.footer`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.title};
  background-color: ${({ theme }) => theme.colors.secondary};
  border-top: 1px solid ${({ theme }) => theme.colors.primary};
`;
export const Styled = { Footer };
