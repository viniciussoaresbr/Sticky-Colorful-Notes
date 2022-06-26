import styled from 'styled-components';
import { ReactComponent as Trash } from '../../assets/trash_icon.svg';
import { ReactComponent as Edit } from '../../assets/edit_icon.svg';
import { ReactComponent as Check } from '../../assets/check_icon.svg';

interface NoteCardProps {
  noteColor: string;
}

const NoteCard = styled.form<NoteCardProps>`
  width: 15rem;
  height: 18.5rem;
  position: relative;
  background-color: ${({ noteColor }) => noteColor};
  margin: 0.4rem;
  border-radius: 0.3rem;
  padding: 0.3rem;
  font-family: ${({ theme }) => theme.fonts.default};
  color: ${({ theme }) => theme.colors.black};
  box-shadow: rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  word-break: break-word;
  overflow: hidden;
`;

const NoteHeader = styled.header`
  width: 100%;
  max-height: 5rem;
  display: flex;
  align-items: center;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 0.5rem;
  overflow: hidden;
`;

const NoteTitle = styled.h1`
  font-size: 1.2rem;
`;

const NoteDescription = styled.p`
  font-size: 1rem;
  overflow: hidden;
`;

const TrashIcon = styled(Trash)`
  position: absolute;
  bottom: 0.5rem;
  right: 0.3rem;
  width: 20px;
  cursor: pointer;
`;

const EditIcon = styled(Edit)`
  position: absolute;
  bottom: 0.5rem;
  right: 2rem;
  width: 20px;
  height: 20px;
  cursor: pointer;
  fill: ${({ theme }) => theme.colors.black};
`;

const CheckIcon = styled(Check)`
  width: 20px;
  height: 20px;
  fill: ${({ theme }) => theme.colors.light};
`;

const EditInput = styled.input`
  width: 100%;
  outline: none;
  background-color: rgba(0, 0, 0, 0.08);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`;

const EditTextArea = styled.textarea`
  width: 100%;
  height: 70%;
  outline: none;
  resize: none;
  background-color: rgba(0, 0, 0, 0.08);
  border-radius: 2px;
`;

const EditButton = styled.button`
  width: 100%;
  height: 1.4rem;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 2px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.light};
  box-shadow: rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  transition: ease 0.2s;
  :hover {
    transform: scale(0.96);
  }
`;

export const Styled = {
  NoteCard,
  NoteHeader,
  NoteTitle,
  NoteDescription,
  TrashIcon,
  EditIcon,
  EditInput,
  EditTextArea,
  EditButton,
  CheckIcon,
};
