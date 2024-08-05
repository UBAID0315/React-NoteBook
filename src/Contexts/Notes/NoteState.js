import { useState } from 'react';
import NoteContext from './NoteContext';

const NoteState = (props) => {
    const data = [
        {
            "_id": "66b1404fd1b05d22f513c33c",
            "user": "66b13fc8d1b05d22f513c337",
            "title": "this is my title",
            "description": "description to wake up early for fajar",
            "tag": "General",
            "date": "2024-08-05T21:12:47.773Z",
            "__v": 0
        },
        {
            "_id": "66b14051d1b05d22f513c33e",
            "user": "66b13fc8d1b05d22f513c337",
            "title": "this is my update title",
            "description": "updated description to wake up early for fajar",
            "tag": "General",
            "date": "2024-08-05T21:12:49.376Z",
            "__v": 0
        },
        {
            "_id": "66b14051d1b05d22f513c340",
            "user": "66b13fc8d1b05d22f513c337",
            "title": "this is my title",
            "description": "description to wake up early for fajar",
            "tag": "General",
            "date": "2024-08-05T21:12:49.895Z",
            "__v": 0
        },
        {
            "_id": "66b14052d1b05d22f513c342",
            "user": "66b13fc8d1b05d22f513c337",
            "title": "this is my title",
            "description": "description to wake up early for fajar",
            "tag": "General",
            "date": "2024-08-05T21:12:50.375Z",
            "__v": 0
        }
    ]

    // Custom states
    const [notes, setNotes] = useState(data)
    const [mode, setMode] = useState('true')
    const [loading, setLoading] = useState('false')

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

    const addNote = (title, description, tag) => {
        const note = {
            "_id": "66b14052d1b05d22f512c342",
            "user": "66b13fc8d1b05d22f513c337",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2024-08-05T21:12:50.375Z",
            "__v": 0
        }
        setNotes(notes.concat(note))    // concate return an array whereas push update an array
    }

    const deleteNote = () => {

    }

    const updateNote = () => {

    }

    const LoadingSpinner = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }
    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, updateNote, mode, setMode, loading, setLoading, DarkMode, LoadingSpinner }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;