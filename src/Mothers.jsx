import { useEffect, useState } from 'react'
import './Mothers.css'
import Mother from './Mother'
export default function Mothers(){
    const [mothers, setMothers] = useState([])

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setMothers(data))
    },[])
    return(
        <div className='box'>
            <h3>Mothers: {mothers.length}</h3>
            {
                mothers.map(mother => <Mother 
                mother ={mother}></Mother>)
            }
        </div>
    )
}



/**
 * 1. state to hold data
 * 2. use effect with dependency array
 * 3 use fetch to load data
 * 4. set load data to the state 
 */