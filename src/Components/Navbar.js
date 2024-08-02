import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = (props) => {
    let { title,mode,DarkMode } = props
    return (
        <div className="container">
            <div className="navbar">
                <div className="d-flex align-items-center">
                    <img className='image' src="../Logo.png" alt="" />
                    <Link className="navbar-brand title" style={{color:mode===true?'black':'white'}} to="/">{title}</Link>
                </div>

                <label className="switch">
                    <input type="checkbox" />
                    <span onClick={DarkMode} className="slider round"></span>
                </label>
            </div>
        </div>
    )
}