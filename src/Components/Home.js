import React from 'react';
import Typewriter from 'typewriter-effect';

export const Home = (props) => {
    const { mode, title = 'iNotebook', description = "INotebook is a secure platform designed to store and protect all your notes from unauthorized access." } = props;

    return (
        <div className='container text-center'>
            <div className='content-title'>
                <h1 style={{ fontSize: '50px', color: mode===true ? 'black' : 'white' }}>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString(`WELCOME to ${title}`)                              
                                .start();
                        }}
                        className="Typewriter"
                    />
                </h1>
                <p style={{ fontSize: '15px', color: mode===true ? 'black' : 'white' }}>
                    <strong>{description}</strong>
                </p>
            </div>
        </div>
    );
};

export default Home;
