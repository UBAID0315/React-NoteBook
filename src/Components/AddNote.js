import React, { useState } from 'react';
import { Alert } from './Alert';
import { Link } from 'react-router-dom';

export const AddNote = (props) => {
  const [alert, setAlert] = useState({style:"",message:""});

  const closeAlert = () => {
    setTimeout(() => {
        setAlert({ status: false });
    }, 2500);
};
  const showAlert = (event) => {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const tag = document.getElementById('tag').value;

    if (title === '' || description === '' || tag === '') {
      setAlert({ style: 'danger', message: 'Fill all the fields properly!' });
      closeAlert();
    } else {
      setAlert({ style: 'success', message: 'Note has been added successfully!' });
      closeAlert();
    }
  };

  const { mode } = props;

  return (
    <>
      <div className="container text-center my-5" style={{
        fontFamily: "Montserrat",
        fontWeight: 'bolder',
        fontStyle: "normal"
      }}>
        <h3 style={{ color: mode===true ? 'black' : 'white' }}>Add your Notes</h3>
      </div>
      <div className="mini-container d-flex justify-content-center">
        <div className="card w-100">
        <Link to="/mynotes" className='small-heading'>View your notes?</Link>
          <div className="card-body" style={{ padding: "20px" }}>
            <div className="container">
              <form style={{ fontWeight: 'bolder' }} onSubmit={showAlert}>
                <div className="mb-3">
                  <label className="form-label">Note Title</label>
                  <input type="text" className="form-control" id='title' />
                </div>
                <div className="mb-3">
                  <label className="form-label">Note Tag</label>
                  <input type="text" className="form-control" id="tag" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Note Description</label>
                  <textarea className="form-control" id="description" rows="5"></textarea>
                </div>
                <div className="Button">
                  <button type="submit" style={{ marginTop: "20px" }} className="btn btn-primary w-100">Add</button>
                </div>
              </form>
              <div className="Alert mt-3">
                {alert && <Alert style={alert.style} message={alert.message}/>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNote;
