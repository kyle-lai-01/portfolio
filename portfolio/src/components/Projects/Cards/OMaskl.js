import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Badge } from 'react-bootstrap';
import Preview from './../images/OMasklPreview.png'
import './Cards.css'

function OMaskl() {
  return (
    <Card className='card' style={{ width: '100%' }}>
      <Card.Img variant="top" src={Preview} />
      <Card.Body>
        <Card.Title className='title'>OMaskl</Card.Title>
        <Card.Text>
          Intepreter, Evaluator, and Translator for a newly created language.
    </Card.Text>
        <Button href='https://github.com/kyle-lai-01/OMaskl' rel="noopener noreferrer" target="_blank" variant="outline-secondary">Github Source Code</Button>
        <div className='card-list'>
          <Badge pill className='card-list-item' variant='primary'>OCaml</Badge>
        </div>
      </Card.Body>
    </Card>
  )


}

export default OMaskl;