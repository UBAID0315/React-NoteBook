import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NoteContext from '../Contexts/Notes/NoteContext';
import Alert from './Alert';

export const SignUpForm = (props) => {
    let { mode, LoadingSpinner } = props;
    const { alert, setAlert } = useContext(NoteContext);
    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);
    const [credential, setCredentials] = useState({ name: '', email: '', password: '', rpassword: '' });
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const toggleRepeatPasswordVisibility = () => {
        setShowRepeatPassword(!showRepeatPassword);
    };

    const closeAlert = () => {
        setTimeout(() => {
            setAlert({ status: false });
        }, 2000);
    };

    const onChange = (e) => {
        setCredentials({ ...credential, [e.target.name]: e.target.value });
    };

    const handleCreateUser = async (event) => {
        event.preventDefault();

        const { name, email, password, rpassword } = credential;
        if (email === '' || password === '') {
            setAlert({ style: "info", message: "Please enter credentials!" });
            closeAlert();
            return;
        }
        if (password === rpassword) {
            const response = await fetch("http://localhost:5000/api/auth/createuser", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, password })
            });
            const json = await response.json();
            if (json.signup) {
                setAlert({ style: "success", message: "Account created successfully!" });
                localStorage.setItem('token', json.token);
                closeAlert();
                setTimeout(() => {
                    navigate('/');
                }, 3000);
            } else {
                setAlert({ style: "danger", message: "Sorry! this email is already in use" });
                closeAlert();
            }
        } else {
            setAlert({ style: "warning", message: "Your passwords don't match" });
            closeAlert();
        }
    };

    return (
        <div className="limiter">
            <div className="container-login100" style={{ backgroundColor: mode === true ? 'white' : 'black' }}>
                <div className="container mt-2" style={{ marginTop: "-20px" }}>
                    {alert && <Alert style={alert.style} message={alert.message} />}
                </div>
                <div className="wrap-login100 mb-5" style={{ boxShadow: mode === true ? '0 5px 10px 10px rgba(0, 0, 0, 0.1)' : '0 5px 5px 10px rgba(255,255,255,1.0)' }}>
                    <form className="login100-form validate-form" onSubmit={handleCreateUser}>
                        <span className="login100-form-title p-b-26">Sign Up</span>
                        <span className="login100-form-title p-b-15">
                            <img className='image' src="../Logo.png" alt="" style={{ marginLeft: "30px" }} />
                        </span>
                        <div className="wrap-input100 validate-input">
                            <input className="input100" type="text" name="name" onChange={onChange} minLength={5} required />
                            <span className="focus-input100" data-placeholder="Name"></span>
                        </div>
                        <div className="wrap-input100 validate-input">
                            <input className="input100" type="email" name="email" onChange={onChange} required />
                            <span className="focus-input100" data-placeholder="Email"></span>
                        </div>
                        <div className="wrap-input100 validate-input" data-validate="Enter password">
                            <input
                                className="input100"
                                type={showPassword ? "text" : "password"}
                                id="password"
                                value={credential.password}
                                minLength={8} required
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
                                }}>
                                <i className={`fa-regular fa-${showPassword ? 'eye' : 'eye-slash'}`}></i>
                            </span>
                        </div>
                        <div className="wrap-input100 validate-input" data-validate="Repeat password">
                            <input
                                className="input100"
                                type={showRepeatPassword ? "text" : "password"}
                                id="rpassword"
                                value={credential.rpassword}
                                minLength={8} required
                                onChange={onChange} name="rpassword" />
                            <span className="focus-input100" data-placeholder="Repeat Password"></span>
                            <span onClick={toggleRepeatPasswordVisibility}
                                style={{
                                    position: "absolute",
                                    right: "10px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    cursor: "pointer",
                                    zIndex: "10"
                                }}>
                                <i className={`fa-regular fa-${showRepeatPassword ? 'eye' : 'eye-slash'}`}></i>
                            </span>
                        </div>
                        <div className="container-login100-form-btn">
                            <div className="wrap-login100-form-btn">
                                <div className="login100-form-bgbtn"></div>
                                <button className="login100-form-btn" type="submit">Create Account</button>
                            </div>
                        </div>
                        <div className="or-container">
                            <p style={{ paddingLeft: "5px", paddingRight: "5px" }}>or</p>
                        </div>
                        <div className="text-center p-t-50">
                            <span className="txt1">Already have an account?</span>&nbsp;
                            <Link onClick={LoadingSpinner} className="txt2" to="/login">
                                <strong className='signin'>Sign In</strong>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
