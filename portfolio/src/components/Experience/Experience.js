import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './Experience.css';
import { Nav } from 'react-bootstrap'

function Experience() {
  return (
    <div>
      <Container className='h1 experience-container'>
        <h1 className='experience-heading'>Extracurriculars</h1>
        <div style={{ backgroundColor: '#264195', height: '.2rem', marginBottom: '2rem' }}></div>
        <Nav.Link href='https://cuair.org/' rel="noopener noreferrer" target="_blank" style={{ decoration: 'none', color: 'black' }}>
          <p className='experience-title'>
            Cornell University Unmanned Air Systems, Ithaca, NY
        </p>
        </Nav.Link>
        <p className='experience-sub'>
          Autopilot Subteam | Oct 2019 - Present
        </p>
        <p className='experience-text'>
          CUAir is a student run project team where we build and design a custom autonomous aircraft for a search and rescue mission. In the autopilot subteam, we are responsible for maintaining the ground station, which interfaces with the aircraft during autonomous flight.
        </p><p className='experience-text'>
          I implemented a servo diagram page in the ground station with React for my onboarding project, which aligns parameter inputs with the proper positions on an image of our current 2 planes.
        </p>

        <Nav.Link href='https://www.cornellscioly.com/' rel="noopener noreferrer" target="_blank" style={{ decoration: 'none', color: 'black' }}>
          <p className='experience-title'>
            Science Olympiad at Cornell, Ithaca, NY
        </p>
        </Nav.Link>
        <p className='experience-sub'>
          Treasurer | Sep 2019 - Present
        </p>
        <p className='experience-text'>
          Science Olympiad at Cornell is a student run club where we host invitational tournaments for high school and middle school students. We also volunteer at other Science Olympiad competitions.
        </p><p className='experience-text'>
          I started as the financial assistant for 2019-2020, and was elected treasurer for 2020-2021. I am responsible for keeping track of our club budget and expenses to host our tournaments by contacting sponsors and coordinating with Cornell for funding.
        </p>




      </Container>
    </div>


  )

}

export default Experience;