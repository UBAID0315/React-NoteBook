import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Navbar = (props) => {
    let { title, mode, DarkMode, LoadingSpinner } = props

    return (
        <div className="container mt-2">
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <img className='image' src="../Logo.png" alt="" />
                    <Link className="navbar-brand logo-title" style={{ color: mode === true ? 'black' : 'white' }} to="/">{title}</Link>
                </div>

                <div className="d-flex align-items-center">
                    <label className="switch">
                        <input type="checkbox" />
                        <span onClick={DarkMode} className="slider round"></span>
                    </label>
                    <div className="imgcontainer">
                        <Link onClick={LoadingSpinner} to="/signup">
                            <i
                                className='fa-solid fa-user fa-lg'
                                style={{
                                    color: mode===true?'black':'white',
                                    border: `2px solid ${mode===true?'black':'white'}`,
                                    borderRadius: '50%',
                                    padding: '10px',
                                    marginTop: '-10px'
                                }}
                            ></i>
                        </Link>                        
                    </div>
                </div>
            </div>
        </div>

    )
}