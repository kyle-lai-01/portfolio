import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Projects.css';
import { Container, Row, ListGroup, Nav } from 'react-bootstrap'
import Showcase from './Showcase.js'

function Projects() {
  return (
    <div>
      <Container className='h1 projects-container'>
        <h1 className='projects-heading'>Projects</h1>
        <div style={{ backgroundColor: 'white', height: '.2rem' }}></div>
        <p className='projects-intro'>
          Here are some of my recent projects.
        </p>
      </Container>
      <Container fluid>


        <ListGroup className="list-group list-group-horizontal project-showcase">
          <ListGroup.Item className='col-md-4 list-group-item' style={{ textAlign: 'center' }}>
            <Showcase />
          </ListGroup.Item>
          <ListGroup.Item className='col-md-4 list-group-item' style={{ textAlign: 'center' }}>
            <Showcase />
          </ListGroup.Item>
          <ListGroup.Item className='col-md-4 list-group-item' style={{ textAlign: 'center' }}>
            <Showcase />
          </ListGroup.Item>
        </ListGroup>
      </Container>
    </div>
  )


}

export default Projects;