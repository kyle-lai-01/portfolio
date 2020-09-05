import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, ListGroup } from 'react-bootstrap';
import './About.css'
import { Icon } from '@iconify/react';
import reactIcon from '@iconify/icons-logos/react';
import javascriptIcon from '@iconify/icons-logos/javascript';
import javaIcon from '@iconify/icons-logos/java';
import pythonIcon from '@iconify/icons-logos/python';
import flaskIcon from '@iconify/icons-logos/flask';
import ocamlIcon from '@iconify/icons-logos/ocaml';
import { Nav } from 'react-bootstrap';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Resume from './../Resume/Resume.pdf';

function About() {

  return (
    <div>
      <Container className='h1 about-container'>
        <h1 className='about-heading'>About</h1>
        <div style={{ backgroundColor: '#264195', height: '.2rem' }}></div>
        <p className='about-intro about-text'>
          Hi, I'm Kyle. I enjoy learning new technologies to create things that anyone can use.
        </p>
        <p className='about-sub'>
          Contact me at kl655@cornell.edu
        </p>
        <h1 className='about-tech'>
          Education
        </h1>
        <div style={{ backgroundColor: '#264195', height: '.2rem', width: '50%', margin: 'auto' }}></div>
        <p className='about-education'>
          Cornell University, Ithaca, NY
        </p>
        <p className='about-sub'>
          College of Engineering, May 2023
        </p>
        <p className='about-sub'>
          BS in Computer Science
        </p>

        <h1 className='about-tech'>
          Links
        </h1>
        <div style={{ backgroundColor: '#264195', height: '.2rem', width: '50%', margin: 'auto' }}></div>
      </Container>


      <Container fluid className='about-tech-container'>
        <ListGroup className="list-group list-group-horizontal">
          <ListGroup.Item className='col-md-4 list-group-item'>
            <Nav.Link href="https://github.com/kyle-lai-01" rel="noopener noreferrer" target="_blank">

              <GitHubIcon
                style={{
                  fontSize: '5rem',
                  color: 'black',
                  width: '100%'
                }} />

            </Nav.Link>
          </ListGroup.Item>
          <ListGroup.Item className='col-md-4 list-group-item'>
            <Nav.Link href="https://linkedin.com/in/klai01" rel="noopener noreferrer" target="_blank">

              <LinkedInIcon
                style={{
                  fontSize: '5rem',
                  color: '#0077B5',
                  width: '100%'
                }} />


            </Nav.Link>
          </ListGroup.Item>
          <ListGroup.Item className='col-md-4 list-group-item'>
            <Nav.Link href={Resume} download='KyleLaiResume.pdf' rel="noopener noreferrer" target="_blank">

              <FileCopyIcon
                style={{
                  fontSize: '5rem',
                  color: '#0B6623',
                  width: '100%'
                }} />


            </Nav.Link>
          </ListGroup.Item>

        </ListGroup>
      </Container>


      <Container className='h1 about-container'>
        <h1 className='about-tech'>
          My favorite tools
        </h1>
        <div style={{ backgroundColor: '#264195', height: '.2rem', width: '50%', margin: 'auto' }}></div>
      </Container>
      <Container fluid className='about-tech-container'>
        <ListGroup className="list-group list-group-horizontal">
          <ListGroup.Item className='col-md-2 list-group-item'>
            <Icon icon={reactIcon} className='about-icons' />
          </ListGroup.Item>
          <ListGroup.Item className='col-md-2 list-group-item'>
            <Icon icon={javascriptIcon} className='about-icons' />
          </ListGroup.Item>
          <ListGroup.Item className='col-md-2 list-group-item'>
            <Icon icon={javaIcon} className='about-icons' />
          </ListGroup.Item>
          <ListGroup.Item className='col-md-2 list-group-item'>
            <Icon icon={ocamlIcon} className='about-icons' />
          </ListGroup.Item>
          <ListGroup.Item className='col-md-2 list-group-item'>
            <Icon icon={pythonIcon} className='about-icons' />
          </ListGroup.Item>
          <ListGroup.Item className='col-md-2 list-group-item'>
            <Icon icon={flaskIcon} className='about-icons' />
          </ListGroup.Item>
        </ListGroup>
      </Container>

    </div>



  )

}

export default About;