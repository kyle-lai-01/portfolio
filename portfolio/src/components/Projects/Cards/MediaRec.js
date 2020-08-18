import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Badge } from 'react-bootstrap';
import Preview from './../images/MediaRecPreview.png';
import './Cards.css'

function MediaRec() {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={Preview} />
      <Card.Body>
        <Card.Title className='title'>Media Rec</Card.Title>
        <Card.Text>
          Songs and Movies recommender.
        </Card.Text>
        <Button href='https://media-rec.herokuapp.com' rel="noopener noreferrer" target="_blank" variant="outline-primary" style={{ marginRight: '1rem' }}>Visit Website</Button>
        <Button href='https://github.com/tyang98/media-rec' rel="noopener noreferrer" target="_blank" variant="outline-secondary" style={{ marginLeft: '1rem' }}>Github Source Code</Button>

        <div className='card-list'>
          <Badge pill className='card-list-item' variant='primary'>HTML/CSS</Badge>
          <Badge pill className='card-list-item' variant='primary'>React</Badge>
          <Badge pill className='card-list-item' variant='primary'>Flask</Badge>
          <Badge pill className='card-list-item' variant='primary'>ES6</Badge>
          <Badge pill className='card-list-item' variant='primary'>Python</Badge>
          <Badge pill className='card-list-item' variant='primary'>NodeJS</Badge>
        </div>
      </Card.Body>
    </Card>
  )


}

export default MediaRec;