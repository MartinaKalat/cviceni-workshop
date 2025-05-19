import React from 'react'
import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import WorkshopIntro from '../../componets/workshopIntro/WorkshopIntro.jsx'
import Venue from '../../componets/venue/Venue.jsx'
import Instructor from '../../componets/instructor/Instructor.jsx'



const loadWorkshop = async () => {
    const url = 'http://localhost:4000/api/workshops/0';
    const response = await fetch(url);
    const workshop = await response.json();

    document.querySelector('#root').innerHTML = render(
        <div className="container">
            <div className="logo"></div>
            <WorkshopIntro title={workshop.data.title} description={workshop.data.description} />
            <Venue name={workshop.data.venue.name} street={workshop.data.venue.street} city={workshop.data.venue.city} />
            <strong>Kurz vede:</strong>
            <Instructor name={workshop.data.instructor.name} profession={workshop.data.instructor.profession} email={workshop.data.instructor.email} avatar={workshop.data.instructor.avatar}  />
        </div>
    );
};
loadWorkshop();

