 import React, { useEffect, useState } from 'react'
import API_URL from '../config'
import axios from 'axios'

export default function Preparetest() {
  var [testno, setTestno] = useState()
  var [numque, setNumque] = useState()
  var [marks, setMarks] = useState()
  var [category, setCategory] = useState()
  var [categories, setCategories] = useState([])
  var [tests, setTests] = useState([])
  var [op, setOp] = useState('submit')

  function fetchCategories() {
    axios.get(API_URL + "/category").then(response => {
      setCategories(response.data)
    })
  }
  function fetchTests() {
    axios.get(API_URL + "/test").then(response => {
      setTests(response.data)
    })
  }
  useEffect(() => {
    fetchCategories()
    fetchTests()
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    if (op == 'submit') {
      axios.post(API_URL + "/test", { testno, numque, marks, category }).then(res => {
        alert(res.data.message)
        fetchTests()
      })
    }
    else if (op == 'update') {
      axios.put(API_URL + "/test/" + testno, { numque, marks, category }).then(res => {
        alert(res.data.message)
        fetchTests()
        setOp('submit')
      })
    }
  }
  function deletetest(tn) {
    axios.delete(API_URL + "/test/" + tn).then(res => {
      alert(res.data.message)
      fetchTests()
    })
  }

  function updatetest(tn) {
    setOp('update')
    axios.get(API_URL + "/test/ " + tn).then(res => {
      if (res.data.length > 0) {
        setTestno(res.data[0].testno)
        setNumque(res.data[0].numque)
        setMarks(res.data[0].marks)
        setCategory(res.data[0].category)
      }
    })
  }

  function addque(tn) {
    window.location = "/testque/" + tn
  }

  return (
    <div className='container'>
      <h1 className='text-center display-5'>Prepare Test here</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Test No</label>
          <input type="  " name='testno' value={testno} onChange={(e) => setTestno(e.target.value)} placeholder='Test no ' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Number Questions </label>
          <input type="text" name='numque' value={numque} onChange={(e) => setNumque(e.target.value)} placeholder='Number Questions' className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Marks</label>
          <input type="text" name='marks' value={marks} onChange={(e) => setMarks(e.target.value)} placeholder='Marks' className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Category</label>
          <select name='category' value={category} onChange={(e) => setCategory(e.target.value)} placeholder='category' className="form-control" id="exampleInputPassword1">
            <option>--select category--</option>
            {
              categories.map((cat) => {
                return <option>{cat.catname}</option>
              })
            }
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <h1 className='text-center display-5 mt-5'>Available Tests</h1>
      <table className='table table-bordered '>
        <thead>
          <tr>
            <th>Test No</th>
            <th>Number of Questions</th>
            <th>Marks</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            tests.map(t => {
              return <tr key={t.testno}>
                <td>{t.testno}</td>
                <td>{t.numque}</td>
                <td>{t.marks}</td>
                <td>{t.category}</td>
                <td>
                  <a className='btn btn-danger me-3' onClick={() => deletetest(t.testno)}>Delete</a>
                  <a className='btn btn-primary me-3' onClick={() => updatetest(t.testno)}>Edit</a>
                  <a className='btn btn-secondary' onClick={() => addque(t.testno)}>Add Questions</a>
                </td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}
