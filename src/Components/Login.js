import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Spinner } from './Spinner'
import NoteContext from '../Contexts/Notes/NoteContext'

export const Login = (props) => {
  const {mode,loading,LoadingSpinner} = useContext(NoteContext)
  return (
    <>
      {loading === true ? <Spinner mode={mode}/> :
        <div className="limiter mt-1">
          <div className="container-login100" style={{ backgroundColor: mode === true ? 'white' : 'black' }}>
            <div className="wrap-login100" style={{ boxShadow: mode === true ? '0 5px 10px 10px rgba(0, 0, 0, 0.1)' : '0 5px 5px 10px rgba(255,255,255,1.0)' }}>
              <form className="login100-form validate-form">
                <span className="login100-form-title p-b-26">
                  Welcome
                </span>
                <span className="login100-form-title p-b-48">
                  <img className='image' src="../Logo.png" alt="" style={{ marginLeft: "30px" }} />
                </span>

                <div className="wrap-input100 validate-input" data-validate="Valid email is: a@b.c">
                  <input className="input100" type="text" name="email" />
                  <span className="focus-input100" data-placeholder="Email"></span>
                </div>

                <div className="wrap-input100 validate-input" data-validate="Enter password">
                  <input className="input100" type="password" id="pass" name="pass" />
                  <span className="focus-input100" data-placeholder="Password"></span>
                </div>

                <div className="container-login100-form-btn">
                  <div className="wrap-login100-form-btn">
                    <div className="login100-form-bgbtn"></div>
                    <button className="login100-form-btn">
                      Login
                    </button>
                  </div>
                </div>
                <div className="or-container">
                  <p style={{ paddingLeft: "5px", paddingRight: "5px" }}>or</p>
                </div>
                <div className="text-center p-t-115">
                  <span className="txt1">
                    Don’t have an account?
                  </span>&nbsp;&nbsp;
                  <Link onClick={LoadingSpinner} className="txt2" to="/signup">
                    <strong>Sign Up</strong>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>}
    </>
  )
}
