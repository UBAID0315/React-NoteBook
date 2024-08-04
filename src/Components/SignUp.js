import React from 'react'
import { Link } from 'react-router-dom'
import { Spinner } from './Spinner';

export const SignUp = (props) => {
  let { mode, loading, LoadingSpinner } = props;
  
  return (
    <>
    {loading === true ? <Spinner mode={mode}/>:
    <div className="limiter mt-2">
      <div className="container-login100" style={{ backgroundColor: mode === true ? 'white' : 'black' }}>
        <div className="wrap-login100" style={{ boxShadow: mode === true ? '0 5px 10px 10px rgba(0, 0, 0, 0.1)' : '0 5px 5px 10px rgba(255,255,255,1.0)' }}>
          <form className="login100-form validate-form">
            <span className="login100-form-title p-b-26">
              Sign Up
            </span>

            <span className="login100-form-title p-b-15">
              <img className='image' src="../Logo.png" alt="" style={{ marginLeft: "30px" }} />
            </span>

            <div className="wrap-input100 validate-input" data-validate="text">
              <input className="input100" type="text" name="text" />
              <span className="focus-input100" data-placeholder="Name"></span>
            </div>

            <div className="wrap-input100 validate-input" data-validate="Valid email is: a@b.c">
              <input className="input100" type="text" name="email" />
              <span className="focus-input100" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input100 validate-input" data-validate="Enter password">
              <input className="input100" type="password" id="pass1" name="password" />
              <span className="focus-input100" data-placeholder="Password"></span>
            </div>

            <div className="wrap-input100 validate-input" data-validate="Repeat password">
              <input className="input100" type="password" id="pass2" name="password" />
              <span className="focus-input100" data-placeholder="Repeat Password"></span>
            </div>

            <div className="container-login100-form-btn">
              <div className="wrap-login100-form-btn">
                <div className="login100-form-bgbtn"></div>
                <button className="login100-form-btn">
                  Create Account
                </button>
              </div>
            </div>
            <div className="or-container">
              <p style={{paddingLeft:"5px",paddingRight:"5px"}}>or</p>
            </div>
            <div className="text-center p-t-50">
              <span className="txt1">
                Already have an account?
              </span>&nbsp;
              <Link onClick={LoadingSpinner} className="txt2" to="/login">
                <strong className='signin'>Sign In</strong>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>}
    </>
    // <section className='mt-5'>
    //     <div className="d-flex justify-content-center">
    //         <div className="col-lg-7">
    //             <div className="wrap d-md-flex">
    //                 <div className="text-wrap p-4 p-lg-5 d-flex img d-flex align-items-end"
    //                  style={{ backgroundImage: `url('https://shorturl.at/wZOEB')`,zIndex: mode===true?"auto":"0" }}>
    //                     <div className="text w-100">
    //                         <h2 className="mb-4" style={{color:mode===true?'black':'white'}}>Welcome to SignUp Form</h2>
    //                     </div>
    //                 </div>
    //                 <div className="login-wrap p-4 p-md-5" style={{backgroundColor:mode===true?'white':'lightgray'}}>
    //                     <h3 className="mb-3">Create an account</h3>
    //                     <form action="#" className="signup-form">
    //                         <div className="row">
    //                             <div className="col-md-12 mt-5">
    //                                 <div className="form-group d-flex align-items-center">
    //                                     <label className="label" htmlFor="name">Full Name</label>
    //                                     <input type="text" className="form-control" placeholder="Full Name" />
    //                                 </div>
    //                             </div>
    //                             <div className="col-md-12">
    //                                 <div className="form-group d-flex align-items-center">
    //                                     <label className="label" htmlFor="name">Last Name</label>
    //                                     <input type="text" className="form-control" placeholder="Last Name" />
    //                                 </div>
    //                             </div>
    //                             <div className="col-md-12">
    //                                 <div className="form-group d-flex align-items-center">
    //                                     <label className="label" htmlFor="email">Email Address</label>
    //                                     <input type="text" className="form-control" placeholder="johndoe@email.com" />
    //                                 </div>
    //                             </div>
    //                             <div className="col-md-12">
    //                                 <div className="form-group d-flex align-items-center">
    //                                     <label className="label" htmlFor="password">Password</label>
    //                                     <input type="password" className="form-control" placeholder="Password" />
    //                                 </div>
    //                             </div>
    //                             <div className="col-md-12 mt-5">
    //                                 <div className="form-group">
    //                                     <button type="submit" className="btn btn-secondary submit p-3">Create an
    //                                         account</button>
    //                                 </div>
    //                             </div>
    //                         </div>

    //                     </form>
    //                     <div className="social-wrap">
    //                         <p className="or">
    //                             <span>or</span>
    //                         </p>
    //                     </div>
    //                     <div className="w-100 text-center">
    //                         <p className="mt-4">I'm already a member! <Link to="/login">Sign In</Link></p>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </section>
  )
}
