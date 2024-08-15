import React, { useContext, useState } from 'react';
import { Alert } from './Alert';
import { Link, useNavigate } from 'react-router-dom';
import NoteContext from '../Contexts/Notes/NoteContext';

export const AddNote = (props) => {

  // Custom variables
  const [alert, setAlert] = useState({ style: "", message: "" });
  const [note, setNote] = useState({ title: "", description: "", tag: "" })
  const { addNote } = useContext(NoteContext)
  const { mode } = props;
  const navigate = useNavigate();

  // Custom methods
  const closeAlert = () => {

    // For Closing the alert after 2.5 seconds
    setTimeout(() => {
      setAlert({ status: false });
    }, 2500);
  };

  const handleClick = (event) => {
    event.preventDefault();     // Because while submit page will not reload

    // If all conditions met then finally save the note
    addNote(note.title, note.description, note.tag)
    setNote({title:"",description:"",tag:""})
    setAlert({ style: 'success', message: 'Note has been added successfully!' });
    closeAlert();
    setTimeout(() => {
      navigate('/savenotes')
    }, 2000);

  }

  // Able to change the values of input fields
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
      </div>
      <div className="mini-container d-flex justify-content-center">
        <div className="card w-100" style={{ boxShadow: mode === true ? '0 0 10px 2px rgba(74, 74, 74, 0.5)' : '0 0 10px 8px rgba(255, 255, 255, 0.5)', borderRadius: "30px" }}>
        <h3 className='text-center login100-form-title'>Create a New Note</h3>
          <Link to="/savenotes" className='small-heading mt-5'>View your notes?</Link>
          <div className="card-body" style={{ padding: "20px" }}>
            <div className="container">
              <form style={{ fontWeight: 'bolder' }} onSubmit={handleClick}>
                <div className="mb-3 mt-4">
                  <label className="form-label">Note Title</label>
                  <input type="text" className="form-control" id='title' name='title' value={note.title} placeholder='Enter your title' onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Note Tag</label>
                  <input type="text" className="form-control" id="tag" name='tag' placeholder='Enter your tag' value={note.tag} onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Note Description</label>
                  <textarea className="form-control" id="description" name='description' value={note.description} rows="5" placeholder='Enter your description' onChange={onChange} minLength={5} required></textarea>
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
