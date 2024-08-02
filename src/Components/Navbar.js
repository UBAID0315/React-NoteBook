import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import NoteContext from '../Contexts/NoteContext'

export const Navbar = (props) => {
    let { title, mode, DarkMode } = props
    const a = useContext(NoteContext)
    useEffect(() => {
        a.update()
    }, [])
    return (
        <div className="container">
            <div className="navbar">
                <div className="d-flex align-items-center">
                    <img className='image' src="../Logo.png" alt="" />
                    <Link className="navbar-brand title" style={{ color: mode === true ? 'black' : 'white' }} to="/">{title}</Link>
                </div>

                <label className="switch">
                    <input type="checkbox" />
                    <span onClick={DarkMode} className="slider round"></span>
                </label>
            </div>
            this is my navbar named by {a.state.name}
        </div>
    )
}