import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NoteContext from '../Contexts/Notes/NoteContext'
import Alert from './Alert'

export const LoginForm = (props) => {
    let { mode, LoadingSpinner } = props
    let navigate = useNavigate();
    const [credential, setCredential] = useState({ email: '', password: '' })
    const { alert, setAlert } = useContext(NoteContext)
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = ()=>{
        setShowPassword(!showPassword)
    }
    const closeAlert = () => {
        setTimeout(() => {
            setAlert({ status: false })
        }, 2000);
    }
    const onChange = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value })
    }
    const handleLogin = async (event) => {
        event.preventDefault();

        if (credential.email === '' && credential.password === '') {
            setAlert({ style: "info", message: "Please enter credentials!" })
            closeAlert();
            return;
        }

        
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: credential.email, password: credential.password })
        });
        const json = await response.json();
        if (json.login) {
            setAlert({ style: "success", message: "Login Successfully!" })
            localStorage.setItem('token', json.token)
            closeAlert();
            setTimeout(() => {
                navigate('/')
            }, 3000);
        }
        else {
            setAlert({ style: "danger", message: "Please enter the correct credentials!" })
            closeAlert();
        }
    }

    return (
        <div className="limiter">
            <div className="container-login100" style={{ backgroundColor: mode === true ? 'white' : 'black' }}>
                <div className="container mt-3">
                    {alert && <Alert style={alert.style} message={alert.message} />}
                </div>
                <div className="wrap-login100 t-3" style={{ boxShadow: mode === true ? '0 5px 10px 10px rgba(0, 0, 0, 0.1)' : '0 5px 5px 10px rgba(255,255,255,1.0)' }}>
                    <form className="login100-form validate-form" onSubmit={handleLogin}>
                        <span className="login100-form-title p-b-26">
                            Welcome
                        </span>
                        <span className="login100-form-title p-b-48">
                            <img className='image' src="../Logo.png" alt="" style={{ marginLeft: "30px" }} />
                        </span>

                        <div className="wrap-input100 validate-input">
                            <input className="input100" type="email" id='email' value={credential.email} name="email" onChange={onChange} />
                            <span className="focus-input100" data-placeholder="Email"></span>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate="Enter password">
                            <input 
                            className="input100" 
                            type={showPassword ? "text" : "password"}
                            id="password" 
                            value={credential.password} 
                            onChange={onChange} name="password" />

                            <span className="focus-input100" data-placeholder="Password"></span>
                            <span onClick={togglePasswordVisibility}
                                style={{                                    
                                    position: "absolute",
                                    right: "10px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    cursor: "pointer",
                                    zIndex: "10"
                                }}><i className={`fa-regular fa-${showPassword?'eye':'eye-slash'}`}></i></span>
                        </div>

                        <div className="container-login100-form-btn">
                            <div className="wrap-login100-form-btn">
                                <div className="login100-form-bgbtn"></div>
                                <button className="login100-form-btn" type='submit'>
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
        </div>
    )
}
