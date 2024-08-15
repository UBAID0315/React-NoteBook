import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NoteContext from '../Contexts/Notes/NoteContext'

export const Navbar = (props) => {
    const { title } = props
    const { mode, DarkMode, LoadingSpinner } = useContext(NoteContext)
    const navigate = useNavigate()
    const handlelogout = ()=>{
        localStorage.removeItem('token')
        setTimeout(() => {
            navigate('/login')
        }, 1000);
    }
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
                    {!localStorage.getItem('token') ? <div className="imgcontainer">
                        <Link onClick={LoadingSpinner} to="/login">
                            <i
                                className='fa-solid fa-user fa-lg'
                                style={{
                                    color: mode === true ? 'black' : 'white',
                                    border: `2px solid ${mode === true ? 'black' : 'white'}`,
                                    borderRadius: '50%',
                                    padding: '10px',
                                    marginTop: '-10px'
                                }}
                            ></i>
                        </Link>
                    </div> : <button
                        onClick={handlelogout}
                        className="logout-button btn btn-secondary"
                        data-bs-toggle="tooltip" 
                        data-bs-placement="bottom"
                        data-bs-title="Logout" 
                        style={{ marginTop:"-10px",color: mode === true ? 'white' : 'black', backgroundColor: mode === true ? 'white' : 'black' }}>

                        <i style={{ color: mode === true ? 'black' : 'white' }} className="fa-solid fa-lg fa-arrow-right-from-bracket"></i>
                    </button>
                    }
                </div>
            </div>
        </div>

    )
}