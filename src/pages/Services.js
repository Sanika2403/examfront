import React from 'react'

export default function Services() {
  return (
    <div className='container'>
      <h1 className='text-center display-5'>Our Services</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Quiz</h5>
              <p className="card-text">Our quiz is comprehensive that has important questions for students.Our quiz is comprehensive that has important questions for students.Our quiz is comprehensive that has important questions for students.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Results</h5>
              <p className="card-text">Immediate results displayed with correct answers.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Certificate</h5>
              <p className="card-text">students will get a certificate after completing the quiz.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
