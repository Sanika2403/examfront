import axios from 'axios'
import React, { useEffect, useState } from 'react'
import API_URL from '../config'
import Testcard from '../components.js/Testcard'

export default function Tests() {
  var [tests, setTests] =useState([])
  function fetchtests(){
    axios.get(API_URL+"/test").then(rs =>{
      setTests(rs.data)
    })
  }
  useEffect(()=>{
    fetchtests()
  },[])


  return (
    <div className='container'>
      <h1 className='text-center display-5'>Tests you can appear</h1>
      <div className='row justify-content-evenly'>
      {
        tests.map(t =>{
          return <Testcard testno={t.testno} numque={t.numque} marks={t.marks} category={t.category} />
        })
      }
      </div>
    </div>
  )
}
