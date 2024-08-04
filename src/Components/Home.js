import React, { useContext } from 'react';
import Typewriter from 'typewriter-effect';
import NoteContext from '../Contexts/Notes/NoteContext';

export const Home = () => {
    const title = 'iNotebook'
    const description = "INotebook is a secure platform designed to store and protect all your notes from unauthorized access."
    const { mode } = useContext(NoteContext)
    return (
        <div className='container text-center'>
            <div className='content-title'>
                <h1 style={{ fontSize: '50px', color: mode === true ? 'black' : 'white' }}>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString(`WELCOME to ${title}`)
                                .start();
                        }}
                        className="Typewriter"
                    />
                </h1>
                <p style={{ fontSize: '15px', color: mode === true ? 'black' : 'white' }}>
                    <strong>{description}</strong>
                </p>
            </div>
        </div>
    );
};

export default Home;
