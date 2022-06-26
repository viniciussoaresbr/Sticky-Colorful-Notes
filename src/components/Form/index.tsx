import React, { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { NotesContext } from '../../contexts/Notes';
import { Styled } from './styles';

interface FormInputs {
  _id: string;
  title: string;
  description: string;
  color: string;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>();

  const { saveNote } = useContext(NotesContext);

  const onSubmit: SubmitHandler<FormInputs> = data => {
    saveNote(data);
    reset();
  };

  return (
    <Styled.Form onSubmit={handleSubmit(onSubmit)}>
      <Styled.Label>Digite seu título:</Styled.Label>
      <Styled.Input
        maxLength={100}
        {...register('title', { required: true })}
        type="text"
        name="title"
        error={errors.title}
      />
      <Styled.Label>Digite sua descrição:</Styled.Label>
      <Styled.TextArea
        maxLength={155}
        {...register('description', { required: true })}
        name="description"
        error={errors.description}
      />
      <Styled.Label>Selecione uma cor:</Styled.Label>
      <Styled.Input
        width="15%"
        height="2.4rem"
        defaultValue="#ffee99"
        {...register('color')}
        type="color"
        name="color"
      />
      <Styled.Button type="submit">Criar Nota</Styled.Button>
    </Styled.Form>
  );
};

export default Form;
