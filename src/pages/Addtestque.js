import { useParams } from 'react-router-dom'
import API_URL from '../config'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Addtestque() {
    var params = useParams()
    var tn = params.testno
    var [testno, setTestno] = useState()
    var [numque, setNumque] = useState()
    var [marks, setMarks] = useState()
    var [category, setCategory] = useState()
    var [ques, setQues] = useState([])
    function fetchtestdetails() {
        axios.get(API_URL + "/test/" + tn).then(res => {
            if (res.data.length > 0) {
                setTestno(res.data[0].testno)
                setNumque(res.data[0].numque)
                setMarks(res.data[0].marks)
                setCategory(res.data[0].category)
            }
        })
    }

 function fetchquestions() { 
    axios.get(API_URL + "/question/cat/" + category).then(res => {  
        setQues(res.data) }) }


    useEffect(() => {
        fetchtestdetails()
    }, [])

    function addtotest(queno) {
        axios.post(API_URL + "/testq", { testno, queno }).then(res => {
            alert(res.data.message)
        })
    }

    return (
        <div className='container'>
            <h1 className='text-center display-5'>Test Details</h1>
            <div className='row'>
                <div className='col-6'>
                    <h2>Test No :{testno}</h2>
                </div>
                <div className='col-6'>
                    <h2> Category:{category}</h2>
                </div>
            </div>

            <div className='row'>
                <div className='col-6'>
                    <h2>Marks :{marks}</h2>
                </div>
                <div className='col-6'>
                    <h2> Number of Questions:{numque}</h2>
                </div>
            </div>

            <a className='btn btn-primary' onClick={() => fetchquestions()}>Fetch All {category} Questions</a>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Question No</th>
                        <th>Question Details</th>
                        <th>Option 1</th>
                        <th>Option 2</th>
                        <th>Option 3</th>
                        <th>Option 4</th>
                        <th>Answer</th>
                        <th>Category</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ques.map(q => {
                            return <tr key={q.queno}>
                                <td>{q.questionno}</td>
                                <td>{q.questiondet}</td>
                                <td>{q.op1}</td>
                                <td>{q.op2}</td>
                                <td>{q.op3}</td>
                                <td>{q.op4}</td>
                                <td>{q.ans}</td>
                                <td>{q.category}</td>
                                <td>
                                    <a className='btn btn-primary' onClick={() => addtotest(q.questionno)}>Add to Test</a>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
