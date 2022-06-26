import styled from 'styled-components';
import { ReactComponent as Note } from '../../assets/note_icon.svg';

const Header = styled.header`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.title};
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  gap: 0.8rem;
`;

const NoteIcon = styled(Note)`
  width: 30px;
  height: 30px;
  fill: ${({ theme }) => theme.colors.light};
`;

export const Styled = { Header, NoteIcon };
