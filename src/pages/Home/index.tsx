import React, { useContext, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../../components/Footer';
import Form from '../../components/Form';
import Header from '../../components/Header';
import Note from '../../components/Note';
import { NotesContext } from '../../contexts/Notes';
import { Styled } from './styles';

const Home = () => {
  const { getNotes, notes } = useContext(NotesContext);

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <Styled.HomeContainer>
      <Styled.Nav>
        <Header />
        <Form />
        <Footer />
      </Styled.Nav>
      <Styled.Main>
        {notes.map(note => {
          return <Note note={note} key={note._id} />;
        })}
      </Styled.Main>
      <ToastContainer autoClose={2000} />
    </Styled.HomeContainer>
  );
};

export default Home;
