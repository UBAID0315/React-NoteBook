import { useState } from 'react';
import NoteContext from './NoteContext';

const NoteState = (props) => {
    const data = [
        {
            "_id": "66afc3ad2dd6a29d2786562c",
            "user": "66a9096b7bd533be51d58a95",
            "title": "this is my title",
            "description": "description to wake up early for fajar",
            "tags": "personal",
            "date": "2024-08-04T18:08:45.053Z",
            "__v": 0
        },
        {
            "_id": "66afc3ae2dd6a29d2786562e",
            "user": "66a9096b7bd533be51d58a95",
            "title": "this is my title",
            "description": "description to wake up early for fajar",
            "tags": "personal",
            "date": "2024-08-04T18:08:46.626Z",
            "__v": 0
        },
        {
            "_id": "66afc3af2dd6a29d27865630",
            "user": "66a9096b7bd533be51d58a95",
            "title": "this is my title",
            "description": "description to wake up early for fajar",
            "tags": "personal",
            "date": "2024-08-04T18:08:47.363Z",
            "__v": 0
        },
        {
            "_id": "66afc3af2dd6a29d27865630",
            "user": "66a9096b7bd533be51d58a95",
            "title": "this is my title",
            "description": "description to wake up early for fajar",
            "tags": "personal",
            "date": "2024-08-04T18:08:47.363Z",
            "__v": 0
        },
        {
            "_id": "66afc3af2dd6a29d27865630",
            "user": "66a9096b7bd533be51d58a95",
            "title": "this is my title",
            "description": "description to wake up early for fajar",
            "tags": "personal",
            "date": "2024-08-04T18:08:47.363Z",
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

    const LoadingSpinner = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }
    return (
        <NoteContext.Provider value={{ notes, setNotes, mode, setMode, loading, setLoading, DarkMode, LoadingSpinner }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;