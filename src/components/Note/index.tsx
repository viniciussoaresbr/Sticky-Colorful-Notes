import React, { useContext, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { NotesContext } from '../../contexts/Notes';
import { Styled } from './styles';

interface Note {
  _id: string;
  title: string;
  description: string;
  color: string;
}

interface FormInputs {
  _id: string;
  title: string;
  description: string;
  color: string;
}

const Note = ({ note }: { note: Note }) => {
  const { getNotes, deleteNote, updateNote } = useContext(NotesContext);
  const { register, handleSubmit } = useForm<FormInputs>();

  const [allowEdit, setAllowEdit] = useState(false);

  const onSubmit: SubmitHandler<FormInputs> = async data => {
    const updtNote = { ...data, color: note.color };
    try {
      await updateNote(note._id, updtNote);
      setAllowEdit(false);
      getNotes();
    } catch (error) {
      toast.error('Não foi possível atualizar a nota');
    }
  };

  const handleAllowEdit = () => setAllowEdit(true);

  return (
    <Styled.NoteCard noteColor={note.color} onSubmit={handleSubmit(onSubmit)}>
      <Styled.NoteHeader>
        {allowEdit ? (
          <Styled.EditInput
            defaultValue={note.title}
            autoFocus
            maxLength={100}
            {...register('title', { required: true })}
            name="title"
            type="text"
          />
        ) : (
          <Styled.NoteTitle>{note.title}</Styled.NoteTitle>
        )}
      </Styled.NoteHeader>
      {allowEdit ? (
        <>
          <Styled.EditTextArea
            defaultValue={note.description}
            maxLength={155}
            {...register('description', { required: true })}
            name="description"
          />
          <Styled.EditButton type="submit">
            <Styled.CheckIcon />
          </Styled.EditButton>
        </>
      ) : (
        <Styled.NoteDescription>{note.description}</Styled.NoteDescription>
      )}

      <Styled.EditIcon onClick={() => handleAllowEdit()} />
      <Styled.TrashIcon onClick={() => deleteNote(note._id)} />
    </Styled.NoteCard>
  );
};

export default Note;
