import axios from "axios"
import { useEffect, useState } from "react"
import API_URL from "../config"

export default function Contactdetails() {
  var [contact, setContact] =useState([])

  function fetchcontact(){
    axios.get(API_URL + "/contact").then(response => {
      setContact(response.data)
    })
  }

  useEffect(() => {
      fetchcontact()
    }, [])
  return (
    <div className="container mt-5">
      <h1 className='text-center display-5 mt-5'>Contact Details</h1>
      <table className='table table-bordered mt-5'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {
            contact.map((c,index) => {
              return <tr key={index}>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>{c.contact}</td>
                <td>{c.message}</td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}
