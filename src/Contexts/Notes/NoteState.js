import { useEffect, useState } from 'react';
import NoteContext from './NoteContext';

const NoteState = (props) => {

    // Custom Variables
    const host = "http://localhost:5000"
    const user = "66b13f8ed1b05d22f513c331"
    const id = "66b29ee66ecbc1350e042af8"
    const auth_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiMTNmOGVkMWIwNWQyMmY1MTNjMzMxIn0sImlhdCI6MTcyMjk3MzUzNH0.DwAVFfIBtq7ZuV5ykk4rdQYlO4aeEbKA5vc2kRZ_Y5A"

    // Custom states
    const [notes, setNotes] = useState([])
    const [mode, setMode] = useState('true')
    const [loading, setLoading] = useState('false')
    const [alert, setAlert] = useState({ style: "", message: "" })
    
    // Methods
    const DarkMode = () => {
        console.log(mode)
        if (mode === true) {
            document.body.style.backgroundColor = "black";
            setMode(false);
        } else {
            document.body.style.backgroundColor = "white";
            setMode(true);
        }
    };

    const getNotes = async () => {
        const response = await fetch(`${host}/api/notes/fetchnotes`, {
            method:'GET',
            headers: {
                "auth-token": auth_token
            }
        });
        const json = await response.json();
        setNotes(json)
    }

    const addNote = async (title, description, tag) => {
        const response = await fetch(`${host}/api/notes/addnote`,{
            method:'POST',
            headers: {
                "Content-Type": "application/json",
                "auth-token": auth_token
            },
            body:JSON.stringify({title,description,tag})
        }
        )
        const note = await response.json();
        setNotes(notes.concat(note))    // concate return an array whereas push update an array
    }

    const deleteNote = async(id) => {
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": auth_token
            }
        })
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
    }

    // Update or Edit Note
    const UpdateNote = async (id,title,description,tag) => {
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": auth_token
            },
            body: JSON.stringify({title,description,tag})
        })
        let newnotes = JSON.parse(JSON.stringify(notes))

        for (let index = 0; index < newnotes.length; index++) {
            const element = newnotes[index]
            if (element._id === id) {
                newnotes[index].title = title,
                newnotes[index].description = description,
                newnotes[index].tag = tag
                break;
            }
        }
        setNotes(newnotes)
    }

    const LoadingSpinner = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }
    
    return (
        <NoteContext.Provider value={{ notes, addNote, alert, setAlert ,getNotes, deleteNote, UpdateNote, mode, setMode, loading, setLoading, DarkMode, LoadingSpinner}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;