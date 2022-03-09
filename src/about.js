import React from 'react'
import { useSelector } from 'react-redux'


function About() {
    const myState = useSelector((state) => state)
    return (
        <div style={{ padding: '40px', background: 'red' }}>
            <h1>i am from rajasthan</h1>
            {myState.articles.map((item, index) =>
                <ul key={index}>
                    <li>{item}</li>
                </ul>
            )}
        </div>
    )
}

export default About
