import NoteContext from './NoteContext';
import Notecontext from './NoteContext'
import { useState } from 'react'

const NoteState = (props)=>{
    const s1 = {
        name: "ubaid",
        class: "15",
        age: "21"
    }
    const [state, setState] = useState(s1);

    const update=()=>{
        setTimeout(() => {
            setState({
                name: "saad",
                class: "9th",
                age:"20"
            })
        }, 2000);
    }

    return(
        <NoteContext.Provider value={{state,update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;