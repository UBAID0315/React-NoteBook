import React, { useContext } from 'react';
import { SignUpForm } from './SignUpForm';
import { Spinner } from './Spinner';
import NoteContext from '../Contexts/Notes/NoteContext';

export const SignUp = () => {
  const { mode, loading, LoadingSpinner } = useContext(NoteContext);

  return (
      loading === true ? (
        <Spinner mode={mode} />
      ) : 
      (
        <SignUpForm mode={mode} LoadingSpinner={LoadingSpinner} />
      ))
};