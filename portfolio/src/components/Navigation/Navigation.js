import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import './Navigation.css'
import { IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Resume from './../Resume/Resume.pdf';

function Navigation() {
  return (
    <Navbar style={{ backgroundColor: '#264195', borderBottom: 'solid' }} variant="dark" fixed="top">
      <Navbar.Brand href="#home" style={{ fontSize: '1.5rem' }}>Kyle Lai</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#Home" style={{ fontSize: '1.5rem' }}>Home</Nav.Link>
        <Nav.Link href="#About" style={{ fontSize: '1.5rem' }}>About</Nav.Link>
        <Nav.Link href="#Projects" style={{ fontSize: '1.5rem' }}>Projects</Nav.Link>
        <Nav.Link href="#Experience" style={{ fontSize: '1.5rem' }}>Experience</Nav.Link>
        <Nav.Link href="#More" style={{ fontSize: '1.5rem' }}>More</Nav.Link>
      </Nav>

      <Nav.Link href="https://github.com/kyle-lai-01" rel="noopener noreferrer" target="_blank">
        <IconButton>
          <GitHubIcon
            style={{
              fontSize: '30',
              color: 'white'
            }} />
        </IconButton>
      </Nav.Link>
      <Nav.Link href="https://linkedin.com/in/klai01" rel="noopener noreferrer" target="_blank">
        <IconButton>
          <LinkedInIcon
            style={{
              fontSize: '40',
              color: 'white'
            }} />
        </IconButton>
      </Nav.Link>
      <Nav.Link href={Resume} download='KyleLaiResume.pdf' rel="noopener noreferrer" target="_blank">
        <IconButton>
          <FileCopyIcon
            style={{
              fontSize: '30',
              color: 'white'
            }} />
        </IconButton>
      </Nav.Link>

    </Navbar>
  )

}

export default Navigation;
