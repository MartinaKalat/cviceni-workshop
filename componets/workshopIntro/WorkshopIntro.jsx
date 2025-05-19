import React from 'react'

const WorkshopIntro = (props) => {
    return( <div>
        <h1 className="workshopIntro">{props.title}</h1>
        <p className='description'>{props.description}</p>
    </div>
    )
}

export default WorkshopIntro;