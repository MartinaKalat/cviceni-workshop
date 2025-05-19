import React from 'react'
import './index.css'

const Venue = (props) => {
    return (
        <div className="venue">
            <p className='venue--name'>{props.name}</p>
            <p className='venue--adress'>{props.street}</p>
            <p className='venue--city'>{props.city}</p>
        </div>
    )
}
export default Venue;