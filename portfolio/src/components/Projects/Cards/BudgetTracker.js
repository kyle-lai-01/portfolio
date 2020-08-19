import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Badge } from 'react-bootstrap'
import Preview from './../images/BudgetTrackerPreview.png'
import './Cards.css'

function BudgetTracker() {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={Preview} />
      <Card.Body>
        <Card.Title className='title'>Budget Tracker</Card.Title>
        <Card.Text>
          Track budget and expenses in easy to use display.
    </Card.Text>
        <Button href='https://github.com/henryli6/Budget-Tracker' rel="noopener noreferrer" target="_blank" variant="outline-secondary">Github Source Code</Button>

        <div className='card-list'>
          <Badge pill className='card-list-item' variant='primary'>HTML/CSS</Badge>
          <Badge pill className='card-list-item' variant='primary'>React</Badge>
          <Badge pill className='card-list-item' variant='primary'>Flask</Badge>
          <Badge pill className='card-list-item' variant='primary'>ES6</Badge>
          <Badge pill className='card-list-item' variant='primary'>Python</Badge>
        </div>
      </Card.Body>
    </Card>
  )


}

export default BudgetTracker;