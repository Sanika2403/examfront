import React from 'react'

export default function Testcard(props) {
    function viewpaper(testno) {
        window.location = "/testpaper/" + testno
    }
    return (
        <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">Test Number:{props.testno}</h5>
                <p className="card-text">Number of Questions:{props.numque}
                    <br></br>
                    Marks:{props.marks}
                    <br></br>
                    Category:{props.category}
                </p>
                {props.appear && <a className='btn btn-primary' onClick={() => viewpaper(props.testno)}>Appear for Test</a>}
            </div>
        </div>

    )
}
