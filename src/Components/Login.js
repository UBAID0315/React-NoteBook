import React, { useContext } from 'react'
import { Spinner } from './Spinner'
import NoteContext from '../Contexts/Notes/NoteContext'
import { LoginForm } from './LoginForm'

export const Login = () => {
  let {mode,loading,LoadingSpinner} = useContext(NoteContext)
  return (
      loading === true ? <Spinner mode={mode}/> : <LoginForm mode={mode} LoadingSpinner={LoadingSpinner}/>
  )
}
