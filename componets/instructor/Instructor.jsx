import React from 'react'
import './style.css'

const Instructor = (props) => {
    return(
        <div className="instructor">
            <h4>{props.name}</h4>
            <p>{props.profession}</p>
            <p>{props.email}</p>
            <img src={props.avatar} className="instructorImg" alt="instructorImg" />
        </div>
    )
}
export default Instructor;