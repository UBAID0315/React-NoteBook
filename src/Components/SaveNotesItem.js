import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import NoteContext from '../Contexts/Notes/NoteContext';

export const SaveNotesItem = (props) => {
    const { note,number } = props;
    const { mode } = useContext(NoteContext);

    const capitalize = (string) => {
        const firstLetter = string[0].toUpperCase();
        const leftLetters = string.slice(1);
        return firstLetter + leftLetters;
    };
    const borderStyle = {
        borderBottom: '2px solid',
    };
    const dynamicStyle = {
        color: mode === true ? 'black' : 'white',
        borderBottomColor: mode === true ? 'black' : 'white',
        ...borderStyle,
    };
    return (
        <>
            <div className="w-100 p-4 notes" style={dynamicStyle}>                      
                <div className="card-body d-flex justify-content-between align-items-center">
                    <h2 className='pagenumber'>{number}.</h2>
                    <div className='content'>
                        <h4 className="card-title">{capitalize(note.title)}</h4>
                        <p style={{ fontSize: "18px" }} className="card-text w-20">{capitalize(note.description)}</p>
                    </div>
                    <div className="buttons">
                        <Link to={`/updatenote/${note.id}`}>
                            <i className="fa-solid fa-file-pen mx-1 fa-lg" style={{ color: 'rgb(44, 44, 203)' }}></i>
                        </Link>
                        <Link to='/'>
                            <i className="fa-solid fa-trash mx-1 fa-lg" style={{ color: 'red' }}></i>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};
