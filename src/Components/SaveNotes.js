import React, { useContext, useState } from 'react'
import NoteContext from '../Contexts/Notes/NoteContext'
import { SaveNotesItem } from './SaveNotesItem'

export const SaveNotes = () => {
    const context = useContext(NoteContext)
    const { notes, setNotes, mode, setMode } = context               // destructuring
    return (
        <div className='mini-container mt-5'>
            <h1 className='text-center' style={{ color: mode === true ? 'black' : 'white' }}>Your Notes</h1>
            <div className="container mt-5 mb-5">
                {notes.map((note, index) => {
                    return <SaveNotesItem key={index} number={index + 1} mode={mode} note={note} />;
                })}
            </div>
        </div>
    )
}
