import axios from "axios"
import { useEffect, useState } from "react"
import API_URL from "../config"

export default function Result() {
  var [result, setResult] =useState([])

  function fetchresults() {
    axios.get(API_URL + "/result/"+localStorage.getItem("emailid")).then(response => {
      setResult(response.data)
    })
  }

  useEffect(() => {
      fetchresults()
    }, [])
  return (
    <div className="container mt-5">
      <h1 className='text-center display-5 mt-5'>Result Details</h1>
      <table className='table table-bordered mt-5'>
        <thead>
          <tr>
            <th>Email</th>
            <th>Test Number</th>
            <th>Total Marks</th>
            <th>Obtained Marks</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            result.map((r,index) => {
              return <tr key={index}>
                <td>{r.email}</td>
                <td>{r.testno}</td>
                <td>{r.totalmarks}</td>
                <td>{r.obtainmarks}</td>
                <td>{r.status=="Fail"?<h5 style={{color:'red'}}>Fail</h5>:<h5 style={{color:'green'}}>Pass</h5>}</td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}
