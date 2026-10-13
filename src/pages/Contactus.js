import React, { useState } from 'react'
import './Contactus.css'
import axios from 'axios';
import API_URL from '../config'

export default function Contactus() {
  var [name, setName] = useState("");
  var [email, setEmail] = useState("");
  var [contact, setContact] = useState("");
  var [message, setMessage] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    axios.post(API_URL + "/contact", { name, email, contact, message }).then(response => {
      alert(response.data.message)
    })
  }
  return (
    <div className='container'>
      <h1 className='text-center display-5'>Contact Us</h1>
      <div className="contact3 py-5">
        <div className="row no-gutters">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="card-shadow">
                  <img src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxjYWxsfGVufDB8MHx8fDE3MjEwMzg4OTV8MA&ixlib=rb-4.0.3&q=80&w=1080" className="img-fluid" alt='contact illustration'/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-box ml-3">
                  <h1 className="font-weight-light mt-2">Quick Contact</h1>
                  <form className="mt-4" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group mt-2">
                          <input value={name} onChange={(e) => setName(e.target.value)} className="form-control" type="text" placeholder="name" name='nm' />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group mt-2">
                          <input value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" type="email" placeholder="email address" name='email' />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group mt-2">
                          <input value={contact} onChange={(e) => setContact(e.target.value)} className="form-control" type="text" placeholder="phone" name='contact' />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group mt-2">
                          <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="form-control" rows={3} placeholder="message" name='message' />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <button type="submit" className="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2"><span> SUBMIT</span></button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="card mt-4 border-0 mb-4">
                  <div className="row">
                    <div className="col-lg-4 col-md-4">
                      <div className="card-body d-flex align-items-center c-detail pl-0">
                        <div className="mr-3 align-self-center">
                          <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png" alt='Address Icon'/>
                        </div>
                        <div className="">
                          <h6 className="font-weight-medium">Address</h6>
                          <p className="">601 Sherwood Ave.
                            <br /> San Bernandino</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <div className="card-body d-flex align-items-center c-detail">
                        <div className="mr-3 align-self-center">
                          <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png" alt='Phone Icon'/>
                        </div>
                        <div className="">
                          <h6 className="font-weight-medium">Phone</h6>
                          <p className="">251 546 9442
                            <br /> 630 446 8851</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <div className="card-body d-flex align-items-center c-detail">
                        <div className="mr-3 align-self-center">
                          <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png" alt='Email Icon'/>
                        </div>
                        <div className="">
                          <h6 className="font-weight-medium">Email</h6>
                          <p className="">
                            info@wrappixel.com
                            <br /> 123@wrappixel.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
