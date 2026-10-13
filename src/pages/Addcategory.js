import axios from 'axios'
import React, { useState } from 'react'
import API_URL from '../config'

export default function Addcategory() {
  function handleSubmit(e) {
    e.preventDefault()
    axios.post(API_URL+"/category",{categoryno, catname}).then(response =>{
      alert(response.data.message)
    })
  }
  var [categoryno, setCategoryno] = useState()
  var [catname, setCatname] = useState()
  return (
    <div className='container'>
      <h1 className='text-center display-5'>Add Category here</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Category No</label>
          <input type="number" name='categoryno' value={categoryno} onChange={(e) => setCategoryno
            (e.target.value)} placeholder='Category No' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Category Name</label>
          <input type="text" name='catname' value={catname} onChange={(e) => setCatname(e.target.value)} placeholder='Category Name' className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

    </div>
  )
}
