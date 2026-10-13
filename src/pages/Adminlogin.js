import axios from 'axios';
import React, { useState } from 'react'
import API_URL from '../config';

export default function Adminlogin() {
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    axios.get(API_URL + "/admin/" + email + "/" + password).then(
      response => {
        if (response.data.length > 0) {
          alert("Admin Login Successful")
          localStorage.setItem("aemailid", email)
          window.location = "/"
        }
        else {
          alert("Invalid email or password ")
        }
      })
  }

  return (
    <div className='container'>
      <h1 className='text-center display-5'>Admin Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} name='email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} name='password' type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

    </div>

  )
}
