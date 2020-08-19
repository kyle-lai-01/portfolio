import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './More.css';
import { Container, ListGroup, Row, Col } from 'react-bootstrap'
import Emoji from './Emoji.js';

function More() {
  return (
    <div>
      <Container className='h1 more-container'>
        <h1 className='more-heading'>Learn more about me below!</h1>
        <div style={{ backgroundColor: 'white', height: '.2rem' }}></div>

        <h1 className='more-topic'>
          Languages
        </h1>
        <div style={{ backgroundColor: 'white', height: '.2rem', width: '50%', margin: 'auto', marginBottom: '2rem' }}></div>
        <p className='more-language'>
          English
        </p>
        <p className='more-language'>
          Cantonese
        </p>

        <h1 className='more-topic'>
          Coursework
        </h1>
        <div style={{ backgroundColor: 'white', height: '.2rem', width: '50%', margin: 'auto', marginBottom: '2rem' }}></div>
        <p className='more-coursework'>
          CS 2110 OOP and Data Structures
        </p>
        <p className='more-coursework'>
          CS 2850 Networks
        </p>
        <p className='more-coursework'>
          CS 3110 Functional Programming
        </p>
        <p className='more-coursework'>
          CS 4320 Databases
        </p>
        <p className='more-coursework'>
          CS 4820 Intro to Analysis of Algorithms
        </p>
        <p className='more-coursework'>
          Math 1920 Multivariable Calculus
        </p>
        <p className='more-coursework'>
          Math 2940 Linear Algebra
        </p>


        <h1 className='more-topic'>
          Ask me about ...
        </h1>
        <ListGroup className="list-group interest-list">
          <ListGroup.Item className='col-md-12 list-group-item' style={{ textAlign: 'center' }}>
            <Emoji symbol="✈️" label="aviation" style={{ width: '100%' }} />
                &nbsp; Aviation
          </ListGroup.Item>
          <ListGroup.Item className='col-md-12 list-group-item' style={{ textAlign: 'center' }}>
            <Emoji symbol="⛷️" label="skiing" style={{ width: '100%' }} />
            &nbsp; Skiing
          </ListGroup.Item>
          <ListGroup.Item className='col-md-12 list-group-item' style={{ textAlign: 'center' }}>
            <Emoji symbol="🎸" label="guitar" style={{ width: '100%' }} />
            &nbsp; Guitar
          </ListGroup.Item>
          <ListGroup.Item className='col-md-12 list-group-item' style={{ textAlign: 'center' }}>
            <Emoji symbol="🍷" label="wine" style={{ width: '100%' }} />
                 &nbsp; Viticulture
          </ListGroup.Item>
          <ListGroup.Item className='col-md-12 list-group-item' style={{ textAlign: 'center' }}>
            <Emoji symbol="➕" label="math" style={{ width: '100%' }} />
            &nbsp; Calculus
          </ListGroup.Item>
          <ListGroup.Item className='col-md-12 list-group-item' style={{ textAlign: 'center' }}>
            <Emoji symbol="🗠" label="market" style={{ width: '100%' }} />
            &nbsp; The markets
          </ListGroup.Item>
        </ListGroup>
      </Container>

    </div>

  )
}

export default More;