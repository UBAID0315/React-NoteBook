import React, { useContext, useState } from 'react';
import { Alert } from './Alert';
import { Link, redirect, useNavigate } from 'react-router-dom';
import NoteContext from '../Contexts/Notes/NoteContext';

export const AddNote = (props) => {
  const [alert, setAlert] = useState({ style: "", message: "" });
  const [note, setNote] = useState({ title: "", description: "", tag: "default" })
  const context = useContext(NoteContext)
  const { addNote } = context
  const { mode } = props;
  const navigate = useNavigate();

  const closeAlert = () => {
    setTimeout(() => {
      setAlert({ status: false });
    }, 2500);
  };

  const handleClick = (event) => {
    event.preventDefault();     // Because while submit page will not reload

    note.title = document.getElementById('title').value;
    note.description = document.getElementById('description').value;
    note.tag = document.getElementById('tag').value;

    if (note.title === '' || note.description === '' || note.tag === '') {
      setAlert({ style: 'danger', message: 'Fill all the fields properly!' });
      closeAlert();
    } else {
      addNote(note.title, note.description, note.tag)
      setAlert({ style: 'success', message: 'Note has been added successfully!' });
      closeAlert();
      navigate('/savenotes')
    }
  }
  const onChange = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value })
  }

  return (
    <>
      <div className="container text-center my-5" style={{
        fontFamily: "Montserrat",
        fontWeight: 'bolder',
        fontStyle: "normal"
      }}>
        <h3 style={{ color: mode === true ? 'black' : 'white' }}>Add your Notes</h3>
      </div>
      <div className="mini-container d-flex justify-content-center">
        <div className="card w-100" style={{ boxShadow: mode === true ? '0 0 10px 2px rgba(74, 74, 74, 0.5)' : '0 0 10px 8px rgba(255, 255, 255, 0.5)', borderRadius: "30px" }}>
          <Link to="/savenotes" className='small-heading'>View your notes?</Link>
          <div className="card-body" style={{ padding: "20px" }}>
            <div className="container">
              <form style={{ fontWeight: 'bolder' }} method='POST' onSubmit={handleClick}>
                <div className="mb-3 mt-4">
                  <label className="form-label">Note Title</label>
                  <input type="text" className="form-control" id='title' name='title' onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Note Tag</label>
                  <input type="text" className="form-control" id="tag" name='tag' onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Note Description</label>
                  <textarea className="form-control" id="description" name='description' rows="5" onChange={onChange}></textarea>
                </div>
                <div className="container-login100-form-btn">
                  <div className="wrap-login100-form-btn" style={{ marginLeft: "30%", marginRight: "35%", marginTop: "10px" }}>
                    <div className="login100-form-bgbtn"></div>
                    <button className="login100-form-btn" type='submit'>
                      Save
                    </button>
                  </div>
                </div>
              </form>
              <div className="Alert mt-3">
                {alert && <Alert style={alert.style} message={alert.message} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNote;
