import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import API_URL from '../config'

export default function Testpaper() {
    var params = useParams()
    var testno = params.testno
    var [questions, setQuestions] = useState([])
    var [testqs, setTestqs] = useState([])
    var [testdet, setTestdet] = useState({})
    var [uans, setUans] = useState([])

    function fetchquestions() {
        axios.get(API_URL + "/test/" + testno).then(rs => {
            setTestdet(rs.data[0])
        })
        axios.get(API_URL + "/testq/" + testno).then(rs => {
            setTestqs(rs.data)
            //console.log(rs.data)

        })
    }

    useEffect(() => {
        fetchquestions()
    }, [])

    function displayques() {
        if (questions.length > 0) return
        console.log(testqs)
        testqs.forEach(tq => {
            axios.get(API_URL + "/question/" + tq.queno).then(res => {
                setQuestions(prev => [...prev, res.data[0]])
                console.log(res.data[0])
            })
        })
    }

    function calculate() {
        console.log(uans)
        let sum = 0
        let latest = {}
uans.forEach(u => { latest[u.queno] = u.ans })
questions.forEach(q => {
    if (latest[q.questionno] == q.ans)
        sum = sum + parseFloat(testdet.marks) / parseInt(testdet.numque)
})
        alert("Obtained Marks=" + sum)
        let per = sum / parseInt(testdet.marks) * 100
        console.log("Percent=" + per)
        let status = per >= 40 ? "Pass" : "Fail"
        axios.post(API_URL + "/result", {
            email: localStorage.getItem("emailid"),
            testno,
            totalmarks: testdet.marks,
            obtainmarks: sum,
            status
        }).then(res => {
            window.location = "/result"
        })
    }

    return (
        <div className='container'>
            <br />
            <div style={{ padding: '10px', border: 'solid 1px grey', margin: '8px' }}>
                <h2>Testno : {testdet.testno}</h2>
                <h3>Marks : {testdet.marks}</h3>
                <h3>Marks per question: {parseFloat(testdet.marks) / parseInt(testdet.numque)}</h3>
                <h4>Category : {testdet.category}</h4>

            </div>
            <br></br>
            <a className='btn btn-primary' onClick={() => displayques()}>Start Test</a>
            {
                questions.map((q, index) => {
                    return <div style={{ padding: '10px', border: 'solid 1px grey', margin: '8px' }} key={index}>
                        Question number : {index + 1}
                        <br></br>
                        Question Details : {q.questiondet}<br></br>
                        <input type='radio' name={q.questionno} value={q.op1} onClick={(e) => setUans(prev => [...prev, { queno: q.questionno, ans: e.target.value }])}></input>{q.op1}
                        <br />
                        <input type='radio' name={q.questionno} value={q.op2} onClick={(e) => setUans(prev => [...prev, { queno: q.questionno, ans: e.target.value }])}></input>{q.op2}
                        <br />
                        <input type='radio' name={q.questionno} value={q.op3} onClick={(e) => setUans(prev => [...prev, { queno: q.questionno, ans: e.target.value }])}></input>{q.op3}
                        <br />
                        <input type='radio' name={q.questionno} value={q.op4} onClick={(e) => setUans(prev => [...prev, { queno: q.questionno, ans: e.target.value }])}></input>{q.op4}
                        <br />
                    </div>
                })
            }
            {questions.length > 0 && <a className='btn btn-primary' onClick={() => calculate()}>Submit Test</a>}
        </div>
    )
}
