import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addArticle, dataLoaded, removeArticle } from './js/actions/index'

function Home() {
    const [payload, setPayload] = useState([])
    const [data, setData] = useState({ name: '' })
    const myState = useSelector((state) => state);
    const dispatch = useDispatch()
    console.log('addArticle', addArticle());
    //   console.log(dispatch)
    console.log(myState)

    const handlechange = (e) => {

        setData({ name: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.name) {
            dispatch(addArticle(data.name))
            setData({ name: '' })
        }
    }

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                let payload = data.map((item) => item.title)
                // setPayload(payload);
                dispatch(dataLoaded(payload))
            })

    }, [dispatch])

    return (
        <div>
            {/* <h1 style={{ padding: '40px', background: 'green' }}> lalchand</h1> */}
            {/* <button onClick={() => dispatch(addArticle('ashok'))} >addarticle</button> */}
            <form onSubmit={handleSubmit} >
                <input value={data.name} onChange={handlechange} />
                <button type='submit' >submit</button>
            </form>
            <button onClick={() => dispatch(dataLoaded(payload))} >data loaded</button>
            {myState.articles.map((item, index) =>
                <div key={index}>
                    {item}{' '}
                    <button onClick={() => dispatch(removeArticle(index))} >remove</button>
                </div>
            )}
        </div>
    )
}

export default Home
