import axios, { AxiosResponse } from 'axios';
import React, { createContext, ReactNode, useState } from 'react';
import { toast } from 'react-toastify';

interface Note {
  _id: string;
  title: string;
  description: string;
  color: string;
}

interface NotesContext {
  saveNote: (note: Note) => void;
  getNotes: () => void;
  deleteNote: (id: string) => void;
  updateNote: (id: string, updtNote: Note) => Promise<AxiosResponse>;
  notes: Note[];
}

export const NotesContext = createContext({} as NotesContext);

const NotesProvider = ({ children }: { children: ReactNode }) => {
  const [notes, setNotes] = useState<Note[]>([]);

  const getNotes = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/notes`);
    setNotes(data);
  };

  const saveNote = async (note: Note) => {
    try {
      await axios.post(`${process.env.REACT_APP_BASE_URL}/notes`, note);
      getNotes();
    } catch (error) {
      toast.error('Não foi possível salvar a nota');
    }
  };

  const deleteNote = async (id: string) => {
    try {
      await axios.delete(`${process.env.REACT_APP_BASE_URL}/notes/${id}`);
      getNotes();
    } catch (error) {
      toast.error('Não foi possível deletar a nota');
    }
  };

  const updateNote = async (id: string, updtNote: Note) => {
    return axios.put(`${process.env.REACT_APP_BASE_URL}/notes/${id}`, updtNote);
  };

  return (
    <NotesContext.Provider
      value={{
        saveNote,
        getNotes,
        deleteNote,
        notes,
        updateNote,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export default NotesProvider;
