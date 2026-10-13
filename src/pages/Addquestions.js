import axios from 'axios'
import React, { useEffect, useState } from 'react'
import API_URL from '../config'
export default function Addquestions() {
  var [questionno, setQuestionno] = useState()
  var [questiondet, setQuestiondet] = useState()
  var [op1, setOp1] = useState()
  var [op2, setOp2] = useState()
  var [op3, setOp3] = useState()
  var [op4, setOp4] = useState()
  var [ans, setAns] = useState()
  var [category, setCategory] = useState()
  var [categories, setCategories] = useState([])

  function fetchCategories() {
    axios.get(API_URL + "/category").then(response => {
      setCategories(response.data)
    })
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    axios.post(API_URL + "/question", { questionno, questiondet, op1, op2, op3, op4, ans, category }).then(response => {
      alert(response.data.message)
    })
  }
    return (
      <div className='container'>
        <h1 className='text-center display-5'>Add Question here</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Question Number</label>
            <input type="number" name='questionno' value={questionno} onChange={(e) => setQuestionno(e.target.value)} placeholder='Question Number' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Question details</label>
            <input type="text" name='questiondet' value={questiondet} onChange={(e) => setQuestiondet(e.target.value)} placeholder='Question details' className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Option 1</label>
            <input type="text" name='op1' value={op1} onChange={(e) => setOp1(e.target.value)} placeholder='op1' className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Option 2</label>
            <input type="text" name='op2' value={op2} onChange={(e) => setOp2(e.target.value)} placeholder='op2' className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Option 3</label>
            <input type="text" name='op3' value={op3} onChange={(e) => setOp3(e.target.value)} placeholder='op3' className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Option 4</label>
            <input type="text" name='op4' value={op4} onChange={(e) => setOp4(e.target.value)} placeholder='op4' className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Answer</label>
            <input type="text" name='ans' value={ans} onChange={(e) => setAns(e.target.value)} placeholder='ans' className="form-control" id="exampleInputPassword1" />
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

      </div>
    )
  }

