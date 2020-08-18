import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Projects.css';
import { Container, Row, ListGroup, Nav } from 'react-bootstrap'
import MediaRec from './Cards/MediaRec.js'
import BudgetTracker from './Cards/BudgetTracker.js'
import OMaskl from './Cards/OMaskl.js'

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
          <ListGroup.Item className='col-md-4 list-group-item' style={{ textAlign: 'center', margin: 'auto' }}>
            <MediaRec />
          </ListGroup.Item>
          <ListGroup.Item className='col-md-4 list-group-item' style={{ textAlign: 'center' }}>
            <BudgetTracker />
          </ListGroup.Item>
          <ListGroup.Item className='col-md-4 list-group-item' style={{ textAlign: 'center' }}>
            <OMaskl />
          </ListGroup.Item>
        </ListGroup>
      </Container>
    </div>
  )


}

export default Projects;