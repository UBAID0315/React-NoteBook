import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Alert } from './Alert'
import NoteContext from '../Contexts/Notes/NoteContext'
import Spinner from './Spinner'

export const UpdateForm = (props) => {
    let { mode, note, setNote } = props
    const navigate = useNavigate()
    const { UpdateNote, LoadingSpinner, loading } = useContext(NoteContext) // De-Structuring    
    const [alert, setAlert] = useState({ style: "", message: "" });

    // Close alert after 2.5 seconds
    const closeAlert = () => {
        setTimeout(() => {
            setAlert({ style: "", message: "" });
        }, 2500);
    };

    const handleUpdate = (e) => {
        e.preventDefault();

        note.u_title = document.getElementById('u_title').value;
        note.u_description = document.getElementById('u_description').value;
        note.u_tag = document.getElementById('u_tag').value;


        UpdateNote(note.id, note.u_title, note.u_description, note.u_tag)
        setAlert({ style: 'success', message: 'Values updated successfully!' });
        closeAlert();

        // Trigger the loading spinner
        setTimeout(() => {
            LoadingSpinner();
            console.log("loading")
            navigate(0);
        }, 2000);

    }

    const onChange = (event) => {
        setNote({ ...note, [event.target.name]: event.target.value })
    }

    return (
        <>
            {loading === true && <Spinner mode={mode} />}

            <div className="container text-center my-5" style={{ fontFamily: "Montserrat", fontWeight: 'bolder', fontStyle: "normal" }}>
                <h3 style={{ color: mode === true ? 'black' : 'white' }}>Update your Notes</h3>
            </div>
            <div className="mini-container d-flex justify-content-center">
                <div className="card w-100" style={{ boxShadow: mode ? '0 0 10px 2px rgba(74, 74, 74, 0.5)' : '0 0 10px 8px rgba(255, 255, 255, 0.5)', borderRadius: "30px" }}>
                    <Link to="/savenotes" className='small-heading'>View your notes?</Link>
                    <div className="card-body" style={{ padding: "20px" }}>
                        <div className="container">
                            <form style={{ fontWeight: 'bolder' }}>
                                <div className="mb-3 mt-4">
                                    <label className="form-label">Note Title</label>
                                    <input type="text" className="form-control" id='u_title' value={note.u_title} name='u_title' onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Note Tag</label>
                                    <input type="text" className="form-control" id="u_tag" value={note.u_tag} name='u_tag' onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Note Description</label>
                                    <textarea className="form-control" id="u_description" value={note.u_description} name='u_description' rows="5" onChange={onChange}></textarea>
                                </div>
                                <div className="container-login100-form-btn">
                                    <div className="wrap-login100-form-btn" style={{ marginLeft: "30%", marginRight: "35%", marginTop: "10px" }}>
                                        <div className="login100-form-bgbtn"></div>
                                        <button disabled={note.u_title.length < 5 || note.u_description.length < 5} onClick={(e) => { handleUpdate(e); }} className="login100-form-btn" type='submit'>
                                        {(note.u_title.length < 5 || note.u_description.length < 5)? 'Disabled': 'Update' }
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <div className='Alert mt-3'>
                                {alert.message && <Alert style={alert.style} message={alert.message} />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
