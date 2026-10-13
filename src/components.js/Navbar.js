import React from 'react'
import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
    function logout() {
        localStorage.removeItem("emailid")
        window.location = "/"
    }
    function alogout() {
       localStorage.removeItem("aemailid")
        window.location = "/" 
    }
    var email = localStorage.getItem("emailid")
    if (email == null || email == "") {
        var aemailid = localStorage.getItem("aemailid")
        if (aemailid == "" || aemailid == null) {

            return (
                <div>
                    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to="/">Onl ine Exam Portal</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link" to="/services">Services</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/contact">Contact Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/register">Register</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/adminlogin">Admin Login</Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </nav>
                    <Outlet />
                </div>
            )
        }
        else {
            return (
                <div>
                    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to="/">Online Exam Portal</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link" to="/addcategory">Add Category</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/addquestions">Add Questions</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/preparetest">Prepare Test </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/aresult">Result</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/contactdetails">Contact Details</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" onClick={() => { alogout() }}>Log Out</Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </nav>
                    <Outlet />
                </div>
            )
        }
    }
    else {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Online Exam Portal</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/tests">Test</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/appeartest">AppearTest</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/result">Result</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" onClick={() => { logout() }}>Log Out</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Outlet />
            </div>
        )
    }
}
