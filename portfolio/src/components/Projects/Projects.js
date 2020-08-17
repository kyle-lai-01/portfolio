import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Projects.css';
import { Container } from 'react-bootstrap'


function Projects() {
  return (
    <div>
      <Container className='h1 projects-container'>
        <h1 className='projects-heading'>Projects</h1>
        <hr />
        <p className='projects-intro'>
          Here are some of my recent projects.
        </p>

      </Container>
    </div>
  )


}

export default Projects;