import React, { useState } from 'react'
import API_URL from '../config';
import axios from 'axios';

export default function Login() {
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    axios.get(API_URL + "/register/" + email + "/" + password).then(response => {
      if (response.data.length>0){
        alert("Login Successful")
        localStorage.setItem("emailid", email)
        window.location="/"
      }
      else{
        alert(" invalid email or password")
      }
    })
  }
  return (
    <div className='container'>
      <h1 className='text-center display-5'>Login</h1>
      {/* Section: Design Block */}
      <section className=" text-center text-lg-start">
          <style dangerouslySetInnerHTML={{ __html: "\n    .rounded-t-5 {\n      border-top-left-radius: 0.5rem;\n      border-top-right-radius: 0.5rem;\n    }\n\n    @media (min-width: 992px) {\n      .rounded-tr-lg-0 {\n        border-top-right-radius: 0;\n      }\n\n      .rounded-bl-lg-5 {\n        border-bottom-left-radius: 0.5rem;\n      }\n    }\n  " }} />
          <div className="card mb-3">
            <div className="row g-0 d-flex align-items-center">
              <div className="col-lg-4 d-none d-lg-flex">
                <img src="/1.jpg" alt="Trendy Pants and Shoes" className="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5" />
              </div>
              <div className="col-lg-8">
                <div className="card-body py-5 px-md-5">
                  <form onSubmit={handleSubmit}>
                    {/* Email input */}
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input value={email} onChange={(e) => setEmail(e.target.value)} name="email" type="email" id="form2Example1" className="form-control" required/>
                      <label className="form-label" htmlFor="form2Example1">Email address</label>
                    </div>
                    {/* Password input */}
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input value={password} onChange={(e) => setPassword(e.target.value)} name="password" type="password" id="form2Example2" className="form-control" required pattern="[a-zA-Z0-9!@#$]{6,}"/>
                      <label className="form-label" htmlFor="form2Example2">Password</label>
                    </div>
                    {/* 2 column grid layout for inline styling */}
                    <div className="row mb-4">
                      <div className="col d-flex justify-content-center">
                      </div>
                      <div className="col">
                        {/* Simple link */}
                        <a href="#!">Forgot password?</a>
                      </div>
                    </div>
                    {/* Submit button */}
                    <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">Sign in</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
      </section>
      {/* Section: Design Block */}

    </div>
  )
}
