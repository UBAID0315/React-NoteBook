import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import NoteContext from '../Contexts/Notes/NoteContext';

export const NotesItem = (props) => {
    const { note, number,updateNote, setcheckUpdate } = props;
    const { mode,deleteNote } = useContext(NoteContext);
    const borderColor = mode===true ? 'black' : 'white';

    const capitalize = (string) => {
        const firstLetter = string[0].toUpperCase();
        const leftLetters = string.slice(1);
        return firstLetter + leftLetters;
    };
    const setupdate = ()=>{
        setcheckUpdate(true);
    }

    return (
        <div className="notes-container" style={{ borderBottom: `2px solid ${borderColor}`, color: borderColor }}>
            <div className="card-body">
                <h2 className='pagenumber'>{number}.</h2>
                <div className='content'>
                    <h4 className="card-title">{capitalize(note.title)}</h4>
                    <p className="card-text">{capitalize(note.description)}</p>
                </div>
                <div className="buttons">
                    <Link>
                        <i className="fa-solid fa-file-pen mx-2 fa-lg" onClick={()=>{updateNote(note);setupdate();}} style={{ color: borderColor }}></i>
                    </Link>
                    <Link>
                        <i className="fa-solid fa-trash mx-2 fa-lg" style={{ color: 'red' }} onClick={()=>{deleteNote(note._id)}}></i>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotesItem;