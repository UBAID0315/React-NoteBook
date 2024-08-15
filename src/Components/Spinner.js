import React, { useContext } from 'react'
import NoteContext from '../Contexts/Notes/NoteContext'

export const Spinner = () => {
    const {mode} = useContext(NoteContext)
    return (
        <div className="text-center spinner-container" style={{backgroundColor:mode===false?'rgba(0, 0, 0, 0.8)':'rgba(255, 255, 255, 0.8)'}}>
            <div className="spinner">
                <img src="Logo.png" alt="" />
            </div>
        </div>
    )
}

export default Spinner;