import React, { useContext, useEffect, useState } from 'react'
import NoteContext from '../Contexts/Notes/NoteContext'
import { NotesItem } from './NotesItem'
import { UpdateForm } from './UpdateForm';
import { Link } from 'react-router-dom';

export const Notes = () => {
    const { notes, mode,getNotes } = useContext(NoteContext) // De-Structuring    
    const [note, setNote] = useState({ id: '', u_title: "", u_description: "", u_tag: "" })
    const [checkupdate, setcheckUpdate] = useState(false)

    useEffect(() => {
      getNotes()    
    }, [])
    
    const updateNote = (currentNote) => {
        setNote({
            id: currentNote._id,
            u_title: currentNote.title,
            u_description: currentNote.description,
            u_tag: currentNote.tag,
        });
    };
    
    if (notes.length === 0) {
        return (
            <div className="container text-center d-flex justify-content-center align-items-center" style={{ height: '90vh', color: mode === true ? 'black' : 'white' }}>
                <h4>No notes to show</h4>
            </div>
        );
    }

    return (
        checkupdate === false ? (
            <div className='mini-container mt-5'>
                <h1 className='text-center' style={{ color: mode===true ? 'black' : 'white' }}>Your Notes</h1>
                <div className="mt-5" style={{border: `2px solid ${mode===true?'black':'white'}`,borderRadius:"5%",width: "140px",padding: '10px',marginLeft: '75%'}}>
                    <Link to='/addnote' style={{color:mode===true?'black':'white'}}><i className="fa-solid fa-plus fa-lg mx-2"></i>Add Note</Link>
                </div>
                <div className="container mt-5 mb-5">
                    {notes.map((note, index) => (
                        <div key={index}>
                            <NotesItem
                                updateNote={updateNote}
                                number={index + 1}
                                mode={mode}
                                setcheckUpdate={setcheckUpdate}
                                note={note}
                            />
                        </div>
                    ))}
                </div>
            </div>
        ) : <UpdateForm 
                mode={mode} 
                note={note} 
                setNote={setNote}
            />
    );
};

export default Notes;
