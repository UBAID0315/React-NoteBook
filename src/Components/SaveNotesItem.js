import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import NoteContext from '../Contexts/Notes/NoteContext';

export const SaveNotesItem = (props) => {
    const { note, number } = props;
    const { mode } = useContext(NoteContext);

    const capitalize = (string) => {
        const firstLetter = string[0].toUpperCase();
        const leftLetters = string.slice(1);
        return firstLetter + leftLetters;
    };

    const borderColor = mode===true ? 'black' : 'white';

    return (
        <div className="notes-container" style={{ borderBottom: `2px solid ${borderColor}`, color: borderColor }}>
            <div className="card-body">
                <h2 className='pagenumber'>{number}.</h2>
                <div className='content'>
                    <h4 className="card-title">{capitalize(note.title)}</h4>
                    <p className="card-text">{capitalize(note.description)}</p>
                </div>
                <div className="buttons">
                    <Link to={`/updatenote/${note.id}`}>
                        <i className="fa-solid fa-file-pen mx-2 fa-lg" style={{ color: borderColor }}></i>
                    </Link>
                    <Link to='/'>
                        <i className="fa-solid fa-trash mx-2 fa-lg" style={{ color: 'red' }}></i>
                    </Link>
                </div>
            </div>
        </div>
    );
};
