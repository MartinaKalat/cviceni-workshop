import React from 'react'
import './index.css'

const WorkshopIntro = (props) => {
    return( <div>
        <h1 className="workshopIntro">{props.title}</h1>
        <p className='description'>{props.description}</p>
    </div>
    )
}

export default WorkshopIntro;